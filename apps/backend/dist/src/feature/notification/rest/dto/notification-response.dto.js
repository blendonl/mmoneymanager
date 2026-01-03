"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationResponseDto = void 0;
class NotificationResponseDto {
    id;
    userId;
    type;
    priority;
    title;
    message;
    data;
    deliveryMethods;
    isRead;
    readAt;
    isInteracted;
    interactedAt;
    actionUrl;
    familyId;
    transactionId;
    invitationId;
    createdAt;
    updatedAt;
    static fromEntity(notification) {
        const dto = new NotificationResponseDto();
        dto.id = notification.id;
        dto.userId = notification.userId;
        dto.type = notification.type;
        dto.priority = notification.priority;
        dto.title = notification.title;
        dto.message = notification.message;
        dto.data = notification.data;
        dto.deliveryMethods = notification.deliveryMethods;
        dto.isRead = notification.isRead;
        dto.readAt = notification.readAt;
        dto.isInteracted = notification.isInteracted;
        dto.interactedAt = notification.interactedAt;
        dto.actionUrl = notification.actionUrl;
        dto.familyId = notification.familyId;
        dto.transactionId = notification.transactionId;
        dto.invitationId = notification.invitationId;
        dto.createdAt = notification.createdAt;
        dto.updatedAt = notification.updatedAt;
        return dto;
    }
}
exports.NotificationResponseDto = NotificationResponseDto;
//# sourceMappingURL=notification-response.dto.js.map