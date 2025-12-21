import { type IExpenseItemCategoryRepository } from '../../domain/repositories/expense-item-category.repository.interface';
export declare class DeleteExpenseItemCategoryUseCase {
    private readonly expenseItemCategoryRepository;
    constructor(expenseItemCategoryRepository: IExpenseItemCategoryRepository);
    execute(id: string): Promise<void>;
    private validate;
}
