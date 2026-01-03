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
exports.GetFamilyWithMembersUseCase = void 0;
const common_1 = require("@nestjs/common");
let GetFamilyWithMembersUseCase = class GetFamilyWithMembersUseCase {
    familyRepository;
    constructor(familyRepository) {
        this.familyRepository = familyRepository;
    }
    async execute(familyId, userId) {
        const result = await this.familyRepository.findByIdWithMembers(familyId);
        if (!result) {
            throw new common_1.NotFoundException(`Family with ID ${familyId} not found`);
        }
        const isUserMember = result.membersWithUsers.some(({ member }) => member.userId === userId);
        if (!isUserMember) {
            throw new common_1.ForbiddenException('You must be a member of this family to view its details');
        }
        return result;
    }
};
exports.GetFamilyWithMembersUseCase = GetFamilyWithMembersUseCase;
exports.GetFamilyWithMembersUseCase = GetFamilyWithMembersUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('FamilyRepository')),
    __metadata("design:paramtypes", [Object])
], GetFamilyWithMembersUseCase);
//# sourceMappingURL=get-family-with-members.use-case.js.map