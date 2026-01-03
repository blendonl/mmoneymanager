import { Module } from '@nestjs/common';
import { NotificationCoreModule } from './core/notification-core.module';
import { NotificationRestModule } from './rest/notification-rest.module';
import { NotificationWebSocketModule } from './websocket/notification-websocket.module';

@Module({
  imports: [
    NotificationCoreModule,
    NotificationRestModule,
    NotificationWebSocketModule,
  ],
  exports: [NotificationCoreModule, NotificationWebSocketModule],
})
export class NotificationModule {}
