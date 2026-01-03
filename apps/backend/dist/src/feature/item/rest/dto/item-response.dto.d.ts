import { Item } from '../../core/domain/entities/item.entity';
export declare class ItemResponseDto {
    id: string;
    name: string;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
    static fromEntity(item: Item): ItemResponseDto;
    static fromEntities(items: Item[]): ItemResponseDto[];
}
