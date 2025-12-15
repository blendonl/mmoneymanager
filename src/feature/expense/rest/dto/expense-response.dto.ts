import { Expense } from '../../core/domain/entities/expense.entity';

export class ExpenseResponseDto {
  id: string;
  transactionId: string;
  categoryId: string;
  storeId: string;
  createdAt: Date;
  updatedAt: Date;

  static fromEntity(expense: Expense): ExpenseResponseDto {
    const dto = new ExpenseResponseDto();
    dto.id = expense.id;
    dto.transactionId = expense.transactionId;
    dto.categoryId = expense.categoryId;
    dto.storeId = expense.storeId;
    dto.createdAt = expense.createdAt;
    dto.updatedAt = expense.updatedAt;
    return dto;
  }

  static fromEntities(expenses: Expense[]): ExpenseResponseDto[] {
    return expenses.map((expense) => this.fromEntity(expense));
  }
}
