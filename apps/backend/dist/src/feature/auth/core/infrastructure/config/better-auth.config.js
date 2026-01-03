"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBetterAuthInstance = createBetterAuthInstance;
const better_auth_1 = require("better-auth");
const prisma_1 = require("better-auth/adapters/prisma");
const plugins_1 = require("better-auth/plugins");
function createBetterAuthInstance(prisma) {
    return (0, better_auth_1.betterAuth)({
        database: (0, prisma_1.prismaAdapter)(prisma, {
            provider: 'postgresql',
        }),
        emailAndPassword: {
            enabled: true,
            minPasswordLength: 8,
        },
        session: {
            expiresIn: 60 * 60 * 24 * 30,
            updateAge: 60 * 60 * 24,
        },
        socialProviders: {
            google: {
                clientId: process.env.GOOGLE_CLIENT_ID || '',
                clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
                enabled: !!process.env.GOOGLE_CLIENT_ID,
            },
            apple: {
                clientId: process.env.APPLE_CLIENT_ID || '',
                clientSecret: process.env.APPLE_CLIENT_SECRET || '',
                enabled: !!process.env.APPLE_CLIENT_ID,
            },
        },
        plugins: [(0, plugins_1.bearer)()],
        secret: process.env.BETTER_AUTH_SECRET,
        baseURL: process.env.BETTER_AUTH_URL,
    });
}
//# sourceMappingURL=better-auth.config.js.map