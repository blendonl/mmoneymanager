import { type IExpenseItemCategoryRepository } from '../../domain/repositories/expense-item-category.repository.interface';
import { ExpenseItemCategory } from '../../domain/entities/expense-item-category.entity';
export interface ItemCategoryTree {
    category: ExpenseItemCategory;
    children: ItemCategoryTree[];
}
export declare class GetItemCategoryTreeUseCase {
    private readonly expenseItemCategoryRepository;
    constructor(expenseItemCategoryRepository: IExpenseItemCategoryRepository);
    execute(): Promise<ItemCategoryTree[]>;
    private buildTree;
}
