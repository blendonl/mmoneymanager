import { type IExpenseItemRepository } from '../../domain/repositories/expense-item.repository.interface';
export declare class CalculateExpenseTotalUseCase {
    private readonly expenseItemRepository;
    constructor(expenseItemRepository: IExpenseItemRepository);
    execute(expenseId: string): Promise<number>;
}
