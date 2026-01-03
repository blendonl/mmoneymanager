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
exports.ItemService = void 0;
const common_1 = require("@nestjs/common");
const create_item_use_case_1 = require("../use-cases/create-item.use-case");
const get_item_by_id_use_case_1 = require("../use-cases/get-item-by-id.use-case");
const list_items_use_case_1 = require("../use-cases/list-items.use-case");
const find_item_by_name_use_case_1 = require("../use-cases/find-item-by-name.use-case");
const update_item_use_case_1 = require("../use-cases/update-item.use-case");
const delete_item_use_case_1 = require("../use-cases/delete-item.use-case");
let ItemService = class ItemService {
    createItemUseCase;
    getItemByIdUseCase;
    listItemsUseCase;
    findItemByNameUseCase;
    updateItemUseCase;
    deleteItemUseCase;
    constructor(createItemUseCase, getItemByIdUseCase, listItemsUseCase, findItemByNameUseCase, updateItemUseCase, deleteItemUseCase) {
        this.createItemUseCase = createItemUseCase;
        this.getItemByIdUseCase = getItemByIdUseCase;
        this.listItemsUseCase = listItemsUseCase;
        this.findItemByNameUseCase = findItemByNameUseCase;
        this.updateItemUseCase = updateItemUseCase;
        this.deleteItemUseCase = deleteItemUseCase;
    }
    async create(dto) {
        return this.createItemUseCase.execute(dto);
    }
    async findById(id) {
        return this.getItemByIdUseCase.execute(id);
    }
    async findAll(categoryId, pagination) {
        return this.listItemsUseCase.execute(categoryId, pagination);
    }
    async findByName(name) {
        return this.findItemByNameUseCase.execute(name);
    }
    async update(id, dto) {
        return this.updateItemUseCase.execute(id, dto);
    }
    async delete(id) {
        return this.deleteItemUseCase.execute(id);
    }
};
exports.ItemService = ItemService;
exports.ItemService = ItemService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [create_item_use_case_1.CreateItemUseCase,
        get_item_by_id_use_case_1.GetItemByIdUseCase,
        list_items_use_case_1.ListItemsUseCase,
        find_item_by_name_use_case_1.FindItemByNameUseCase,
        update_item_use_case_1.UpdateItemUseCase,
        delete_item_use_case_1.DeleteItemUseCase])
], ItemService);
//# sourceMappingURL=item.service.js.map