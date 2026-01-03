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
exports.LeaveFamilyUseCase = void 0;
const common_1 = require("@nestjs/common");
let LeaveFamilyUseCase = class LeaveFamilyUseCase {
    familyRepository;
    constructor(familyRepository) {
        this.familyRepository = familyRepository;
    }
    async execute(familyId, userId) {
        const member = await this.familyRepository.findMember(familyId, userId);
        if (!member) {
            throw new common_1.NotFoundException('Not a family member');
        }
        if (member.isOwner()) {
            const allMembers = await this.familyRepository.findMembers(familyId);
            if (allMembers.length > 1) {
                throw new common_1.BadRequestException('Owner must transfer ownership or remove all members before leaving');
            }
            await this.familyRepository.delete(familyId);
            return;
        }
        await this.familyRepository.removeMember(familyId, userId);
    }
};
exports.LeaveFamilyUseCase = LeaveFamilyUseCase;
exports.LeaveFamilyUseCase = LeaveFamilyUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('FamilyRepository')),
    __metadata("design:paramtypes", [Object])
], LeaveFamilyUseCase);
//# sourceMappingURL=leave-family.use-case.js.map