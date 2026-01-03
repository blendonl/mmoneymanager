import { type IItemRepository } from '../../domain/repositories/item.repository.interface';
import { Item } from '../../domain/entities/item.entity';
export declare class GetItemByIdUseCase {
    private readonly itemRepository;
    constructor(itemRepository: IItemRepository);
    execute(id: string): Promise<Item>;
}
