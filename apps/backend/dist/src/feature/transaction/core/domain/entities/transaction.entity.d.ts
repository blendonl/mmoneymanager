import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace';
import { TransactionType } from '../value-objects/transaction-type.vo';
export interface TransactionProps {
    id: string;
    userId: string;
    type: TransactionType;
    value: Decimal;
    createdAt: Date;
    updatedAt: Date;
}
export declare class Transaction {
    private readonly props;
    constructor(props: TransactionProps);
    private validate;
    get id(): string;
    get userId(): string;
    get type(): TransactionType;
    get value(): Decimal;
    get createdAt(): Date;
    get updatedAt(): Date;
    isExpense(): boolean;
    isIncome(): boolean;
    toJSON(): {
        id: string;
        userId: string;
        type: TransactionType;
        value: number;
        createdAt: Date;
        updatedAt: Date;
    };
}
