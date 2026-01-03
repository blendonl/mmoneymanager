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
exports.StoreItemDiscountController = void 0;
const common_1 = require("@nestjs/common");
const store_item_discount_service_1 = require("../../core/application/services/store-item-discount.service");
const create_store_item_discount_request_dto_1 = require("../dto/create-store-item-discount-request.dto");
const update_store_item_discount_request_dto_1 = require("../dto/update-store-item-discount-request.dto");
const store_item_discount_response_dto_1 = require("../dto/store-item-discount-response.dto");
const create_store_item_discount_dto_1 = require("../../core/application/dto/create-store-item-discount.dto");
const update_store_item_discount_dto_1 = require("../../core/application/dto/update-store-item-discount.dto");
const pagination_dto_1 = require("../../../transaction/core/application/dto/pagination.dto");
let StoreItemDiscountController = class StoreItemDiscountController {
    storeItemDiscountService;
    constructor(storeItemDiscountService) {
        this.storeItemDiscountService = storeItemDiscountService;
    }
    async create(storeItemId, createDto) {
        const coreDto = new create_store_item_discount_dto_1.CreateStoreItemDiscountDto(storeItemId, createDto.discount, createDto.startedAt ? new Date(createDto.startedAt) : undefined);
        const discount = await this.storeItemDiscountService.create(coreDto);
        return store_item_discount_response_dto_1.StoreItemDiscountResponseDto.fromEntity(discount);
    }
    async findAll(storeItemId, page, limit) {
        const pagination = new pagination_dto_1.Pagination(page, limit);
        const result = await this.storeItemDiscountService.findByStoreItemId(storeItemId, pagination);
        return {
            data: store_item_discount_response_dto_1.StoreItemDiscountResponseDto.fromEntities(result.data),
            total: result.total,
            page: pagination.page,
            limit: pagination.limit,
        };
    }
    async getActive(storeItemId) {
        const discount = await this.storeItemDiscountService.findActive(storeItemId);
        return discount ? store_item_discount_response_dto_1.StoreItemDiscountResponseDto.fromEntity(discount) : null;
    }
    async findOne(id) {
        const discount = await this.storeItemDiscountService.findById(id);
        return store_item_discount_response_dto_1.StoreItemDiscountResponseDto.fromEntity(discount);
    }
    async update(id, updateDto) {
        const coreDto = new update_store_item_discount_dto_1.UpdateStoreItemDiscountDto(updateDto.discount, updateDto.endedAt ? new Date(updateDto.endedAt) : undefined);
        const discount = await this.storeItemDiscountService.update(id, coreDto);
        return store_item_discount_response_dto_1.StoreItemDiscountResponseDto.fromEntity(discount);
    }
    async end(id) {
        const discount = await this.storeItemDiscountService.end(id);
        return store_item_discount_response_dto_1.StoreItemDiscountResponseDto.fromEntity(discount);
    }
    async delete(id) {
        await this.storeItemDiscountService.delete(id);
    }
};
exports.StoreItemDiscountController = StoreItemDiscountController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('storeItemId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_store_item_discount_request_dto_1.CreateStoreItemDiscountRequestDto]),
    __metadata("design:returntype", Promise)
], StoreItemDiscountController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('storeItemId')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], StoreItemDiscountController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('active'),
    __param(0, (0, common_1.Param)('storeItemId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoreItemDiscountController.prototype, "getActive", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoreItemDiscountController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_store_item_discount_request_dto_1.UpdateStoreItemDiscountRequestDto]),
    __metadata("design:returntype", Promise)
], StoreItemDiscountController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(':id/end'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoreItemDiscountController.prototype, "end", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoreItemDiscountController.prototype, "delete", null);
exports.StoreItemDiscountController = StoreItemDiscountController = __decorate([
    (0, common_1.Controller)('store-items/:storeItemId/discounts'),
    __metadata("design:paramtypes", [store_item_discount_service_1.StoreItemDiscountService])
], StoreItemDiscountController);
//# sourceMappingURL=store-item-discount.controller.js.map