import { ItemService } from '../../core/application/services/item.service';
import { CreateItemRequestDto } from '../dto/create-item-request.dto';
import { UpdateItemRequestDto } from '../dto/update-item-request.dto';
import { ItemResponseDto } from '../dto/item-response.dto';
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    create(createDto: CreateItemRequestDto): Promise<ItemResponseDto>;
    findAll(categoryId?: string, page?: number, limit?: number): Promise<{
        data: ItemResponseDto[];
        total: number;
        page: number;
        limit: number;
    }>;
    search(name: string): Promise<ItemResponseDto | null>;
    findOne(id: string): Promise<ItemResponseDto>;
    update(id: string, updateDto: UpdateItemRequestDto): Promise<ItemResponseDto>;
    delete(id: string): Promise<void>;
}
