"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreItemDiscountMapper = void 0;
const store_item_discount_entity_1 = require("../../domain/entities/store-item-discount.entity");
class StoreItemDiscountMapper {
    static toDomain(prismaDiscount) {
        return new store_item_discount_entity_1.StoreItemDiscount({
            id: prismaDiscount.id,
            storeItemId: prismaDiscount.storeItemId,
            discount: prismaDiscount.discount,
            startedAt: prismaDiscount.startedAt,
            endedAt: prismaDiscount.endedAt,
            createdAt: prismaDiscount.createdAt,
            updatedAt: prismaDiscount.updatedAt,
        });
    }
    static toPersistence(discount) {
        return {
            id: discount.id,
            storeItemId: discount.storeItemId,
            discount: discount.discount,
            startedAt: discount.startedAt,
            endedAt: discount.endedAt,
            createdAt: discount.createdAt,
            updatedAt: discount.updatedAt,
        };
    }
}
exports.StoreItemDiscountMapper = StoreItemDiscountMapper;
//# sourceMappingURL=store-item-discount.mapper.js.map