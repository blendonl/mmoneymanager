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
exports.PrismaItemRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../../common/prisma/prisma.service");
const item_mapper_1 = require("../mappers/item.mapper");
let PrismaItemRepository = class PrismaItemRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const item = await this.prisma.item.create({
            data: {
                name: data.name,
                categoryId: data.categoryId,
            },
            include: {
                category: true,
            },
        });
        return item_mapper_1.ItemMapper.toDomain(item);
    }
    async findById(id) {
        const item = await this.prisma.item.findUnique({
            where: { id },
            include: {
                category: true,
            },
        });
        return item ? item_mapper_1.ItemMapper.toDomain(item) : null;
    }
    async findByName(name) {
        const item = await this.prisma.item.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: 'insensitive',
                },
            },
            include: {
                category: true,
            },
        });
        return item ? item_mapper_1.ItemMapper.toDomain(item) : null;
    }
    async findByNameAndCategory(name, categoryId) {
        const item = await this.prisma.item.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: 'insensitive',
                },
                categoryId,
            },
            include: {
                category: true,
            },
        });
        return item ? item_mapper_1.ItemMapper.toDomain(item) : null;
    }
    async findByCategoryId(categoryId, pagination) {
        const [items, total] = await Promise.all([
            this.prisma.item.findMany({
                where: { categoryId },
                orderBy: { name: 'asc' },
                skip: pagination?.skip,
                take: pagination?.take,
                include: {
                    category: true,
                },
            }),
            this.prisma.item.count({ where: { categoryId } }),
        ]);
        return {
            data: items.map(item_mapper_1.ItemMapper.toDomain),
            total,
            page: pagination?.page ?? 1,
            limit: pagination?.limit ?? 10,
        };
    }
    async findAll(pagination) {
        const [items, total] = await Promise.all([
            this.prisma.item.findMany({
                orderBy: { name: 'asc' },
                skip: pagination?.skip,
                take: pagination?.take,
                include: {
                    category: true,
                },
            }),
            this.prisma.item.count(),
        ]);
        return {
            data: items.map(item_mapper_1.ItemMapper.toDomain),
            total,
            page: pagination?.page ?? 1,
            limit: pagination?.limit ?? 10,
        };
    }
    async update(id, data) {
        const updateData = {};
        if (data.name !== undefined) {
            updateData.name = data.name;
        }
        if (data.categoryId !== undefined) {
            updateData.categoryId = data.categoryId;
        }
        const item = await this.prisma.item.update({
            where: { id },
            data: updateData,
            include: {
                category: true,
            },
        });
        return item_mapper_1.ItemMapper.toDomain(item);
    }
    async delete(id) {
        await this.prisma.item.delete({
            where: { id },
        });
    }
};
exports.PrismaItemRepository = PrismaItemRepository;
exports.PrismaItemRepository = PrismaItemRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaItemRepository);
//# sourceMappingURL=prisma-item.repository.js.map