import { ExpenseCategory as PrismaExpenseCategory } from 'prisma/generated/prisma/client';
import { ExpenseCategory } from '../../domain/entities/expense-category.entity';
export declare class ExpenseCategoryMapper {
    static toDomain(prismaCategory: PrismaExpenseCategory): ExpenseCategory;
    static toPersistence(category: ExpenseCategory): {
        id: string;
        parentId: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    };
}
