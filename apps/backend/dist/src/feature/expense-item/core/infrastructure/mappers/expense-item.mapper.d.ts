import { ExpenseItem as PrismaExpenseItem, StoreItem as PrismaStoreItem, Item as PrismaItem, ItemCategory as PrismaItemCategory } from 'prisma/generated/prisma/client';
import { ExpenseItem } from '../../domain/entities/expense-item.entity';
export declare class ExpenseItemMapper {
    static toDomain(prismaExpenseItem: PrismaExpenseItem & {
        item: PrismaStoreItem & {
            item: PrismaItem & {
                category: PrismaItemCategory;
            };
        };
    }): ExpenseItem;
    static toPersistence(expenseItem: ExpenseItem): {
        id: string;
        itemId: string;
        itemName: string;
        expenseId: string;
        categoryId: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        discount: import("@prisma/client-runtime-utils").Decimal;
        quantity: number;
        createdAt: Date;
        updatedAt: Date;
    };
}
