import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Account: "Account";
    readonly Session: "Session";
    readonly Verification: "Verification";
    readonly ExpenseItem: "ExpenseItem";
    readonly Expense: "Expense";
    readonly ExpenseCategory: "ExpenseCategory";
    readonly Family: "Family";
    readonly FamilyMember: "FamilyMember";
    readonly FamilyInvitation: "FamilyInvitation";
    readonly Income: "Income";
    readonly IncomeCategory: "IncomeCategory";
    readonly Notification: "Notification";
    readonly NotificationPreference: "NotificationPreference";
    readonly DeviceToken: "DeviceToken";
    readonly User: "User";
    readonly Store: "Store";
    readonly Item: "Item";
    readonly StoreItem: "StoreItem";
    readonly StoreItemDiscount: "StoreItemDiscount";
    readonly ItemCategory: "ItemCategory";
    readonly Transaction: "Transaction";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "account" | "session" | "verification" | "expenseItem" | "expense" | "expenseCategory" | "family" | "familyMember" | "familyInvitation" | "income" | "incomeCategory" | "notification" | "notificationPreference" | "deviceToken" | "user" | "store" | "item" | "storeItem" | "storeItemDiscount" | "itemCategory" | "transaction";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Account: {
            payload: Prisma.$AccountPayload<ExtArgs>;
            fields: Prisma.AccountFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AccountFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                findFirst: {
                    args: Prisma.AccountFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                findMany: {
                    args: Prisma.AccountFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>[];
                };
                create: {
                    args: Prisma.AccountCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                createMany: {
                    args: Prisma.AccountCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>[];
                };
                delete: {
                    args: Prisma.AccountDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                update: {
                    args: Prisma.AccountUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                deleteMany: {
                    args: Prisma.AccountDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AccountUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>[];
                };
                upsert: {
                    args: Prisma.AccountUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                aggregate: {
                    args: Prisma.AccountAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAccount>;
                };
                groupBy: {
                    args: Prisma.AccountGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AccountGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AccountCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AccountCountAggregateOutputType> | number;
                };
            };
        };
        Session: {
            payload: Prisma.$SessionPayload<ExtArgs>;
            fields: Prisma.SessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findFirst: {
                    args: Prisma.SessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findMany: {
                    args: Prisma.SessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                create: {
                    args: Prisma.SessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                createMany: {
                    args: Prisma.SessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                delete: {
                    args: Prisma.SessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                update: {
                    args: Prisma.SessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                deleteMany: {
                    args: Prisma.SessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                upsert: {
                    args: Prisma.SessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                aggregate: {
                    args: Prisma.SessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSession>;
                };
                groupBy: {
                    args: Prisma.SessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionCountAggregateOutputType> | number;
                };
            };
        };
        Verification: {
            payload: Prisma.$VerificationPayload<ExtArgs>;
            fields: Prisma.VerificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VerificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                findFirst: {
                    args: Prisma.VerificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                findMany: {
                    args: Prisma.VerificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>[];
                };
                create: {
                    args: Prisma.VerificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                createMany: {
                    args: Prisma.VerificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>[];
                };
                delete: {
                    args: Prisma.VerificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                update: {
                    args: Prisma.VerificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                deleteMany: {
                    args: Prisma.VerificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VerificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>[];
                };
                upsert: {
                    args: Prisma.VerificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                aggregate: {
                    args: Prisma.VerificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVerification>;
                };
                groupBy: {
                    args: Prisma.VerificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VerificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VerificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VerificationCountAggregateOutputType> | number;
                };
            };
        };
        ExpenseItem: {
            payload: Prisma.$ExpenseItemPayload<ExtArgs>;
            fields: Prisma.ExpenseItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ExpenseItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ExpenseItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseItemPayload>;
                };
                findFirst: {
                    args: Prisma.ExpenseItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ExpenseItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseItemPayload>;
                };
                findMany: {
                    args: Prisma.ExpenseItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseItemPayload>[];
                };
                create: {
                    args: Prisma.ExpenseItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseItemPayload>;
                };
                createMany: {
                    args: Prisma.ExpenseItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ExpenseItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseItemPayload>[];
                };
                delete: {
                    args: Prisma.ExpenseItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseItemPayload>;
                };
                update: {
                    args: Prisma.ExpenseItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseItemPayload>;
                };
                deleteMany: {
                    args: Prisma.ExpenseItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ExpenseItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ExpenseItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseItemPayload>[];
                };
                upsert: {
                    args: Prisma.ExpenseItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseItemPayload>;
                };
                aggregate: {
                    args: Prisma.ExpenseItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExpenseItem>;
                };
                groupBy: {
                    args: Prisma.ExpenseItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExpenseItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ExpenseItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExpenseItemCountAggregateOutputType> | number;
                };
            };
        };
        Expense: {
            payload: Prisma.$ExpensePayload<ExtArgs>;
            fields: Prisma.ExpenseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ExpenseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpensePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpensePayload>;
                };
                findFirst: {
                    args: Prisma.ExpenseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpensePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpensePayload>;
                };
                findMany: {
                    args: Prisma.ExpenseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpensePayload>[];
                };
                create: {
                    args: Prisma.ExpenseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpensePayload>;
                };
                createMany: {
                    args: Prisma.ExpenseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpensePayload>[];
                };
                delete: {
                    args: Prisma.ExpenseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpensePayload>;
                };
                update: {
                    args: Prisma.ExpenseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpensePayload>;
                };
                deleteMany: {
                    args: Prisma.ExpenseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ExpenseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpensePayload>[];
                };
                upsert: {
                    args: Prisma.ExpenseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpensePayload>;
                };
                aggregate: {
                    args: Prisma.ExpenseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExpense>;
                };
                groupBy: {
                    args: Prisma.ExpenseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExpenseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ExpenseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExpenseCountAggregateOutputType> | number;
                };
            };
        };
        ExpenseCategory: {
            payload: Prisma.$ExpenseCategoryPayload<ExtArgs>;
            fields: Prisma.ExpenseCategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ExpenseCategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseCategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ExpenseCategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseCategoryPayload>;
                };
                findFirst: {
                    args: Prisma.ExpenseCategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseCategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ExpenseCategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseCategoryPayload>;
                };
                findMany: {
                    args: Prisma.ExpenseCategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseCategoryPayload>[];
                };
                create: {
                    args: Prisma.ExpenseCategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseCategoryPayload>;
                };
                createMany: {
                    args: Prisma.ExpenseCategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ExpenseCategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseCategoryPayload>[];
                };
                delete: {
                    args: Prisma.ExpenseCategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseCategoryPayload>;
                };
                update: {
                    args: Prisma.ExpenseCategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseCategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.ExpenseCategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ExpenseCategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ExpenseCategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseCategoryPayload>[];
                };
                upsert: {
                    args: Prisma.ExpenseCategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseCategoryPayload>;
                };
                aggregate: {
                    args: Prisma.ExpenseCategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExpenseCategory>;
                };
                groupBy: {
                    args: Prisma.ExpenseCategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExpenseCategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ExpenseCategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExpenseCategoryCountAggregateOutputType> | number;
                };
            };
        };
        Family: {
            payload: Prisma.$FamilyPayload<ExtArgs>;
            fields: Prisma.FamilyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FamilyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FamilyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyPayload>;
                };
                findFirst: {
                    args: Prisma.FamilyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FamilyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyPayload>;
                };
                findMany: {
                    args: Prisma.FamilyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyPayload>[];
                };
                create: {
                    args: Prisma.FamilyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyPayload>;
                };
                createMany: {
                    args: Prisma.FamilyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FamilyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyPayload>[];
                };
                delete: {
                    args: Prisma.FamilyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyPayload>;
                };
                update: {
                    args: Prisma.FamilyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyPayload>;
                };
                deleteMany: {
                    args: Prisma.FamilyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FamilyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FamilyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyPayload>[];
                };
                upsert: {
                    args: Prisma.FamilyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyPayload>;
                };
                aggregate: {
                    args: Prisma.FamilyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFamily>;
                };
                groupBy: {
                    args: Prisma.FamilyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FamilyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FamilyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FamilyCountAggregateOutputType> | number;
                };
            };
        };
        FamilyMember: {
            payload: Prisma.$FamilyMemberPayload<ExtArgs>;
            fields: Prisma.FamilyMemberFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FamilyMemberFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyMemberPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FamilyMemberFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyMemberPayload>;
                };
                findFirst: {
                    args: Prisma.FamilyMemberFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyMemberPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FamilyMemberFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyMemberPayload>;
                };
                findMany: {
                    args: Prisma.FamilyMemberFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyMemberPayload>[];
                };
                create: {
                    args: Prisma.FamilyMemberCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyMemberPayload>;
                };
                createMany: {
                    args: Prisma.FamilyMemberCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FamilyMemberCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyMemberPayload>[];
                };
                delete: {
                    args: Prisma.FamilyMemberDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyMemberPayload>;
                };
                update: {
                    args: Prisma.FamilyMemberUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyMemberPayload>;
                };
                deleteMany: {
                    args: Prisma.FamilyMemberDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FamilyMemberUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FamilyMemberUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyMemberPayload>[];
                };
                upsert: {
                    args: Prisma.FamilyMemberUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyMemberPayload>;
                };
                aggregate: {
                    args: Prisma.FamilyMemberAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFamilyMember>;
                };
                groupBy: {
                    args: Prisma.FamilyMemberGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FamilyMemberGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FamilyMemberCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FamilyMemberCountAggregateOutputType> | number;
                };
            };
        };
        FamilyInvitation: {
            payload: Prisma.$FamilyInvitationPayload<ExtArgs>;
            fields: Prisma.FamilyInvitationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FamilyInvitationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyInvitationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FamilyInvitationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyInvitationPayload>;
                };
                findFirst: {
                    args: Prisma.FamilyInvitationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyInvitationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FamilyInvitationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyInvitationPayload>;
                };
                findMany: {
                    args: Prisma.FamilyInvitationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyInvitationPayload>[];
                };
                create: {
                    args: Prisma.FamilyInvitationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyInvitationPayload>;
                };
                createMany: {
                    args: Prisma.FamilyInvitationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FamilyInvitationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyInvitationPayload>[];
                };
                delete: {
                    args: Prisma.FamilyInvitationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyInvitationPayload>;
                };
                update: {
                    args: Prisma.FamilyInvitationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyInvitationPayload>;
                };
                deleteMany: {
                    args: Prisma.FamilyInvitationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FamilyInvitationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FamilyInvitationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyInvitationPayload>[];
                };
                upsert: {
                    args: Prisma.FamilyInvitationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FamilyInvitationPayload>;
                };
                aggregate: {
                    args: Prisma.FamilyInvitationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFamilyInvitation>;
                };
                groupBy: {
                    args: Prisma.FamilyInvitationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FamilyInvitationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FamilyInvitationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FamilyInvitationCountAggregateOutputType> | number;
                };
            };
        };
        Income: {
            payload: Prisma.$IncomePayload<ExtArgs>;
            fields: Prisma.IncomeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.IncomeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncomePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.IncomeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncomePayload>;
                };
                findFirst: {
                    args: Prisma.IncomeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncomePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.IncomeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncomePayload>;
                };
                findMany: {
                    args: Prisma.IncomeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncomePayload>[];
                };
                create: {
                    args: Prisma.IncomeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncomePayload>;
                };
                createMany: {
                    args: Prisma.IncomeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.IncomeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncomePayload>[];
                };
                delete: {
                    args: Prisma.IncomeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncomePayload>;
                };
                update: {
                    args: Prisma.IncomeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncomePayload>;
                };
                deleteMany: {
                    args: Prisma.IncomeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.IncomeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.IncomeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncomePayload>[];
                };
                upsert: {
                    args: Prisma.IncomeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncomePayload>;
                };
                aggregate: {
                    args: Prisma.IncomeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIncome>;
                };
                groupBy: {
                    args: Prisma.IncomeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IncomeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.IncomeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IncomeCountAggregateOutputType> | number;
                };
            };
        };
        IncomeCategory: {
            payload: Prisma.$IncomeCategoryPayload<ExtArgs>;
            fields: Prisma.IncomeCategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.IncomeCategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncomeCategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.IncomeCategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncomeCategoryPayload>;
                };
                findFirst: {
                    args: Prisma.IncomeCategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncomeCategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.IncomeCategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncomeCategoryPayload>;
                };
                findMany: {
                    args: Prisma.IncomeCategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncomeCategoryPayload>[];
                };
                create: {
                    args: Prisma.IncomeCategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncomeCategoryPayload>;
                };
                createMany: {
                    args: Prisma.IncomeCategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.IncomeCategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncomeCategoryPayload>[];
                };
                delete: {
                    args: Prisma.IncomeCategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncomeCategoryPayload>;
                };
                update: {
                    args: Prisma.IncomeCategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncomeCategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.IncomeCategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.IncomeCategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.IncomeCategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncomeCategoryPayload>[];
                };
                upsert: {
                    args: Prisma.IncomeCategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncomeCategoryPayload>;
                };
                aggregate: {
                    args: Prisma.IncomeCategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIncomeCategory>;
                };
                groupBy: {
                    args: Prisma.IncomeCategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IncomeCategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.IncomeCategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IncomeCategoryCountAggregateOutputType> | number;
                };
            };
        };
        Notification: {
            payload: Prisma.$NotificationPayload<ExtArgs>;
            fields: Prisma.NotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findMany: {
                    args: Prisma.NotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                create: {
                    args: Prisma.NotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                createMany: {
                    args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                delete: {
                    args: Prisma.NotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                update: {
                    args: Prisma.NotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                upsert: {
                    args: Prisma.NotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification>;
                };
                groupBy: {
                    args: Prisma.NotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationCountAggregateOutputType> | number;
                };
            };
        };
        NotificationPreference: {
            payload: Prisma.$NotificationPreferencePayload<ExtArgs>;
            fields: Prisma.NotificationPreferenceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationPreferenceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationPreferenceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                findFirst: {
                    args: Prisma.NotificationPreferenceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationPreferenceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                findMany: {
                    args: Prisma.NotificationPreferenceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>[];
                };
                create: {
                    args: Prisma.NotificationPreferenceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                createMany: {
                    args: Prisma.NotificationPreferenceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotificationPreferenceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>[];
                };
                delete: {
                    args: Prisma.NotificationPreferenceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                update: {
                    args: Prisma.NotificationPreferenceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationPreferenceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationPreferenceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotificationPreferenceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>[];
                };
                upsert: {
                    args: Prisma.NotificationPreferenceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                aggregate: {
                    args: Prisma.NotificationPreferenceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotificationPreference>;
                };
                groupBy: {
                    args: Prisma.NotificationPreferenceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationPreferenceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationPreferenceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationPreferenceCountAggregateOutputType> | number;
                };
            };
        };
        DeviceToken: {
            payload: Prisma.$DeviceTokenPayload<ExtArgs>;
            fields: Prisma.DeviceTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DeviceTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DeviceTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceTokenPayload>;
                };
                findFirst: {
                    args: Prisma.DeviceTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DeviceTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceTokenPayload>;
                };
                findMany: {
                    args: Prisma.DeviceTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceTokenPayload>[];
                };
                create: {
                    args: Prisma.DeviceTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceTokenPayload>;
                };
                createMany: {
                    args: Prisma.DeviceTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DeviceTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceTokenPayload>[];
                };
                delete: {
                    args: Prisma.DeviceTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceTokenPayload>;
                };
                update: {
                    args: Prisma.DeviceTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.DeviceTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DeviceTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DeviceTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceTokenPayload>[];
                };
                upsert: {
                    args: Prisma.DeviceTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceTokenPayload>;
                };
                aggregate: {
                    args: Prisma.DeviceTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDeviceToken>;
                };
                groupBy: {
                    args: Prisma.DeviceTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DeviceTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceTokenCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Store: {
            payload: Prisma.$StorePayload<ExtArgs>;
            fields: Prisma.StoreFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StoreFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StorePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StorePayload>;
                };
                findFirst: {
                    args: Prisma.StoreFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StorePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StorePayload>;
                };
                findMany: {
                    args: Prisma.StoreFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StorePayload>[];
                };
                create: {
                    args: Prisma.StoreCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StorePayload>;
                };
                createMany: {
                    args: Prisma.StoreCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StoreCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StorePayload>[];
                };
                delete: {
                    args: Prisma.StoreDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StorePayload>;
                };
                update: {
                    args: Prisma.StoreUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StorePayload>;
                };
                deleteMany: {
                    args: Prisma.StoreDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StoreUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StoreUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StorePayload>[];
                };
                upsert: {
                    args: Prisma.StoreUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StorePayload>;
                };
                aggregate: {
                    args: Prisma.StoreAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStore>;
                };
                groupBy: {
                    args: Prisma.StoreGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StoreGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StoreCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StoreCountAggregateOutputType> | number;
                };
            };
        };
        Item: {
            payload: Prisma.$ItemPayload<ExtArgs>;
            fields: Prisma.ItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemPayload>;
                };
                findFirst: {
                    args: Prisma.ItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemPayload>;
                };
                findMany: {
                    args: Prisma.ItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemPayload>[];
                };
                create: {
                    args: Prisma.ItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemPayload>;
                };
                createMany: {
                    args: Prisma.ItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemPayload>[];
                };
                delete: {
                    args: Prisma.ItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemPayload>;
                };
                update: {
                    args: Prisma.ItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemPayload>;
                };
                deleteMany: {
                    args: Prisma.ItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemPayload>[];
                };
                upsert: {
                    args: Prisma.ItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemPayload>;
                };
                aggregate: {
                    args: Prisma.ItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateItem>;
                };
                groupBy: {
                    args: Prisma.ItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ItemCountAggregateOutputType> | number;
                };
            };
        };
        StoreItem: {
            payload: Prisma.$StoreItemPayload<ExtArgs>;
            fields: Prisma.StoreItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StoreItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StoreItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreItemPayload>;
                };
                findFirst: {
                    args: Prisma.StoreItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StoreItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreItemPayload>;
                };
                findMany: {
                    args: Prisma.StoreItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreItemPayload>[];
                };
                create: {
                    args: Prisma.StoreItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreItemPayload>;
                };
                createMany: {
                    args: Prisma.StoreItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StoreItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreItemPayload>[];
                };
                delete: {
                    args: Prisma.StoreItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreItemPayload>;
                };
                update: {
                    args: Prisma.StoreItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreItemPayload>;
                };
                deleteMany: {
                    args: Prisma.StoreItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StoreItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StoreItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreItemPayload>[];
                };
                upsert: {
                    args: Prisma.StoreItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreItemPayload>;
                };
                aggregate: {
                    args: Prisma.StoreItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStoreItem>;
                };
                groupBy: {
                    args: Prisma.StoreItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StoreItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StoreItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StoreItemCountAggregateOutputType> | number;
                };
            };
        };
        StoreItemDiscount: {
            payload: Prisma.$StoreItemDiscountPayload<ExtArgs>;
            fields: Prisma.StoreItemDiscountFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StoreItemDiscountFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreItemDiscountPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StoreItemDiscountFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreItemDiscountPayload>;
                };
                findFirst: {
                    args: Prisma.StoreItemDiscountFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreItemDiscountPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StoreItemDiscountFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreItemDiscountPayload>;
                };
                findMany: {
                    args: Prisma.StoreItemDiscountFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreItemDiscountPayload>[];
                };
                create: {
                    args: Prisma.StoreItemDiscountCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreItemDiscountPayload>;
                };
                createMany: {
                    args: Prisma.StoreItemDiscountCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StoreItemDiscountCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreItemDiscountPayload>[];
                };
                delete: {
                    args: Prisma.StoreItemDiscountDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreItemDiscountPayload>;
                };
                update: {
                    args: Prisma.StoreItemDiscountUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreItemDiscountPayload>;
                };
                deleteMany: {
                    args: Prisma.StoreItemDiscountDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StoreItemDiscountUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StoreItemDiscountUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreItemDiscountPayload>[];
                };
                upsert: {
                    args: Prisma.StoreItemDiscountUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreItemDiscountPayload>;
                };
                aggregate: {
                    args: Prisma.StoreItemDiscountAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStoreItemDiscount>;
                };
                groupBy: {
                    args: Prisma.StoreItemDiscountGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StoreItemDiscountGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StoreItemDiscountCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StoreItemDiscountCountAggregateOutputType> | number;
                };
            };
        };
        ItemCategory: {
            payload: Prisma.$ItemCategoryPayload<ExtArgs>;
            fields: Prisma.ItemCategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ItemCategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemCategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ItemCategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemCategoryPayload>;
                };
                findFirst: {
                    args: Prisma.ItemCategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemCategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ItemCategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemCategoryPayload>;
                };
                findMany: {
                    args: Prisma.ItemCategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemCategoryPayload>[];
                };
                create: {
                    args: Prisma.ItemCategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemCategoryPayload>;
                };
                createMany: {
                    args: Prisma.ItemCategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ItemCategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemCategoryPayload>[];
                };
                delete: {
                    args: Prisma.ItemCategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemCategoryPayload>;
                };
                update: {
                    args: Prisma.ItemCategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemCategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.ItemCategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ItemCategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ItemCategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemCategoryPayload>[];
                };
                upsert: {
                    args: Prisma.ItemCategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemCategoryPayload>;
                };
                aggregate: {
                    args: Prisma.ItemCategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateItemCategory>;
                };
                groupBy: {
                    args: Prisma.ItemCategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ItemCategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ItemCategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ItemCategoryCountAggregateOutputType> | number;
                };
            };
        };
        Transaction: {
            payload: Prisma.$TransactionPayload<ExtArgs>;
            fields: Prisma.TransactionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TransactionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                findFirst: {
                    args: Prisma.TransactionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                findMany: {
                    args: Prisma.TransactionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>[];
                };
                create: {
                    args: Prisma.TransactionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                createMany: {
                    args: Prisma.TransactionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>[];
                };
                delete: {
                    args: Prisma.TransactionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                update: {
                    args: Prisma.TransactionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                deleteMany: {
                    args: Prisma.TransactionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TransactionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>[];
                };
                upsert: {
                    args: Prisma.TransactionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                aggregate: {
                    args: Prisma.TransactionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTransaction>;
                };
                groupBy: {
                    args: Prisma.TransactionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TransactionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TransactionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TransactionCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AccountScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly accountId: "accountId";
    readonly providerId: "providerId";
    readonly accessToken: "accessToken";
    readonly refreshToken: "refreshToken";
    readonly idToken: "idToken";
    readonly expiresAt: "expiresAt";
    readonly password: "password";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly expiresAt: "expiresAt";
    readonly token: "token";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const VerificationScalarFieldEnum: {
    readonly id: "id";
    readonly identifier: "identifier";
    readonly value: "value";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
};
export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum];
export declare const ExpenseItemScalarFieldEnum: {
    readonly id: "id";
    readonly itemId: "itemId";
    readonly expenseId: "expenseId";
    readonly price: "price";
    readonly discount: "discount";
    readonly quantity: "quantity";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ExpenseItemScalarFieldEnum = (typeof ExpenseItemScalarFieldEnum)[keyof typeof ExpenseItemScalarFieldEnum];
export declare const ExpenseScalarFieldEnum: {
    readonly id: "id";
    readonly transactionId: "transactionId";
    readonly storeId: "storeId";
    readonly categoryId: "categoryId";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum];
export declare const ExpenseCategoryScalarFieldEnum: {
    readonly id: "id";
    readonly parentId: "parentId";
    readonly name: "name";
    readonly isConnectedToStore: "isConnectedToStore";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ExpenseCategoryScalarFieldEnum = (typeof ExpenseCategoryScalarFieldEnum)[keyof typeof ExpenseCategoryScalarFieldEnum];
export declare const FamilyScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly balance: "balance";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FamilyScalarFieldEnum = (typeof FamilyScalarFieldEnum)[keyof typeof FamilyScalarFieldEnum];
export declare const FamilyMemberScalarFieldEnum: {
    readonly id: "id";
    readonly familyId: "familyId";
    readonly userId: "userId";
    readonly role: "role";
    readonly balance: "balance";
    readonly joinedAt: "joinedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FamilyMemberScalarFieldEnum = (typeof FamilyMemberScalarFieldEnum)[keyof typeof FamilyMemberScalarFieldEnum];
export declare const FamilyInvitationScalarFieldEnum: {
    readonly id: "id";
    readonly familyId: "familyId";
    readonly inviterId: "inviterId";
    readonly inviteeId: "inviteeId";
    readonly inviteeEmail: "inviteeEmail";
    readonly status: "status";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FamilyInvitationScalarFieldEnum = (typeof FamilyInvitationScalarFieldEnum)[keyof typeof FamilyInvitationScalarFieldEnum];
export declare const IncomeScalarFieldEnum: {
    readonly id: "id";
    readonly transactionId: "transactionId";
    readonly storeId: "storeId";
    readonly categoryId: "categoryId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type IncomeScalarFieldEnum = (typeof IncomeScalarFieldEnum)[keyof typeof IncomeScalarFieldEnum];
export declare const IncomeCategoryScalarFieldEnum: {
    readonly id: "id";
    readonly parentId: "parentId";
    readonly name: "name";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type IncomeCategoryScalarFieldEnum = (typeof IncomeCategoryScalarFieldEnum)[keyof typeof IncomeCategoryScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly type: "type";
    readonly priority: "priority";
    readonly title: "title";
    readonly message: "message";
    readonly data: "data";
    readonly deliveryMethods: "deliveryMethods";
    readonly isRead: "isRead";
    readonly readAt: "readAt";
    readonly isInteracted: "isInteracted";
    readonly interactedAt: "interactedAt";
    readonly actionUrl: "actionUrl";
    readonly familyId: "familyId";
    readonly transactionId: "transactionId";
    readonly invitationId: "invitationId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const NotificationPreferenceScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly enablePushNotifications: "enablePushNotifications";
    readonly enableInAppNotifications: "enableInAppNotifications";
    readonly enableToastNotifications: "enableToastNotifications";
    readonly quietHoursEnabled: "quietHoursEnabled";
    readonly quietHoursStart: "quietHoursStart";
    readonly quietHoursEnd: "quietHoursEnd";
    readonly typePreferences: "typePreferences";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type NotificationPreferenceScalarFieldEnum = (typeof NotificationPreferenceScalarFieldEnum)[keyof typeof NotificationPreferenceScalarFieldEnum];
export declare const DeviceTokenScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly expoPushToken: "expoPushToken";
    readonly platform: "platform";
    readonly deviceId: "deviceId";
    readonly deviceName: "deviceName";
    readonly isActive: "isActive";
    readonly lastUsed: "lastUsed";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DeviceTokenScalarFieldEnum = (typeof DeviceTokenScalarFieldEnum)[keyof typeof DeviceTokenScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly name: "name";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly balance: "balance";
    readonly emailVerified: "emailVerified";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const StoreScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly location: "location";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum];
export declare const ItemScalarFieldEnum: {
    readonly id: "id";
    readonly categoryId: "categoryId";
    readonly name: "name";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum];
export declare const StoreItemScalarFieldEnum: {
    readonly id: "id";
    readonly itemId: "itemId";
    readonly storeId: "storeId";
    readonly price: "price";
    readonly isDiscounted: "isDiscounted";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StoreItemScalarFieldEnum = (typeof StoreItemScalarFieldEnum)[keyof typeof StoreItemScalarFieldEnum];
export declare const StoreItemDiscountScalarFieldEnum: {
    readonly id: "id";
    readonly storeItemId: "storeItemId";
    readonly discount: "discount";
    readonly startedAt: "startedAt";
    readonly endedAt: "endedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StoreItemDiscountScalarFieldEnum = (typeof StoreItemDiscountScalarFieldEnum)[keyof typeof StoreItemDiscountScalarFieldEnum];
export declare const ItemCategoryScalarFieldEnum: {
    readonly id: "id";
    readonly parentId: "parentId";
    readonly name: "name";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ItemCategoryScalarFieldEnum = (typeof ItemCategoryScalarFieldEnum)[keyof typeof ItemCategoryScalarFieldEnum];
export declare const TransactionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly familyId: "familyId";
    readonly scope: "scope";
    readonly type: "type";
    readonly value: "value";
    readonly recordedAt: "recordedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type EnumFamilyMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FamilyMemberRole'>;
export type ListEnumFamilyMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FamilyMemberRole[]'>;
export type EnumFamilyInvitationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FamilyInvitationStatus'>;
export type ListEnumFamilyInvitationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FamilyInvitationStatus[]'>;
export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>;
export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>;
export type EnumNotificationPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationPriority'>;
export type ListEnumNotificationPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationPriority[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type ListEnumNotificationDeliveryMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationDeliveryMethod[]'>;
export type EnumNotificationDeliveryMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationDeliveryMethod'>;
export type EnumTransactionScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionScope'>;
export type ListEnumTransactionScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionScope[]'>;
export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>;
export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    account?: Prisma.AccountOmit;
    session?: Prisma.SessionOmit;
    verification?: Prisma.VerificationOmit;
    expenseItem?: Prisma.ExpenseItemOmit;
    expense?: Prisma.ExpenseOmit;
    expenseCategory?: Prisma.ExpenseCategoryOmit;
    family?: Prisma.FamilyOmit;
    familyMember?: Prisma.FamilyMemberOmit;
    familyInvitation?: Prisma.FamilyInvitationOmit;
    income?: Prisma.IncomeOmit;
    incomeCategory?: Prisma.IncomeCategoryOmit;
    notification?: Prisma.NotificationOmit;
    notificationPreference?: Prisma.NotificationPreferenceOmit;
    deviceToken?: Prisma.DeviceTokenOmit;
    user?: Prisma.UserOmit;
    store?: Prisma.StoreOmit;
    item?: Prisma.ItemOmit;
    storeItem?: Prisma.StoreItemOmit;
    storeItemDiscount?: Prisma.StoreItemDiscountOmit;
    itemCategory?: Prisma.ItemCategoryOmit;
    transaction?: Prisma.TransactionOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
