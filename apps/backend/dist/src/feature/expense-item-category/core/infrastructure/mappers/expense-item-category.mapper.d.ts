import { ExpenseItemCategory as PrismaExpenseItemCategory } from 'prisma/generated/prisma/client';
import { ExpenseItemCategory } from '../../domain/entities/expense-item-category.entity';
export declare class ExpenseItemCategoryMapper {
    static toDomain(prismaCategory: PrismaExpenseItemCategory): ExpenseItemCategory;
    static toPersistence(category: ExpenseItemCategory): {
        id: string;
        parentId: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    };
}
