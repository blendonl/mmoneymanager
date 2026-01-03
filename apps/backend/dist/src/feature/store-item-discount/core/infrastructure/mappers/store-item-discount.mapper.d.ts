import { StoreItemDiscount as PrismaStoreItemDiscount } from 'prisma/generated/prisma/client';
import { StoreItemDiscount } from '../../domain/entities/store-item-discount.entity';
export declare class StoreItemDiscountMapper {
    static toDomain(prismaDiscount: PrismaStoreItemDiscount): StoreItemDiscount;
    static toPersistence(discount: StoreItemDiscount): {
        id: string;
        storeItemId: string;
        discount: import("@prisma/client-runtime-utils").Decimal;
        startedAt: Date;
        endedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    };
}
