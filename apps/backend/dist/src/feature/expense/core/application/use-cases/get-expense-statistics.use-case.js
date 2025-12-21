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
exports.GetExpenseStatisticsUseCase = void 0;
const common_1 = require("@nestjs/common");
const expense_statistics_dto_1 = require("../dto/expense-statistics.dto");
let GetExpenseStatisticsUseCase = class GetExpenseStatisticsUseCase {
    expenseRepository;
    constructor(expenseRepository) {
        this.expenseRepository = expenseRepository;
    }
    async execute(userId, filters) {
        const stats = await this.expenseRepository.getStatistics(userId, filters);
        return new expense_statistics_dto_1.ExpenseStatistics(stats.totalExpenses, stats.expenseCount, stats.averageExpense, stats.expensesByCategory, stats.expensesByStore);
    }
};
exports.GetExpenseStatisticsUseCase = GetExpenseStatisticsUseCase;
exports.GetExpenseStatisticsUseCase = GetExpenseStatisticsUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ExpenseRepository')),
    __metadata("design:paramtypes", [Object])
], GetExpenseStatisticsUseCase);
//# sourceMappingURL=get-expense-statistics.use-case.js.map