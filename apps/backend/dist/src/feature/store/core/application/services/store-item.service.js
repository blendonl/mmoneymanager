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
exports.StoreItemService = void 0;
const common_1 = require("@nestjs/common");
const create_or_find_store_item_use_case_1 = require("../use-cases/create-or-find-store-item.use-case");
const get_store_item_by_id_use_case_1 = require("../use-cases/get-store-item-by-id.use-case");
const list_store_items_use_case_1 = require("../use-cases/list-store-items.use-case");
let StoreItemService = class StoreItemService {
    createOrFindStoreItemUseCase;
    getStoreItemByIdUseCase;
    listStoreItemsUseCase;
    constructor(createOrFindStoreItemUseCase, getStoreItemByIdUseCase, listStoreItemsUseCase) {
        this.createOrFindStoreItemUseCase = createOrFindStoreItemUseCase;
        this.getStoreItemByIdUseCase = getStoreItemByIdUseCase;
        this.listStoreItemsUseCase = listStoreItemsUseCase;
    }
    async createOrFind(dto) {
        return this.createOrFindStoreItemUseCase.execute(dto);
    }
    async findById(id) {
        return this.getStoreItemByIdUseCase.execute(id);
    }
    async findAll(filters, pagination) {
        return this.listStoreItemsUseCase.execute(filters, pagination);
    }
};
exports.StoreItemService = StoreItemService;
exports.StoreItemService = StoreItemService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [create_or_find_store_item_use_case_1.CreateOrFindStoreItemUseCase,
        get_store_item_by_id_use_case_1.GetStoreItemByIdUseCase,
        list_store_items_use_case_1.ListStoreItemsUseCase])
], StoreItemService);
//# sourceMappingURL=store-item.service.js.map