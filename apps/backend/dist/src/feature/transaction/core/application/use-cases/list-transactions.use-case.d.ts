import { type ITransactionRepository, PaginatedResult } from '../../domain/repositories/transaction.repository.interface';
import { Transaction } from '../../domain/entities/transaction.entity';
import { TransactionFilters } from '../dto/transaction-filters.dto';
import { Pagination } from '../dto/pagination.dto';
export declare class ListTransactionsUseCase {
    private readonly transactionRepository;
    constructor(transactionRepository: ITransactionRepository);
    execute(filters?: TransactionFilters, pagination?: Pagination): Promise<PaginatedResult<Transaction>>;
}
