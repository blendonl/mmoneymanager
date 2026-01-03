import { Item as PrismaItem } from 'prisma/generated/prisma/client';
import { Item } from '../../domain/entities/item.entity';
export declare class ItemMapper {
    static toDomain(prismaItem: PrismaItem): Item;
    static toPersistence(item: Item): {
        id: string;
        categoryId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    };
}
