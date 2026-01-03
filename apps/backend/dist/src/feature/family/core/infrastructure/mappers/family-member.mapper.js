"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyMemberMapper = void 0;
const family_member_entity_1 = require("../../domain/entities/family-member.entity");
class FamilyMemberMapper {
    static toDomain(prismaMember) {
        return new family_member_entity_1.FamilyMember({
            id: prismaMember.id,
            familyId: prismaMember.familyId,
            userId: prismaMember.userId,
            role: this.mapRoleToDomain(prismaMember.role),
            balance: prismaMember.balance.toNumber(),
            joinedAt: prismaMember.joinedAt,
            createdAt: prismaMember.createdAt,
            updatedAt: prismaMember.updatedAt,
        });
    }
    static toPrisma(member) {
        return {
            id: member.id,
            familyId: member.familyId,
            userId: member.userId,
            role: this.mapRoleToPrisma(member.role),
            balance: member.balance,
            joinedAt: member.joinedAt,
        };
    }
    static mapRoleToDomain(prismaRole) {
        const roleMap = {
            OWNER: family_member_entity_1.FamilyMemberRole.OWNER,
            ADMIN: family_member_entity_1.FamilyMemberRole.ADMIN,
            MEMBER: family_member_entity_1.FamilyMemberRole.MEMBER,
        };
        return roleMap[prismaRole];
    }
    static mapRoleToPrisma(role) {
        const roleMap = {
            [family_member_entity_1.FamilyMemberRole.OWNER]: 'OWNER',
            [family_member_entity_1.FamilyMemberRole.ADMIN]: 'ADMIN',
            [family_member_entity_1.FamilyMemberRole.MEMBER]: 'MEMBER',
        };
        return roleMap[role];
    }
}
exports.FamilyMemberMapper = FamilyMemberMapper;
//# sourceMappingURL=family-member.mapper.js.map