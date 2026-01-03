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
exports.ItemController = void 0;
const common_1 = require("@nestjs/common");
const item_service_1 = require("../../core/application/services/item.service");
const create_item_request_dto_1 = require("../dto/create-item-request.dto");
const update_item_request_dto_1 = require("../dto/update-item-request.dto");
const item_response_dto_1 = require("../dto/item-response.dto");
const create_item_dto_1 = require("../../core/application/dto/create-item.dto");
const update_item_dto_1 = require("../../core/application/dto/update-item.dto");
const pagination_dto_1 = require("../../../transaction/core/application/dto/pagination.dto");
let ItemController = class ItemController {
    itemService;
    constructor(itemService) {
        this.itemService = itemService;
    }
    async create(createDto) {
        const coreDto = new create_item_dto_1.CreateItemDto(createDto.name, createDto.categoryId);
        const item = await this.itemService.create(coreDto);
        return item_response_dto_1.ItemResponseDto.fromEntity(item);
    }
    async findAll(categoryId, page, limit) {
        const pagination = new pagination_dto_1.Pagination(page, limit);
        const result = await this.itemService.findAll(categoryId, pagination);
        return {
            data: item_response_dto_1.ItemResponseDto.fromEntities(result.data),
            total: result.total,
            page: pagination.page,
            limit: pagination.limit,
        };
    }
    async search(name) {
        const item = await this.itemService.findByName(name);
        return item ? item_response_dto_1.ItemResponseDto.fromEntity(item) : null;
    }
    async findOne(id) {
        const item = await this.itemService.findById(id);
        return item_response_dto_1.ItemResponseDto.fromEntity(item);
    }
    async update(id, updateDto) {
        const coreDto = new update_item_dto_1.UpdateItemDto(updateDto.name, updateDto.categoryId);
        const item = await this.itemService.update(id, coreDto);
        return item_response_dto_1.ItemResponseDto.fromEntity(item);
    }
    async delete(id) {
        await this.itemService.delete(id);
    }
};
exports.ItemController = ItemController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_item_request_dto_1.CreateItemRequestDto]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('categoryId')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "search", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_item_request_dto_1.UpdateItemRequestDto]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "delete", null);
exports.ItemController = ItemController = __decorate([
    (0, common_1.Controller)('items'),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], ItemController);
//# sourceMappingURL=item.controller.js.map