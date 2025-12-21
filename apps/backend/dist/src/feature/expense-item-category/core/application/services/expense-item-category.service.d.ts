import { CreateExpenseItemCategoryUseCase } from '../use-cases/create-expense-item-category.use-case';
import { GetExpenseItemCategoryByIdUseCase } from '../use-cases/get-expense-item-category-by-id.use-case';
import { ListExpenseItemCategoriesUseCase } from '../use-cases/list-expense-item-categories.use-case';
import { GetItemCategoryTreeUseCase, ItemCategoryTree } from '../use-cases/get-item-category-tree.use-case';
import { UpdateExpenseItemCategoryUseCase } from '../use-cases/update-expense-item-category.use-case';
import { DeleteExpenseItemCategoryUseCase } from '../use-cases/delete-expense-item-category.use-case';
import { CreateExpenseItemCategoryDto } from '../dto/create-expense-item-category.dto';
import { UpdateExpenseItemCategoryDto } from '../dto/update-expense-item-category.dto';
import { ExpenseItemCategory } from '../../domain/entities/expense-item-category.entity';
import { PaginatedResult } from '../../domain/repositories/expense-item-category.repository.interface';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export declare class ExpenseItemCategoryService {
    private readonly createExpenseItemCategoryUseCase;
    private readonly getExpenseItemCategoryByIdUseCase;
    private readonly listExpenseItemCategoriesUseCase;
    private readonly getItemCategoryTreeUseCase;
    private readonly updateExpenseItemCategoryUseCase;
    private readonly deleteExpenseItemCategoryUseCase;
    constructor(createExpenseItemCategoryUseCase: CreateExpenseItemCategoryUseCase, getExpenseItemCategoryByIdUseCase: GetExpenseItemCategoryByIdUseCase, listExpenseItemCategoriesUseCase: ListExpenseItemCategoriesUseCase, getItemCategoryTreeUseCase: GetItemCategoryTreeUseCase, updateExpenseItemCategoryUseCase: UpdateExpenseItemCategoryUseCase, deleteExpenseItemCategoryUseCase: DeleteExpenseItemCategoryUseCase);
    create(dto: CreateExpenseItemCategoryDto): Promise<ExpenseItemCategory>;
    findById(id: string): Promise<ExpenseItemCategory>;
    findAll(parentId?: string | null, pagination?: Pagination): Promise<PaginatedResult<ExpenseItemCategory>>;
    getTree(): Promise<ItemCategoryTree[]>;
    update(id: string, dto: UpdateExpenseItemCategoryDto): Promise<ExpenseItemCategory>;
    delete(id: string): Promise<void>;
}
