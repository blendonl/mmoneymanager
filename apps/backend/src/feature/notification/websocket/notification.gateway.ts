import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable, UseGuards } from '@nestjs/common';
import { WebSocketAuthGuard } from './websocket-auth.guard';

@WebSocketGateway({
  cors: {
    origin: '*', // Configure appropriately for production
  },
  namespace: '/notifications',
})
@Injectable()
export class NotificationGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  private userSockets: Map<string, Set<string>> = new Map();

  @UseGuards(WebSocketAuthGuard)
  async handleConnection(@ConnectedSocket() client: Socket) {
    const userId = client.data.userId;

    if (!userId) {
      client.disconnect();
      return;
    }

    if (!this.userSockets.has(userId)) {
      this.userSockets.set(userId, new Set());
    }
    this.userSockets.get(userId)!.add(client.id);

    // Join user-specific room
    client.join(`user:${userId}`);

    console.log(`Client connected: ${client.id} (User: ${userId})`);
  }

  async handleDisconnect(@ConnectedSocket() client: Socket) {
    const userId = client.data.userId;

    if (userId && this.userSockets.has(userId)) {
      this.userSockets.get(userId)!.delete(client.id);
      if (this.userSockets.get(userId)!.size === 0) {
        this.userSockets.delete(userId);
      }
    }

    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('subscribe:family')
  async handleSubscribeFamily(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { familyId: string },
  ) {
    client.join(`family:${data.familyId}`);
  }

  @SubscribeMessage('unsubscribe:family')
  async handleUnsubscribeFamily(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { familyId: string },
  ) {
    client.leave(`family:${data.familyId}`);
  }

  // Emit notification to specific user
  emitToUser(userId: string, event: string, data: any) {
    this.server.to(`user:${userId}`).emit(event, data);
  }

  // Emit notification to family members
  emitToFamily(familyId: string, event: string, data: any) {
    this.server.to(`family:${familyId}`).emit(event, data);
  }

  // Broadcast notification
  broadcastNotification(notification: any) {
    this.emitToUser(notification.userId, 'notification:new', notification);
  }
}
