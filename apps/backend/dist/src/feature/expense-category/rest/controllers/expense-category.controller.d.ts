import { ExpenseCategoryService } from '../../core/application/services/expense-category.service';
import { CreateExpenseCategoryRequestDto } from '../dto/create-expense-category-request.dto';
import { UpdateExpenseCategoryRequestDto } from '../dto/update-expense-category-request.dto';
import { ExpenseCategoryResponseDto } from '../dto/expense-category-response.dto';
export declare class ExpenseCategoryController {
    private readonly expenseCategoryService;
    constructor(expenseCategoryService: ExpenseCategoryService);
    create(createDto: CreateExpenseCategoryRequestDto): Promise<ExpenseCategoryResponseDto>;
    findAll(parentId?: string, page?: number, limit?: number): Promise<{
        data: ExpenseCategoryResponseDto[];
        total: number;
        page: number;
        limit: number;
    }>;
    getTree(): Promise<{
        category: ExpenseCategoryResponseDto;
        children: any;
    }[]>;
    findOne(id: string): Promise<ExpenseCategoryResponseDto>;
    update(id: string, updateDto: UpdateExpenseCategoryRequestDto): Promise<ExpenseCategoryResponseDto>;
    remove(id: string): Promise<void>;
}
