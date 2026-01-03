import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace';
export interface StoreItemDiscountProps {
    id: string;
    storeItemId: string;
    discount: Decimal;
    startedAt: Date;
    endedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}
export declare class StoreItemDiscount {
    private readonly props;
    constructor(props: StoreItemDiscountProps);
    private validate;
    get id(): string;
    get storeItemId(): string;
    get discount(): Decimal;
    get startedAt(): Date;
    get endedAt(): Date | null;
    get createdAt(): Date;
    get updatedAt(): Date;
    isActive(): boolean;
    getDiscountedPrice(originalPrice: Decimal): Decimal;
    getDiscountPercentage(originalPrice: Decimal): number;
    toJSON(): {
        id: string;
        storeItemId: string;
        discount: number;
        startedAt: Date;
        endedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
    };
}
