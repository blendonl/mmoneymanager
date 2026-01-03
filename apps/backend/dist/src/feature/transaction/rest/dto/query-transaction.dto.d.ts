import { TransactionType } from '../../core/domain/value-objects/transaction-type.vo';
import { TransactionScope } from '../../core/domain/entities/transaction.entity';
export declare class QueryTransactionDto {
    userId?: string;
    type?: TransactionType;
    familyId?: string;
    scope?: TransactionScope;
    dateFrom?: string;
    dateTo?: string;
    valueMin?: number;
    valueMax?: number;
    page?: number;
    limit?: number;
}
