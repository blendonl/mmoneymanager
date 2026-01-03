import { type IItemRepository, PaginatedResult } from '../../domain/repositories/item.repository.interface';
import { Item } from '../../domain/entities/item.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export declare class ListItemsUseCase {
    private readonly itemRepository;
    constructor(itemRepository: IItemRepository);
    execute(categoryId?: string, pagination?: Pagination): Promise<PaginatedResult<Item>>;
}
