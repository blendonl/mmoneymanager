import { INotificationRepository } from '../../domain/repositories/notification.repository.interface';
import { CreateNotificationDto } from '../dto/create-notification.dto';
import { Notification } from '../../domain/entities/notification.entity';
import { NotificationTemplateService } from '../services/notification-template.service';
import { NotificationDeliveryService } from '../services/notification-delivery.service';
export declare class CreateNotificationUseCase {
    private readonly notificationRepository;
    private readonly templateService;
    private readonly deliveryService;
    constructor(notificationRepository: INotificationRepository, templateService: NotificationTemplateService, deliveryService: NotificationDeliveryService);
    execute(dto: CreateNotificationDto): Promise<Notification>;
}
