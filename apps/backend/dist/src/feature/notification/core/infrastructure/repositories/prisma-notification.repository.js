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
exports.PrismaNotificationRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../../common/prisma/prisma.service");
const notification_mapper_1 = require("../mappers/notification.mapper");
let PrismaNotificationRepository = class PrismaNotificationRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const notification = await this.prisma.notification.create({
            data: {
                id: data.id,
                userId: data.userId,
                type: data.type,
                priority: data.priority,
                title: data.title,
                message: data.message,
                data: data.data,
                deliveryMethods: data.deliveryMethods,
                isRead: data.isRead ?? false,
                readAt: data.readAt,
                isInteracted: data.isInteracted ?? false,
                interactedAt: data.interactedAt,
                actionUrl: data.actionUrl,
                familyId: data.familyId,
                transactionId: data.transactionId,
                invitationId: data.invitationId,
            },
        });
        return notification_mapper_1.NotificationMapper.toDomain(notification);
    }
    async findById(id) {
        const notification = await this.prisma.notification.findUnique({
            where: { id },
        });
        if (!notification) {
            return null;
        }
        return notification_mapper_1.NotificationMapper.toDomain(notification);
    }
    async findByUserId(filters) {
        const { userId, type, unreadOnly, familyId, page = 1, limit = 20, } = filters;
        const where = { userId };
        if (type) {
            where.type = type;
        }
        if (unreadOnly) {
            where.isRead = false;
        }
        if (familyId) {
            where.familyId = familyId;
        }
        const notifications = await this.prisma.notification.findMany({
            where,
            orderBy: { createdAt: 'desc' },
            skip: (page - 1) * limit,
            take: limit,
        });
        return notifications.map(notification_mapper_1.NotificationMapper.toDomain);
    }
    async getUnreadCount(userId) {
        return await this.prisma.notification.count({
            where: {
                userId,
                isRead: false,
            },
        });
    }
    async markAsRead(id, userId) {
        const exists = await this.verifyOwnership(id, userId);
        if (!exists) {
            throw new common_1.NotFoundException('Notification not found');
        }
        await this.prisma.notification.update({
            where: { id },
            data: {
                isRead: true,
                readAt: new Date(),
                updatedAt: new Date(),
            },
        });
    }
    async markAllAsRead(userId) {
        await this.prisma.notification.updateMany({
            where: {
                userId,
                isRead: false,
            },
            data: {
                isRead: true,
                readAt: new Date(),
                updatedAt: new Date(),
            },
        });
    }
    async delete(id, userId) {
        const exists = await this.verifyOwnership(id, userId);
        if (!exists) {
            throw new common_1.NotFoundException('Notification not found');
        }
        await this.prisma.notification.delete({
            where: { id },
        });
    }
    async verifyOwnership(notificationId, userId) {
        const notification = await this.prisma.notification.findUnique({
            where: { id: notificationId },
            select: { userId: true },
        });
        return notification?.userId === userId;
    }
};
exports.PrismaNotificationRepository = PrismaNotificationRepository;
exports.PrismaNotificationRepository = PrismaNotificationRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaNotificationRepository);
//# sourceMappingURL=prisma-notification.repository.js.map