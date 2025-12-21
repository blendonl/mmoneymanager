"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeCategoryMapper = void 0;
const income_category_entity_1 = require("../../domain/entities/income-category.entity");
class IncomeCategoryMapper {
    static toDomain(prismaCategory) {
        return new income_category_entity_1.IncomeCategory({
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
exports.IncomeCategoryMapper = IncomeCategoryMapper;
//# sourceMappingURL=income-category.mapper.js.map