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
exports.StoreController = void 0;
const common_1 = require("@nestjs/common");
const store_service_1 = require("../../core/application/services/store.service");
const store_response_dto_1 = require("../dto/store-response.dto");
const query_store_dto_1 = require("../dto/query-store.dto");
const pagination_dto_1 = require("../../../transaction/core/application/dto/pagination.dto");
const core_1 = require("../../core");
let StoreController = class StoreController {
    storeService;
    constructor(storeService) {
        this.storeService = storeService;
    }
    async create(query) {
        const result = await this.storeService.createOrFind({
            name: query.name,
            location: query.location,
        });
        return store_response_dto_1.StoreResponseDto.fromEntity(result);
    }
    async findAll(query) {
        const pagination = new pagination_dto_1.Pagination(query.page, query.limit);
        const result = await this.storeService.findAll({ search: query.search }, pagination);
        return {
            data: store_response_dto_1.StoreResponseDto.fromEntities(result.data),
            total: result.total,
            page: pagination.page,
            limit: pagination.limit,
        };
    }
    async findOne(id) {
        const store = await this.storeService.findById(id);
        return store_response_dto_1.StoreResponseDto.fromEntity(store);
    }
};
exports.StoreController = StoreController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.CreateStoreDto]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_store_dto_1.QueryStoreDto]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "findOne", null);
exports.StoreController = StoreController = __decorate([
    (0, common_1.Controller)('stores'),
    __metadata("design:paramtypes", [store_service_1.StoreService])
], StoreController);
//# sourceMappingURL=store.controller.js.map