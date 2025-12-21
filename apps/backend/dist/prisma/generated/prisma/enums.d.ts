export declare const TransactionType: {
    readonly EXPENSE: "EXPENSE";
    readonly INCOME: "INCOME";
};
export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType];
