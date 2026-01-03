export declare class CreateExpenseItemDto {
    expenseId: string;
    categoryId: string;
    itemName: string;
    itemPrice: number;
    discount?: number;
    quantity?: number;
    itemId?: string;
    constructor(data: {
        expenseId: string;
        categoryId: string;
        itemName: string;
        itemPrice: number;
        discount?: number;
        quantity?: number;
        itemId?: string;
    });
}
