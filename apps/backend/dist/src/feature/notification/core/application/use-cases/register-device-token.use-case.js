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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterDeviceTokenUseCase = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let RegisterDeviceTokenUseCase = class RegisterDeviceTokenUseCase {
    deviceTokenRepository;
    constructor(deviceTokenRepository) {
        this.deviceTokenRepository = deviceTokenRepository;
    }
    async execute(dto) {
        const existing = await this.deviceTokenRepository.findByToken(dto.expoPushToken);
        if (existing) {
            await this.deviceTokenRepository.updateLastUsed(existing.id);
            return existing;
        }
        return await this.deviceTokenRepository.create({
            id: (0, uuid_1.v4)(),
            userId: dto.userId,
            expoPushToken: dto.expoPushToken,
            platform: dto.platform,
            deviceId: dto.deviceId,
            deviceName: dto.deviceName,
            isActive: true,
            lastUsed: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }
};
exports.RegisterDeviceTokenUseCase = RegisterDeviceTokenUseCase;
exports.RegisterDeviceTokenUseCase = RegisterDeviceTokenUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DeviceTokenRepository')),
    __metadata("design:paramtypes", [Object])
], RegisterDeviceTokenUseCase);
//# sourceMappingURL=register-device-token.use-case.js.map