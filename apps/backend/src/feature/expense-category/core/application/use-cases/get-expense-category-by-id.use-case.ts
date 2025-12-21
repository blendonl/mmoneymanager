import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { type IExpenseCategoryRepository } from '../../domain/repositories/expense-category.repository.interface';
import { ExpenseCategory } from '../../domain/entities/expense-category.entity';

@Injectable()
export class GetExpenseCategoryByIdUseCase {
  constructor(
    @Inject('ExpenseCategoryRepository')
    private readonly expenseCategoryRepository: IExpenseCategoryRepository,
  ) {}

  async execute(id: string): Promise<ExpenseCategory> {
    const category = await this.expenseCategoryRepository.findById(id);

    if (!category) {
      throw new NotFoundException('Expense category not found');
    }

    return category;
  }
}
