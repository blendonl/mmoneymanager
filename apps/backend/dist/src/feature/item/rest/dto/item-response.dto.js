"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemResponseDto = void 0;
class ItemResponseDto {
    id;
    name;
    categoryId;
    createdAt;
    updatedAt;
    static fromEntity(item) {
        return {
            id: item.id,
            name: item.name,
            categoryId: item.categoryId,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
        };
    }
    static fromEntities(items) {
        return items.map((item) => this.fromEntity(item));
    }
}
exports.ItemResponseDto = ItemResponseDto;
//# sourceMappingURL=item-response.dto.js.map