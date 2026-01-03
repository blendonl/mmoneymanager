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
exports.QueryTransactionDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const transaction_type_vo_1 = require("../../core/domain/value-objects/transaction-type.vo");
const transaction_entity_1 = require("../../core/domain/entities/transaction.entity");
class QueryTransactionDto {
    userId;
    type;
    familyId;
    scope;
    dateFrom;
    dateTo;
    valueMin;
    valueMax;
    page = 1;
    limit = 10;
}
exports.QueryTransactionDto = QueryTransactionDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], QueryTransactionDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(transaction_type_vo_1.TransactionType),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], QueryTransactionDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], QueryTransactionDto.prototype, "familyId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(transaction_entity_1.TransactionScope),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], QueryTransactionDto.prototype, "scope", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], QueryTransactionDto.prototype, "dateFrom", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], QueryTransactionDto.prototype, "dateTo", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (value ? Number(value) : undefined)),
    __metadata("design:type", Number)
], QueryTransactionDto.prototype, "valueMin", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (value ? Number(value) : undefined)),
    __metadata("design:type", Number)
], QueryTransactionDto.prototype, "valueMax", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (value ? Number(value) : 1)),
    __metadata("design:type", Number)
], QueryTransactionDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (value ? Number(value) : 10)),
    __metadata("design:type", Number)
], QueryTransactionDto.prototype, "limit", void 0);
//# sourceMappingURL=query-transaction.dto.js.map