import { type IExpenseItemCategoryRepository } from '../../domain/repositories/expense-item-category.repository.interface';
import { ExpenseItemCategory } from '../../domain/entities/expense-item-category.entity';
export declare class GetExpenseItemCategoryByIdUseCase {
    private readonly expenseItemCategoryRepository;
    constructor(expenseItemCategoryRepository: IExpenseItemCategoryRepository);
    execute(id: string): Promise<ExpenseItemCategory>;
}
