import { INotificationPreferenceRepository } from '../../domain/repositories/notification-preference.repository.interface';
import { NotificationPreference } from '../../domain/entities/notification-preference.entity';
export interface UpdateNotificationPreferencesDto {
    userId: string;
    enablePushNotifications?: boolean;
    enableInAppNotifications?: boolean;
    enableToastNotifications?: boolean;
    quietHoursEnabled?: boolean;
    quietHoursStart?: Date;
    quietHoursEnd?: Date;
    typePreferences?: Record<string, any>;
}
export declare class UpdateNotificationPreferencesUseCase {
    private readonly preferenceRepository;
    constructor(preferenceRepository: INotificationPreferenceRepository);
    execute(dto: UpdateNotificationPreferencesDto): Promise<NotificationPreference>;
}
