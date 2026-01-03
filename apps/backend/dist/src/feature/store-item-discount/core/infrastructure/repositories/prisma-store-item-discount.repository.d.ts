import { PrismaService } from '../../../../../common/prisma/prisma.service';
import { IStoreItemDiscountRepository, PaginatedResult } from '../../domain/repositories/store-item-discount.repository.interface';
import { StoreItemDiscount } from '../../domain/entities/store-item-discount.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export declare class PrismaStoreItemDiscountRepository implements IStoreItemDiscountRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Partial<StoreItemDiscount>): Promise<StoreItemDiscount>;
    findById(id: string): Promise<StoreItemDiscount | null>;
    findByStoreItemId(storeItemId: string, pagination?: Pagination): Promise<PaginatedResult<StoreItemDiscount>>;
    findActiveByStoreItemId(storeItemId: string): Promise<StoreItemDiscount | null>;
    update(id: string, data: Partial<StoreItemDiscount>): Promise<StoreItemDiscount>;
    endDiscount(id: string): Promise<StoreItemDiscount>;
    delete(id: string): Promise<void>;
}
