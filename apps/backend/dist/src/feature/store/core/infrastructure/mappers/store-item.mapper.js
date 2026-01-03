"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreItemMapper = void 0;
const store_item_entity_1 = require("../../domain/entities/store-item.entity");
const item_mapper_1 = require("../../../../item/core/infrastructure/mappers/item.mapper");
class StoreItemMapper {
    static toDomain(prismaStoreItem) {
        return new store_item_entity_1.StoreItem({
            id: prismaStoreItem.id,
            storeId: prismaStoreItem.storeId,
            itemId: prismaStoreItem.itemId,
            price: prismaStoreItem.price,
            isDiscounted: prismaStoreItem.isDiscounted,
            createdAt: prismaStoreItem.createdAt,
            updatedAt: prismaStoreItem.updatedAt,
            item: prismaStoreItem.item
                ? item_mapper_1.ItemMapper.toDomain(prismaStoreItem.item)
                : undefined,
        });
    }
    static toPersistence(storeItem) {
        return {
            id: storeItem.id,
            storeId: storeItem.storeId,
            itemId: storeItem.itemId,
            price: storeItem.price,
            isDiscounted: storeItem.isDiscounted,
            createdAt: storeItem.createdAt,
            updatedAt: storeItem.updatedAt,
        };
    }
}
exports.StoreItemMapper = StoreItemMapper;
//# sourceMappingURL=store-item.mapper.js.map