import { TransactionType } from '../../core/domain/value-objects/transaction-type.vo';
export declare class CreateTransactionRequestDto {
    userId: string;
    type: TransactionType;
    value: number;
    recordedAt?: string;
}
