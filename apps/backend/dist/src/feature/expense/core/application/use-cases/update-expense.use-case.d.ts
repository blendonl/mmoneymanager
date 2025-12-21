import { type IExpenseRepository } from '../../domain/repositories/expense.repository.interface';
import { UpdateExpenseDto } from '../dto/update-expense.dto';
import { type IExpenseCategoryRepository } from '../../../../expense-category/core/domain/repositories/expense-category.repository.interface';
import { Expense } from '../../domain/entities/expense.entity';
import { StoreService } from '~feature/store/core';
export declare class UpdateExpenseUseCase {
    private readonly expenseRepository;
    private readonly expenseCategoryRepository;
    private readonly storeService;
    constructor(expenseRepository: IExpenseRepository, expenseCategoryRepository: IExpenseCategoryRepository, storeService: StoreService);
    execute(id: string, userId: string, dto: UpdateExpenseDto): Promise<Expense>;
    private validate;
}
