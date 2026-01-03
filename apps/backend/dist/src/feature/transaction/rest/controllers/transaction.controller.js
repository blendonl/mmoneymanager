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
exports.TransactionController = void 0;
const common_1 = require("@nestjs/common");
const transaction_service_1 = require("../../core/application/services/transaction.service");
const create_transaction_request_dto_1 = require("../dto/create-transaction-request.dto");
const update_transaction_request_dto_1 = require("../dto/update-transaction-request.dto");
const query_transaction_dto_1 = require("../dto/query-transaction.dto");
const transaction_response_dto_1 = require("../dto/transaction-response.dto");
const create_transaction_dto_1 = require("../../core/application/dto/create-transaction.dto");
const update_transaction_dto_1 = require("../../core/application/dto/update-transaction.dto");
const transaction_filters_dto_1 = require("../../core/application/dto/transaction-filters.dto");
const pagination_dto_1 = require("../../core/application/dto/pagination.dto");
let TransactionController = class TransactionController {
    transactionService;
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    async create(createDto) {
        const coreDto = new create_transaction_dto_1.CreateTransactionDto(createDto.userId, createDto.type, createDto.value);
        const transaction = await this.transactionService.create(coreDto);
        return transaction_response_dto_1.TransactionResponseDto.fromEntity(transaction);
    }
    async findAll(query) {
        const filters = new transaction_filters_dto_1.TransactionFilters({
            userId: query.userId,
            type: query.type,
            familyId: query.familyId,
            scope: query.scope,
            dateFrom: query.dateFrom ? new Date(query.dateFrom) : undefined,
            dateTo: query.dateTo ? new Date(query.dateTo) : undefined,
            valueMin: query.valueMin,
            valueMax: query.valueMax,
        });
        const pagination = new pagination_dto_1.Pagination(query.page, query.limit);
        const result = await this.transactionService.findAll(filters, pagination);
        return {
            data: transaction_response_dto_1.TransactionResponseDto.fromEntities(result.data),
            total: result.total,
            page: pagination.page,
            limit: pagination.limit,
        };
    }
    async getStatistics(userId) {
        const stats = await this.transactionService.getStatistics(userId);
        return {
            totalIncome: stats.totalIncome,
            totalExpense: stats.totalExpense,
            balance: stats.balance,
            count: stats.count,
        };
    }
    async findOne(id) {
        const transaction = await this.transactionService.findById(id);
        return transaction_response_dto_1.TransactionResponseDto.fromEntity(transaction);
    }
    async update(id, updateDto) {
        const coreDto = new update_transaction_dto_1.UpdateTransactionDto({
            type: updateDto.type,
            value: updateDto.value,
        });
        const transaction = await this.transactionService.update(id, coreDto);
        return transaction_response_dto_1.TransactionResponseDto.fromEntity(transaction);
    }
    async remove(id) {
        await this.transactionService.delete(id);
    }
};
exports.TransactionController = TransactionController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_transaction_request_dto_1.CreateTransactionRequestDto]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_transaction_dto_1.QueryTransactionDto]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('statistics'),
    __param(0, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getStatistics", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_transaction_request_dto_1.UpdateTransactionRequestDto]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "remove", null);
exports.TransactionController = TransactionController = __decorate([
    (0, common_1.Controller)('transactions'),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService])
], TransactionController);
//# sourceMappingURL=transaction.controller.js.map