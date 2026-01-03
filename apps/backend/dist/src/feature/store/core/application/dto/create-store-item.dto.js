"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStoreItemDto = void 0;
class CreateStoreItemDto {
    storeId;
    name;
    price;
    categoryId;
    isDiscounted;
    constructor(storeId, name, price, categoryId, isDiscounted) {
        this.storeId = storeId;
        this.name = name;
        this.price = price;
        this.categoryId = categoryId;
        this.isDiscounted = isDiscounted ?? false;
    }
}
exports.CreateStoreItemDto = CreateStoreItemDto;
//# sourceMappingURL=create-store-item.dto.js.map