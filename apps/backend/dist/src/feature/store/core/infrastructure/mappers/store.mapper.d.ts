import { Store as PrismaStore } from 'prisma/generated/prisma/client';
import { Store } from '../../domain/entities/store.entity';
export declare class StoreMapper {
    static toDomain(prismaStore: PrismaStore): Store;
    static toPersistence(store: Store): {
        id: string;
        name: string;
        location: string;
        createdAt: Date;
        updatedAt: Date;
    };
}
