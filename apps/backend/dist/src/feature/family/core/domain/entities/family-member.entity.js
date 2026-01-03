"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyMember = exports.FamilyMemberRole = void 0;
var FamilyMemberRole;
(function (FamilyMemberRole) {
    FamilyMemberRole["OWNER"] = "OWNER";
    FamilyMemberRole["ADMIN"] = "ADMIN";
    FamilyMemberRole["MEMBER"] = "MEMBER";
})(FamilyMemberRole || (exports.FamilyMemberRole = FamilyMemberRole = {}));
class FamilyMember {
    props;
    constructor(props) {
        this.validate(props);
        this.props = props;
    }
    validate(props) {
        if (!props.id || props.id.trim() === '') {
            throw new Error('FamilyMember ID is required');
        }
        if (!props.familyId || props.familyId.trim() === '') {
            throw new Error('Family ID is required');
        }
        if (!props.userId || props.userId.trim() === '') {
            throw new Error('User ID is required');
        }
        if (!props.role) {
            throw new Error('Role is required');
        }
        if (!props.joinedAt) {
            throw new Error('Joined date is required');
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
    get userId() {
        return this.props.userId;
    }
    get role() {
        return this.props.role;
    }
    get balance() {
        return this.props.balance;
    }
    get joinedAt() {
        return this.props.joinedAt;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    isOwner() {
        return this.props.role === FamilyMemberRole.OWNER;
    }
    isAdmin() {
        return this.props.role === FamilyMemberRole.ADMIN;
    }
    canManageMembers() {
        return this.isOwner() || this.isAdmin();
    }
    toJSON() {
        return {
            id: this.props.id,
            familyId: this.props.familyId,
            userId: this.props.userId,
            role: this.props.role,
            balance: this.props.balance,
            joinedAt: this.props.joinedAt,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
        };
    }
}
exports.FamilyMember = FamilyMember;
//# sourceMappingURL=family-member.entity.js.map