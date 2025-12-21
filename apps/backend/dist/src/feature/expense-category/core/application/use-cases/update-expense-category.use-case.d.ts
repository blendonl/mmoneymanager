import { type IExpenseCategoryRepository } from '../../domain/repositories/expense-category.repository.interface';
import { UpdateExpenseCategoryDto } from '../dto/update-expense-category.dto';
import { ExpenseCategory } from '../../domain/entities/expense-category.entity';
export declare class UpdateExpenseCategoryUseCase {
    private readonly expenseCategoryRepository;
    constructor(expenseCategoryRepository: IExpenseCategoryRepository);
    execute(id: string, dto: UpdateExpenseCategoryDto): Promise<ExpenseCategory>;
    private validate;
    private checkCircularReference;
}
