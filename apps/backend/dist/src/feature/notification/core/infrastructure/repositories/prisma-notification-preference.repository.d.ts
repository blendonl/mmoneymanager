import { PrismaService } from '../../../../../common/prisma/prisma.service';
import { INotificationPreferenceRepository } from '../../domain/repositories/notification-preference.repository.interface';
import { NotificationPreference } from '../../domain/entities/notification-preference.entity';
export declare class PrismaNotificationPreferenceRepository implements INotificationPreferenceRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Partial<NotificationPreference>): Promise<NotificationPreference>;
    findByUserId(userId: string): Promise<NotificationPreference | null>;
    update(userId: string, data: Partial<NotificationPreference>): Promise<NotificationPreference>;
    getOrCreateDefaults(userId: string): Promise<NotificationPreference>;
}
