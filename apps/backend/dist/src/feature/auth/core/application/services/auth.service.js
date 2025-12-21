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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../../common/prisma/prisma.service");
const better_auth_config_1 = require("../../infrastructure/config/better-auth.config");
let AuthService = class AuthService {
    prisma;
    betterAuth;
    constructor(prisma) {
        this.prisma = prisma;
        this.betterAuth = (0, better_auth_config_1.createBetterAuthInstance)(this.prisma);
    }
    async register(dto) {
        console.log(1);
        const existingUser = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        console.log(2);
        if (existingUser) {
            throw new common_1.ConflictException('User with this email already exists');
        }
        const response = await this.betterAuth.api.signUpEmail({
            body: {
                email: dto.email,
                password: dto.password,
                name: `${dto.firstName} ${dto.lastName}`,
            },
        });
        if (!response.token) {
            throw new common_1.BadRequestException('Failed to create user session');
        }
        const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
        return {
            token: response.token,
            user: {
                id: response.user.id,
                email: response.user.email,
                firstName: dto.firstName,
                lastName: dto.lastName,
            },
            expiresAt,
        };
    }
    async login(dto) {
        const response = await this.betterAuth.api.signInEmail({
            body: {
                email: dto.email,
                password: dto.password,
            },
        });
        if (!response.token) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const user = await this.prisma.user.findUnique({
            where: { id: response.user.id },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
        return {
            token: response.token,
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
            },
            expiresAt,
        };
    }
    async validateSession(token) {
        const response = await this.betterAuth.api.getSession({
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        if (!response?.session || !response?.user) {
            throw new common_1.UnauthorizedException('Invalid or expired session');
        }
        const user = await this.prisma.user.findUnique({
            where: { id: response.user.id },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        return {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            balance: Number(user.balance),
            emailVerified: user.emailVerified,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            fullName: `${user.firstName} ${user.lastName}`,
            toJSON() {
                return {
                    id: this.id,
                    email: this.email,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    balance: this.balance,
                    emailVerified: this.emailVerified,
                    createdAt: this.createdAt,
                    updatedAt: this.updatedAt,
                };
            },
        };
    }
    async logout(token) {
        await this.betterAuth.api.signOut({
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
    }
    validateRegisterDto(dto) {
        if (!dto.email?.includes('@')) {
            throw new common_1.BadRequestException('Valid email is required');
        }
        if (!dto.password || dto.password.length < 8) {
            throw new common_1.BadRequestException('Password must be at least 8 characters');
        }
        if (!dto.firstName?.trim()) {
            throw new common_1.BadRequestException('First name is required');
        }
        if (!dto.lastName?.trim()) {
            throw new common_1.BadRequestException('Last name is required');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map