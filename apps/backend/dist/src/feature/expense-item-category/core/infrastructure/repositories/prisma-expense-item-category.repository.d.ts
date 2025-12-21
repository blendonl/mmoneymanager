import { PrismaService } from '../../../../../common/prisma/prisma.service';
import { IExpenseItemCategoryRepository, PaginatedResult } from '../../domain/repositories/expense-item-category.repository.interface';
import { ExpenseItemCategory } from '../../domain/entities/expense-item-category.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export declare class PrismaExpenseItemCategoryRepository implements IExpenseItemCategoryRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Partial<ExpenseItemCategory>): Promise<ExpenseItemCategory>;
    findById(id: string): Promise<ExpenseItemCategory | null>;
    findAll(pagination?: Pagination): Promise<PaginatedResult<ExpenseItemCategory>>;
    findByParentId(parentId: string | null, pagination?: Pagination): Promise<PaginatedResult<ExpenseItemCategory>>;
    findChildren(parentId: string): Promise<ExpenseItemCategory[]>;
    update(id: string, data: Partial<ExpenseItemCategory>): Promise<ExpenseItemCategory>;
    delete(id: string): Promise<void>;
}
