import { type IItemRepository } from '../../domain/repositories/item.repository.interface';
import { type IStoreItemCategoryRepository } from '../../../../store-item-category/core/domain/repositories/store-item-category.repository.interface';
import { CreateItemDto } from '../dto/create-item.dto';
import { Item } from '../../domain/entities/item.entity';
export declare class CreateItemUseCase {
    private readonly itemRepository;
    private readonly categoryRepository;
    constructor(itemRepository: IItemRepository, categoryRepository: IStoreItemCategoryRepository);
    execute(dto: CreateItemDto): Promise<Item>;
    private validate;
}
