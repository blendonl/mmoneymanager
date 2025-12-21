import { type IExpenseItemRepository, PaginatedResult } from '../../domain/repositories/expense-item.repository.interface';
import { ExpenseItem } from '../../domain/entities/expense-item.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export declare class ListExpenseItemsUseCase {
    private readonly expenseItemRepository;
    constructor(expenseItemRepository: IExpenseItemRepository);
    execute(expenseId?: string, pagination?: Pagination): Promise<PaginatedResult<ExpenseItem>>;
}
