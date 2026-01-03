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
exports.RemoveFamilyMemberUseCase = void 0;
const common_1 = require("@nestjs/common");
let RemoveFamilyMemberUseCase = class RemoveFamilyMemberUseCase {
    familyRepository;
    constructor(familyRepository) {
        this.familyRepository = familyRepository;
    }
    async execute(familyId, targetUserId, requestingUserId) {
        const requestingMember = await this.familyRepository.findMember(familyId, requestingUserId);
        if (!requestingMember) {
            throw new common_1.NotFoundException('You are not a member of this family');
        }
        if (!requestingMember.canManageMembers()) {
            throw new common_1.ForbiddenException('Only owners and admins can remove family members');
        }
        if (targetUserId === requestingUserId) {
            throw new common_1.BadRequestException('You cannot remove yourself. Use the leave family endpoint instead.');
        }
        const targetMember = await this.familyRepository.findMember(familyId, targetUserId);
        if (!targetMember) {
            throw new common_1.NotFoundException(`User with ID ${targetUserId} is not a member of this family`);
        }
        if (targetMember.isOwner()) {
            throw new common_1.BadRequestException('The family owner cannot be removed');
        }
        await this.familyRepository.removeMember(familyId, targetUserId);
        const newBalance = await this.familyRepository.calculateFamilyBalance(familyId);
        await this.familyRepository.updateFamilyBalance(familyId, newBalance);
    }
};
exports.RemoveFamilyMemberUseCase = RemoveFamilyMemberUseCase;
exports.RemoveFamilyMemberUseCase = RemoveFamilyMemberUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('FamilyRepository')),
    __metadata("design:paramtypes", [Object])
], RemoveFamilyMemberUseCase);
//# sourceMappingURL=remove-family-member.use-case.js.map