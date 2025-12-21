import { ExpenseItemCategory as PrismaExpenseItemCategory } from 'prisma/generated/prisma/client';
import { ExpenseItemCategory } from '../../domain/entities/expense-item-category.entity';

export class ExpenseItemCategoryMapper {
  static toDomain(prismaCategory: PrismaExpenseItemCategory): ExpenseItemCategory {
    return new ExpenseItemCategory({
      id: prismaCategory.id,
      parentId: prismaCategory.parentId,
      name: prismaCategory.name,
      createdAt: prismaCategory.createdAt,
      updatedAt: prismaCategory.updatedAt,
    });
  }

  static toPersistence(category: ExpenseItemCategory) {
    return {
      id: category.id,
      parentId: category.parentId,
      name: category.name,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    };
  }
}
