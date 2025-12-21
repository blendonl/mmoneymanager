import { type ITransactionRepository } from '../../domain/repositories/transaction.repository.interface';
import { TransactionFilters } from '../dto/transaction-filters.dto';
import { TransactionStatistics } from '../dto/transaction-statistics.dto';
export declare class GetTransactionStatisticsUseCase {
    private readonly transactionRepository;
    constructor(transactionRepository: ITransactionRepository);
    execute(userId?: string, filters?: TransactionFilters): Promise<TransactionStatistics>;
}
