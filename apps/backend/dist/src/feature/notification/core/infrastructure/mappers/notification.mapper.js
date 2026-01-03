"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationMapper = void 0;
const notification_entity_1 = require("../../domain/entities/notification.entity");
class NotificationMapper {
    static toDomain(prismaNotification) {
        return new notification_entity_1.Notification({
            id: prismaNotification.id,
            userId: prismaNotification.userId,
            type: prismaNotification.type,
            priority: prismaNotification.priority,
            title: prismaNotification.title,
            message: prismaNotification.message,
            data: prismaNotification.data,
            deliveryMethods: prismaNotification.deliveryMethods,
            isRead: prismaNotification.isRead,
            readAt: prismaNotification.readAt || undefined,
            isInteracted: prismaNotification.isInteracted,
            interactedAt: prismaNotification.interactedAt || undefined,
            actionUrl: prismaNotification.actionUrl || undefined,
            familyId: prismaNotification.familyId || undefined,
            transactionId: prismaNotification.transactionId || undefined,
            invitationId: prismaNotification.invitationId || undefined,
            createdAt: prismaNotification.createdAt,
            updatedAt: prismaNotification.updatedAt,
        });
    }
    static toPersistence(notification) {
        return {
            id: notification.id,
            userId: notification.userId,
            type: notification.type,
            priority: notification.priority,
            title: notification.title,
            message: notification.message,
            data: notification.data,
            deliveryMethods: notification.deliveryMethods,
            isRead: notification.isRead,
            readAt: notification.readAt,
            isInteracted: notification.isInteracted,
            interactedAt: notification.interactedAt,
            actionUrl: notification.actionUrl,
            familyId: notification.familyId,
            transactionId: notification.transactionId,
            invitationId: notification.invitationId,
            createdAt: notification.createdAt,
            updatedAt: notification.updatedAt,
        };
    }
}
exports.NotificationMapper = NotificationMapper;
//# sourceMappingURL=notification.mapper.js.map