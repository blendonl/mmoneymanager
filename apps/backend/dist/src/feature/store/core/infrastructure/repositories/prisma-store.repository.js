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
exports.PrismaStoreRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../../common/prisma/prisma.service");
const store_mapper_1 = require("../mappers/store.mapper");
let PrismaStoreRepository = class PrismaStoreRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const store = await this.prisma.store.create({
            data: {
                name: data.name,
                location: data.location,
            },
        });
        return store_mapper_1.StoreMapper.toDomain(store);
    }
    async findById(id) {
        const store = await this.prisma.store.findUnique({
            where: { id },
        });
        return store ? store_mapper_1.StoreMapper.toDomain(store) : null;
    }
    async findByNameAndLocation(name, location) {
        const store = await this.prisma.store.findFirst({
            where: {
                name,
                location,
            },
        });
        return store ? store_mapper_1.StoreMapper.toDomain(store) : null;
    }
    async findBySimilarName(name) {
        const store = await this.prisma.store.findFirst({
            where: {
                name: {
                    contains: name,
                    mode: 'insensitive',
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
        return store ? store_mapper_1.StoreMapper.toDomain(store) : null;
    }
    async findAll(filters, pagination) {
        const where = {};
        if (filters?.search) {
            where.name = {
                contains: filters.search,
                mode: 'insensitive',
            };
        }
        const [stores, total] = await Promise.all([
            this.prisma.store.findMany({
                where,
                orderBy: { name: 'asc' },
                skip: pagination?.skip,
                take: pagination?.take,
            }),
            this.prisma.store.count({ where }),
        ]);
        return {
            data: stores.map(store_mapper_1.StoreMapper.toDomain),
            total,
        };
    }
    async update(id, data) {
        const updateData = {};
        if (data.name !== undefined) {
            updateData.name = data.name;
        }
        if (data.location !== undefined) {
            updateData.location = data.location;
        }
        const store = await this.prisma.store.update({
            where: { id },
            data: updateData,
        });
        return store_mapper_1.StoreMapper.toDomain(store);
    }
    async delete(id) {
        await this.prisma.store.delete({
            where: { id },
        });
    }
};
exports.PrismaStoreRepository = PrismaStoreRepository;
exports.PrismaStoreRepository = PrismaStoreRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaStoreRepository);
//# sourceMappingURL=prisma-store.repository.js.map