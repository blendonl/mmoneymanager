import { TransactionType } from '../../domain/value-objects/transaction-type.vo';
import { TransactionScope } from '../../domain/entities/transaction.entity';
export declare class TransactionFilters {
    userId?: string;
    type?: TransactionType;
    familyId?: string;
    scope?: TransactionScope;
    dateFrom?: Date;
    dateTo?: Date;
    valueMin?: number;
    valueMax?: number;
    constructor(data?: Partial<TransactionFilters>);
}
