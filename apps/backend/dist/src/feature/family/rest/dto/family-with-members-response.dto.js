"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyWithMembersResponseDto = exports.FamilyMemberUserDto = void 0;
const family_response_dto_1 = require("./family-response.dto");
class FamilyMemberUserDto {
    id;
    userId;
    role;
    balance;
    joinedAt;
    user;
    static fromMemberAndUser(member, user) {
        return {
            id: member.id,
            userId: member.userId,
            role: member.role,
            balance: member.balance,
            joinedAt: member.joinedAt,
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
            },
        };
    }
}
exports.FamilyMemberUserDto = FamilyMemberUserDto;
class FamilyWithMembersResponseDto extends family_response_dto_1.FamilyResponseDto {
    members;
    static fromFamilyAndMembers(family, membersWithUsers) {
        return {
            ...family_response_dto_1.FamilyResponseDto.fromEntity(family),
            members: membersWithUsers.map(({ member, user }) => FamilyMemberUserDto.fromMemberAndUser(member, user)),
        };
    }
}
exports.FamilyWithMembersResponseDto = FamilyWithMembersResponseDto;
//# sourceMappingURL=family-with-members-response.dto.js.map