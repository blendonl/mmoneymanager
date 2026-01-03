"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyMapper = void 0;
const family_entity_1 = require("../../domain/entities/family.entity");
class FamilyMapper {
    static toDomain(prismaFamily) {
        return new family_entity_1.Family({
            id: prismaFamily.id,
            name: prismaFamily.name,
            balance: prismaFamily.balance.toNumber(),
            createdAt: prismaFamily.createdAt,
            updatedAt: prismaFamily.updatedAt,
        });
    }
    static toPrisma(family) {
        return {
            id: family.id,
            name: family.name,
            balance: family.balance,
        };
    }
}
exports.FamilyMapper = FamilyMapper;
//# sourceMappingURL=family.mapper.js.map