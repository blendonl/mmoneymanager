import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { type IExpenseItemRepository } from '../../domain/repositories/expense-item.repository.interface';
import { ExpenseItem } from '../../domain/entities/expense-item.entity';

@Injectable()
export class GetExpenseItemByIdUseCase {
  constructor(
    @Inject('ExpenseItemRepository')
    private readonly expenseItemRepository: IExpenseItemRepository,
  ) {}

  async execute(id: string): Promise<ExpenseItem> {
    const item = await this.expenseItemRepository.findById(id);

    if (!item) {
      throw new NotFoundException('Expense item not found');
    }

    return item;
  }
}
