import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace';
import { Item } from '~feature/item/core';
export interface StoreItemProps {
    id: string;
    storeId: string;
    itemId: string;
    price: Decimal;
    isDiscounted: boolean;
    item?: Item;
    createdAt: Date;
    updatedAt: Date;
}
export declare class StoreItem {
    private readonly props;
    constructor(props: StoreItemProps);
    private validate;
    get id(): string;
    get storeId(): string;
    get itemId(): string;
    get item(): Item | undefined;
    get price(): Decimal;
    get isDiscounted(): boolean;
    get createdAt(): Date;
    get updatedAt(): Date;
    getCurrentPrice(activeDiscount?: any): Decimal;
    getDiscountPercentage(activeDiscount?: any): number;
    toJSON(): {
        id: string;
        storeId: string;
        itemId: string;
        price: number;
        isDiscounted: boolean;
        item: {
            id: string;
            categoryId: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        } | undefined;
        createdAt: Date;
        updatedAt: Date;
    };
}
