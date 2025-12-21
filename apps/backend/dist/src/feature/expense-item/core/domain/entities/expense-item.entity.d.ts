import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace';
export interface ExpenseItemProps {
    id: string;
    itemId: string;
    expenseId: string;
    categoryId: string;
    price: Decimal;
    discount: Decimal;
    createdAt: Date;
    updatedAt: Date;
}
export declare class ExpenseItem {
    private readonly props;
    constructor(props: ExpenseItemProps);
    private validate;
    get id(): string;
    get itemId(): string;
    get expenseId(): string;
    get categoryId(): string;
    get price(): Decimal;
    get discount(): Decimal;
    get createdAt(): Date;
    get updatedAt(): Date;
    getFinalPrice(): Decimal;
    getDiscountPercentage(): number;
    toJSON(): {
        id: string;
        itemId: string;
        expenseId: string;
        categoryId: string;
        price: number;
        discount: number;
        finalPrice: number;
        discountPercentage: number;
        createdAt: Date;
        updatedAt: Date;
    };
}
