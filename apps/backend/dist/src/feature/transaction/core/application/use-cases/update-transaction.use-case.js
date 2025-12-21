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
exports.UpdateTransactionUseCase = void 0;
const common_1 = require("@nestjs/common");
const prismaNamespace_1 = require("../../../../../../prisma/generated/prisma/internal/prismaNamespace");
let UpdateTransactionUseCase = class UpdateTransactionUseCase {
    transactionRepository;
    constructor(transactionRepository) {
        this.transactionRepository = transactionRepository;
    }
    async execute(id, dto) {
        const existingTransaction = await this.transactionRepository.findById(id);
        if (!existingTransaction) {
            throw new common_1.NotFoundException(`Transaction with ID ${id} not found`);
        }
        this.validateUpdateData(dto);
        const updateData = {};
        if (dto.type !== undefined) {
            updateData.type = dto.type;
        }
        if (dto.value !== undefined) {
            updateData.value = new prismaNamespace_1.Decimal(dto.value);
        }
        return this.transactionRepository.update(id, updateData);
    }
    validateUpdateData(dto) {
        if (dto.value !== undefined && dto.value <= 0) {
            throw new common_1.BadRequestException('Transaction value must be positive');
        }
    }
};
exports.UpdateTransactionUseCase = UpdateTransactionUseCase;
exports.UpdateTransactionUseCase = UpdateTransactionUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('TransactionRepository')),
    __metadata("design:paramtypes", [Object])
], UpdateTransactionUseCase);
//# sourceMappingURL=update-transaction.use-case.js.map