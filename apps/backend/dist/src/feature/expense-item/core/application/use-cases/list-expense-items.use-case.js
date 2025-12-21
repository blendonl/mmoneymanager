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
exports.ListExpenseItemsUseCase = void 0;
const common_1 = require("@nestjs/common");
let ListExpenseItemsUseCase = class ListExpenseItemsUseCase {
    expenseItemRepository;
    constructor(expenseItemRepository) {
        this.expenseItemRepository = expenseItemRepository;
    }
    async execute(expenseId, pagination) {
        if (expenseId) {
            const items = await this.expenseItemRepository.findByExpenseId(expenseId);
            return {
                data: items,
                total: items.length,
            };
        }
        return this.expenseItemRepository.findAll(pagination);
    }
};
exports.ListExpenseItemsUseCase = ListExpenseItemsUseCase;
exports.ListExpenseItemsUseCase = ListExpenseItemsUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ExpenseItemRepository')),
    __metadata("design:paramtypes", [Object])
], ListExpenseItemsUseCase);
//# sourceMappingURL=list-expense-items.use-case.js.map