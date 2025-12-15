import {
  Injectable,
  Inject,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { type IExpenseRepository } from '../../domain/repositories/expense.repository.interface';
import { type IExpenseCategoryRepository } from '../../../../expense-category/core/domain/repositories/expense-category.repository.interface';
import { TransactionService } from '../../../../transaction/core/application/services/transaction.service';
import { StoreService } from '../../../../store/core/application/services/store.service';
import { ExpenseItemService } from '../../../../expense-item/core/application/services/expense-item.service';
import { CreateExpenseDto } from '../dto/create-expense.dto';
import { CreateTransactionDto } from '../../../../transaction/core/application/dto/create-transaction.dto';
import { CreateStoreDto } from '../../../../store/core/application/dto/create-store.dto';
import { CreateExpenseItemDto } from '../../../../expense-item/core/application/dto/create-expense-item.dto';
import { Expense } from '../../domain/entities/expense.entity';
import { TransactionType } from '../../../../transaction/core/domain/value-objects/transaction-type.vo';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CreateExpenseUseCase {
  constructor(
    @Inject('ExpenseRepository')
    private readonly expenseRepository: IExpenseRepository,
    @Inject('ExpenseCategoryRepository')
    private readonly expenseCategoryRepository: IExpenseCategoryRepository,
    private readonly transactionService: TransactionService,
    private readonly storeService: StoreService,
    private readonly expenseItemService: ExpenseItemService,
  ) {}

  async execute(dto: CreateExpenseDto): Promise<Expense> {
    await this.validate(dto);

    // 1. Validate category exists
    const category = await this.expenseCategoryRepository.findById(
      dto.categoryId,
    );
    if (!category) {
      throw new NotFoundException('Expense category not found');
    }

    // 2. Create or find Store
    const store = await this.storeService.createOrFind(
      new CreateStoreDto(dto.storeName, dto.storeLocation),
    );

    // 3. Calculate total value from items
    const totalValue = dto.items.reduce((sum, item) => {
      const itemPrice = item.itemPrice;
      const discount = item.discount ?? 0;
      return sum + (itemPrice - discount);
    }, 0);

    // 4. Create Transaction
    const transaction = await this.transactionService.create(
      new CreateTransactionDto(dto.userId, TransactionType.EXPENSE, totalValue),
    );

    // 5. Create Expense
    const expenseId = uuid();
    const expense = await this.expenseRepository.create({
      id: expenseId,
      transactionId: transaction.id,
      storeId: store.id,
      categoryId: dto.categoryId,
    } as Partial<Expense>);

    // 6. Create ExpenseItems
    await Promise.all(
      dto.items.map((item) =>
        this.expenseItemService.create(
          new CreateExpenseItemDto({
            expenseId: expense.id,
            categoryId: item.categoryId,
            itemName: item.itemName,
            itemPrice: item.itemPrice,
            discount: item.discount,
          }),
          store.id,
        ),
      ),
    );

    // 7. Return created expense
    return this.expenseRepository.findById(expense.id) as Promise<Expense>;
  }

  private async validate(dto: CreateExpenseDto): Promise<void> {
    if (!dto.userId || dto.userId.trim() === '') {
      throw new BadRequestException('User ID is required');
    }

    if (!dto.categoryId || dto.categoryId.trim() === '') {
      throw new BadRequestException('Category ID is required');
    }

    if (!dto.storeName || dto.storeName.trim() === '') {
      throw new BadRequestException('Store name is required');
    }

    if (!dto.storeLocation || dto.storeLocation.trim() === '') {
      throw new BadRequestException('Store location is required');
    }

    if (!dto.items || dto.items.length === 0) {
      throw new BadRequestException('At least one item is required');
    }

    // Validate all items
    for (const item of dto.items) {
      if (item.itemPrice < 0) {
        throw new BadRequestException('Item price must be non-negative');
      }
      if (item.discount !== undefined && item.discount < 0) {
        throw new BadRequestException('Item discount must be non-negative');
      }
      if (
        item.discount !== undefined &&
        item.discount > item.itemPrice
      ) {
        throw new BadRequestException('Item discount cannot exceed price');
      }
    }
  }
}
