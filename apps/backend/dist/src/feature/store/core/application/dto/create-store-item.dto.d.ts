export declare class CreateStoreItemDto {
    storeId: string;
    name: string;
    price: number;
    categoryId: string;
    isDiscounted?: boolean;
    constructor(storeId: string, name: string, price: number, categoryId: string, isDiscounted?: boolean);
}
