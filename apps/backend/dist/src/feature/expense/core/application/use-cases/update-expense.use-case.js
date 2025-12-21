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
exports.UpdateExpenseUseCase = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("../../../../store/core");
let UpdateExpenseUseCase = class UpdateExpenseUseCase {
    expenseRepository;
    expenseCategoryRepository;
    storeService;
    constructor(expenseRepository, expenseCategoryRepository, storeService) {
        this.expenseRepository = expenseRepository;
        this.expenseCategoryRepository = expenseCategoryRepository;
        this.storeService = storeService;
    }
    async execute(id, userId, dto) {
        const expense = await this.expenseRepository.findById(id);
        if (!expense) {
            throw new common_1.NotFoundException('Expense not found');
        }
        const isOwner = await this.expenseRepository.verifyOwnership(id, userId);
        if (!isOwner) {
            throw new common_1.ForbiddenException('Access denied');
        }
        await this.validate(dto);
        const updated = await this.expenseRepository.update(id, {
            categoryId: dto.categoryId,
            storeId: dto.storeId,
        });
        return updated;
    }
    async validate(dto) {
        if (dto.categoryId) {
            const category = await this.expenseCategoryRepository.findById(dto.categoryId);
            if (!category) {
                throw new common_1.NotFoundException('Expense category not found');
            }
        }
        if (dto.storeId) {
            const store = await this.storeService.findById(dto.storeId);
            if (!store) {
                throw new common_1.NotFoundException('Store not found');
            }
        }
    }
};
exports.UpdateExpenseUseCase = UpdateExpenseUseCase;
exports.UpdateExpenseUseCase = UpdateExpenseUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ExpenseRepository')),
    __param(1, (0, common_1.Inject)('ExpenseCategoryRepository')),
    __param(2, (0, common_1.Inject)()),
    __metadata("design:paramtypes", [Object, Object, core_1.StoreService])
], UpdateExpenseUseCase);
//# sourceMappingURL=update-expense.use-case.js.map