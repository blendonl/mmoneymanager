import { NotificationGateway } from '../../../websocket/notification.gateway';
import { ExpoPushNotificationService } from '../../infrastructure/services/expo-push-notification.service';
import { NotificationPreferenceService } from './notification-preference.service';
import { Notification } from '../../domain/entities/notification.entity';
export declare class NotificationDeliveryService {
    private readonly notificationGateway;
    private readonly pushNotificationService;
    private readonly preferenceService;
    constructor(notificationGateway: NotificationGateway, pushNotificationService: ExpoPushNotificationService, preferenceService: NotificationPreferenceService);
    deliver(notification: Notification): Promise<void>;
    private deliverPush;
    private deliverInApp;
    private deliverToast;
}
