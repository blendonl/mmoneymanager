"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../../auth/core/application/services/auth.service");
let WebSocketAuthGuard = class WebSocketAuthGuard {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async canActivate(context) {
        const client = context.switchToWs().getClient();
        const token = this.extractTokenFromHandshake(client);
        if (!token) {
            return false;
        }
        try {
            const user = await this.authService.validateSession(token);
            client.data.userId = user.id;
            client.data.userEmail = user.email;
            return true;
        }
        catch {
            return false;
        }
    }
    extractTokenFromHandshake(client) {
        const auth = client.handshake.auth?.token ||
            client.handshake.headers?.authorization;
        if (!auth)
            return undefined;
        const parts = auth.split(' ');
        if (parts.length === 2 && parts[0] === 'Bearer') {
            return parts[1];
        }
        return auth;
    }
};
exports.WebSocketAuthGuard = WebSocketAuthGuard;
exports.WebSocketAuthGuard = WebSocketAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], WebSocketAuthGuard);
//# sourceMappingURL=websocket-auth.guard.js.map