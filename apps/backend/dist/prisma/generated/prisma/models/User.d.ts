import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    balance: runtime.Decimal | null;
};
export type UserSumAggregateOutputType = {
    balance: runtime.Decimal | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    firstName: string | null;
    lastName: string | null;
    balance: runtime.Decimal | null;
    emailVerified: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    firstName: string | null;
    lastName: string | null;
    balance: runtime.Decimal | null;
    emailVerified: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    firstName: number;
    lastName: number;
    balance: number;
    emailVerified: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    balance?: true;
};
export type UserSumAggregateInputType = {
    balance?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    firstName?: true;
    lastName?: true;
    balance?: true;
    emailVerified?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    firstName?: true;
    lastName?: true;
    balance?: true;
    emailVerified?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    firstName?: true;
    lastName?: true;
    balance?: true;
    emailVerified?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string;
    name: string;
    firstName: string;
    lastName: string;
    balance: runtime.Decimal;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    firstName?: Prisma.StringFilter<"User"> | string;
    lastName?: Prisma.StringFilter<"User"> | string;
    balance?: Prisma.DecimalFilter<"User"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    transactions?: Prisma.TransactionListRelationFilter;
    accounts?: Prisma.AccountListRelationFilter;
    sessions?: Prisma.SessionListRelationFilter;
    familyMemberships?: Prisma.FamilyMemberListRelationFilter;
    sentInvitations?: Prisma.FamilyInvitationListRelationFilter;
    receivedInvitations?: Prisma.FamilyInvitationListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    notificationPreference?: Prisma.XOR<Prisma.NotificationPreferenceNullableScalarRelationFilter, Prisma.NotificationPreferenceWhereInput> | null;
    deviceTokens?: Prisma.DeviceTokenListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    transactions?: Prisma.TransactionOrderByRelationAggregateInput;
    accounts?: Prisma.AccountOrderByRelationAggregateInput;
    sessions?: Prisma.SessionOrderByRelationAggregateInput;
    familyMemberships?: Prisma.FamilyMemberOrderByRelationAggregateInput;
    sentInvitations?: Prisma.FamilyInvitationOrderByRelationAggregateInput;
    receivedInvitations?: Prisma.FamilyInvitationOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    notificationPreference?: Prisma.NotificationPreferenceOrderByWithRelationInput;
    deviceTokens?: Prisma.DeviceTokenOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringFilter<"User"> | string;
    firstName?: Prisma.StringFilter<"User"> | string;
    lastName?: Prisma.StringFilter<"User"> | string;
    balance?: Prisma.DecimalFilter<"User"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    transactions?: Prisma.TransactionListRelationFilter;
    accounts?: Prisma.AccountListRelationFilter;
    sessions?: Prisma.SessionListRelationFilter;
    familyMemberships?: Prisma.FamilyMemberListRelationFilter;
    sentInvitations?: Prisma.FamilyInvitationListRelationFilter;
    receivedInvitations?: Prisma.FamilyInvitationListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    notificationPreference?: Prisma.XOR<Prisma.NotificationPreferenceNullableScalarRelationFilter, Prisma.NotificationPreferenceWhereInput> | null;
    deviceTokens?: Prisma.DeviceTokenListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"User"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"User"> | string;
    balance?: Prisma.DecimalWithAggregatesFilter<"User"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    familyMemberships?: Prisma.FamilyMemberCreateNestedManyWithoutUserInput;
    sentInvitations?: Prisma.FamilyInvitationCreateNestedManyWithoutInviterInput;
    receivedInvitations?: Prisma.FamilyInvitationCreateNestedManyWithoutInviteeInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    notificationPreference?: Prisma.NotificationPreferenceCreateNestedOneWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    familyMemberships?: Prisma.FamilyMemberUncheckedCreateNestedManyWithoutUserInput;
    sentInvitations?: Prisma.FamilyInvitationUncheckedCreateNestedManyWithoutInviterInput;
    receivedInvitations?: Prisma.FamilyInvitationUncheckedCreateNestedManyWithoutInviteeInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    notificationPreference?: Prisma.NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    familyMemberships?: Prisma.FamilyMemberUpdateManyWithoutUserNestedInput;
    sentInvitations?: Prisma.FamilyInvitationUpdateManyWithoutInviterNestedInput;
    receivedInvitations?: Prisma.FamilyInvitationUpdateManyWithoutInviteeNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    notificationPreference?: Prisma.NotificationPreferenceUpdateOneWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    familyMemberships?: Prisma.FamilyMemberUncheckedUpdateManyWithoutUserNestedInput;
    sentInvitations?: Prisma.FamilyInvitationUncheckedUpdateManyWithoutInviterNestedInput;
    receivedInvitations?: Prisma.FamilyInvitationUncheckedUpdateManyWithoutInviteeNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    notificationPreference?: Prisma.NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    balance?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    balance?: Prisma.SortOrder;
};
export type UserCreateNestedOneWithoutAccountsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAccountsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAccountsInput;
    upsert?: Prisma.UserUpsertWithoutAccountsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput, Prisma.UserUpdateWithoutAccountsInput>, Prisma.UserUncheckedUpdateWithoutAccountsInput>;
};
export type UserCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.UserUpsertWithoutSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput, Prisma.UserUpdateWithoutSessionsInput>, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
};
export type UserCreateNestedOneWithoutFamilyMembershipsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFamilyMembershipsInput, Prisma.UserUncheckedCreateWithoutFamilyMembershipsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFamilyMembershipsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutFamilyMembershipsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFamilyMembershipsInput, Prisma.UserUncheckedCreateWithoutFamilyMembershipsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFamilyMembershipsInput;
    upsert?: Prisma.UserUpsertWithoutFamilyMembershipsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutFamilyMembershipsInput, Prisma.UserUpdateWithoutFamilyMembershipsInput>, Prisma.UserUncheckedUpdateWithoutFamilyMembershipsInput>;
};
export type UserCreateNestedOneWithoutSentInvitationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSentInvitationsInput, Prisma.UserUncheckedCreateWithoutSentInvitationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSentInvitationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutReceivedInvitationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReceivedInvitationsInput, Prisma.UserUncheckedCreateWithoutReceivedInvitationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReceivedInvitationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSentInvitationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSentInvitationsInput, Prisma.UserUncheckedCreateWithoutSentInvitationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSentInvitationsInput;
    upsert?: Prisma.UserUpsertWithoutSentInvitationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSentInvitationsInput, Prisma.UserUpdateWithoutSentInvitationsInput>, Prisma.UserUncheckedUpdateWithoutSentInvitationsInput>;
};
export type UserUpdateOneWithoutReceivedInvitationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReceivedInvitationsInput, Prisma.UserUncheckedCreateWithoutReceivedInvitationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReceivedInvitationsInput;
    upsert?: Prisma.UserUpsertWithoutReceivedInvitationsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReceivedInvitationsInput, Prisma.UserUpdateWithoutReceivedInvitationsInput>, Prisma.UserUncheckedUpdateWithoutReceivedInvitationsInput>;
};
export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.UserUpsertWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput, Prisma.UserUpdateWithoutNotificationsInput>, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserCreateNestedOneWithoutNotificationPreferenceInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationPreferenceInput, Prisma.UserUncheckedCreateWithoutNotificationPreferenceInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationPreferenceInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutNotificationPreferenceNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationPreferenceInput, Prisma.UserUncheckedCreateWithoutNotificationPreferenceInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationPreferenceInput;
    upsert?: Prisma.UserUpsertWithoutNotificationPreferenceInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNotificationPreferenceInput, Prisma.UserUpdateWithoutNotificationPreferenceInput>, Prisma.UserUncheckedUpdateWithoutNotificationPreferenceInput>;
};
export type UserCreateNestedOneWithoutDeviceTokensInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDeviceTokensInput, Prisma.UserUncheckedCreateWithoutDeviceTokensInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDeviceTokensInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutDeviceTokensNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDeviceTokensInput, Prisma.UserUncheckedCreateWithoutDeviceTokensInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDeviceTokensInput;
    upsert?: Prisma.UserUpsertWithoutDeviceTokensInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutDeviceTokensInput, Prisma.UserUpdateWithoutDeviceTokensInput>, Prisma.UserUncheckedUpdateWithoutDeviceTokensInput>;
};
export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTransactionsInput, Prisma.UserUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTransactionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTransactionsInput, Prisma.UserUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTransactionsInput;
    upsert?: Prisma.UserUpsertWithoutTransactionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutTransactionsInput, Prisma.UserUpdateWithoutTransactionsInput>, Prisma.UserUncheckedUpdateWithoutTransactionsInput>;
};
export type UserCreateWithoutAccountsInput = {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    familyMemberships?: Prisma.FamilyMemberCreateNestedManyWithoutUserInput;
    sentInvitations?: Prisma.FamilyInvitationCreateNestedManyWithoutInviterInput;
    receivedInvitations?: Prisma.FamilyInvitationCreateNestedManyWithoutInviteeInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    notificationPreference?: Prisma.NotificationPreferenceCreateNestedOneWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    familyMemberships?: Prisma.FamilyMemberUncheckedCreateNestedManyWithoutUserInput;
    sentInvitations?: Prisma.FamilyInvitationUncheckedCreateNestedManyWithoutInviterInput;
    receivedInvitations?: Prisma.FamilyInvitationUncheckedCreateNestedManyWithoutInviteeInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    notificationPreference?: Prisma.NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAccountsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>;
};
export type UserUpsertWithoutAccountsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAccountsInput, Prisma.UserUncheckedUpdateWithoutAccountsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAccountsInput, Prisma.UserUncheckedUpdateWithoutAccountsInput>;
};
export type UserUpdateWithoutAccountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    familyMemberships?: Prisma.FamilyMemberUpdateManyWithoutUserNestedInput;
    sentInvitations?: Prisma.FamilyInvitationUpdateManyWithoutInviterNestedInput;
    receivedInvitations?: Prisma.FamilyInvitationUpdateManyWithoutInviteeNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    notificationPreference?: Prisma.NotificationPreferenceUpdateOneWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    familyMemberships?: Prisma.FamilyMemberUncheckedUpdateManyWithoutUserNestedInput;
    sentInvitations?: Prisma.FamilyInvitationUncheckedUpdateManyWithoutInviterNestedInput;
    receivedInvitations?: Prisma.FamilyInvitationUncheckedUpdateManyWithoutInviteeNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    notificationPreference?: Prisma.NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSessionsInput = {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    familyMemberships?: Prisma.FamilyMemberCreateNestedManyWithoutUserInput;
    sentInvitations?: Prisma.FamilyInvitationCreateNestedManyWithoutInviterInput;
    receivedInvitations?: Prisma.FamilyInvitationCreateNestedManyWithoutInviteeInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    notificationPreference?: Prisma.NotificationPreferenceCreateNestedOneWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    familyMemberships?: Prisma.FamilyMemberUncheckedCreateNestedManyWithoutUserInput;
    sentInvitations?: Prisma.FamilyInvitationUncheckedCreateNestedManyWithoutInviterInput;
    receivedInvitations?: Prisma.FamilyInvitationUncheckedCreateNestedManyWithoutInviteeInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    notificationPreference?: Prisma.NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSessionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
};
export type UserUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSessionsInput, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSessionsInput, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
};
export type UserUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    familyMemberships?: Prisma.FamilyMemberUpdateManyWithoutUserNestedInput;
    sentInvitations?: Prisma.FamilyInvitationUpdateManyWithoutInviterNestedInput;
    receivedInvitations?: Prisma.FamilyInvitationUpdateManyWithoutInviteeNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    notificationPreference?: Prisma.NotificationPreferenceUpdateOneWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    familyMemberships?: Prisma.FamilyMemberUncheckedUpdateManyWithoutUserNestedInput;
    sentInvitations?: Prisma.FamilyInvitationUncheckedUpdateManyWithoutInviterNestedInput;
    receivedInvitations?: Prisma.FamilyInvitationUncheckedUpdateManyWithoutInviteeNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    notificationPreference?: Prisma.NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutFamilyMembershipsInput = {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    sentInvitations?: Prisma.FamilyInvitationCreateNestedManyWithoutInviterInput;
    receivedInvitations?: Prisma.FamilyInvitationCreateNestedManyWithoutInviteeInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    notificationPreference?: Prisma.NotificationPreferenceCreateNestedOneWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutFamilyMembershipsInput = {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    sentInvitations?: Prisma.FamilyInvitationUncheckedCreateNestedManyWithoutInviterInput;
    receivedInvitations?: Prisma.FamilyInvitationUncheckedCreateNestedManyWithoutInviteeInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    notificationPreference?: Prisma.NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutFamilyMembershipsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutFamilyMembershipsInput, Prisma.UserUncheckedCreateWithoutFamilyMembershipsInput>;
};
export type UserUpsertWithoutFamilyMembershipsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutFamilyMembershipsInput, Prisma.UserUncheckedUpdateWithoutFamilyMembershipsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutFamilyMembershipsInput, Prisma.UserUncheckedCreateWithoutFamilyMembershipsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutFamilyMembershipsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutFamilyMembershipsInput, Prisma.UserUncheckedUpdateWithoutFamilyMembershipsInput>;
};
export type UserUpdateWithoutFamilyMembershipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    sentInvitations?: Prisma.FamilyInvitationUpdateManyWithoutInviterNestedInput;
    receivedInvitations?: Prisma.FamilyInvitationUpdateManyWithoutInviteeNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    notificationPreference?: Prisma.NotificationPreferenceUpdateOneWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutFamilyMembershipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    sentInvitations?: Prisma.FamilyInvitationUncheckedUpdateManyWithoutInviterNestedInput;
    receivedInvitations?: Prisma.FamilyInvitationUncheckedUpdateManyWithoutInviteeNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    notificationPreference?: Prisma.NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSentInvitationsInput = {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    familyMemberships?: Prisma.FamilyMemberCreateNestedManyWithoutUserInput;
    receivedInvitations?: Prisma.FamilyInvitationCreateNestedManyWithoutInviteeInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    notificationPreference?: Prisma.NotificationPreferenceCreateNestedOneWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSentInvitationsInput = {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    familyMemberships?: Prisma.FamilyMemberUncheckedCreateNestedManyWithoutUserInput;
    receivedInvitations?: Prisma.FamilyInvitationUncheckedCreateNestedManyWithoutInviteeInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    notificationPreference?: Prisma.NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSentInvitationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSentInvitationsInput, Prisma.UserUncheckedCreateWithoutSentInvitationsInput>;
};
export type UserCreateWithoutReceivedInvitationsInput = {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    familyMemberships?: Prisma.FamilyMemberCreateNestedManyWithoutUserInput;
    sentInvitations?: Prisma.FamilyInvitationCreateNestedManyWithoutInviterInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    notificationPreference?: Prisma.NotificationPreferenceCreateNestedOneWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutReceivedInvitationsInput = {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    familyMemberships?: Prisma.FamilyMemberUncheckedCreateNestedManyWithoutUserInput;
    sentInvitations?: Prisma.FamilyInvitationUncheckedCreateNestedManyWithoutInviterInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    notificationPreference?: Prisma.NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutReceivedInvitationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReceivedInvitationsInput, Prisma.UserUncheckedCreateWithoutReceivedInvitationsInput>;
};
export type UserUpsertWithoutSentInvitationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSentInvitationsInput, Prisma.UserUncheckedUpdateWithoutSentInvitationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSentInvitationsInput, Prisma.UserUncheckedCreateWithoutSentInvitationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSentInvitationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSentInvitationsInput, Prisma.UserUncheckedUpdateWithoutSentInvitationsInput>;
};
export type UserUpdateWithoutSentInvitationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    familyMemberships?: Prisma.FamilyMemberUpdateManyWithoutUserNestedInput;
    receivedInvitations?: Prisma.FamilyInvitationUpdateManyWithoutInviteeNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    notificationPreference?: Prisma.NotificationPreferenceUpdateOneWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSentInvitationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    familyMemberships?: Prisma.FamilyMemberUncheckedUpdateManyWithoutUserNestedInput;
    receivedInvitations?: Prisma.FamilyInvitationUncheckedUpdateManyWithoutInviteeNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    notificationPreference?: Prisma.NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUpsertWithoutReceivedInvitationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReceivedInvitationsInput, Prisma.UserUncheckedUpdateWithoutReceivedInvitationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReceivedInvitationsInput, Prisma.UserUncheckedCreateWithoutReceivedInvitationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReceivedInvitationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReceivedInvitationsInput, Prisma.UserUncheckedUpdateWithoutReceivedInvitationsInput>;
};
export type UserUpdateWithoutReceivedInvitationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    familyMemberships?: Prisma.FamilyMemberUpdateManyWithoutUserNestedInput;
    sentInvitations?: Prisma.FamilyInvitationUpdateManyWithoutInviterNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    notificationPreference?: Prisma.NotificationPreferenceUpdateOneWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutReceivedInvitationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    familyMemberships?: Prisma.FamilyMemberUncheckedUpdateManyWithoutUserNestedInput;
    sentInvitations?: Prisma.FamilyInvitationUncheckedUpdateManyWithoutInviterNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    notificationPreference?: Prisma.NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutNotificationsInput = {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    familyMemberships?: Prisma.FamilyMemberCreateNestedManyWithoutUserInput;
    sentInvitations?: Prisma.FamilyInvitationCreateNestedManyWithoutInviterInput;
    receivedInvitations?: Prisma.FamilyInvitationCreateNestedManyWithoutInviteeInput;
    notificationPreference?: Prisma.NotificationPreferenceCreateNestedOneWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    familyMemberships?: Prisma.FamilyMemberUncheckedCreateNestedManyWithoutUserInput;
    sentInvitations?: Prisma.FamilyInvitationUncheckedCreateNestedManyWithoutInviterInput;
    receivedInvitations?: Prisma.FamilyInvitationUncheckedCreateNestedManyWithoutInviteeInput;
    notificationPreference?: Prisma.NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
};
export type UserUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    familyMemberships?: Prisma.FamilyMemberUpdateManyWithoutUserNestedInput;
    sentInvitations?: Prisma.FamilyInvitationUpdateManyWithoutInviterNestedInput;
    receivedInvitations?: Prisma.FamilyInvitationUpdateManyWithoutInviteeNestedInput;
    notificationPreference?: Prisma.NotificationPreferenceUpdateOneWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    familyMemberships?: Prisma.FamilyMemberUncheckedUpdateManyWithoutUserNestedInput;
    sentInvitations?: Prisma.FamilyInvitationUncheckedUpdateManyWithoutInviterNestedInput;
    receivedInvitations?: Prisma.FamilyInvitationUncheckedUpdateManyWithoutInviteeNestedInput;
    notificationPreference?: Prisma.NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutNotificationPreferenceInput = {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    familyMemberships?: Prisma.FamilyMemberCreateNestedManyWithoutUserInput;
    sentInvitations?: Prisma.FamilyInvitationCreateNestedManyWithoutInviterInput;
    receivedInvitations?: Prisma.FamilyInvitationCreateNestedManyWithoutInviteeInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutNotificationPreferenceInput = {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    familyMemberships?: Prisma.FamilyMemberUncheckedCreateNestedManyWithoutUserInput;
    sentInvitations?: Prisma.FamilyInvitationUncheckedCreateNestedManyWithoutInviterInput;
    receivedInvitations?: Prisma.FamilyInvitationUncheckedCreateNestedManyWithoutInviteeInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutNotificationPreferenceInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationPreferenceInput, Prisma.UserUncheckedCreateWithoutNotificationPreferenceInput>;
};
export type UserUpsertWithoutNotificationPreferenceInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNotificationPreferenceInput, Prisma.UserUncheckedUpdateWithoutNotificationPreferenceInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationPreferenceInput, Prisma.UserUncheckedCreateWithoutNotificationPreferenceInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNotificationPreferenceInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNotificationPreferenceInput, Prisma.UserUncheckedUpdateWithoutNotificationPreferenceInput>;
};
export type UserUpdateWithoutNotificationPreferenceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    familyMemberships?: Prisma.FamilyMemberUpdateManyWithoutUserNestedInput;
    sentInvitations?: Prisma.FamilyInvitationUpdateManyWithoutInviterNestedInput;
    receivedInvitations?: Prisma.FamilyInvitationUpdateManyWithoutInviteeNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutNotificationPreferenceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    familyMemberships?: Prisma.FamilyMemberUncheckedUpdateManyWithoutUserNestedInput;
    sentInvitations?: Prisma.FamilyInvitationUncheckedUpdateManyWithoutInviterNestedInput;
    receivedInvitations?: Prisma.FamilyInvitationUncheckedUpdateManyWithoutInviteeNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutDeviceTokensInput = {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    familyMemberships?: Prisma.FamilyMemberCreateNestedManyWithoutUserInput;
    sentInvitations?: Prisma.FamilyInvitationCreateNestedManyWithoutInviterInput;
    receivedInvitations?: Prisma.FamilyInvitationCreateNestedManyWithoutInviteeInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    notificationPreference?: Prisma.NotificationPreferenceCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutDeviceTokensInput = {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    familyMemberships?: Prisma.FamilyMemberUncheckedCreateNestedManyWithoutUserInput;
    sentInvitations?: Prisma.FamilyInvitationUncheckedCreateNestedManyWithoutInviterInput;
    receivedInvitations?: Prisma.FamilyInvitationUncheckedCreateNestedManyWithoutInviteeInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    notificationPreference?: Prisma.NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutDeviceTokensInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutDeviceTokensInput, Prisma.UserUncheckedCreateWithoutDeviceTokensInput>;
};
export type UserUpsertWithoutDeviceTokensInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutDeviceTokensInput, Prisma.UserUncheckedUpdateWithoutDeviceTokensInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutDeviceTokensInput, Prisma.UserUncheckedCreateWithoutDeviceTokensInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutDeviceTokensInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutDeviceTokensInput, Prisma.UserUncheckedUpdateWithoutDeviceTokensInput>;
};
export type UserUpdateWithoutDeviceTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    familyMemberships?: Prisma.FamilyMemberUpdateManyWithoutUserNestedInput;
    sentInvitations?: Prisma.FamilyInvitationUpdateManyWithoutInviterNestedInput;
    receivedInvitations?: Prisma.FamilyInvitationUpdateManyWithoutInviteeNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    notificationPreference?: Prisma.NotificationPreferenceUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutDeviceTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    familyMemberships?: Prisma.FamilyMemberUncheckedUpdateManyWithoutUserNestedInput;
    sentInvitations?: Prisma.FamilyInvitationUncheckedUpdateManyWithoutInviterNestedInput;
    receivedInvitations?: Prisma.FamilyInvitationUncheckedUpdateManyWithoutInviteeNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    notificationPreference?: Prisma.NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutTransactionsInput = {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    familyMemberships?: Prisma.FamilyMemberCreateNestedManyWithoutUserInput;
    sentInvitations?: Prisma.FamilyInvitationCreateNestedManyWithoutInviterInput;
    receivedInvitations?: Prisma.FamilyInvitationCreateNestedManyWithoutInviteeInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    notificationPreference?: Prisma.NotificationPreferenceCreateNestedOneWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    familyMemberships?: Prisma.FamilyMemberUncheckedCreateNestedManyWithoutUserInput;
    sentInvitations?: Prisma.FamilyInvitationUncheckedCreateNestedManyWithoutInviterInput;
    receivedInvitations?: Prisma.FamilyInvitationUncheckedCreateNestedManyWithoutInviteeInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    notificationPreference?: Prisma.NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutTransactionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutTransactionsInput, Prisma.UserUncheckedCreateWithoutTransactionsInput>;
};
export type UserUpsertWithoutTransactionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutTransactionsInput, Prisma.UserUncheckedUpdateWithoutTransactionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutTransactionsInput, Prisma.UserUncheckedCreateWithoutTransactionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutTransactionsInput, Prisma.UserUncheckedUpdateWithoutTransactionsInput>;
};
export type UserUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    familyMemberships?: Prisma.FamilyMemberUpdateManyWithoutUserNestedInput;
    sentInvitations?: Prisma.FamilyInvitationUpdateManyWithoutInviterNestedInput;
    receivedInvitations?: Prisma.FamilyInvitationUpdateManyWithoutInviteeNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    notificationPreference?: Prisma.NotificationPreferenceUpdateOneWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    familyMemberships?: Prisma.FamilyMemberUncheckedUpdateManyWithoutUserNestedInput;
    sentInvitations?: Prisma.FamilyInvitationUncheckedUpdateManyWithoutInviterNestedInput;
    receivedInvitations?: Prisma.FamilyInvitationUncheckedUpdateManyWithoutInviteeNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    notificationPreference?: Prisma.NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
    transactions: number;
    accounts: number;
    sessions: number;
    familyMemberships: number;
    sentInvitations: number;
    receivedInvitations: number;
    notifications: number;
    deviceTokens: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs;
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs;
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs;
    familyMemberships?: boolean | UserCountOutputTypeCountFamilyMembershipsArgs;
    sentInvitations?: boolean | UserCountOutputTypeCountSentInvitationsArgs;
    receivedInvitations?: boolean | UserCountOutputTypeCountReceivedInvitationsArgs;
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs;
    deviceTokens?: boolean | UserCountOutputTypeCountDeviceTokensArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
};
export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccountWhereInput;
};
export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionWhereInput;
};
export type UserCountOutputTypeCountFamilyMembershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FamilyMemberWhereInput;
};
export type UserCountOutputTypeCountSentInvitationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FamilyInvitationWhereInput;
};
export type UserCountOutputTypeCountReceivedInvitationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FamilyInvitationWhereInput;
};
export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
export type UserCountOutputTypeCountDeviceTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceTokenWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    balance?: boolean;
    emailVerified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    transactions?: boolean | Prisma.User$transactionsArgs<ExtArgs>;
    accounts?: boolean | Prisma.User$accountsArgs<ExtArgs>;
    sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>;
    familyMemberships?: boolean | Prisma.User$familyMembershipsArgs<ExtArgs>;
    sentInvitations?: boolean | Prisma.User$sentInvitationsArgs<ExtArgs>;
    receivedInvitations?: boolean | Prisma.User$receivedInvitationsArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    notificationPreference?: boolean | Prisma.User$notificationPreferenceArgs<ExtArgs>;
    deviceTokens?: boolean | Prisma.User$deviceTokensArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    balance?: boolean;
    emailVerified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    balance?: boolean;
    emailVerified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    balance?: boolean;
    emailVerified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "name" | "firstName" | "lastName" | "balance" | "emailVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transactions?: boolean | Prisma.User$transactionsArgs<ExtArgs>;
    accounts?: boolean | Prisma.User$accountsArgs<ExtArgs>;
    sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>;
    familyMemberships?: boolean | Prisma.User$familyMembershipsArgs<ExtArgs>;
    sentInvitations?: boolean | Prisma.User$sentInvitationsArgs<ExtArgs>;
    receivedInvitations?: boolean | Prisma.User$receivedInvitationsArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    notificationPreference?: boolean | Prisma.User$notificationPreferenceArgs<ExtArgs>;
    deviceTokens?: boolean | Prisma.User$deviceTokensArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        transactions: Prisma.$TransactionPayload<ExtArgs>[];
        accounts: Prisma.$AccountPayload<ExtArgs>[];
        sessions: Prisma.$SessionPayload<ExtArgs>[];
        familyMemberships: Prisma.$FamilyMemberPayload<ExtArgs>[];
        sentInvitations: Prisma.$FamilyInvitationPayload<ExtArgs>[];
        receivedInvitations: Prisma.$FamilyInvitationPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
        notificationPreference: Prisma.$NotificationPreferencePayload<ExtArgs> | null;
        deviceTokens: Prisma.$DeviceTokenPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        name: string;
        firstName: string;
        lastName: string;
        balance: runtime.Decimal;
        emailVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    transactions<T extends Prisma.User$transactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    accounts<T extends Prisma.User$accountsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sessions<T extends Prisma.User$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    familyMemberships<T extends Prisma.User$familyMembershipsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$familyMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sentInvitations<T extends Prisma.User$sentInvitationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$sentInvitationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FamilyInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    receivedInvitations<T extends Prisma.User$receivedInvitationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$receivedInvitationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FamilyInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.User$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notificationPreference<T extends Prisma.User$notificationPreferenceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$notificationPreferenceArgs<ExtArgs>>): Prisma.Prisma__NotificationPreferenceClient<runtime.Types.Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    deviceTokens<T extends Prisma.User$deviceTokensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$deviceTokensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly firstName: Prisma.FieldRef<"User", 'String'>;
    readonly lastName: Prisma.FieldRef<"User", 'String'>;
    readonly balance: Prisma.FieldRef<"User", 'Decimal'>;
    readonly emailVerified: Prisma.FieldRef<"User", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    cursor?: Prisma.TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
export type User$accountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where?: Prisma.AccountWhereInput;
    orderBy?: Prisma.AccountOrderByWithRelationInput | Prisma.AccountOrderByWithRelationInput[];
    cursor?: Prisma.AccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccountScalarFieldEnum | Prisma.AccountScalarFieldEnum[];
};
export type User$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[];
    cursor?: Prisma.SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
export type User$familyMembershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilyMemberSelect<ExtArgs> | null;
    omit?: Prisma.FamilyMemberOmit<ExtArgs> | null;
    include?: Prisma.FamilyMemberInclude<ExtArgs> | null;
    where?: Prisma.FamilyMemberWhereInput;
    orderBy?: Prisma.FamilyMemberOrderByWithRelationInput | Prisma.FamilyMemberOrderByWithRelationInput[];
    cursor?: Prisma.FamilyMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FamilyMemberScalarFieldEnum | Prisma.FamilyMemberScalarFieldEnum[];
};
export type User$sentInvitationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilyInvitationSelect<ExtArgs> | null;
    omit?: Prisma.FamilyInvitationOmit<ExtArgs> | null;
    include?: Prisma.FamilyInvitationInclude<ExtArgs> | null;
    where?: Prisma.FamilyInvitationWhereInput;
    orderBy?: Prisma.FamilyInvitationOrderByWithRelationInput | Prisma.FamilyInvitationOrderByWithRelationInput[];
    cursor?: Prisma.FamilyInvitationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FamilyInvitationScalarFieldEnum | Prisma.FamilyInvitationScalarFieldEnum[];
};
export type User$receivedInvitationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilyInvitationSelect<ExtArgs> | null;
    omit?: Prisma.FamilyInvitationOmit<ExtArgs> | null;
    include?: Prisma.FamilyInvitationInclude<ExtArgs> | null;
    where?: Prisma.FamilyInvitationWhereInput;
    orderBy?: Prisma.FamilyInvitationOrderByWithRelationInput | Prisma.FamilyInvitationOrderByWithRelationInput[];
    cursor?: Prisma.FamilyInvitationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FamilyInvitationScalarFieldEnum | Prisma.FamilyInvitationScalarFieldEnum[];
};
export type User$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
export type User$notificationPreferenceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationPreferenceSelect<ExtArgs> | null;
    omit?: Prisma.NotificationPreferenceOmit<ExtArgs> | null;
    include?: Prisma.NotificationPreferenceInclude<ExtArgs> | null;
    where?: Prisma.NotificationPreferenceWhereInput;
};
export type User$deviceTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceTokenSelect<ExtArgs> | null;
    omit?: Prisma.DeviceTokenOmit<ExtArgs> | null;
    include?: Prisma.DeviceTokenInclude<ExtArgs> | null;
    where?: Prisma.DeviceTokenWhereInput;
    orderBy?: Prisma.DeviceTokenOrderByWithRelationInput | Prisma.DeviceTokenOrderByWithRelationInput[];
    cursor?: Prisma.DeviceTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeviceTokenScalarFieldEnum | Prisma.DeviceTokenScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
