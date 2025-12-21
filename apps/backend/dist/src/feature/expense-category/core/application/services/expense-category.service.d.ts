import { CreateExpenseCategoryUseCase } from '../use-cases/create-expense-category.use-case';
import { GetExpenseCategoryByIdUseCase } from '../use-cases/get-expense-category-by-id.use-case';
import { ListExpenseCategoriesUseCase } from '../use-cases/list-expense-categories.use-case';
import { GetCategoryTreeUseCase, CategoryTree } from '../use-cases/get-category-tree.use-case';
import { UpdateExpenseCategoryUseCase } from '../use-cases/update-expense-category.use-case';
import { DeleteExpenseCategoryUseCase } from '../use-cases/delete-expense-category.use-case';
import { CreateExpenseCategoryDto } from '../dto/create-expense-category.dto';
import { UpdateExpenseCategoryDto } from '../dto/update-expense-category.dto';
import { ExpenseCategory } from '../../domain/entities/expense-category.entity';
import { PaginatedResult } from '../../domain/repositories/expense-category.repository.interface';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export declare class ExpenseCategoryService {
    private readonly createExpenseCategoryUseCase;
    private readonly getExpenseCategoryByIdUseCase;
    private readonly listExpenseCategoriesUseCase;
    private readonly getCategoryTreeUseCase;
    private readonly updateExpenseCategoryUseCase;
    private readonly deleteExpenseCategoryUseCase;
    constructor(createExpenseCategoryUseCase: CreateExpenseCategoryUseCase, getExpenseCategoryByIdUseCase: GetExpenseCategoryByIdUseCase, listExpenseCategoriesUseCase: ListExpenseCategoriesUseCase, getCategoryTreeUseCase: GetCategoryTreeUseCase, updateExpenseCategoryUseCase: UpdateExpenseCategoryUseCase, deleteExpenseCategoryUseCase: DeleteExpenseCategoryUseCase);
    create(dto: CreateExpenseCategoryDto): Promise<ExpenseCategory>;
    findById(id: string): Promise<ExpenseCategory>;
    findAll(parentId?: string | null, pagination?: Pagination): Promise<PaginatedResult<ExpenseCategory>>;
    getTree(): Promise<CategoryTree[]>;
    update(id: string, dto: UpdateExpenseCategoryDto): Promise<ExpenseCategory>;
    delete(id: string): Promise<void>;
}
