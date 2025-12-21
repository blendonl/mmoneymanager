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
exports.GetExpenseByIdUseCase = void 0;
const common_1 = require("@nestjs/common");
let GetExpenseByIdUseCase = class GetExpenseByIdUseCase {
    expenseRepository;
    constructor(expenseRepository) {
        this.expenseRepository = expenseRepository;
    }
    async execute(id, userId) {
        const expense = await this.expenseRepository.findById(id);
        if (!expense) {
            throw new common_1.NotFoundException('Expense not found');
        }
        const isOwner = await this.expenseRepository.verifyOwnership(id, userId);
        if (!isOwner) {
            throw new common_1.ForbiddenException('Access denied');
        }
        return expense;
    }
};
exports.GetExpenseByIdUseCase = GetExpenseByIdUseCase;
exports.GetExpenseByIdUseCase = GetExpenseByIdUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ExpenseRepository')),
    __metadata("design:paramtypes", [Object])
], GetExpenseByIdUseCase);
//# sourceMappingURL=get-expense-by-id.use-case.js.map