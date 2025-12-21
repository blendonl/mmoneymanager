import { type IExpenseItemCategoryRepository } from '../../domain/repositories/expense-item-category.repository.interface';
import { UpdateExpenseItemCategoryDto } from '../dto/update-expense-item-category.dto';
import { ExpenseItemCategory } from '../../domain/entities/expense-item-category.entity';
export declare class UpdateExpenseItemCategoryUseCase {
    private readonly expenseItemCategoryRepository;
    constructor(expenseItemCategoryRepository: IExpenseItemCategoryRepository);
    execute(id: string, dto: UpdateExpenseItemCategoryDto): Promise<ExpenseItemCategory>;
    private validate;
    private checkCircularReference;
}
