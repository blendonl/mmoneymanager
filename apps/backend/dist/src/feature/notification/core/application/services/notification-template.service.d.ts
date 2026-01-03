import { NotificationType } from '../../domain/value-objects/notification-type.vo';
export interface NotificationTemplate {
    title: string;
    message: string;
    actionUrl?: string;
}
export declare class NotificationTemplateService {
    generateTemplate(type: NotificationType, data: Record<string, any>): NotificationTemplate;
}
