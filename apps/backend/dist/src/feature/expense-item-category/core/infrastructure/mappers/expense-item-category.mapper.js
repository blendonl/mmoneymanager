"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseItemCategoryMapper = void 0;
const expense_item_category_entity_1 = require("../../domain/entities/expense-item-category.entity");
class ExpenseItemCategoryMapper {
    static toDomain(prismaCategory) {
        return new expense_item_category_entity_1.ExpenseItemCategory({
            id: prismaCategory.id,
            parentId: prismaCategory.parentId,
            name: prismaCategory.name,
            createdAt: prismaCategory.createdAt,
            updatedAt: prismaCategory.updatedAt,
        });
    }
    static toPersistence(category) {
        return {
            id: category.id,
            parentId: category.parentId,
            name: category.name,
            createdAt: category.createdAt,
            updatedAt: category.updatedAt,
        };
    }
}
exports.ExpenseItemCategoryMapper = ExpenseItemCategoryMapper;
//# sourceMappingURL=expense-item-category.mapper.js.map