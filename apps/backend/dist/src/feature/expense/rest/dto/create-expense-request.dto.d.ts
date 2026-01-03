export declare class CreateExpenseItemRequestDto {
    categoryId: string;
    itemName: string;
    itemPrice: number;
    discount?: number;
    quantity: number;
}
export declare class CreateExpenseRequestDto {
    categoryId: string;
    storeName: string;
    storeLocation: string;
    items: CreateExpenseItemRequestDto[];
    familyId?: string;
    recordedAt?: string;
}
