import { type IExpenseCategoryRepository } from '../../domain/repositories/expense-category.repository.interface';
import { CreateExpenseCategoryDto } from '../dto/create-expense-category.dto';
import { ExpenseCategory } from '../../domain/entities/expense-category.entity';
export declare class CreateExpenseCategoryUseCase {
    private readonly expenseCategoryRepository;
    constructor(expenseCategoryRepository: IExpenseCategoryRepository);
    execute(dto: CreateExpenseCategoryDto): Promise<ExpenseCategory>;
    private validate;
}
