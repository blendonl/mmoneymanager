import { TransactionType } from '../../domain/value-objects/transaction-type.vo';
export declare class CreateTransactionDto {
    userId: string;
    type: TransactionType;
    value: number;
    constructor(userId: string, type: TransactionType, value: number);
}
