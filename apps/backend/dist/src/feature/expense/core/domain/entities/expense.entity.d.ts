import { ExpenseCategory } from '~feature/expense-category/core';
import { Store } from '~feature/store/core';
import { Transaction } from '~feature/transaction/core';
export interface ExpenseProps {
    id: string;
    category: ExpenseCategory;
    transaction: Transaction;
    store: Store;
    transactionId: string;
    storeId: string;
    categoryId: string;
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
    };
}
