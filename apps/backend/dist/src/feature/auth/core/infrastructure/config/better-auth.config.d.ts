import { PrismaClient } from 'prisma/generated/prisma/client';
export declare function createBetterAuthInstance(prisma: PrismaClient): import("better-auth").Auth<{
    database: (options: import("better-auth").BetterAuthOptions) => import("better-auth").DBAdapter<import("better-auth").BetterAuthOptions>;
    emailAndPassword: {
        enabled: true;
        minPasswordLength: number;
    };
    session: {
        expiresIn: number;
        updateAge: number;
    };
    socialProviders: {};
    plugins: [{
        id: "bearer";
        hooks: {
            before: {
                matcher(context: import("better-auth").HookEndpointContext): boolean;
                handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    context: {
                        headers: Headers;
                    };
                } | undefined>;
            }[];
            after: {
                matcher(context: import("better-auth").HookEndpointContext): true;
                handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<void>;
            }[];
        };
    }];
    secret: string | undefined;
    baseURL: string | undefined;
}>;
