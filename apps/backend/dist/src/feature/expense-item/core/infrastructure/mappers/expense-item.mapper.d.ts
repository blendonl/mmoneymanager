import { ExpenseItem as PrismaExpenseItem } from 'prisma/generated/prisma/client';
import { ExpenseItem } from '../../domain/entities/expense-item.entity';
export declare class ExpenseItemMapper {
    static toDomain(prismaExpenseItem: PrismaExpenseItem): ExpenseItem;
    static toPersistence(expenseItem: ExpenseItem): {
        id: string;
        itemId: string;
        expenseId: string;
        categoryId: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        discount: import("@prisma/client-runtime-utils").Decimal;
        createdAt: Date;
        updatedAt: Date;
    };
}
