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
exports.NotificationController = void 0;
const common_1 = require("@nestjs/common");
const get_notifications_use_case_1 = require("../../core/application/use-cases/get-notifications.use-case");
const mark_notification_as_read_use_case_1 = require("../../core/application/use-cases/mark-notification-as-read.use-case");
const mark_all_as_read_use_case_1 = require("../../core/application/use-cases/mark-all-as-read.use-case");
const get_unread_count_use_case_1 = require("../../core/application/use-cases/get-unread-count.use-case");
const delete_notification_use_case_1 = require("../../core/application/use-cases/delete-notification.use-case");
const current_user_decorator_1 = require("../../../auth/rest/decorators/current-user.decorator");
const user_entity_1 = require("../../../user/core/domain/entities/user.entity");
const notification_response_dto_1 = require("../dto/notification-response.dto");
let NotificationController = class NotificationController {
    getNotificationsUseCase;
    markAsReadUseCase;
    markAllAsReadUseCase;
    getUnreadCountUseCase;
    deleteNotificationUseCase;
    constructor(getNotificationsUseCase, markAsReadUseCase, markAllAsReadUseCase, getUnreadCountUseCase, deleteNotificationUseCase) {
        this.getNotificationsUseCase = getNotificationsUseCase;
        this.markAsReadUseCase = markAsReadUseCase;
        this.markAllAsReadUseCase = markAllAsReadUseCase;
        this.getUnreadCountUseCase = getUnreadCountUseCase;
        this.deleteNotificationUseCase = deleteNotificationUseCase;
    }
    async getNotifications(user, page, limit, type, unreadOnly) {
        const notifications = await this.getNotificationsUseCase.execute({
            userId: user.id,
            page: page ? parseInt(page) : 1,
            limit: limit ? parseInt(limit) : 20,
            type,
            unreadOnly: unreadOnly === 'true',
        });
        return {
            data: notifications.map((n) => notification_response_dto_1.NotificationResponseDto.fromEntity(n)),
            pagination: {
                page: page ? parseInt(page) : 1,
                limit: limit ? parseInt(limit) : 20,
            },
        };
    }
    async getUnreadCount(user) {
        const count = await this.getUnreadCountUseCase.execute(user.id);
        return { count };
    }
    async markAsRead(id, user) {
        await this.markAsReadUseCase.execute(id, user.id);
    }
    async markAllAsRead(user) {
        await this.markAllAsReadUseCase.execute(user.id);
    }
    async deleteNotification(id, user) {
        await this.deleteNotificationUseCase.execute(id, user.id);
    }
};
exports.NotificationController = NotificationController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Query)('type')),
    __param(4, (0, common_1.Query)('unreadOnly')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, String, String, String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "getNotifications", null);
__decorate([
    (0, common_1.Get)('unread-count'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "getUnreadCount", null);
__decorate([
    (0, common_1.Patch)(':id/read'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "markAsRead", null);
__decorate([
    (0, common_1.Post)('mark-all-read'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "markAllAsRead", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "deleteNotification", null);
exports.NotificationController = NotificationController = __decorate([
    (0, common_1.Controller)('notifications'),
    __metadata("design:paramtypes", [get_notifications_use_case_1.GetNotificationsUseCase,
        mark_notification_as_read_use_case_1.MarkNotificationAsReadUseCase,
        mark_all_as_read_use_case_1.MarkAllAsReadUseCase,
        get_unread_count_use_case_1.GetUnreadCountUseCase,
        delete_notification_use_case_1.DeleteNotificationUseCase])
], NotificationController);
//# sourceMappingURL=notification.controller.js.map