import { type IExpenseRepository, PaginatedResult } from '../../domain/repositories/expense.repository.interface';
import { Expense } from '../../domain/entities/expense.entity';
import { ExpenseFilters } from '../dto/expense-filters.dto';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export declare class ListExpensesUseCase {
    private readonly expenseRepository;
    constructor(expenseRepository: IExpenseRepository);
    execute(filters?: ExpenseFilters, pagination?: Pagination): Promise<PaginatedResult<Expense>>;
}
