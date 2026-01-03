import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../common/prisma/prisma.service';
import { INotificationPreferenceRepository } from '../../domain/repositories/notification-preference.repository.interface';
import { NotificationPreference } from '../../domain/entities/notification-preference.entity';
import { NotificationPreferenceMapper } from '../mappers/notification-preference.mapper';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PrismaNotificationPreferenceRepository
  implements INotificationPreferenceRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async create(
    data: Partial<NotificationPreference>,
  ): Promise<NotificationPreference> {
    const preference = await this.prisma.notificationPreference.create({
      data: {
        id: data.id ?? uuid(),
        userId: data.userId!,
        enablePushNotifications: data.enablePushNotifications ?? true,
        enableInAppNotifications: data.enableInAppNotifications ?? true,
        enableToastNotifications: data.enableToastNotifications ?? true,
        quietHoursEnabled: data.quietHoursEnabled ?? false,
        quietHoursStart: data.quietHoursStart,
        quietHoursEnd: data.quietHoursEnd,
        typePreferences: data.typePreferences ?? {},
      },
    });

    return NotificationPreferenceMapper.toDomain(preference);
  }

  async findByUserId(userId: string): Promise<NotificationPreference | null> {
    const preference = await this.prisma.notificationPreference.findUnique({
      where: { userId },
    });

    if (!preference) {
      return null;
    }

    return NotificationPreferenceMapper.toDomain(preference);
  }

  async update(
    userId: string,
    data: Partial<NotificationPreference>,
  ): Promise<NotificationPreference> {
    const preference = await this.prisma.notificationPreference.update({
      where: { userId },
      data: {
        enablePushNotifications: data.enablePushNotifications,
        enableInAppNotifications: data.enableInAppNotifications,
        enableToastNotifications: data.enableToastNotifications,
        quietHoursEnabled: data.quietHoursEnabled,
        quietHoursStart: data.quietHoursStart,
        quietHoursEnd: data.quietHoursEnd,
        typePreferences: data.typePreferences,
        updatedAt: new Date(),
      },
    });

    return NotificationPreferenceMapper.toDomain(preference);
  }

  async getOrCreateDefaults(userId: string): Promise<NotificationPreference> {
    const existing = await this.findByUserId(userId);
    if (existing) {
      return existing;
    }

    return await this.create({
      userId,
      enablePushNotifications: true,
      enableInAppNotifications: true,
      enableToastNotifications: true,
      quietHoursEnabled: false,
      typePreferences: {},
    });
  }
}
