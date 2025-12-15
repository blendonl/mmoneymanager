import { Injectable, Inject } from '@nestjs/common';
import { type IExpenseItemRepository } from '../../domain/repositories/expense-item.repository.interface';

@Injectable()
export class CalculateExpenseTotalUseCase {
  constructor(
    @Inject('ExpenseItemRepository')
    private readonly expenseItemRepository: IExpenseItemRepository,
  ) {}

  async execute(expenseId: string): Promise<number> {
    return this.expenseItemRepository.calculateExpenseTotal(expenseId);
  }
}
