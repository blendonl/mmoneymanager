import { type IExpenseCategoryRepository } from '../../domain/repositories/expense-category.repository.interface';
import { ExpenseCategory } from '../../domain/entities/expense-category.entity';
export declare class GetExpenseCategoryByIdUseCase {
    private readonly expenseCategoryRepository;
    constructor(expenseCategoryRepository: IExpenseCategoryRepository);
    execute(id: string): Promise<ExpenseCategory>;
}
