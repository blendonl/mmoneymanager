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
exports.PrismaDeviceTokenRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../../common/prisma/prisma.service");
const device_token_mapper_1 = require("../mappers/device-token.mapper");
let PrismaDeviceTokenRepository = class PrismaDeviceTokenRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const token = await this.prisma.deviceToken.create({
            data: {
                id: data.id,
                userId: data.userId,
                expoPushToken: data.expoPushToken,
                platform: data.platform,
                deviceId: data.deviceId,
                deviceName: data.deviceName,
                isActive: data.isActive ?? true,
                lastUsed: data.lastUsed ?? new Date(),
            },
        });
        return device_token_mapper_1.DeviceTokenMapper.toDomain(token);
    }
    async findByToken(expoPushToken) {
        const token = await this.prisma.deviceToken.findUnique({
            where: { expoPushToken },
        });
        if (!token) {
            return null;
        }
        return device_token_mapper_1.DeviceTokenMapper.toDomain(token);
    }
    async findActiveByUserId(userId) {
        const tokens = await this.prisma.deviceToken.findMany({
            where: {
                userId,
                isActive: true,
            },
        });
        return tokens.map(device_token_mapper_1.DeviceTokenMapper.toDomain);
    }
    async deactivate(id) {
        await this.prisma.deviceToken.update({
            where: { id },
            data: {
                isActive: false,
                updatedAt: new Date(),
            },
        });
    }
    async delete(expoPushToken, userId) {
        const token = await this.prisma.deviceToken.findUnique({
            where: { expoPushToken },
            select: { userId: true },
        });
        if (!token || token.userId !== userId) {
            throw new common_1.NotFoundException('Device token not found');
        }
        await this.prisma.deviceToken.delete({
            where: { expoPushToken },
        });
    }
    async updateLastUsed(id) {
        await this.prisma.deviceToken.update({
            where: { id },
            data: {
                lastUsed: new Date(),
                updatedAt: new Date(),
            },
        });
    }
};
exports.PrismaDeviceTokenRepository = PrismaDeviceTokenRepository;
exports.PrismaDeviceTokenRepository = PrismaDeviceTokenRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaDeviceTokenRepository);
//# sourceMappingURL=prisma-device-token.repository.js.map