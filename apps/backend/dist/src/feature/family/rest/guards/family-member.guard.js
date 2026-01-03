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
exports.FamilyMemberGuard = void 0;
const common_1 = require("@nestjs/common");
let FamilyMemberGuard = class FamilyMemberGuard {
    familyRepository;
    constructor(familyRepository) {
        this.familyRepository = familyRepository;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const familyId = request.params.id || request.params.familyId;
        if (!familyId) {
            throw new common_1.BadRequestException('Family ID required');
        }
        const member = await this.familyRepository.findMember(familyId, user.id);
        if (!member) {
            throw new common_1.ForbiddenException('Not a member of this family');
        }
        request.familyMember = member;
        return true;
    }
};
exports.FamilyMemberGuard = FamilyMemberGuard;
exports.FamilyMemberGuard = FamilyMemberGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('FamilyRepository')),
    __metadata("design:paramtypes", [Object])
], FamilyMemberGuard);
//# sourceMappingURL=family-member.guard.js.map