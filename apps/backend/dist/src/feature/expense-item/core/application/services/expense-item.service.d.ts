import { CreateExpenseItemUseCase } from '../use-cases/create-expense-item.use-case';
import { GetExpenseItemByIdUseCase } from '../use-cases/get-expense-item-by-id.use-case';
import { ListExpenseItemsUseCase } from '../use-cases/list-expense-items.use-case';
import { UpdateExpenseItemUseCase } from '../use-cases/update-expense-item.use-case';
import { DeleteExpenseItemUseCase } from '../use-cases/delete-expense-item.use-case';
import { CalculateExpenseTotalUseCase } from '../use-cases/calculate-expense-total.use-case';
import { CreateExpenseItemDto } from '../dto/create-expense-item.dto';
import { UpdateExpenseItemDto } from '../dto/update-expense-item.dto';
import { ExpenseItem } from '../../domain/entities/expense-item.entity';
import { PaginatedResult } from '../../domain/repositories/expense-item.repository.interface';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export declare class ExpenseItemService {
    private readonly createExpenseItemUseCase;
    private readonly getExpenseItemByIdUseCase;
    private readonly listExpenseItemsUseCase;
    private readonly updateExpenseItemUseCase;
    private readonly deleteExpenseItemUseCase;
    private readonly calculateExpenseTotalUseCase;
    constructor(createExpenseItemUseCase: CreateExpenseItemUseCase, getExpenseItemByIdUseCase: GetExpenseItemByIdUseCase, listExpenseItemsUseCase: ListExpenseItemsUseCase, updateExpenseItemUseCase: UpdateExpenseItemUseCase, deleteExpenseItemUseCase: DeleteExpenseItemUseCase, calculateExpenseTotalUseCase: CalculateExpenseTotalUseCase);
    create(dto: CreateExpenseItemDto, storeId: string): Promise<ExpenseItem>;
    findById(id: string): Promise<ExpenseItem>;
    findAll(expenseId?: string, pagination?: Pagination): Promise<PaginatedResult<ExpenseItem>>;
    update(id: string, dto: UpdateExpenseItemDto): Promise<ExpenseItem>;
    delete(id: string): Promise<void>;
    calculateTotal(expenseId: string): Promise<number>;
}
