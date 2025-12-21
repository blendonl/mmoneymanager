"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseCategoryMapper = void 0;
const expense_category_entity_1 = require("../../domain/entities/expense-category.entity");
class ExpenseCategoryMapper {
    static toDomain(prismaCategory) {
        return new expense_category_entity_1.ExpenseCategory({
            id: prismaCategory.id,
            isConnectedToStore: prismaCategory.isConnectedToStore,
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
exports.ExpenseCategoryMapper = ExpenseCategoryMapper;
//# sourceMappingURL=expense-category.mapper.js.map