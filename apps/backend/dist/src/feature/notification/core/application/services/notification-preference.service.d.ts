import { INotificationPreferenceRepository } from '../../domain/repositories/notification-preference.repository.interface';
import { NotificationPreference } from '../../domain/entities/notification-preference.entity';
import { NotificationType, DeliveryMethod } from '../../domain/value-objects/notification-type.vo';
export declare class NotificationPreferenceService {
    private readonly preferenceRepository;
    constructor(preferenceRepository: INotificationPreferenceRepository);
    getOrCreateDefaults(userId: string): Promise<NotificationPreference>;
    isInQuietHours(preference: NotificationPreference): boolean;
    getAllowedDeliveryMethods(preference: NotificationPreference, type: NotificationType): DeliveryMethod[];
}
