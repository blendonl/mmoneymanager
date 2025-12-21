import { PrismaService } from '../../../../../common/prisma/prisma.service';
import { IIncomeCategoryRepository, PaginatedResult } from '../../domain/repositories/income-category.repository.interface';
import { IncomeCategory } from '../../domain/entities/income-category.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export declare class PrismaIncomeCategoryRepository implements IIncomeCategoryRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Partial<IncomeCategory>): Promise<IncomeCategory>;
    findById(id: string): Promise<IncomeCategory | null>;
    findAll(pagination?: Pagination): Promise<PaginatedResult<IncomeCategory>>;
    findByParentId(parentId: string | null, pagination?: Pagination): Promise<PaginatedResult<IncomeCategory>>;
    findChildren(parentId: string): Promise<IncomeCategory[]>;
    update(id: string, data: Partial<IncomeCategory>): Promise<IncomeCategory>;
    delete(id: string): Promise<void>;
}
