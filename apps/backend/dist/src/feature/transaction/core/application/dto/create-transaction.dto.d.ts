import { TransactionType } from '../../domain/value-objects/transaction-type.vo';
export declare class CreateTransactionDto {
    userId: string;
    type: TransactionType;
    value: number;
    familyId?: string;
    recordedAt?: Date;
    constructor(userId: string, type: TransactionType, value: number, recordedAt?: Date, familyId?: string);
}
