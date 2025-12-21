import { PrismaService } from '../../../../../common/prisma/prisma.service';
import { IExpenseItemRepository, PaginatedResult } from '../../domain/repositories/expense-item.repository.interface';
import { ExpenseItem } from '../../domain/entities/expense-item.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export declare class PrismaExpenseItemRepository implements IExpenseItemRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Partial<ExpenseItem>): Promise<ExpenseItem>;
    findById(id: string): Promise<ExpenseItem | null>;
    findByExpenseId(expenseId: string): Promise<ExpenseItem[]>;
    findAll(pagination?: Pagination): Promise<PaginatedResult<ExpenseItem>>;
    update(id: string, data: Partial<ExpenseItem>): Promise<ExpenseItem>;
    delete(id: string): Promise<void>;
    deleteByExpenseId(expenseId: string): Promise<void>;
    calculateExpenseTotal(expenseId: string): Promise<number>;
}
