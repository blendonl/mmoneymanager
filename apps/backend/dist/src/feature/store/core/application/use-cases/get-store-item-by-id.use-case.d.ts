import { type IStoreItemRepository } from '../../domain/repositories/store-item.repository.interface';
import { StoreItem } from '../../domain/entities/store-item.entity';
export declare class GetStoreItemByIdUseCase {
    private readonly storeItemRepository;
    constructor(storeItemRepository: IStoreItemRepository);
    execute(id: string): Promise<StoreItem>;
}
