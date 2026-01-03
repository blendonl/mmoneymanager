import { Item } from '../../core/domain/entities/item.entity';

export class ItemResponseDto {
  id: string;
  name: string;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;

  static fromEntity(item: Item): ItemResponseDto {
    return {
      id: item.id,
      name: item.name,
      categoryId: item.categoryId,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
  }

  static fromEntities(items: Item[]): ItemResponseDto[] {
    return items.map((item) => this.fromEntity(item));
  }
}
