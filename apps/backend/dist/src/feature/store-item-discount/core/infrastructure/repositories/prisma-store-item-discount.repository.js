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
exports.PrismaStoreItemDiscountRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../../common/prisma/prisma.service");
const store_item_discount_mapper_1 = require("../mappers/store-item-discount.mapper");
let PrismaStoreItemDiscountRepository = class PrismaStoreItemDiscountRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const discount = await this.prisma.storeItemDiscount.create({
            data: {
                id: data.id,
                storeItemId: data.storeItemId,
                discount: data.discount,
                startedAt: data.startedAt ?? new Date(),
                endedAt: data.endedAt ?? null,
            },
        });
        return store_item_discount_mapper_1.StoreItemDiscountMapper.toDomain(discount);
    }
    async findById(id) {
        const discount = await this.prisma.storeItemDiscount.findUnique({
            where: { id },
        });
        return discount ? store_item_discount_mapper_1.StoreItemDiscountMapper.toDomain(discount) : null;
    }
    async findByStoreItemId(storeItemId, pagination) {
        const [discounts, total] = await Promise.all([
            this.prisma.storeItemDiscount.findMany({
                where: { storeItemId },
                orderBy: { startedAt: 'desc' },
                skip: pagination?.skip,
                take: pagination?.take,
            }),
            this.prisma.storeItemDiscount.count({ where: { storeItemId } }),
        ]);
        return {
            data: discounts.map(store_item_discount_mapper_1.StoreItemDiscountMapper.toDomain),
            total,
            page: pagination?.page ?? 1,
            limit: pagination?.limit ?? 10,
        };
    }
    async findActiveByStoreItemId(storeItemId) {
        const now = new Date();
        const discount = await this.prisma.storeItemDiscount.findFirst({
            where: {
                storeItemId,
                startedAt: { lte: now },
                OR: [{ endedAt: null }, { endedAt: { gt: now } }],
            },
            orderBy: { startedAt: 'desc' },
        });
        return discount ? store_item_discount_mapper_1.StoreItemDiscountMapper.toDomain(discount) : null;
    }
    async update(id, data) {
        const updateData = {};
        if (data.discount !== undefined) {
            updateData.discount = data.discount;
        }
        if (data.endedAt !== undefined) {
            updateData.endedAt = data.endedAt;
        }
        const discount = await this.prisma.storeItemDiscount.update({
            where: { id },
            data: updateData,
        });
        return store_item_discount_mapper_1.StoreItemDiscountMapper.toDomain(discount);
    }
    async endDiscount(id) {
        const discount = await this.prisma.storeItemDiscount.update({
            where: { id },
            data: { endedAt: new Date() },
        });
        return store_item_discount_mapper_1.StoreItemDiscountMapper.toDomain(discount);
    }
    async delete(id) {
        await this.prisma.storeItemDiscount.delete({
            where: { id },
        });
    }
};
exports.PrismaStoreItemDiscountRepository = PrismaStoreItemDiscountRepository;
exports.PrismaStoreItemDiscountRepository = PrismaStoreItemDiscountRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaStoreItemDiscountRepository);
//# sourceMappingURL=prisma-store-item-discount.repository.js.map