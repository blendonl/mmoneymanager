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
exports.StoreService = void 0;
const common_1 = require("@nestjs/common");
const create_or_find_store_use_case_1 = require("../use-cases/create-or-find-store.use-case");
const get_store_by_id_use_case_1 = require("../use-cases/get-store-by-id.use-case");
const list_stores_use_case_1 = require("../use-cases/list-stores.use-case");
const pagination_dto_1 = require("../../../../transaction/core/application/dto/pagination.dto");
let StoreService = class StoreService {
    createOrFindStoreUseCase;
    getStoreByIdUseCase;
    listStoresUseCase;
    constructor(createOrFindStoreUseCase, getStoreByIdUseCase, listStoresUseCase) {
        this.createOrFindStoreUseCase = createOrFindStoreUseCase;
        this.getStoreByIdUseCase = getStoreByIdUseCase;
        this.listStoresUseCase = listStoresUseCase;
    }
    async createOrFind(dto) {
        return this.createOrFindStoreUseCase.execute(dto);
    }
    async findById(id) {
        return this.getStoreByIdUseCase.execute(id);
    }
    async findAll(filters, pagination) {
        return this.listStoresUseCase.execute(filters || {}, pagination || new pagination_dto_1.Pagination());
    }
};
exports.StoreService = StoreService;
exports.StoreService = StoreService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [create_or_find_store_use_case_1.CreateOrFindStoreUseCase,
        get_store_by_id_use_case_1.GetStoreByIdUseCase,
        list_stores_use_case_1.ListStoresUseCase])
], StoreService);
//# sourceMappingURL=store.service.js.map