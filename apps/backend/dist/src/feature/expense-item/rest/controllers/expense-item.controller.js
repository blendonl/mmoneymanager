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
exports.ExpenseItemController = void 0;
const common_1 = require("@nestjs/common");
const expense_item_service_1 = require("../../core/application/services/expense-item.service");
const create_expense_item_request_dto_1 = require("../dto/create-expense-item-request.dto");
const update_expense_item_request_dto_1 = require("../dto/update-expense-item-request.dto");
const expense_item_response_dto_1 = require("../dto/expense-item-response.dto");
const create_expense_item_dto_1 = require("../../core/application/dto/create-expense-item.dto");
const update_expense_item_dto_1 = require("../../core/application/dto/update-expense-item.dto");
const pagination_dto_1 = require("../../../transaction/core/application/dto/pagination.dto");
let ExpenseItemController = class ExpenseItemController {
    expenseItemService;
    constructor(expenseItemService) {
        this.expenseItemService = expenseItemService;
    }
    async create(createDto, storeId) {
        if (!storeId) {
            throw new common_1.BadRequestException('Store ID is required');
        }
        const coreDto = new create_expense_item_dto_1.CreateExpenseItemDto({
            expenseId: createDto.expenseId,
            categoryId: createDto.categoryId,
            itemName: createDto.itemName,
            itemPrice: createDto.itemPrice,
            discount: createDto.discount,
            itemId: createDto.itemId,
        });
        const item = await this.expenseItemService.create(coreDto, storeId);
        return expense_item_response_dto_1.ExpenseItemResponseDto.fromEntity(item);
    }
    async findAll(expenseId, page, limit) {
        const pagination = new pagination_dto_1.Pagination(page, limit);
        const result = await this.expenseItemService.findAll(expenseId, pagination);
        return {
            data: expense_item_response_dto_1.ExpenseItemResponseDto.fromEntities(result.data),
            total: result.total,
            page: pagination.page,
            limit: pagination.limit,
        };
    }
    async findOne(id) {
        const item = await this.expenseItemService.findById(id);
        return expense_item_response_dto_1.ExpenseItemResponseDto.fromEntity(item);
    }
    async update(id, updateDto) {
        const coreDto = new update_expense_item_dto_1.UpdateExpenseItemDto({
            categoryId: updateDto.categoryId,
            price: updateDto.price,
            discount: updateDto.discount,
        });
        const item = await this.expenseItemService.update(id, coreDto);
        return expense_item_response_dto_1.ExpenseItemResponseDto.fromEntity(item);
    }
    async remove(id) {
        await this.expenseItemService.delete(id);
    }
};
exports.ExpenseItemController = ExpenseItemController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('storeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_expense_item_request_dto_1.CreateExpenseItemRequestDto, String]),
    __metadata("design:returntype", Promise)
], ExpenseItemController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('expenseId')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], ExpenseItemController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExpenseItemController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_expense_item_request_dto_1.UpdateExpenseItemRequestDto]),
    __metadata("design:returntype", Promise)
], ExpenseItemController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExpenseItemController.prototype, "remove", null);
exports.ExpenseItemController = ExpenseItemController = __decorate([
    (0, common_1.Controller)('expense-items'),
    __metadata("design:paramtypes", [expense_item_service_1.ExpenseItemService])
], ExpenseItemController);
//# sourceMappingURL=expense-item.controller.js.map