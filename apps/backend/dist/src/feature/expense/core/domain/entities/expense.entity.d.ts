import { ExpenseCategory } from '~feature/expense-category/core';
import { Store } from '~feature/store/core';
import { Transaction } from '~feature/transaction/core';
import { ExpenseItem } from '~feature/expense-item/core/domain/entities/expense-item.entity';
export interface ExpenseProps {
    id: string;
    category: ExpenseCategory;
    transaction: Transaction;
    store: Store;
    transactionId: string;
    storeId: string;
    categoryId: string;
    items?: ExpenseItem[];
    createdAt: Date;
    updatedAt: Date;
}
export declare class Expense {
    private readonly props;
    constructor(props: ExpenseProps);
    private validate;
    get id(): string;
    get transactionId(): string;
    get storeId(): string;
    get categoryId(): string;
    get createdAt(): Date;
    get updatedAt(): Date;
    get store(): Store;
    get category(): ExpenseCategory;
    get transaction(): Transaction;
    get items(): ExpenseItem[];
    toJSON(): {
        id: string;
        transaction: Transaction;
        transactionId: string;
        category: ExpenseCategory;
        storeId: string;
        store: Store;
        categoryId: string;
        createdAt: Date;
        updatedAt: Date;
        items: {
            id: string;
            itemId: string;
            itemName: string;
            expenseId: string;
            categoryId: string;
            price: number;
            discount: number;
            quantity: number;
            finalPrice: number;
            discountPercentage: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
    };
}
