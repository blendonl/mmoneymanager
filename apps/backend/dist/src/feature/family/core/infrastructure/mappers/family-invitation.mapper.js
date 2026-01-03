"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyInvitationMapper = void 0;
const family_invitation_entity_1 = require("../../domain/entities/family-invitation.entity");
class FamilyInvitationMapper {
    static toDomain(prismaInvitation) {
        return new family_invitation_entity_1.FamilyInvitation({
            id: prismaInvitation.id,
            familyId: prismaInvitation.familyId,
            inviterId: prismaInvitation.inviterId,
            inviteeId: prismaInvitation.inviteeId ?? undefined,
            inviteeEmail: prismaInvitation.inviteeEmail,
            status: this.mapStatusToDomain(prismaInvitation.status),
            expiresAt: prismaInvitation.expiresAt,
            createdAt: prismaInvitation.createdAt,
            updatedAt: prismaInvitation.updatedAt,
        });
    }
    static toPrisma(invitation) {
        return {
            id: invitation.id,
            familyId: invitation.familyId,
            inviterId: invitation.inviterId,
            inviteeId: invitation.inviteeId ?? null,
            inviteeEmail: invitation.inviteeEmail,
            status: this.mapStatusToPrisma(invitation.status),
            expiresAt: invitation.expiresAt,
        };
    }
    static mapStatusToDomain(prismaStatus) {
        const statusMap = {
            PENDING: family_invitation_entity_1.FamilyInvitationStatus.PENDING,
            ACCEPTED: family_invitation_entity_1.FamilyInvitationStatus.ACCEPTED,
            REJECTED: family_invitation_entity_1.FamilyInvitationStatus.REJECTED,
            CANCELLED: family_invitation_entity_1.FamilyInvitationStatus.CANCELLED,
        };
        return statusMap[prismaStatus];
    }
    static mapStatusToPrisma(status) {
        const statusMap = {
            [family_invitation_entity_1.FamilyInvitationStatus.PENDING]: 'PENDING',
            [family_invitation_entity_1.FamilyInvitationStatus.ACCEPTED]: 'ACCEPTED',
            [family_invitation_entity_1.FamilyInvitationStatus.REJECTED]: 'REJECTED',
            [family_invitation_entity_1.FamilyInvitationStatus.CANCELLED]: 'CANCELLED',
        };
        return statusMap[status];
    }
}
exports.FamilyInvitationMapper = FamilyInvitationMapper;
//# sourceMappingURL=family-invitation.mapper.js.map