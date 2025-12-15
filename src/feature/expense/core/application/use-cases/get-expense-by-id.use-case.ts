import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { type IExpenseRepository } from '../../domain/repositories/expense.repository.interface';
import { Expense } from '../../domain/entities/expense.entity';

@Injectable()
export class GetExpenseByIdUseCase {
  constructor(
    @Inject('ExpenseRepository')
    private readonly expenseRepository: IExpenseRepository,
  ) {}

  async execute(id: string): Promise<Expense> {
    const expense = await this.expenseRepository.findById(id);

    if (!expense) {
      throw new NotFoundException('Expense not found');
    }

    return expense;
  }
}
