import { StoreService } from '../../core/application/services/store.service';
import { StoreResponseDto } from '../dto/store-response.dto';
import { QueryStoreDto } from '../dto/query-store.dto';
import { CreateStoreDto } from '~feature/store/core';
export declare class StoreController {
    private readonly storeService;
    constructor(storeService: StoreService);
    create(query: CreateStoreDto): Promise<StoreResponseDto>;
    findAll(query: QueryStoreDto): Promise<{
        data: StoreResponseDto[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): Promise<StoreResponseDto>;
}
