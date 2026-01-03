import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
export declare class NotificationGateway implements OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    private userSockets;
    handleConnection(client: Socket): Promise<void>;
    handleDisconnect(client: Socket): Promise<void>;
    handleSubscribeFamily(client: Socket, data: {
        familyId: string;
    }): Promise<void>;
    handleUnsubscribeFamily(client: Socket, data: {
        familyId: string;
    }): Promise<void>;
    emitToUser(userId: string, event: string, data: any): void;
    emitToFamily(familyId: string, event: string, data: any): void;
    broadcastNotification(notification: any): void;
}
