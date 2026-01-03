import { type IItemRepository } from '../../domain/repositories/item.repository.interface';
import { type IStoreItemCategoryRepository } from '../../../../store-item-category/core/domain/repositories/store-item-category.repository.interface';
import { UpdateItemDto } from '../dto/update-item.dto';
import { Item } from '../../domain/entities/item.entity';
export declare class UpdateItemUseCase {
    private readonly itemRepository;
    private readonly categoryRepository;
    constructor(itemRepository: IItemRepository, categoryRepository: IStoreItemCategoryRepository);
    execute(id: string, dto: UpdateItemDto): Promise<Item>;
    private validate;
}
