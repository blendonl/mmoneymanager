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
exports.CreateTransactionUseCase = void 0;
const common_1 = require("@nestjs/common");
const prismaNamespace_1 = require("../../../../../../prisma/generated/prisma/internal/prismaNamespace");
let CreateTransactionUseCase = class CreateTransactionUseCase {
    transactionRepository;
    constructor(transactionRepository) {
        this.transactionRepository = transactionRepository;
    }
    async execute(dto) {
        this.validateTransactionData(dto);
        const transaction = await this.transactionRepository.create({
            userId: dto.userId,
            type: dto.type,
            value: new prismaNamespace_1.Decimal(dto.value),
        });
        return transaction;
    }
    validateTransactionData(dto) {
        if (dto.value <= 0) {
            throw new common_1.BadRequestException('Transaction value must be positive');
        }
        if (!dto.userId || dto.userId.trim() === '') {
            throw new common_1.BadRequestException('User ID is required');
        }
        if (!dto.type) {
            throw new common_1.BadRequestException('Transaction type is required');
        }
    }
};
exports.CreateTransactionUseCase = CreateTransactionUseCase;
exports.CreateTransactionUseCase = CreateTransactionUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('TransactionRepository')),
    __metadata("design:paramtypes", [Object])
], CreateTransactionUseCase);
//# sourceMappingURL=create-transaction.use-case.js.map