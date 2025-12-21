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
exports.PrismaExpenseItemCategoryRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../../common/prisma/prisma.service");
const expense_item_category_mapper_1 = require("../mappers/expense-item-category.mapper");
let PrismaExpenseItemCategoryRepository = class PrismaExpenseItemCategoryRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const category = await this.prisma.expenseItemCategory.create({
            data: {
                name: data.name,
                parentId: data.parentId ?? null,
            },
        });
        return expense_item_category_mapper_1.ExpenseItemCategoryMapper.toDomain(category);
    }
    async findById(id) {
        const category = await this.prisma.expenseItemCategory.findUnique({
            where: { id },
        });
        return category ? expense_item_category_mapper_1.ExpenseItemCategoryMapper.toDomain(category) : null;
    }
    async findAll(pagination) {
        const [categories, total] = await Promise.all([
            this.prisma.expenseItemCategory.findMany({
                orderBy: { name: 'asc' },
                skip: pagination?.skip,
                take: pagination?.take,
            }),
            this.prisma.expenseItemCategory.count(),
        ]);
        return {
            data: categories.map(expense_item_category_mapper_1.ExpenseItemCategoryMapper.toDomain),
            total,
        };
    }
    async findByParentId(parentId, pagination) {
        const [categories, total] = await Promise.all([
            this.prisma.expenseItemCategory.findMany({
                where: { parentId },
                orderBy: { name: 'asc' },
                skip: pagination?.skip,
                take: pagination?.take,
            }),
            this.prisma.expenseItemCategory.count({ where: { parentId } }),
        ]);
        return {
            data: categories.map(expense_item_category_mapper_1.ExpenseItemCategoryMapper.toDomain),
            total,
        };
    }
    async findChildren(parentId) {
        const categories = await this.prisma.expenseItemCategory.findMany({
            where: { parentId },
            orderBy: { name: 'asc' },
        });
        return categories.map(expense_item_category_mapper_1.ExpenseItemCategoryMapper.toDomain);
    }
    async update(id, data) {
        const updateData = {};
        if (data.name !== undefined) {
            updateData.name = data.name;
        }
        if (data.parentId !== undefined) {
            updateData.parentId = data.parentId;
        }
        const category = await this.prisma.expenseItemCategory.update({
            where: { id },
            data: updateData,
        });
        return expense_item_category_mapper_1.ExpenseItemCategoryMapper.toDomain(category);
    }
    async delete(id) {
        await this.prisma.expenseItemCategory.delete({
            where: { id },
        });
    }
};
exports.PrismaExpenseItemCategoryRepository = PrismaExpenseItemCategoryRepository;
exports.PrismaExpenseItemCategoryRepository = PrismaExpenseItemCategoryRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaExpenseItemCategoryRepository);
//# sourceMappingURL=prisma-expense-item-category.repository.js.map