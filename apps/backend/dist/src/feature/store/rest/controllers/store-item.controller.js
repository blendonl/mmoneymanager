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
exports.StoreItemController = void 0;
const common_1 = require("@nestjs/common");
const store_item_service_1 = require("../../core/application/services/store-item.service");
const query_store_item_dto_1 = require("../dto/query-store-item.dto");
const store_item_response_dto_1 = require("../dto/store-item-response.dto");
const pagination_dto_1 = require("../../../transaction/core/application/dto/pagination.dto");
let StoreItemController = class StoreItemController {
    storeItemService;
    constructor(storeItemService) {
        this.storeItemService = storeItemService;
    }
    async findAll(id, query) {
        const pagination = new pagination_dto_1.Pagination(query.page, query.limit);
        const result = await this.storeItemService.findAll({ storeId: id }, pagination);
        return {
            data: store_item_response_dto_1.StoreItemResponseDto.fromEntities(result.data),
            total: result.total,
            page: pagination.page,
            limit: pagination.limit,
        };
    }
};
exports.StoreItemController = StoreItemController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, query_store_item_dto_1.QueryStoreItemDto]),
    __metadata("design:returntype", Promise)
], StoreItemController.prototype, "findAll", null);
exports.StoreItemController = StoreItemController = __decorate([
    (0, common_1.Controller)('stores/:id/items'),
    __metadata("design:paramtypes", [store_item_service_1.StoreItemService])
], StoreItemController);
//# sourceMappingURL=store-item.controller.js.map