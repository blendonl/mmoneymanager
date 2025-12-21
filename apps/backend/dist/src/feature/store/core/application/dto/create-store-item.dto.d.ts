export declare class CreateStoreItemDto {
    storeId: string;
    name: string;
    price: number;
    isDiscounted?: boolean;
    constructor(storeId: string, name: string, price: number, isDiscounted?: boolean);
}
