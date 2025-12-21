import { TransactionService } from '../../core/application/services/transaction.service';
import { CreateTransactionRequestDto } from '../dto/create-transaction-request.dto';
import { UpdateTransactionRequestDto } from '../dto/update-transaction-request.dto';
import { QueryTransactionDto } from '../dto/query-transaction.dto';
import { TransactionResponseDto } from '../dto/transaction-response.dto';
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    create(createDto: CreateTransactionRequestDto): Promise<TransactionResponseDto>;
    findAll(query: QueryTransactionDto): Promise<{
        data: TransactionResponseDto[];
        total: number;
        page: number;
        limit: number;
    }>;
    getStatistics(userId?: string): Promise<{
        totalIncome: number;
        totalExpense: number;
        balance: number;
        count: number;
    }>;
    findOne(id: string): Promise<TransactionResponseDto>;
    update(id: string, updateDto: UpdateTransactionRequestDto): Promise<TransactionResponseDto>;
    remove(id: string): Promise<void>;
}
