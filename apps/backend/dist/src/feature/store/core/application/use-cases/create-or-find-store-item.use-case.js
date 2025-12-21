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
exports.CreateOrFindStoreItemUseCase = void 0;
const common_1 = require("@nestjs/common");
const prismaNamespace_1 = require("../../../../../../prisma/generated/prisma/internal/prismaNamespace");
let CreateOrFindStoreItemUseCase = class CreateOrFindStoreItemUseCase {
    storeItemRepository;
    constructor(storeItemRepository) {
        this.storeItemRepository = storeItemRepository;
    }
    async execute(dto) {
        this.validate(dto);
        const existingItem = await this.storeItemRepository.findByStoreAndName(dto.storeId, dto.name);
        if (existingItem) {
            const newPrice = new prismaNamespace_1.Decimal(dto.price);
            if (existingItem.price.equals(newPrice)) {
                return existingItem;
            }
        }
        const item = await this.storeItemRepository.create({
            storeId: dto.storeId,
            name: dto.name,
            price: new prismaNamespace_1.Decimal(dto.price),
            isDiscounted: dto.isDiscounted ?? false,
        });
        return item;
    }
    validate(dto) {
        if (!dto.storeId || dto.storeId.trim() === '') {
            throw new common_1.BadRequestException('Store ID is required');
        }
        if (!dto.name || dto.name.trim() === '') {
            throw new common_1.BadRequestException('Item name is required');
        }
        if (dto.price < 0) {
            throw new common_1.BadRequestException('Item price must be non-negative');
        }
    }
};
exports.CreateOrFindStoreItemUseCase = CreateOrFindStoreItemUseCase;
exports.CreateOrFindStoreItemUseCase = CreateOrFindStoreItemUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('StoreItemRepository')),
    __metadata("design:paramtypes", [Object])
], CreateOrFindStoreItemUseCase);
//# sourceMappingURL=create-or-find-store-item.use-case.js.map