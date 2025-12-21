"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseCategoryResponseDto = void 0;
class ExpenseCategoryResponseDto {
    id;
    parentId;
    name;
    createdAt;
    updatedAt;
    isConnectedToStore;
    static fromEntity(category) {
        const dto = new ExpenseCategoryResponseDto();
        dto.id = category.id;
        dto.parentId = category.parentId;
        dto.isConnectedToStore = category.isConnectedToStore;
        dto.name = category.name;
        dto.createdAt = category.createdAt;
        dto.updatedAt = category.updatedAt;
        return dto;
    }
    static fromEntities(categories) {
        return categories.map((category) => this.fromEntity(category));
    }
}
exports.ExpenseCategoryResponseDto = ExpenseCategoryResponseDto;
//# sourceMappingURL=expense-category-response.dto.js.map