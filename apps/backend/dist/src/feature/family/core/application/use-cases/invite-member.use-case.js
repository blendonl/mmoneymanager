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
exports.InviteMemberUseCase = void 0;
const common_1 = require("@nestjs/common");
const family_invitation_entity_1 = require("../../domain/entities/family-invitation.entity");
const create_notification_use_case_1 = require("../../../../notification/core/application/use-cases/create-notification.use-case");
const notification_type_vo_1 = require("../../../../notification/core/domain/value-objects/notification-type.vo");
const uuid_1 = require("uuid");
let InviteMemberUseCase = class InviteMemberUseCase {
    familyRepository;
    invitationRepository;
    createNotificationUseCase;
    constructor(familyRepository, invitationRepository, createNotificationUseCase) {
        this.familyRepository = familyRepository;
        this.invitationRepository = invitationRepository;
        this.createNotificationUseCase = createNotificationUseCase;
    }
    async execute(dto, inviterId) {
        const member = await this.familyRepository.findMember(dto.familyId, inviterId);
        if (!member) {
            throw new common_1.ForbiddenException('Not a family member');
        }
        if (!member.canManageMembers()) {
            throw new common_1.ForbiddenException('No permission to invite members');
        }
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 7);
        const invitation = await this.invitationRepository.create({
            id: (0, uuid_1.v4)(),
            familyId: dto.familyId,
            inviterId: inviterId,
            inviteeEmail: dto.inviteeEmail,
            status: family_invitation_entity_1.FamilyInvitationStatus.PENDING,
            expiresAt: expiresAt,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        const family = await this.familyRepository.findById(dto.familyId);
        await this.createNotificationUseCase.execute({
            userId: inviterId,
            type: notification_type_vo_1.NotificationType.FAMILY_INVITATION_SENT,
            data: {
                invitationId: invitation.id,
                familyId: dto.familyId,
                inviteeEmail: dto.inviteeEmail,
                familyName: family?.name,
            },
            deliveryMethods: [notification_type_vo_1.DeliveryMethod.IN_APP],
            priority: notification_type_vo_1.NotificationPriority.LOW,
            familyId: dto.familyId,
            invitationId: invitation.id,
        });
        return invitation;
    }
};
exports.InviteMemberUseCase = InviteMemberUseCase;
exports.InviteMemberUseCase = InviteMemberUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('FamilyRepository')),
    __param(1, (0, common_1.Inject)('FamilyInvitationRepository')),
    __metadata("design:paramtypes", [Object, Object, create_notification_use_case_1.CreateNotificationUseCase])
], InviteMemberUseCase);
//# sourceMappingURL=invite-member.use-case.js.map