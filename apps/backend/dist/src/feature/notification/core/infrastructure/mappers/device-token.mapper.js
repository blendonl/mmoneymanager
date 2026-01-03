"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceTokenMapper = void 0;
const device_token_entity_1 = require("../../domain/entities/device-token.entity");
class DeviceTokenMapper {
    static toDomain(prismaToken) {
        return new device_token_entity_1.DeviceToken({
            id: prismaToken.id,
            userId: prismaToken.userId,
            expoPushToken: prismaToken.expoPushToken,
            platform: prismaToken.platform || undefined,
            deviceId: prismaToken.deviceId || undefined,
            deviceName: prismaToken.deviceName || undefined,
            isActive: prismaToken.isActive,
            lastUsed: prismaToken.lastUsed,
            createdAt: prismaToken.createdAt,
            updatedAt: prismaToken.updatedAt,
        });
    }
    static toPersistence(token) {
        return {
            id: token.id,
            userId: token.userId,
            expoPushToken: token.expoPushToken,
            platform: token.platform,
            deviceId: token.deviceId,
            deviceName: token.deviceName,
            isActive: token.isActive,
            lastUsed: token.lastUsed,
            createdAt: token.createdAt,
            updatedAt: token.updatedAt,
        };
    }
}
exports.DeviceTokenMapper = DeviceTokenMapper;
//# sourceMappingURL=device-token.mapper.js.map