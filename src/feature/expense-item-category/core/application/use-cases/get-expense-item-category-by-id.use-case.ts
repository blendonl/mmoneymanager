import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { type IExpenseItemCategoryRepository } from '../../domain/repositories/expense-item-category.repository.interface';
import { ExpenseItemCategory } from '../../domain/entities/expense-item-category.entity';

@Injectable()
export class GetExpenseItemCategoryByIdUseCase {
  constructor(
    @Inject('ExpenseItemCategoryRepository')
    private readonly expenseItemCategoryRepository: IExpenseItemCategoryRepository,
  ) {}

  async execute(id: string): Promise<ExpenseItemCategory> {
    const category = await this.expenseItemCategoryRepository.findById(id);

    if (!category) {
      throw new NotFoundException('Expense item category not found');
    }

    return category;
  }
}
