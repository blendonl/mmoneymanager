import { type IItemRepository } from '../../domain/repositories/item.repository.interface';
import { Item } from '../../domain/entities/item.entity';
export declare class FindItemByNameUseCase {
    private readonly itemRepository;
    constructor(itemRepository: IItemRepository);
    execute(name: string): Promise<Item | null>;
}
