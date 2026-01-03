import { NotificationPreference } from '../entities/notification-preference.entity';

export interface INotificationPreferenceRepository {
  create(preference: Partial<NotificationPreference>): Promise<NotificationPreference>;
  findByUserId(userId: string): Promise<NotificationPreference | null>;
  update(userId: string, preference: Partial<NotificationPreference>): Promise<NotificationPreference>;
  getOrCreateDefaults(userId: string): Promise<NotificationPreference>;
}
