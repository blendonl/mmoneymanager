"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyInvitation = exports.FamilyInvitationStatus = void 0;
var FamilyInvitationStatus;
(function (FamilyInvitationStatus) {
    FamilyInvitationStatus["PENDING"] = "PENDING";
    FamilyInvitationStatus["ACCEPTED"] = "ACCEPTED";
    FamilyInvitationStatus["REJECTED"] = "REJECTED";
    FamilyInvitationStatus["CANCELLED"] = "CANCELLED";
})(FamilyInvitationStatus || (exports.FamilyInvitationStatus = FamilyInvitationStatus = {}));
class FamilyInvitation {
    props;
    constructor(props) {
        this.validate(props);
        this.props = props;
    }
    validate(props) {
        if (!props.id || props.id.trim() === '') {
            throw new Error('Invitation ID is required');
        }
        if (!props.familyId || props.familyId.trim() === '') {
            throw new Error('Family ID is required');
        }
        if (!props.inviterId || props.inviterId.trim() === '') {
            throw new Error('Inviter ID is required');
        }
        if (!props.inviteeEmail || !props.inviteeEmail.includes('@')) {
            throw new Error('Valid invitee email is required');
        }
        if (!props.status) {
            throw new Error('Status is required');
        }
        if (!props.expiresAt) {
            throw new Error('Expiration date is required');
        }
        if (!props.createdAt) {
            throw new Error('Created date is required');
        }
        if (!props.updatedAt) {
            throw new Error('Updated date is required');
        }
    }
    get id() {
        return this.props.id;
    }
    get familyId() {
        return this.props.familyId;
    }
    get inviterId() {
        return this.props.inviterId;
    }
    get inviteeId() {
        return this.props.inviteeId;
    }
    get inviteeEmail() {
        return this.props.inviteeEmail;
    }
    get status() {
        return this.props.status;
    }
    get expiresAt() {
        return this.props.expiresAt;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    isPending() {
        return this.props.status === FamilyInvitationStatus.PENDING;
    }
    isExpired() {
        return new Date() > this.props.expiresAt;
    }
    canBeAccepted() {
        return this.isPending() && !this.isExpired();
    }
    canBeDeclined() {
        return this.isPending() && !this.isExpired();
    }
    toJSON() {
        return {
            id: this.props.id,
            familyId: this.props.familyId,
            inviterId: this.props.inviterId,
            inviteeId: this.props.inviteeId,
            inviteeEmail: this.props.inviteeEmail,
            status: this.props.status,
            expiresAt: this.props.expiresAt,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
        };
    }
}
exports.FamilyInvitation = FamilyInvitation;
//# sourceMappingURL=family-invitation.entity.js.map