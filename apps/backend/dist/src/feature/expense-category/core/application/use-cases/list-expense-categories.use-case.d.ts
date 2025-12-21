import { type IExpenseCategoryRepository, PaginatedResult } from '../../domain/repositories/expense-category.repository.interface';
import { ExpenseCategory } from '../../domain/entities/expense-category.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export declare class ListExpenseCategoriesUseCase {
    private readonly expenseCategoryRepository;
    constructor(expenseCategoryRepository: IExpenseCategoryRepository);
    execute(parentId?: string | null, pagination?: Pagination): Promise<PaginatedResult<ExpenseCategory>>;
}
