import { PrismaService } from '../../../../../common/prisma/prisma.service';
import { IExpenseRepository, PaginatedResult, ExpenseFilters as ExpenseFiltersInterface, ExpenseStatistics } from '../../domain/repositories/expense.repository.interface';
import { Expense } from '../../domain/entities/expense.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export declare class PrismaExpenseRepository implements IExpenseRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Partial<Expense>): Promise<Expense>;
    findById(id: string): Promise<Expense | null>;
    findByTransactionId(transactionId: string): Promise<Expense | null>;
    findAll(filters?: ExpenseFiltersInterface, pagination?: Pagination): Promise<PaginatedResult<Expense>>;
    update(id: string, data: Partial<Expense>): Promise<Expense>;
    delete(id: string): Promise<void>;
    verifyOwnership(expenseId: string, userId: string): Promise<boolean>;
    getStatistics(userId: string, filters?: ExpenseFiltersInterface): Promise<ExpenseStatistics>;
    private buildWhereClause;
}
