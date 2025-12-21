import { type IExpenseCategoryRepository } from '../../domain/repositories/expense-category.repository.interface';
export declare class DeleteExpenseCategoryUseCase {
    private readonly expenseCategoryRepository;
    constructor(expenseCategoryRepository: IExpenseCategoryRepository);
    execute(id: string): Promise<void>;
    private validate;
}
