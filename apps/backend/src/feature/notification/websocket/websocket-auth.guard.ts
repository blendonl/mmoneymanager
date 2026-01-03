import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Socket } from 'socket.io';
import { AuthService } from '../../auth/core/application/services/auth.service';

@Injectable()
export class WebSocketAuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const client: Socket = context.switchToWs().getClient();
    const token = this.extractTokenFromHandshake(client);

    if (!token) {
      return false;
    }

    try {
      const user = await this.authService.validateSession(token);
      client.data.userId = user.id;
      client.data.userEmail = user.email;

      return true;
    } catch {
      return false;
    }
  }

  private extractTokenFromHandshake(client: Socket): string | undefined {
    const auth =
      client.handshake.auth?.token ||
      client.handshake.headers?.authorization;

    if (!auth) return undefined;

    const parts = auth.split(' ');
    if (parts.length === 2 && parts[0] === 'Bearer') {
      return parts[1];
    }

    // If no Bearer prefix, treat the whole auth as token
    return auth;
  }
}
