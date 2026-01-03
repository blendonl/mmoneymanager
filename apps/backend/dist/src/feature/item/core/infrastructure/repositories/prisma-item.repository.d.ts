import { PrismaService } from '../../../../../common/prisma/prisma.service';
import { IItemRepository, PaginatedResult } from '../../domain/repositories/item.repository.interface';
import { Item } from '../../domain/entities/item.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export declare class PrismaItemRepository implements IItemRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Partial<Item>): Promise<Item>;
    findById(id: string): Promise<Item | null>;
    findByName(name: string): Promise<Item | null>;
    findByNameAndCategory(name: string, categoryId: string): Promise<Item | null>;
    findByCategoryId(categoryId: string, pagination?: Pagination): Promise<PaginatedResult<Item>>;
    findAll(pagination?: Pagination): Promise<PaginatedResult<Item>>;
    update(id: string, data: Partial<Item>): Promise<Item>;
    delete(id: string): Promise<void>;
}
