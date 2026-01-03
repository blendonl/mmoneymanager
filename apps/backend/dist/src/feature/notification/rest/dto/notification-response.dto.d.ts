import { Notification } from '../../core/domain/entities/notification.entity';
export declare class NotificationResponseDto {
    id: string;
    userId: string;
    type: string;
    priority: string;
    title: string;
    message: string;
    data?: Record<string, any>;
    deliveryMethods: string[];
    isRead: boolean;
    readAt?: Date;
    isInteracted: boolean;
    interactedAt?: Date;
    actionUrl?: string;
    familyId?: string;
    transactionId?: string;
    invitationId?: string;
    createdAt: Date;
    updatedAt: Date;
    static fromEntity(notification: Notification): NotificationResponseDto;
}
