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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const create_transaction_use_case_1 = require("../use-cases/create-transaction.use-case");
const get_transaction_by_id_use_case_1 = require("../use-cases/get-transaction-by-id.use-case");
const list_transactions_use_case_1 = require("../use-cases/list-transactions.use-case");
const update_transaction_use_case_1 = require("../use-cases/update-transaction.use-case");
const delete_transaction_use_case_1 = require("../use-cases/delete-transaction.use-case");
const get_transaction_statistics_use_case_1 = require("../use-cases/get-transaction-statistics.use-case");
let TransactionService = class TransactionService {
    createTransactionUseCase;
    getTransactionByIdUseCase;
    listTransactionsUseCase;
    updateTransactionUseCase;
    deleteTransactionUseCase;
    getTransactionStatisticsUseCase;
    constructor(createTransactionUseCase, getTransactionByIdUseCase, listTransactionsUseCase, updateTransactionUseCase, deleteTransactionUseCase, getTransactionStatisticsUseCase) {
        this.createTransactionUseCase = createTransactionUseCase;
        this.getTransactionByIdUseCase = getTransactionByIdUseCase;
        this.listTransactionsUseCase = listTransactionsUseCase;
        this.updateTransactionUseCase = updateTransactionUseCase;
        this.deleteTransactionUseCase = deleteTransactionUseCase;
        this.getTransactionStatisticsUseCase = getTransactionStatisticsUseCase;
    }
    async create(dto) {
        return this.createTransactionUseCase.execute(dto);
    }
    async findById(id) {
        return this.getTransactionByIdUseCase.execute(id);
    }
    async findAll(filters, pagination) {
        return this.listTransactionsUseCase.execute(filters, pagination);
    }
    async update(id, dto) {
        return this.updateTransactionUseCase.execute(id, dto);
    }
    async delete(id) {
        return this.deleteTransactionUseCase.execute(id);
    }
    async getStatistics(userId, filters) {
        return this.getTransactionStatisticsUseCase.execute(userId, filters);
    }
};
exports.TransactionService = TransactionService;
exports.TransactionService = TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [create_transaction_use_case_1.CreateTransactionUseCase,
        get_transaction_by_id_use_case_1.GetTransactionByIdUseCase,
        list_transactions_use_case_1.ListTransactionsUseCase,
        update_transaction_use_case_1.UpdateTransactionUseCase,
        delete_transaction_use_case_1.DeleteTransactionUseCase,
        get_transaction_statistics_use_case_1.GetTransactionStatisticsUseCase])
], TransactionService);
//# sourceMappingURL=transaction.service.js.map