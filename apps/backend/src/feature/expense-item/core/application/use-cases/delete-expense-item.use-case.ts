import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { type IExpenseItemRepository } from '../../domain/repositories/expense-item.repository.interface';

@Injectable()
export class DeleteExpenseItemUseCase {
  constructor(
    @Inject('ExpenseItemRepository')
    private readonly expenseItemRepository: IExpenseItemRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const item = await this.expenseItemRepository.findById(id);

    if (!item) {
      throw new NotFoundException('Expense item not found');
    }

    await this.expenseItemRepository.delete(id);
  }
}
