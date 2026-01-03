import { Notification } from '../../core/domain/entities/notification.entity';

export class NotificationResponseDto {
  id!: string;
  userId!: string;
  type!: string;
  priority!: string;
  title!: string;
  message!: string;
  data?: Record<string, any>;
  deliveryMethods!: string[];
  isRead!: boolean;
  readAt?: Date;
  isInteracted!: boolean;
  interactedAt?: Date;
  actionUrl?: string;
  familyId?: string;
  transactionId?: string;
  invitationId?: string;
  createdAt!: Date;
  updatedAt!: Date;

  static fromEntity(notification: Notification): NotificationResponseDto {
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
