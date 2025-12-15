import { Expense as PrismaExpense } from 'prisma/generated/prisma/client';
import { Expense } from '../../domain/entities/expense.entity';

export class ExpenseMapper {
  static toDomain(prismaExpense: PrismaExpense): Expense {
    return new Expense({
      id: prismaExpense.id,
      transactionId: prismaExpense.transactionId,
      storeId: prismaExpense.storeId,
      categoryId: prismaExpense.categoryId,
      createdAt: prismaExpense.createdAt,
      updatedAt: prismaExpense.updatedAt,
    });
  }

  static toPersistence(expense: Expense) {
    return {
      id: expense.id,
      transactionId: expense.transactionId,
      storeId: expense.storeId,
      categoryId: expense.categoryId,
      createdAt: expense.createdAt,
      updatedAt: expense.updatedAt,
    };
  }
}
