export declare enum TransactionType {
    EXPENSE = "EXPENSE",
    INCOME = "INCOME"
}
export declare class TransactionTypeVO {
    private readonly value;
    constructor(value: TransactionType);
    private validate;
    getValue(): TransactionType;
    isExpense(): boolean;
    isIncome(): boolean;
    equals(other: TransactionTypeVO): boolean;
}
