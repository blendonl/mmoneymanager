import { ExpenseItemService } from '../../core/application/services/expense-item.service';
import { CreateExpenseItemRequestDto } from '../dto/create-expense-item-request.dto';
import { UpdateExpenseItemRequestDto } from '../dto/update-expense-item-request.dto';
import { ExpenseItemResponseDto } from '../dto/expense-item-response.dto';
export declare class ExpenseItemController {
    private readonly expenseItemService;
    constructor(expenseItemService: ExpenseItemService);
    create(createDto: CreateExpenseItemRequestDto, storeId?: string): Promise<ExpenseItemResponseDto>;
    findAll(expenseId?: string, page?: number, limit?: number): Promise<{
        data: ExpenseItemResponseDto[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): Promise<ExpenseItemResponseDto>;
    update(id: string, updateDto: UpdateExpenseItemRequestDto): Promise<ExpenseItemResponseDto>;
    remove(id: string): Promise<void>;
}
