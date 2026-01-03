import { StoreItem as PrismaStoreItem, Item as PrismaItem } from 'prisma/generated/prisma/client';
import { StoreItem } from '../../domain/entities/store-item.entity';
export declare class StoreItemMapper {
    static toDomain(prismaStoreItem: PrismaStoreItem & {
        item?: PrismaItem;
    }): StoreItem;
    static toPersistence(storeItem: StoreItem): {
        id: string;
        storeId: string;
        itemId: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        isDiscounted: boolean;
        createdAt: Date;
        updatedAt: Date;
    };
}
