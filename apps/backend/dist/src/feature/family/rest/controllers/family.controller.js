"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyController = void 0;
const common_1 = require("@nestjs/common");
const create_family_use_case_1 = require("../../core/application/use-cases/create-family.use-case");
const invite_member_use_case_1 = require("../../core/application/use-cases/invite-member.use-case");
const accept_invitation_use_case_1 = require("../../core/application/use-cases/accept-invitation.use-case");
const decline_invitation_use_case_1 = require("../../core/application/use-cases/decline-invitation.use-case");
const leave_family_use_case_1 = require("../../core/application/use-cases/leave-family.use-case");
const get_families_use_case_1 = require("../../core/application/use-cases/get-families.use-case");
const get_pending_invitations_use_case_1 = require("../../core/application/use-cases/get-pending-invitations.use-case");
const get_family_with_members_use_case_1 = require("../../core/application/use-cases/get-family-with-members.use-case");
const remove_family_member_use_case_1 = require("../../core/application/use-cases/remove-family-member.use-case");
const create_family_dto_1 = require("../../core/application/dto/create-family.dto");
const invite_member_dto_1 = require("../../core/application/dto/invite-member.dto");
const create_family_request_dto_1 = require("../dto/create-family-request.dto");
const invite_member_request_dto_1 = require("../dto/invite-member-request.dto");
const family_response_dto_1 = require("../dto/family-response.dto");
const family_with_members_response_dto_1 = require("../dto/family-with-members-response.dto");
const current_user_decorator_1 = require("../../../auth/rest/decorators/current-user.decorator");
const user_entity_1 = require("../../../user/core/domain/entities/user.entity");
let FamilyController = class FamilyController {
    createFamilyUseCase;
    inviteMemberUseCase;
    acceptInvitationUseCase;
    declineInvitationUseCase;
    leaveFamilyUseCase;
    getFamiliesUseCase;
    getPendingInvitationsUseCase;
    getFamilyWithMembersUseCase;
    removeFamilyMemberUseCase;
    constructor(createFamilyUseCase, inviteMemberUseCase, acceptInvitationUseCase, declineInvitationUseCase, leaveFamilyUseCase, getFamiliesUseCase, getPendingInvitationsUseCase, getFamilyWithMembersUseCase, removeFamilyMemberUseCase) {
        this.createFamilyUseCase = createFamilyUseCase;
        this.inviteMemberUseCase = inviteMemberUseCase;
        this.acceptInvitationUseCase = acceptInvitationUseCase;
        this.declineInvitationUseCase = declineInvitationUseCase;
        this.leaveFamilyUseCase = leaveFamilyUseCase;
        this.getFamiliesUseCase = getFamiliesUseCase;
        this.getPendingInvitationsUseCase = getPendingInvitationsUseCase;
        this.getFamilyWithMembersUseCase = getFamilyWithMembersUseCase;
        this.removeFamilyMemberUseCase = removeFamilyMemberUseCase;
    }
    async create(dto, user) {
        const family = await this.createFamilyUseCase.execute(new create_family_dto_1.CreateFamilyDto(dto.name), user.id);
        return family_response_dto_1.FamilyResponseDto.fromEntity(family);
    }
    async findAll(user) {
        const families = await this.getFamiliesUseCase.execute(user.id);
        return family_response_dto_1.FamilyResponseDto.fromEntities(families);
    }
    async findOne(familyId, user) {
        const result = await this.getFamilyWithMembersUseCase.execute(familyId, user.id);
        return family_with_members_response_dto_1.FamilyWithMembersResponseDto.fromFamilyAndMembers(result.family, result.membersWithUsers);
    }
    async inviteMember(familyId, dto, user) {
        const invitation = await this.inviteMemberUseCase.execute(new invite_member_dto_1.InviteMemberDto(familyId, dto.inviteeEmail), user.id);
        return invitation.toJSON();
    }
    async getPendingInvitations(user) {
        const invitations = await this.getPendingInvitationsUseCase.execute(user.email);
        return invitations.map((i) => i.toJSON());
    }
    async acceptInvitation(invitationId, user) {
        const member = await this.acceptInvitationUseCase.execute(invitationId, user.id);
        return member.toJSON();
    }
    async declineInvitation(invitationId, user) {
        await this.declineInvitationUseCase.execute(invitationId, user.id);
    }
    async removeMember(familyId, targetUserId, user) {
        await this.removeFamilyMemberUseCase.execute(familyId, targetUserId, user.id);
    }
    async leaveFamily(familyId, user) {
        await this.leaveFamilyUseCase.execute(familyId, user.id);
    }
};
exports.FamilyController = FamilyController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_family_request_dto_1.CreateFamilyRequestDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], FamilyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], FamilyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], FamilyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/invitations'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, invite_member_request_dto_1.InviteMemberRequestDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], FamilyController.prototype, "inviteMember", null);
__decorate([
    (0, common_1.Get)('invitations/pending'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], FamilyController.prototype, "getPendingInvitations", null);
__decorate([
    (0, common_1.Post)('invitations/:id/accept'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], FamilyController.prototype, "acceptInvitation", null);
__decorate([
    (0, common_1.Post)('invitations/:id/decline'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], FamilyController.prototype, "declineInvitation", null);
__decorate([
    (0, common_1.Delete)(':id/members/:userId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('userId')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], FamilyController.prototype, "removeMember", null);
__decorate([
    (0, common_1.Delete)(':id/members/me'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], FamilyController.prototype, "leaveFamily", null);
exports.FamilyController = FamilyController = __decorate([
    (0, common_1.Controller)('families'),
    __metadata("design:paramtypes", [create_family_use_case_1.CreateFamilyUseCase,
        invite_member_use_case_1.InviteMemberUseCase,
        accept_invitation_use_case_1.AcceptInvitationUseCase,
        decline_invitation_use_case_1.DeclineInvitationUseCase,
        leave_family_use_case_1.LeaveFamilyUseCase,
        get_families_use_case_1.GetFamiliesUseCase,
        get_pending_invitations_use_case_1.GetPendingInvitationsUseCase,
        get_family_with_members_use_case_1.GetFamilyWithMembersUseCase,
        remove_family_member_use_case_1.RemoveFamilyMemberUseCase])
], FamilyController);
//# sourceMappingURL=family.controller.js.map