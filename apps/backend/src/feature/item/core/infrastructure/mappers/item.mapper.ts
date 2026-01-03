import { Item as PrismaItem } from 'prisma/generated/prisma/client';
import { Item } from '../../domain/entities/item.entity';

export class ItemMapper {
  static toDomain(prismaItem: PrismaItem): Item {
    return new Item({
      id: prismaItem.id,
      categoryId: prismaItem.categoryId,
      name: prismaItem.name,
      createdAt: prismaItem.createdAt,
      updatedAt: prismaItem.updatedAt,
    });
  }

  static toPersistence(item: Item) {
    return {
      id: item.id,
      categoryId: item.categoryId,
      name: item.name,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
  }
}
