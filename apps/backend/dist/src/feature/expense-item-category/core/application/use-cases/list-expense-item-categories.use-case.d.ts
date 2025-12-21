import { type IExpenseItemCategoryRepository, PaginatedResult } from '../../domain/repositories/expense-item-category.repository.interface';
import { ExpenseItemCategory } from '../../domain/entities/expense-item-category.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export declare class ListExpenseItemCategoriesUseCase {
    private readonly expenseItemCategoryRepository;
    constructor(expenseItemCategoryRepository: IExpenseItemCategoryRepository);
    execute(parentId?: string | null, pagination?: Pagination): Promise<PaginatedResult<ExpenseItemCategory>>;
}
