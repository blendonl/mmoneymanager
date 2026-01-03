import { ItemCategory as PrismaItemCategory } from 'prisma/generated/prisma/client';
import { StoreItemCategory } from '../../domain/entities/store-item-category.entity';
export declare class StoreItemCategoryMapper {
    static toDomain(prismaCategory: PrismaItemCategory): StoreItemCategory;
    static toPersistence(category: StoreItemCategory): {
        id: string;
        parentId: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    };
}
