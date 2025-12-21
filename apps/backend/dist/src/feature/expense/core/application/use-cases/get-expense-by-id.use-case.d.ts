import { type IExpenseRepository } from '../../domain/repositories/expense.repository.interface';
import { Expense } from '../../domain/entities/expense.entity';
export declare class GetExpenseByIdUseCase {
    private readonly expenseRepository;
    constructor(expenseRepository: IExpenseRepository);
    execute(id: string, userId: string): Promise<Expense>;
}
