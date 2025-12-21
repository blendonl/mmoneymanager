import { CreateTransactionUseCase } from '../use-cases/create-transaction.use-case';
import { GetTransactionByIdUseCase } from '../use-cases/get-transaction-by-id.use-case';
import { ListTransactionsUseCase } from '../use-cases/list-transactions.use-case';
import { UpdateTransactionUseCase } from '../use-cases/update-transaction.use-case';
import { DeleteTransactionUseCase } from '../use-cases/delete-transaction.use-case';
import { GetTransactionStatisticsUseCase } from '../use-cases/get-transaction-statistics.use-case';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { UpdateTransactionDto } from '../dto/update-transaction.dto';
import { TransactionFilters } from '../dto/transaction-filters.dto';
import { Pagination } from '../dto/pagination.dto';
import { Transaction } from '../../domain/entities/transaction.entity';
import { PaginatedResult } from '../../domain/repositories/transaction.repository.interface';
import { TransactionStatistics } from '../dto/transaction-statistics.dto';
export declare class TransactionService {
    private readonly createTransactionUseCase;
    private readonly getTransactionByIdUseCase;
    private readonly listTransactionsUseCase;
    private readonly updateTransactionUseCase;
    private readonly deleteTransactionUseCase;
    private readonly getTransactionStatisticsUseCase;
    constructor(createTransactionUseCase: CreateTransactionUseCase, getTransactionByIdUseCase: GetTransactionByIdUseCase, listTransactionsUseCase: ListTransactionsUseCase, updateTransactionUseCase: UpdateTransactionUseCase, deleteTransactionUseCase: DeleteTransactionUseCase, getTransactionStatisticsUseCase: GetTransactionStatisticsUseCase);
    create(dto: CreateTransactionDto): Promise<Transaction>;
    findById(id: string): Promise<Transaction>;
    findAll(filters?: TransactionFilters, pagination?: Pagination): Promise<PaginatedResult<Transaction>>;
    update(id: string, dto: UpdateTransactionDto): Promise<Transaction>;
    delete(id: string): Promise<void>;
    getStatistics(userId?: string, filters?: TransactionFilters): Promise<TransactionStatistics>;
}
