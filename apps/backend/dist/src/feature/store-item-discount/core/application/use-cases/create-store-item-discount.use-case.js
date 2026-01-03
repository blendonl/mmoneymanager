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
exports.CreateStoreItemDiscountUseCase = void 0;
const common_1 = require("@nestjs/common");
const prismaNamespace_1 = require("../../../../../../prisma/generated/prisma/internal/prismaNamespace");
let CreateStoreItemDiscountUseCase = class CreateStoreItemDiscountUseCase {
    discountRepository;
    storeItemRepository;
    constructor(discountRepository, storeItemRepository) {
        this.discountRepository = discountRepository;
        this.storeItemRepository = storeItemRepository;
    }
    async execute(dto) {
        await this.validate(dto);
        const activeDiscount = await this.discountRepository.findActiveByStoreItemId(dto.storeItemId);
        if (activeDiscount) {
            await this.discountRepository.endDiscount(activeDiscount.id);
        }
        const discount = await this.discountRepository.create({
            storeItemId: dto.storeItemId,
            discount: new prismaNamespace_1.Decimal(dto.discount),
            startedAt: dto.startedAt ?? new Date(),
        });
        await this.storeItemRepository.update(dto.storeItemId, {
            isDiscounted: true,
        });
        return discount;
    }
    async validate(dto) {
        if (!dto.storeItemId || dto.storeItemId.trim() === '') {
            throw new common_1.BadRequestException('Store item ID is required');
        }
        if (dto.discount <= 0) {
            throw new common_1.BadRequestException('Discount must be greater than 0');
        }
        const storeItem = await this.storeItemRepository.findById(dto.storeItemId);
        if (!storeItem) {
            throw new common_1.BadRequestException('Store item not found');
        }
        if (dto.discount > storeItem.price.toNumber()) {
            throw new common_1.BadRequestException('Discount amount cannot be greater than item price');
        }
    }
};
exports.CreateStoreItemDiscountUseCase = CreateStoreItemDiscountUseCase;
exports.CreateStoreItemDiscountUseCase = CreateStoreItemDiscountUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('StoreItemDiscountRepository')),
    __param(1, (0, common_1.Inject)('StoreItemRepository')),
    __metadata("design:paramtypes", [Object, Object])
], CreateStoreItemDiscountUseCase);
//# sourceMappingURL=create-store-item-discount.use-case.js.map