"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStoreItemDto = void 0;
class CreateStoreItemDto {
    storeId;
    name;
    price;
    isDiscounted;
    constructor(storeId, name, price, isDiscounted) {
        this.storeId = storeId;
        this.name = name;
        this.price = price;
        this.isDiscounted = isDiscounted ?? false;
    }
}
exports.CreateStoreItemDto = CreateStoreItemDto;
//# sourceMappingURL=create-store-item.dto.js.map