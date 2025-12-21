import { ExpenseService } from '../../core/application/services/expense.service';
import { CreateExpenseRequestDto } from '../dto/create-expense-request.dto';
import { UpdateExpenseRequestDto } from '../dto/update-expense-request.dto';
import { QueryExpenseDto } from '../dto/query-expense.dto';
import { ExpenseResponseDto } from '../dto/expense-response.dto';
import { User } from '../../../user/core/domain/entities/user.entity';
export declare class ExpenseController {
    private readonly expenseService;
    constructor(expenseService: ExpenseService);
    create(createDto: CreateExpenseRequestDto, user: User): Promise<ExpenseResponseDto>;
    findAll(query: QueryExpenseDto, user: User): Promise<{
        data: ExpenseResponseDto[];
        total: number;
        page: number;
        limit: number;
    }>;
    getStatistics(query: QueryExpenseDto, user: User): Promise<{
        totalExpenses: number;
        expenseCount: number;
        averageExpense: number;
        expensesByCategory: {
            categoryId: string;
            total: number;
        }[];
        expensesByStore: {
            storeId: string;
            total: number;
        }[];
    }>;
    findOne(id: string, user: User): Promise<ExpenseResponseDto>;
    update(id: string, updateDto: UpdateExpenseRequestDto, user: User): Promise<ExpenseResponseDto>;
    remove(id: string, user: User): Promise<void>;
}
