import { type IExpenseItemRepository } from '../../domain/repositories/expense-item.repository.interface';
import { ExpenseItem } from '../../domain/entities/expense-item.entity';
export declare class GetExpenseItemByIdUseCase {
    private readonly expenseItemRepository;
    constructor(expenseItemRepository: IExpenseItemRepository);
    execute(id: string): Promise<ExpenseItem>;
}
