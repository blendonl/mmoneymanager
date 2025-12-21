import { TransactionType } from '../../domain/value-objects/transaction-type.vo';
export declare class UpdateTransactionDto {
    type?: TransactionType;
    value?: number;
    constructor(data: {
        type?: TransactionType;
        value?: number;
    });
}
