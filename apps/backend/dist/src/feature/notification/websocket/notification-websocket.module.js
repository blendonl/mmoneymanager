"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationWebSocketModule = void 0;
const common_1 = require("@nestjs/common");
const notification_gateway_1 = require("./notification.gateway");
const websocket_auth_guard_1 = require("./websocket-auth.guard");
const auth_core_module_1 = require("../../auth/core/auth-core.module");
let NotificationWebSocketModule = class NotificationWebSocketModule {
};
exports.NotificationWebSocketModule = NotificationWebSocketModule;
exports.NotificationWebSocketModule = NotificationWebSocketModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_core_module_1.AuthCoreModule],
        providers: [notification_gateway_1.NotificationGateway, websocket_auth_guard_1.WebSocketAuthGuard],
        exports: [notification_gateway_1.NotificationGateway],
    })
], NotificationWebSocketModule);
//# sourceMappingURL=notification-websocket.module.js.map