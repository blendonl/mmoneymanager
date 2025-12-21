import { type IExpenseRepository } from '../../domain/repositories/expense.repository.interface';
import { ExpenseFilters } from '../dto/expense-filters.dto';
import { ExpenseStatistics } from '../dto/expense-statistics.dto';
export declare class GetExpenseStatisticsUseCase {
    private readonly expenseRepository;
    constructor(expenseRepository: IExpenseRepository);
    execute(userId: string, filters?: ExpenseFilters): Promise<ExpenseStatistics>;
}
