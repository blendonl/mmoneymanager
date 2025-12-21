export declare class ExpenseStatistics {
    totalExpenses: number;
    expenseCount: number;
    averageExpense: number;
    expensesByCategory: {
        categoryId: string;
        total: number;
    }[];
    expensesByStore: {
        storeId: string;
        total: number;
    }[];
    constructor(totalExpenses: number, expenseCount: number, averageExpense: number, expensesByCategory: {
        categoryId: string;
        total: number;
    }[], expensesByStore: {
        storeId: string;
        total: number;
    }[]);
}
