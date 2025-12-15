import { ExpenseCategory as PrismaExpenseCategory } from 'prisma/generated/prisma/client';
import { ExpenseCategory } from '../../domain/entities/expense-category.entity';

export class ExpenseCategoryMapper {
  static toDomain(prismaCategory: PrismaExpenseCategory): ExpenseCategory {
    return new ExpenseCategory({
      id: prismaCategory.id,
      parentId: prismaCategory.parentId,
      name: prismaCategory.name,
      createdAt: prismaCategory.createdAt,
      updatedAt: prismaCategory.updatedAt,
    });
  }

  static toPersistence(category: ExpenseCategory) {
    return {
      id: category.id,
      parentId: category.parentId,
      name: category.name,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    };
  }
}
