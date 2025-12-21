import { type IStoreRepository } from '../../domain/repositories/store.repository.interface';
import { Store } from '../../domain/entities/store.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export interface StoreFilters {
    search?: string;
}
export declare class ListStoresUseCase {
    private readonly storeRepository;
    constructor(storeRepository: IStoreRepository);
    execute(filters: StoreFilters, pagination: Pagination): Promise<{
        data: Store[];
        total: number;
    }>;
}
