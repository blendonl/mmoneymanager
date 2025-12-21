"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreMapper = void 0;
const store_entity_1 = require("../../domain/entities/store.entity");
class StoreMapper {
    static toDomain(prismaStore) {
        return new store_entity_1.Store({
            id: prismaStore.id,
            name: prismaStore.name,
            location: prismaStore.location,
            createdAt: prismaStore.createdAt,
            updatedAt: prismaStore.updatedAt,
        });
    }
    static toPersistence(store) {
        return {
            id: store.id,
            name: store.name,
            location: store.location,
            createdAt: store.createdAt,
            updatedAt: store.updatedAt,
        };
    }
}
exports.StoreMapper = StoreMapper;
//# sourceMappingURL=store.mapper.js.map