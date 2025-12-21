import { type IExpenseItemRepository } from '../../domain/repositories/expense-item.repository.interface';
export declare class DeleteExpenseItemUseCase {
    private readonly expenseItemRepository;
    constructor(expenseItemRepository: IExpenseItemRepository);
    execute(id: string): Promise<void>;
}
