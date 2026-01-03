"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRestModule = void 0;
const common_1 = require("@nestjs/common");
const notification_core_module_1 = require("../core/notification-core.module");
const notification_controller_1 = require("./controllers/notification.controller");
const notification_preference_controller_1 = require("./controllers/notification-preference.controller");
let NotificationRestModule = class NotificationRestModule {
};
exports.NotificationRestModule = NotificationRestModule;
exports.NotificationRestModule = NotificationRestModule = __decorate([
    (0, common_1.Module)({
        imports: [notification_core_module_1.NotificationCoreModule],
        controllers: [notification_controller_1.NotificationController, notification_preference_controller_1.NotificationPreferenceController],
    })
], NotificationRestModule);
//# sourceMappingURL=notification-rest.module.js.map