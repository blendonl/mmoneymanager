"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyResponseDto = void 0;
class FamilyResponseDto {
    id;
    name;
    balance;
    createdAt;
    updatedAt;
    static fromEntity(family) {
        return {
            id: family.id,
            name: family.name,
            balance: family.balance,
            createdAt: family.createdAt,
            updatedAt: family.updatedAt,
        };
    }
    static fromEntities(families) {
        return families.map((f) => this.fromEntity(f));
    }
}
exports.FamilyResponseDto = FamilyResponseDto;
//# sourceMappingURL=family-response.dto.js.map