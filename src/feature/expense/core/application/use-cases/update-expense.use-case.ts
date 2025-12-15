import {
  Injectable,
  Inject,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { type IExpenseRepository } from '../../domain/repositories/expense.repository.interface';
import { type IExpenseCategoryRepository } from '../../../../expense-category/core/domain/repositories/expense-category.repository.interface';
import { type IStoreRepository } from '../../../../store/core/domain/repositories/store.repository.interface';
import { UpdateExpenseDto } from '../dto/update-expense.dto';
import { Expense } from '../../domain/entities/expense.entity';

@Injectable()
export class UpdateExpenseUseCase {
  constructor(
    @Inject('ExpenseRepository')
    private readonly expenseRepository: IExpenseRepository,
    @Inject('ExpenseCategoryRepository')
    private readonly expenseCategoryRepository: IExpenseCategoryRepository,
    @Inject('StoreRepository')
    private readonly storeRepository: IStoreRepository,
  ) {}

  async execute(id: string, dto: UpdateExpenseDto): Promise<Expense> {
    const expense = await this.expenseRepository.findById(id);

    if (!expense) {
      throw new NotFoundException('Expense not found');
    }

    await this.validate(dto);

    const updated = await this.expenseRepository.update(id, {
      categoryId: dto.categoryId,
      storeId: dto.storeId,
    } as Partial<Expense>);

    return updated;
  }

  private async validate(dto: UpdateExpenseDto): Promise<void> {
    // Validate category exists if changed
    if (dto.categoryId) {
      const category = await this.expenseCategoryRepository.findById(
        dto.categoryId,
      );
      if (!category) {
        throw new NotFoundException('Expense category not found');
      }
    }

    // Validate store exists if changed
    if (dto.storeId) {
      const store = await this.storeRepository.findById(dto.storeId);
      if (!store) {
        throw new NotFoundException('Store not found');
      }
    }
  }
}
