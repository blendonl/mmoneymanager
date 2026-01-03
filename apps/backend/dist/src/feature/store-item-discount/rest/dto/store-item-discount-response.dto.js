"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreItemDiscountResponseDto = void 0;
class StoreItemDiscountResponseDto {
    id;
    storeItemId;
    discount;
    startedAt;
    endedAt;
    createdAt;
    updatedAt;
    isActive;
    static fromEntity(discount) {
        return {
            id: discount.id,
            storeItemId: discount.storeItemId,
            discount: discount.discount.toNumber(),
            startedAt: discount.startedAt,
            endedAt: discount.endedAt,
            createdAt: discount.createdAt,
            updatedAt: discount.updatedAt,
            isActive: discount.isActive(),
        };
    }
    static fromEntities(discounts) {
        return discounts.map((discount) => this.fromEntity(discount));
    }
}
exports.StoreItemDiscountResponseDto = StoreItemDiscountResponseDto;
//# sourceMappingURL=store-item-discount-response.dto.js.map