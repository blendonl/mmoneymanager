import { type IStoreItemRepository } from '../../domain/repositories/store-item.repository.interface';
import { CreateStoreItemDto } from '../dto/create-store-item.dto';
import { StoreItem } from '../../domain/entities/store-item.entity';
export declare class CreateOrFindStoreItemUseCase {
    private readonly storeItemRepository;
    constructor(storeItemRepository: IStoreItemRepository);
    execute(dto: CreateStoreItemDto): Promise<StoreItem>;
    private validate;
}
