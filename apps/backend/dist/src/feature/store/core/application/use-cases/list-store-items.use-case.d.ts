import { type IStoreItemRepository } from '../../domain/repositories/store-item.repository.interface';
import { StoreItem } from '../../domain/entities/store-item.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export interface StoreItemFilters {
    storeId?: string;
}
export declare class ListStoreItemsUseCase {
    private readonly storeItemRepository;
    constructor(storeItemRepository: IStoreItemRepository);
    execute(filters: StoreItemFilters, pagination: Pagination): Promise<{
        data: StoreItem[];
        total: number;
    }>;
}
