import { type IStoreItemRepository } from '../../domain/repositories/store-item.repository.interface';
import { type IItemRepository } from '../../../../item/core/domain/repositories/item.repository.interface';
import { CreateStoreItemDto } from '../dto/create-store-item.dto';
import { StoreItem } from '../../domain/entities/store-item.entity';
export declare class CreateOrFindStoreItemUseCase {
    private readonly storeItemRepository;
    private readonly itemRepository;
    constructor(storeItemRepository: IStoreItemRepository, itemRepository: IItemRepository);
    execute(dto: CreateStoreItemDto): Promise<StoreItem>;
    private validate;
}
