"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreResponseDto = void 0;
class StoreResponseDto {
    id;
    name;
    location;
    createdAt;
    updatedAt;
    static fromEntity(store) {
        const dto = new StoreResponseDto();
        dto.id = store.id;
        dto.name = store.name;
        dto.location = store.location;
        dto.createdAt = store.createdAt;
        dto.updatedAt = store.updatedAt;
        return dto;
    }
    static fromEntities(stores) {
        return stores.map((store) => this.fromEntity(store));
    }
}
exports.StoreResponseDto = StoreResponseDto;
//# sourceMappingURL=store-response.dto.js.map