import { INotificationPreferenceRepository } from '../../domain/repositories/notification-preference.repository.interface';
import { NotificationPreference } from '../../domain/entities/notification-preference.entity';
export declare class GetNotificationPreferencesUseCase {
    private readonly preferenceRepository;
    constructor(preferenceRepository: INotificationPreferenceRepository);
    execute(userId: string): Promise<NotificationPreference>;
}
