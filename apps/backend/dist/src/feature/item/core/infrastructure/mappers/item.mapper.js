"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemMapper = void 0;
const item_entity_1 = require("../../domain/entities/item.entity");
class ItemMapper {
    static toDomain(prismaItem) {
        return new item_entity_1.Item({
            id: prismaItem.id,
            categoryId: prismaItem.categoryId,
            name: prismaItem.name,
            createdAt: prismaItem.createdAt,
            updatedAt: prismaItem.updatedAt,
        });
    }
    static toPersistence(item) {
        return {
            id: item.id,
            categoryId: item.categoryId,
            name: item.name,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
        };
    }
}
exports.ItemMapper = ItemMapper;
//# sourceMappingURL=item.mapper.js.map