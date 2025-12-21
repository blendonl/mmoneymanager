import { PrismaService } from '../../../../../common/prisma/prisma.service';
import { ITransactionRepository, PaginatedResult } from '../../domain/repositories/transaction.repository.interface';
import { Transaction } from '../../domain/entities/transaction.entity';
import { TransactionFilters } from '../../application/dto/transaction-filters.dto';
import { Pagination } from '../../application/dto/pagination.dto';
import { TransactionStatistics } from '../../application/dto/transaction-statistics.dto';
export declare class PrismaTransactionRepository implements ITransactionRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Partial<Transaction>): Promise<Transaction>;
    findById(id: string): Promise<Transaction | null>;
    findByUserId(userId: string, filters?: TransactionFilters, pagination?: Pagination): Promise<PaginatedResult<Transaction>>;
    findAll(filters?: TransactionFilters, pagination?: Pagination): Promise<PaginatedResult<Transaction>>;
    update(id: string, data: Partial<Transaction>): Promise<Transaction>;
    delete(id: string): Promise<void>;
    getStatistics(userId?: string, filters?: TransactionFilters): Promise<TransactionStatistics>;
    private buildWhereClause;
}
