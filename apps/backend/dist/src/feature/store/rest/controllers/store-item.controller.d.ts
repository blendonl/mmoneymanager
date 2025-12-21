import { StoreItemService } from '../../core/application/services/store-item.service';
import { QueryStoreItemDto } from '../dto/query-store-item.dto';
import { StoreItemResponseDto } from '../dto/store-item-response.dto';
export declare class StoreItemController {
    private readonly storeItemService;
    constructor(storeItemService: StoreItemService);
    findAll(id: string, query: QueryStoreItemDto): Promise<{
        data: StoreItemResponseDto[];
        total: number;
        page: number;
        limit: number;
    }>;
}
