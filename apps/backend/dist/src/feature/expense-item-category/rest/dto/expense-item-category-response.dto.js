"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseItemCategoryResponseDto = void 0;
class ExpenseItemCategoryResponseDto {
    id;
    parentId;
    name;
    createdAt;
    updatedAt;
    static fromEntity(category) {
        const dto = new ExpenseItemCategoryResponseDto();
        dto.id = category.id;
        dto.parentId = category.parentId;
        dto.name = category.name;
        dto.createdAt = category.createdAt;
        dto.updatedAt = category.updatedAt;
        return dto;
    }
    static fromEntities(categories) {
        return categories.map((category) => this.fromEntity(category));
    }
}
exports.ExpenseItemCategoryResponseDto = ExpenseItemCategoryResponseDto;
//# sourceMappingURL=expense-item-category-response.dto.js.map