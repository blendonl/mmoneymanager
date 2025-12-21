import { type IExpenseCategoryRepository } from '../../domain/repositories/expense-category.repository.interface';
import { ExpenseCategory } from '../../domain/entities/expense-category.entity';
export interface CategoryTree {
    category: ExpenseCategory;
    children: CategoryTree[];
}
export declare class GetCategoryTreeUseCase {
    private readonly expenseCategoryRepository;
    constructor(expenseCategoryRepository: IExpenseCategoryRepository);
    execute(): Promise<CategoryTree[]>;
    private buildTree;
}
