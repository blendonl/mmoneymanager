import { PrismaService } from '../../../../../common/prisma/prisma.service';
import { IExpenseCategoryRepository, PaginatedResult } from '../../domain/repositories/expense-category.repository.interface';
import { ExpenseCategory } from '../../domain/entities/expense-category.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export declare class PrismaExpenseCategoryRepository implements IExpenseCategoryRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Partial<ExpenseCategory>): Promise<ExpenseCategory>;
    findById(id: string): Promise<ExpenseCategory | null>;
    findByName(name: string): Promise<ExpenseCategory | null>;
    findAll(pagination?: Pagination): Promise<PaginatedResult<ExpenseCategory>>;
    findByParentId(parentId: string | null, pagination?: Pagination): Promise<PaginatedResult<ExpenseCategory>>;
    findChildren(parentId: string): Promise<ExpenseCategory[]>;
    update(id: string, data: Partial<ExpenseCategory>): Promise<ExpenseCategory>;
    delete(id: string): Promise<void>;
}
