import { type IExpenseItemRepository } from '../../domain/repositories/expense-item.repository.interface';
import { type IExpenseItemCategoryRepository } from '../../../../expense-item-category/core/domain/repositories/expense-item-category.repository.interface';
import { StoreItemService } from '../../../../store/core/application/services/store-item.service';
import { CreateExpenseItemDto } from '../dto/create-expense-item.dto';
import { ExpenseItem } from '../../domain/entities/expense-item.entity';
export declare class CreateExpenseItemUseCase {
    private readonly expenseItemRepository;
    private readonly expenseItemCategoryRepository;
    private readonly storeItemService;
    constructor(expenseItemRepository: IExpenseItemRepository, expenseItemCategoryRepository: IExpenseItemCategoryRepository, storeItemService: StoreItemService);
    execute(dto: CreateExpenseItemDto, storeId: string): Promise<ExpenseItem>;
    private validate;
}
