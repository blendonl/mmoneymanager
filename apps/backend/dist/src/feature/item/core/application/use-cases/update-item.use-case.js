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
exports.UpdateItemUseCase = void 0;
const common_1 = require("@nestjs/common");
let UpdateItemUseCase = class UpdateItemUseCase {
    itemRepository;
    categoryRepository;
    constructor(itemRepository, categoryRepository) {
        this.itemRepository = itemRepository;
        this.categoryRepository = categoryRepository;
    }
    async execute(id, dto) {
        const existingItem = await this.itemRepository.findById(id);
        if (!existingItem) {
            throw new common_1.NotFoundException(`Item with ID ${id} not found`);
        }
        await this.validate(dto);
        const item = await this.itemRepository.update(id, {
            name: dto.name,
            categoryId: dto.categoryId,
        });
        return item;
    }
    async validate(dto) {
        if (dto.name !== undefined && dto.name.trim() === '') {
            throw new common_1.BadRequestException('Item name cannot be empty');
        }
        if (dto.categoryId) {
            const category = await this.categoryRepository.findById(dto.categoryId);
            if (!category) {
                throw new common_1.BadRequestException('Category not found');
            }
        }
    }
};
exports.UpdateItemUseCase = UpdateItemUseCase;
exports.UpdateItemUseCase = UpdateItemUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ItemRepository')),
    __param(1, (0, common_1.Inject)('StoreItemCategoryRepository')),
    __metadata("design:paramtypes", [Object, Object])
], UpdateItemUseCase);
//# sourceMappingURL=update-item.use-case.js.map