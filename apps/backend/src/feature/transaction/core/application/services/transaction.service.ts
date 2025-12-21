import { Injectable } from '@nestjs/common';
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

@Injectable()
export class TransactionService {
  constructor(
    private readonly createTransactionUseCase: CreateTransactionUseCase,
    private readonly getTransactionByIdUseCase: GetTransactionByIdUseCase,
    private readonly listTransactionsUseCase: ListTransactionsUseCase,
    private readonly updateTransactionUseCase: UpdateTransactionUseCase,
    private readonly deleteTransactionUseCase: DeleteTransactionUseCase,
    private readonly getTransactionStatisticsUseCase: GetTransactionStatisticsUseCase,
  ) {}

  async create(dto: CreateTransactionDto): Promise<Transaction> {
    return this.createTransactionUseCase.execute(dto);
  }

  async findById(id: string): Promise<Transaction> {
    return this.getTransactionByIdUseCase.execute(id);
  }

  async findAll(
    filters?: TransactionFilters,
    pagination?: Pagination,
  ): Promise<PaginatedResult<Transaction>> {
    return this.listTransactionsUseCase.execute(filters, pagination);
  }

  async update(id: string, dto: UpdateTransactionDto): Promise<Transaction> {
    return this.updateTransactionUseCase.execute(id, dto);
  }

  async delete(id: string): Promise<void> {
    return this.deleteTransactionUseCase.execute(id);
  }

  async getStatistics(
    userId?: string,
    filters?: TransactionFilters,
  ): Promise<TransactionStatistics> {
    return this.getTransactionStatisticsUseCase.execute(userId, filters);
  }
}
