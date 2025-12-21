import { ExpenseItemCategoryService } from '../../core/application/services/expense-item-category.service';
import { CreateExpenseItemCategoryRequestDto } from '../dto/create-expense-item-category-request.dto';
import { UpdateExpenseItemCategoryRequestDto } from '../dto/update-expense-item-category-request.dto';
import { ExpenseItemCategoryResponseDto } from '../dto/expense-item-category-response.dto';
export declare class ExpenseItemCategoryController {
    private readonly expenseItemCategoryService;
    constructor(expenseItemCategoryService: ExpenseItemCategoryService);
    create(createDto: CreateExpenseItemCategoryRequestDto): Promise<ExpenseItemCategoryResponseDto>;
    findAll(parentId?: string, page?: number, limit?: number): Promise<{
        data: ExpenseItemCategoryResponseDto[];
        total: number;
        page: number;
        limit: number;
    }>;
    getTree(): Promise<{
        category: ExpenseItemCategoryResponseDto;
        children: any;
    }[]>;
    findOne(id: string): Promise<ExpenseItemCategoryResponseDto>;
    update(id: string, updateDto: UpdateExpenseItemCategoryRequestDto): Promise<ExpenseItemCategoryResponseDto>;
    remove(id: string): Promise<void>;
}
