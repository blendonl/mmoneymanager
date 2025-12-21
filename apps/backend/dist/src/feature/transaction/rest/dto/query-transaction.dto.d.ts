import { TransactionType } from '../../core/domain/value-objects/transaction-type.vo';
export declare class QueryTransactionDto {
    userId?: string;
    type?: TransactionType;
    dateFrom?: string;
    dateTo?: string;
    valueMin?: number;
    valueMax?: number;
    page?: number;
    limit?: number;
}
