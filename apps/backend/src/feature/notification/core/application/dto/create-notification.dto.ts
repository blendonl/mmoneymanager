import {
  NotificationType,
  NotificationPriority,
  DeliveryMethod,
} from '../../domain/value-objects/notification-type.vo';

export class CreateNotificationDto {
  userId!: string;
  type!: NotificationType;
  priority?: NotificationPriority;
  data?: Record<string, any>;
  deliveryMethods!: DeliveryMethod[];
  familyId?: string;
  transactionId?: string;
  invitationId?: string;
}
