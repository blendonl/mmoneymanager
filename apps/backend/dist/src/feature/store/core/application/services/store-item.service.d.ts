import { CreateOrFindStoreItemUseCase } from '../use-cases/create-or-find-store-item.use-case';
import { GetStoreItemByIdUseCase } from '../use-cases/get-store-item-by-id.use-case';
import { ListStoreItemsUseCase, StoreItemFilters } from '../use-cases/list-store-items.use-case';
import { CreateStoreItemDto } from '../dto/create-store-item.dto';
import { StoreItem } from '../../domain/entities/store-item.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export declare class StoreItemService {
    private readonly createOrFindStoreItemUseCase;
    private readonly getStoreItemByIdUseCase;
    private readonly listStoreItemsUseCase;
    constructor(createOrFindStoreItemUseCase: CreateOrFindStoreItemUseCase, getStoreItemByIdUseCase: GetStoreItemByIdUseCase, listStoreItemsUseCase: ListStoreItemsUseCase);
    createOrFind(dto: CreateStoreItemDto): Promise<StoreItem>;
    findById(id: string): Promise<StoreItem>;
    findAll(filters: StoreItemFilters, pagination: Pagination): Promise<{
        data: StoreItem[];
        total: number;
    }>;
}
