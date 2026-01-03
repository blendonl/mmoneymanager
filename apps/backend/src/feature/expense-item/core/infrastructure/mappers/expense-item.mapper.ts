import {
  ExpenseItem as PrismaExpenseItem,
  StoreItem as PrismaStoreItem,
  Item as PrismaItem,
  ItemCategory as PrismaItemCategory,
} from 'prisma/generated/prisma/client';
import { ExpenseItem } from '../../domain/entities/expense-item.entity';

export class ExpenseItemMapper {
  static toDomain(
    prismaExpenseItem: PrismaExpenseItem & {
      item: PrismaStoreItem & {
        item: PrismaItem & {
          category: PrismaItemCategory;
        };
      };
    },
  ): ExpenseItem {
    return new ExpenseItem({
      id: prismaExpenseItem.id,
      itemId: prismaExpenseItem.itemId,
      itemName: prismaExpenseItem.item.item.name,
      expenseId: prismaExpenseItem.expenseId,
      categoryId: prismaExpenseItem.item.item.categoryId,
      price: prismaExpenseItem.price,
      discount: prismaExpenseItem.discount,
      quantity: prismaExpenseItem.quantity,
      createdAt: prismaExpenseItem.createdAt,
      updatedAt: prismaExpenseItem.updatedAt,
    });
  }

  static toPersistence(expenseItem: ExpenseItem) {
    return {
      id: expenseItem.id,
      itemId: expenseItem.itemId,
      itemName: expenseItem.itemName,
      expenseId: expenseItem.expenseId,
      categoryId: expenseItem.categoryId,
      price: expenseItem.price,
      discount: expenseItem.discount,
      quantity: expenseItem.quantity,
      createdAt: expenseItem.createdAt,
      updatedAt: expenseItem.updatedAt,
    };
  }
}
