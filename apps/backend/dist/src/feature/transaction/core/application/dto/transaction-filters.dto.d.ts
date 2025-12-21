import { TransactionType } from '../../domain/value-objects/transaction-type.vo';
export declare class TransactionFilters {
    userId?: string;
    type?: TransactionType;
    dateFrom?: Date;
    dateTo?: Date;
    valueMin?: number;
    valueMax?: number;
    constructor(data?: Partial<TransactionFilters>);
}
