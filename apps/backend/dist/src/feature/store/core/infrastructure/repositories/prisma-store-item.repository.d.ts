import { PrismaService } from '../../../../../common/prisma/prisma.service';
import { IStoreItemRepository, PaginatedResult } from '../../domain/repositories/store-item.repository.interface';
import { StoreItem } from '../../domain/entities/store-item.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export declare class PrismaStoreItemRepository implements IStoreItemRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Partial<StoreItem>): Promise<StoreItem>;
    findById(id: string): Promise<StoreItem | null>;
    findByStoreAndName(storeId: string, name: string): Promise<StoreItem | null>;
    findByStoreId(storeId: string, pagination?: Pagination): Promise<PaginatedResult<StoreItem>>;
    findAll(pagination?: Pagination): Promise<PaginatedResult<StoreItem>>;
    update(id: string, data: Partial<StoreItem>): Promise<StoreItem>;
    delete(id: string): Promise<void>;
}
