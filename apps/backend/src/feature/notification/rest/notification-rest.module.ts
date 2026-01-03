import { Module } from '@nestjs/common';
import { NotificationCoreModule } from '../core/notification-core.module';
import { NotificationController } from './controllers/notification.controller';
import { NotificationPreferenceController } from './controllers/notification-preference.controller';

@Module({
  imports: [NotificationCoreModule],
  controllers: [NotificationController, NotificationPreferenceController],
})
export class NotificationRestModule {}
