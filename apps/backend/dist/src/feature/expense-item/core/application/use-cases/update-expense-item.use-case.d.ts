import { type IExpenseItemRepository } from '../../domain/repositories/expense-item.repository.interface';
import { type IExpenseItemCategoryRepository } from '../../../../expense-item-category/core/domain/repositories/expense-item-category.repository.interface';
import { UpdateExpenseItemDto } from '../dto/update-expense-item.dto';
import { ExpenseItem } from '../../domain/entities/expense-item.entity';
export declare class UpdateExpenseItemUseCase {
    private readonly expenseItemRepository;
    private readonly expenseItemCategoryRepository;
    constructor(expenseItemRepository: IExpenseItemRepository, expenseItemCategoryRepository: IExpenseItemCategoryRepository);
    execute(id: string, dto: UpdateExpenseItemDto): Promise<ExpenseItem>;
    private validate;
}
