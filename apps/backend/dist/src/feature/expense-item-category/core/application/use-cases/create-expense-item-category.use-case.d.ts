import { type IExpenseItemCategoryRepository } from '../../domain/repositories/expense-item-category.repository.interface';
import { CreateExpenseItemCategoryDto } from '../dto/create-expense-item-category.dto';
import { ExpenseItemCategory } from '../../domain/entities/expense-item-category.entity';
export declare class CreateExpenseItemCategoryUseCase {
    private readonly expenseItemCategoryRepository;
    constructor(expenseItemCategoryRepository: IExpenseItemCategoryRepository);
    execute(dto: CreateExpenseItemCategoryDto): Promise<ExpenseItemCategory>;
    private validate;
}
