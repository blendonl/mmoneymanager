import { CreateOrFindStoreUseCase } from '../use-cases/create-or-find-store.use-case';
import { GetStoreByIdUseCase } from '../use-cases/get-store-by-id.use-case';
import { ListStoresUseCase } from '../use-cases/list-stores.use-case';
import { CreateStoreDto } from '../dto/create-store.dto';
import { Store } from '../../domain/entities/store.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export declare class StoreService {
    private readonly createOrFindStoreUseCase;
    private readonly getStoreByIdUseCase;
    private readonly listStoresUseCase;
    constructor(createOrFindStoreUseCase: CreateOrFindStoreUseCase, getStoreByIdUseCase: GetStoreByIdUseCase, listStoresUseCase: ListStoresUseCase);
    createOrFind(dto: CreateStoreDto): Promise<Store>;
    findById(id: string): Promise<Store>;
    findAll(filters?: {
        search?: string;
    }, pagination?: Pagination): Promise<{
        data: Store[];
        total: number;
    }>;
}
