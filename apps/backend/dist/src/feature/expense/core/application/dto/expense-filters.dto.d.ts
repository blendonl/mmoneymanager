export declare class ExpenseFilters {
    userId?: string;
    categoryId?: string;
    storeId?: string;
    dateFrom?: Date;
    dateTo?: Date;
    valueMin?: number;
    valueMax?: number;
    constructor(data: {
        userId?: string;
        categoryId?: string;
        storeId?: string;
        dateFrom?: Date;
        dateTo?: Date;
        valueMin?: number;
        valueMax?: number;
    });
}
