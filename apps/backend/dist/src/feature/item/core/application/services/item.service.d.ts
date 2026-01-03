import { CreateItemUseCase } from '../use-cases/create-item.use-case';
import { GetItemByIdUseCase } from '../use-cases/get-item-by-id.use-case';
import { ListItemsUseCase } from '../use-cases/list-items.use-case';
import { FindItemByNameUseCase } from '../use-cases/find-item-by-name.use-case';
import { UpdateItemUseCase } from '../use-cases/update-item.use-case';
import { DeleteItemUseCase } from '../use-cases/delete-item.use-case';
import { CreateItemDto } from '../dto/create-item.dto';
import { UpdateItemDto } from '../dto/update-item.dto';
import { Item } from '../../domain/entities/item.entity';
import { PaginatedResult } from '../../domain/repositories/item.repository.interface';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export declare class ItemService {
    private readonly createItemUseCase;
    private readonly getItemByIdUseCase;
    private readonly listItemsUseCase;
    private readonly findItemByNameUseCase;
    private readonly updateItemUseCase;
    private readonly deleteItemUseCase;
    constructor(createItemUseCase: CreateItemUseCase, getItemByIdUseCase: GetItemByIdUseCase, listItemsUseCase: ListItemsUseCase, findItemByNameUseCase: FindItemByNameUseCase, updateItemUseCase: UpdateItemUseCase, deleteItemUseCase: DeleteItemUseCase);
    create(dto: CreateItemDto): Promise<Item>;
    findById(id: string): Promise<Item>;
    findAll(categoryId?: string, pagination?: Pagination): Promise<PaginatedResult<Item>>;
    findByName(name: string): Promise<Item | null>;
    update(id: string, dto: UpdateItemDto): Promise<Item>;
    delete(id: string): Promise<void>;
}
