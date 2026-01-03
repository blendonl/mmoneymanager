import { Notification } from '../entities/notification.entity';

export interface NotificationFilters {
  userId: string;
  type?: string;
  unreadOnly?: boolean;
  familyId?: string;
  page?: number;
  limit?: number;
}

export interface INotificationRepository {
  create(notification: Partial<Notification>): Promise<Notification>;
  findById(id: string): Promise<Notification | null>;
  findByUserId(filters: NotificationFilters): Promise<Notification[]>;
  getUnreadCount(userId: string): Promise<number>;
  markAsRead(id: string, userId: string): Promise<void>;
  markAllAsRead(userId: string): Promise<void>;
  delete(id: string, userId: string): Promise<void>;
  verifyOwnership(notificationId: string, userId: string): Promise<boolean>;
}
