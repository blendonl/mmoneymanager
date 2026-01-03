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
exports.StoreItemDiscountService = void 0;
const common_1 = require("@nestjs/common");
const create_store_item_discount_use_case_1 = require("../use-cases/create-store-item-discount.use-case");
const get_store_item_discount_by_id_use_case_1 = require("../use-cases/get-store-item-discount-by-id.use-case");
const list_store_item_discounts_use_case_1 = require("../use-cases/list-store-item-discounts.use-case");
const get_active_discount_use_case_1 = require("../use-cases/get-active-discount.use-case");
const update_store_item_discount_use_case_1 = require("../use-cases/update-store-item-discount.use-case");
const end_discount_use_case_1 = require("../use-cases/end-discount.use-case");
const delete_store_item_discount_use_case_1 = require("../use-cases/delete-store-item-discount.use-case");
let StoreItemDiscountService = class StoreItemDiscountService {
    createStoreItemDiscountUseCase;
    getStoreItemDiscountByIdUseCase;
    listStoreItemDiscountsUseCase;
    getActiveDiscountUseCase;
    updateStoreItemDiscountUseCase;
    endDiscountUseCase;
    deleteStoreItemDiscountUseCase;
    constructor(createStoreItemDiscountUseCase, getStoreItemDiscountByIdUseCase, listStoreItemDiscountsUseCase, getActiveDiscountUseCase, updateStoreItemDiscountUseCase, endDiscountUseCase, deleteStoreItemDiscountUseCase) {
        this.createStoreItemDiscountUseCase = createStoreItemDiscountUseCase;
        this.getStoreItemDiscountByIdUseCase = getStoreItemDiscountByIdUseCase;
        this.listStoreItemDiscountsUseCase = listStoreItemDiscountsUseCase;
        this.getActiveDiscountUseCase = getActiveDiscountUseCase;
        this.updateStoreItemDiscountUseCase = updateStoreItemDiscountUseCase;
        this.endDiscountUseCase = endDiscountUseCase;
        this.deleteStoreItemDiscountUseCase = deleteStoreItemDiscountUseCase;
    }
    async create(dto) {
        return this.createStoreItemDiscountUseCase.execute(dto);
    }
    async findById(id) {
        return this.getStoreItemDiscountByIdUseCase.execute(id);
    }
    async findByStoreItemId(storeItemId, pagination) {
        return this.listStoreItemDiscountsUseCase.execute(storeItemId, pagination);
    }
    async findActive(storeItemId) {
        return this.getActiveDiscountUseCase.execute(storeItemId);
    }
    async update(id, dto) {
        return this.updateStoreItemDiscountUseCase.execute(id, dto);
    }
    async end(id) {
        return this.endDiscountUseCase.execute(id);
    }
    async delete(id) {
        return this.deleteStoreItemDiscountUseCase.execute(id);
    }
};
exports.StoreItemDiscountService = StoreItemDiscountService;
exports.StoreItemDiscountService = StoreItemDiscountService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [create_store_item_discount_use_case_1.CreateStoreItemDiscountUseCase,
        get_store_item_discount_by_id_use_case_1.GetStoreItemDiscountByIdUseCase,
        list_store_item_discounts_use_case_1.ListStoreItemDiscountsUseCase,
        get_active_discount_use_case_1.GetActiveDiscountUseCase,
        update_store_item_discount_use_case_1.UpdateStoreItemDiscountUseCase,
        end_discount_use_case_1.EndDiscountUseCase,
        delete_store_item_discount_use_case_1.DeleteStoreItemDiscountUseCase])
], StoreItemDiscountService);
//# sourceMappingURL=store-item-discount.service.js.map