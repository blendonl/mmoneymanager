import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type FamilyModel = runtime.Types.Result.DefaultSelection<Prisma.$FamilyPayload>;
export type AggregateFamily = {
    _count: FamilyCountAggregateOutputType | null;
    _avg: FamilyAvgAggregateOutputType | null;
    _sum: FamilySumAggregateOutputType | null;
    _min: FamilyMinAggregateOutputType | null;
    _max: FamilyMaxAggregateOutputType | null;
};
export type FamilyAvgAggregateOutputType = {
    balance: runtime.Decimal | null;
};
export type FamilySumAggregateOutputType = {
    balance: runtime.Decimal | null;
};
export type FamilyMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    balance: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FamilyMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    balance: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FamilyCountAggregateOutputType = {
    id: number;
    name: number;
    balance: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FamilyAvgAggregateInputType = {
    balance?: true;
};
export type FamilySumAggregateInputType = {
    balance?: true;
};
export type FamilyMinAggregateInputType = {
    id?: true;
    name?: true;
    balance?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FamilyMaxAggregateInputType = {
    id?: true;
    name?: true;
    balance?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FamilyCountAggregateInputType = {
    id?: true;
    name?: true;
    balance?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FamilyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FamilyWhereInput;
    orderBy?: Prisma.FamilyOrderByWithRelationInput | Prisma.FamilyOrderByWithRelationInput[];
    cursor?: Prisma.FamilyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FamilyCountAggregateInputType;
    _avg?: FamilyAvgAggregateInputType;
    _sum?: FamilySumAggregateInputType;
    _min?: FamilyMinAggregateInputType;
    _max?: FamilyMaxAggregateInputType;
};
export type GetFamilyAggregateType<T extends FamilyAggregateArgs> = {
    [P in keyof T & keyof AggregateFamily]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFamily[P]> : Prisma.GetScalarType<T[P], AggregateFamily[P]>;
};
export type FamilyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FamilyWhereInput;
    orderBy?: Prisma.FamilyOrderByWithAggregationInput | Prisma.FamilyOrderByWithAggregationInput[];
    by: Prisma.FamilyScalarFieldEnum[] | Prisma.FamilyScalarFieldEnum;
    having?: Prisma.FamilyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FamilyCountAggregateInputType | true;
    _avg?: FamilyAvgAggregateInputType;
    _sum?: FamilySumAggregateInputType;
    _min?: FamilyMinAggregateInputType;
    _max?: FamilyMaxAggregateInputType;
};
export type FamilyGroupByOutputType = {
    id: string;
    name: string;
    balance: runtime.Decimal;
    createdAt: Date;
    updatedAt: Date;
    _count: FamilyCountAggregateOutputType | null;
    _avg: FamilyAvgAggregateOutputType | null;
    _sum: FamilySumAggregateOutputType | null;
    _min: FamilyMinAggregateOutputType | null;
    _max: FamilyMaxAggregateOutputType | null;
};
type GetFamilyGroupByPayload<T extends FamilyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FamilyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FamilyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FamilyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FamilyGroupByOutputType[P]>;
}>>;
export type FamilyWhereInput = {
    AND?: Prisma.FamilyWhereInput | Prisma.FamilyWhereInput[];
    OR?: Prisma.FamilyWhereInput[];
    NOT?: Prisma.FamilyWhereInput | Prisma.FamilyWhereInput[];
    id?: Prisma.StringFilter<"Family"> | string;
    name?: Prisma.StringFilter<"Family"> | string;
    balance?: Prisma.DecimalFilter<"Family"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"Family"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Family"> | Date | string;
    members?: Prisma.FamilyMemberListRelationFilter;
    invitations?: Prisma.FamilyInvitationListRelationFilter;
    transactions?: Prisma.TransactionListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
};
export type FamilyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    members?: Prisma.FamilyMemberOrderByRelationAggregateInput;
    invitations?: Prisma.FamilyInvitationOrderByRelationAggregateInput;
    transactions?: Prisma.TransactionOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
};
export type FamilyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.FamilyWhereInput | Prisma.FamilyWhereInput[];
    OR?: Prisma.FamilyWhereInput[];
    NOT?: Prisma.FamilyWhereInput | Prisma.FamilyWhereInput[];
    name?: Prisma.StringFilter<"Family"> | string;
    balance?: Prisma.DecimalFilter<"Family"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"Family"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Family"> | Date | string;
    members?: Prisma.FamilyMemberListRelationFilter;
    invitations?: Prisma.FamilyInvitationListRelationFilter;
    transactions?: Prisma.TransactionListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
}, "id">;
export type FamilyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FamilyCountOrderByAggregateInput;
    _avg?: Prisma.FamilyAvgOrderByAggregateInput;
    _max?: Prisma.FamilyMaxOrderByAggregateInput;
    _min?: Prisma.FamilyMinOrderByAggregateInput;
    _sum?: Prisma.FamilySumOrderByAggregateInput;
};
export type FamilyScalarWhereWithAggregatesInput = {
    AND?: Prisma.FamilyScalarWhereWithAggregatesInput | Prisma.FamilyScalarWhereWithAggregatesInput[];
    OR?: Prisma.FamilyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FamilyScalarWhereWithAggregatesInput | Prisma.FamilyScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Family"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Family"> | string;
    balance?: Prisma.DecimalWithAggregatesFilter<"Family"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Family"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Family"> | Date | string;
};
export type FamilyCreateInput = {
    id?: string;
    name: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.FamilyMemberCreateNestedManyWithoutFamilyInput;
    invitations?: Prisma.FamilyInvitationCreateNestedManyWithoutFamilyInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutFamilyInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutFamilyInput;
};
export type FamilyUncheckedCreateInput = {
    id?: string;
    name: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.FamilyMemberUncheckedCreateNestedManyWithoutFamilyInput;
    invitations?: Prisma.FamilyInvitationUncheckedCreateNestedManyWithoutFamilyInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutFamilyInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutFamilyInput;
};
export type FamilyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.FamilyMemberUpdateManyWithoutFamilyNestedInput;
    invitations?: Prisma.FamilyInvitationUpdateManyWithoutFamilyNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutFamilyNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutFamilyNestedInput;
};
export type FamilyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.FamilyMemberUncheckedUpdateManyWithoutFamilyNestedInput;
    invitations?: Prisma.FamilyInvitationUncheckedUpdateManyWithoutFamilyNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutFamilyNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutFamilyNestedInput;
};
export type FamilyCreateManyInput = {
    id?: string;
    name: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FamilyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FamilyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FamilyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FamilyAvgOrderByAggregateInput = {
    balance?: Prisma.SortOrder;
};
export type FamilyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FamilyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FamilySumOrderByAggregateInput = {
    balance?: Prisma.SortOrder;
};
export type FamilyScalarRelationFilter = {
    is?: Prisma.FamilyWhereInput;
    isNot?: Prisma.FamilyWhereInput;
};
export type FamilyNullableScalarRelationFilter = {
    is?: Prisma.FamilyWhereInput | null;
    isNot?: Prisma.FamilyWhereInput | null;
};
export type FamilyCreateNestedOneWithoutMembersInput = {
    create?: Prisma.XOR<Prisma.FamilyCreateWithoutMembersInput, Prisma.FamilyUncheckedCreateWithoutMembersInput>;
    connectOrCreate?: Prisma.FamilyCreateOrConnectWithoutMembersInput;
    connect?: Prisma.FamilyWhereUniqueInput;
};
export type FamilyUpdateOneRequiredWithoutMembersNestedInput = {
    create?: Prisma.XOR<Prisma.FamilyCreateWithoutMembersInput, Prisma.FamilyUncheckedCreateWithoutMembersInput>;
    connectOrCreate?: Prisma.FamilyCreateOrConnectWithoutMembersInput;
    upsert?: Prisma.FamilyUpsertWithoutMembersInput;
    connect?: Prisma.FamilyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FamilyUpdateToOneWithWhereWithoutMembersInput, Prisma.FamilyUpdateWithoutMembersInput>, Prisma.FamilyUncheckedUpdateWithoutMembersInput>;
};
export type FamilyCreateNestedOneWithoutInvitationsInput = {
    create?: Prisma.XOR<Prisma.FamilyCreateWithoutInvitationsInput, Prisma.FamilyUncheckedCreateWithoutInvitationsInput>;
    connectOrCreate?: Prisma.FamilyCreateOrConnectWithoutInvitationsInput;
    connect?: Prisma.FamilyWhereUniqueInput;
};
export type FamilyUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: Prisma.XOR<Prisma.FamilyCreateWithoutInvitationsInput, Prisma.FamilyUncheckedCreateWithoutInvitationsInput>;
    connectOrCreate?: Prisma.FamilyCreateOrConnectWithoutInvitationsInput;
    upsert?: Prisma.FamilyUpsertWithoutInvitationsInput;
    connect?: Prisma.FamilyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FamilyUpdateToOneWithWhereWithoutInvitationsInput, Prisma.FamilyUpdateWithoutInvitationsInput>, Prisma.FamilyUncheckedUpdateWithoutInvitationsInput>;
};
export type FamilyCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.FamilyCreateWithoutNotificationsInput, Prisma.FamilyUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.FamilyCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.FamilyWhereUniqueInput;
};
export type FamilyUpdateOneWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.FamilyCreateWithoutNotificationsInput, Prisma.FamilyUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.FamilyCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.FamilyUpsertWithoutNotificationsInput;
    disconnect?: Prisma.FamilyWhereInput | boolean;
    delete?: Prisma.FamilyWhereInput | boolean;
    connect?: Prisma.FamilyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FamilyUpdateToOneWithWhereWithoutNotificationsInput, Prisma.FamilyUpdateWithoutNotificationsInput>, Prisma.FamilyUncheckedUpdateWithoutNotificationsInput>;
};
export type FamilyCreateNestedOneWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.FamilyCreateWithoutTransactionsInput, Prisma.FamilyUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.FamilyCreateOrConnectWithoutTransactionsInput;
    connect?: Prisma.FamilyWhereUniqueInput;
};
export type FamilyUpdateOneWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.FamilyCreateWithoutTransactionsInput, Prisma.FamilyUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.FamilyCreateOrConnectWithoutTransactionsInput;
    upsert?: Prisma.FamilyUpsertWithoutTransactionsInput;
    disconnect?: Prisma.FamilyWhereInput | boolean;
    delete?: Prisma.FamilyWhereInput | boolean;
    connect?: Prisma.FamilyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FamilyUpdateToOneWithWhereWithoutTransactionsInput, Prisma.FamilyUpdateWithoutTransactionsInput>, Prisma.FamilyUncheckedUpdateWithoutTransactionsInput>;
};
export type FamilyCreateWithoutMembersInput = {
    id?: string;
    name: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    invitations?: Prisma.FamilyInvitationCreateNestedManyWithoutFamilyInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutFamilyInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutFamilyInput;
};
export type FamilyUncheckedCreateWithoutMembersInput = {
    id?: string;
    name: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    invitations?: Prisma.FamilyInvitationUncheckedCreateNestedManyWithoutFamilyInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutFamilyInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutFamilyInput;
};
export type FamilyCreateOrConnectWithoutMembersInput = {
    where: Prisma.FamilyWhereUniqueInput;
    create: Prisma.XOR<Prisma.FamilyCreateWithoutMembersInput, Prisma.FamilyUncheckedCreateWithoutMembersInput>;
};
export type FamilyUpsertWithoutMembersInput = {
    update: Prisma.XOR<Prisma.FamilyUpdateWithoutMembersInput, Prisma.FamilyUncheckedUpdateWithoutMembersInput>;
    create: Prisma.XOR<Prisma.FamilyCreateWithoutMembersInput, Prisma.FamilyUncheckedCreateWithoutMembersInput>;
    where?: Prisma.FamilyWhereInput;
};
export type FamilyUpdateToOneWithWhereWithoutMembersInput = {
    where?: Prisma.FamilyWhereInput;
    data: Prisma.XOR<Prisma.FamilyUpdateWithoutMembersInput, Prisma.FamilyUncheckedUpdateWithoutMembersInput>;
};
export type FamilyUpdateWithoutMembersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invitations?: Prisma.FamilyInvitationUpdateManyWithoutFamilyNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutFamilyNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutFamilyNestedInput;
};
export type FamilyUncheckedUpdateWithoutMembersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invitations?: Prisma.FamilyInvitationUncheckedUpdateManyWithoutFamilyNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutFamilyNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutFamilyNestedInput;
};
export type FamilyCreateWithoutInvitationsInput = {
    id?: string;
    name: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.FamilyMemberCreateNestedManyWithoutFamilyInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutFamilyInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutFamilyInput;
};
export type FamilyUncheckedCreateWithoutInvitationsInput = {
    id?: string;
    name: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.FamilyMemberUncheckedCreateNestedManyWithoutFamilyInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutFamilyInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutFamilyInput;
};
export type FamilyCreateOrConnectWithoutInvitationsInput = {
    where: Prisma.FamilyWhereUniqueInput;
    create: Prisma.XOR<Prisma.FamilyCreateWithoutInvitationsInput, Prisma.FamilyUncheckedCreateWithoutInvitationsInput>;
};
export type FamilyUpsertWithoutInvitationsInput = {
    update: Prisma.XOR<Prisma.FamilyUpdateWithoutInvitationsInput, Prisma.FamilyUncheckedUpdateWithoutInvitationsInput>;
    create: Prisma.XOR<Prisma.FamilyCreateWithoutInvitationsInput, Prisma.FamilyUncheckedCreateWithoutInvitationsInput>;
    where?: Prisma.FamilyWhereInput;
};
export type FamilyUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: Prisma.FamilyWhereInput;
    data: Prisma.XOR<Prisma.FamilyUpdateWithoutInvitationsInput, Prisma.FamilyUncheckedUpdateWithoutInvitationsInput>;
};
export type FamilyUpdateWithoutInvitationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.FamilyMemberUpdateManyWithoutFamilyNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutFamilyNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutFamilyNestedInput;
};
export type FamilyUncheckedUpdateWithoutInvitationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.FamilyMemberUncheckedUpdateManyWithoutFamilyNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutFamilyNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutFamilyNestedInput;
};
export type FamilyCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.FamilyMemberCreateNestedManyWithoutFamilyInput;
    invitations?: Prisma.FamilyInvitationCreateNestedManyWithoutFamilyInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutFamilyInput;
};
export type FamilyUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.FamilyMemberUncheckedCreateNestedManyWithoutFamilyInput;
    invitations?: Prisma.FamilyInvitationUncheckedCreateNestedManyWithoutFamilyInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutFamilyInput;
};
export type FamilyCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.FamilyWhereUniqueInput;
    create: Prisma.XOR<Prisma.FamilyCreateWithoutNotificationsInput, Prisma.FamilyUncheckedCreateWithoutNotificationsInput>;
};
export type FamilyUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.FamilyUpdateWithoutNotificationsInput, Prisma.FamilyUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.FamilyCreateWithoutNotificationsInput, Prisma.FamilyUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.FamilyWhereInput;
};
export type FamilyUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.FamilyWhereInput;
    data: Prisma.XOR<Prisma.FamilyUpdateWithoutNotificationsInput, Prisma.FamilyUncheckedUpdateWithoutNotificationsInput>;
};
export type FamilyUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.FamilyMemberUpdateManyWithoutFamilyNestedInput;
    invitations?: Prisma.FamilyInvitationUpdateManyWithoutFamilyNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutFamilyNestedInput;
};
export type FamilyUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.FamilyMemberUncheckedUpdateManyWithoutFamilyNestedInput;
    invitations?: Prisma.FamilyInvitationUncheckedUpdateManyWithoutFamilyNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutFamilyNestedInput;
};
export type FamilyCreateWithoutTransactionsInput = {
    id?: string;
    name: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.FamilyMemberCreateNestedManyWithoutFamilyInput;
    invitations?: Prisma.FamilyInvitationCreateNestedManyWithoutFamilyInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutFamilyInput;
};
export type FamilyUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    name: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.FamilyMemberUncheckedCreateNestedManyWithoutFamilyInput;
    invitations?: Prisma.FamilyInvitationUncheckedCreateNestedManyWithoutFamilyInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutFamilyInput;
};
export type FamilyCreateOrConnectWithoutTransactionsInput = {
    where: Prisma.FamilyWhereUniqueInput;
    create: Prisma.XOR<Prisma.FamilyCreateWithoutTransactionsInput, Prisma.FamilyUncheckedCreateWithoutTransactionsInput>;
};
export type FamilyUpsertWithoutTransactionsInput = {
    update: Prisma.XOR<Prisma.FamilyUpdateWithoutTransactionsInput, Prisma.FamilyUncheckedUpdateWithoutTransactionsInput>;
    create: Prisma.XOR<Prisma.FamilyCreateWithoutTransactionsInput, Prisma.FamilyUncheckedCreateWithoutTransactionsInput>;
    where?: Prisma.FamilyWhereInput;
};
export type FamilyUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: Prisma.FamilyWhereInput;
    data: Prisma.XOR<Prisma.FamilyUpdateWithoutTransactionsInput, Prisma.FamilyUncheckedUpdateWithoutTransactionsInput>;
};
export type FamilyUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.FamilyMemberUpdateManyWithoutFamilyNestedInput;
    invitations?: Prisma.FamilyInvitationUpdateManyWithoutFamilyNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutFamilyNestedInput;
};
export type FamilyUncheckedUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.FamilyMemberUncheckedUpdateManyWithoutFamilyNestedInput;
    invitations?: Prisma.FamilyInvitationUncheckedUpdateManyWithoutFamilyNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutFamilyNestedInput;
};
export type FamilyCountOutputType = {
    members: number;
    invitations: number;
    transactions: number;
    notifications: number;
};
export type FamilyCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    members?: boolean | FamilyCountOutputTypeCountMembersArgs;
    invitations?: boolean | FamilyCountOutputTypeCountInvitationsArgs;
    transactions?: boolean | FamilyCountOutputTypeCountTransactionsArgs;
    notifications?: boolean | FamilyCountOutputTypeCountNotificationsArgs;
};
export type FamilyCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilyCountOutputTypeSelect<ExtArgs> | null;
};
export type FamilyCountOutputTypeCountMembersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FamilyMemberWhereInput;
};
export type FamilyCountOutputTypeCountInvitationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FamilyInvitationWhereInput;
};
export type FamilyCountOutputTypeCountTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
};
export type FamilyCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
export type FamilySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    balance?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    members?: boolean | Prisma.Family$membersArgs<ExtArgs>;
    invitations?: boolean | Prisma.Family$invitationsArgs<ExtArgs>;
    transactions?: boolean | Prisma.Family$transactionsArgs<ExtArgs>;
    notifications?: boolean | Prisma.Family$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.FamilyCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["family"]>;
export type FamilySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    balance?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["family"]>;
export type FamilySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    balance?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["family"]>;
export type FamilySelectScalar = {
    id?: boolean;
    name?: boolean;
    balance?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FamilyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "balance" | "createdAt" | "updatedAt", ExtArgs["result"]["family"]>;
export type FamilyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    members?: boolean | Prisma.Family$membersArgs<ExtArgs>;
    invitations?: boolean | Prisma.Family$invitationsArgs<ExtArgs>;
    transactions?: boolean | Prisma.Family$transactionsArgs<ExtArgs>;
    notifications?: boolean | Prisma.Family$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.FamilyCountOutputTypeDefaultArgs<ExtArgs>;
};
export type FamilyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type FamilyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $FamilyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Family";
    objects: {
        members: Prisma.$FamilyMemberPayload<ExtArgs>[];
        invitations: Prisma.$FamilyInvitationPayload<ExtArgs>[];
        transactions: Prisma.$TransactionPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        balance: runtime.Decimal;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["family"]>;
    composites: {};
};
export type FamilyGetPayload<S extends boolean | null | undefined | FamilyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FamilyPayload, S>;
export type FamilyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FamilyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FamilyCountAggregateInputType | true;
};
export interface FamilyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Family'];
        meta: {
            name: 'Family';
        };
    };
    findUnique<T extends FamilyFindUniqueArgs>(args: Prisma.SelectSubset<T, FamilyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FamilyClient<runtime.Types.Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FamilyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FamilyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FamilyClient<runtime.Types.Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FamilyFindFirstArgs>(args?: Prisma.SelectSubset<T, FamilyFindFirstArgs<ExtArgs>>): Prisma.Prisma__FamilyClient<runtime.Types.Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FamilyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FamilyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FamilyClient<runtime.Types.Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FamilyFindManyArgs>(args?: Prisma.SelectSubset<T, FamilyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FamilyCreateArgs>(args: Prisma.SelectSubset<T, FamilyCreateArgs<ExtArgs>>): Prisma.Prisma__FamilyClient<runtime.Types.Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FamilyCreateManyArgs>(args?: Prisma.SelectSubset<T, FamilyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FamilyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FamilyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FamilyDeleteArgs>(args: Prisma.SelectSubset<T, FamilyDeleteArgs<ExtArgs>>): Prisma.Prisma__FamilyClient<runtime.Types.Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FamilyUpdateArgs>(args: Prisma.SelectSubset<T, FamilyUpdateArgs<ExtArgs>>): Prisma.Prisma__FamilyClient<runtime.Types.Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FamilyDeleteManyArgs>(args?: Prisma.SelectSubset<T, FamilyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FamilyUpdateManyArgs>(args: Prisma.SelectSubset<T, FamilyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FamilyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FamilyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FamilyUpsertArgs>(args: Prisma.SelectSubset<T, FamilyUpsertArgs<ExtArgs>>): Prisma.Prisma__FamilyClient<runtime.Types.Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FamilyCountArgs>(args?: Prisma.Subset<T, FamilyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FamilyCountAggregateOutputType> : number>;
    aggregate<T extends FamilyAggregateArgs>(args: Prisma.Subset<T, FamilyAggregateArgs>): Prisma.PrismaPromise<GetFamilyAggregateType<T>>;
    groupBy<T extends FamilyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FamilyGroupByArgs['orderBy'];
    } : {
        orderBy?: FamilyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FamilyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FamilyFieldRefs;
}
export interface Prisma__FamilyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    members<T extends Prisma.Family$membersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Family$membersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    invitations<T extends Prisma.Family$invitationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Family$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FamilyInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transactions<T extends Prisma.Family$transactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Family$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.Family$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Family$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FamilyFieldRefs {
    readonly id: Prisma.FieldRef<"Family", 'String'>;
    readonly name: Prisma.FieldRef<"Family", 'String'>;
    readonly balance: Prisma.FieldRef<"Family", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"Family", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Family", 'DateTime'>;
}
export type FamilyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilySelect<ExtArgs> | null;
    omit?: Prisma.FamilyOmit<ExtArgs> | null;
    include?: Prisma.FamilyInclude<ExtArgs> | null;
    where: Prisma.FamilyWhereUniqueInput;
};
export type FamilyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilySelect<ExtArgs> | null;
    omit?: Prisma.FamilyOmit<ExtArgs> | null;
    include?: Prisma.FamilyInclude<ExtArgs> | null;
    where: Prisma.FamilyWhereUniqueInput;
};
export type FamilyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilySelect<ExtArgs> | null;
    omit?: Prisma.FamilyOmit<ExtArgs> | null;
    include?: Prisma.FamilyInclude<ExtArgs> | null;
    where?: Prisma.FamilyWhereInput;
    orderBy?: Prisma.FamilyOrderByWithRelationInput | Prisma.FamilyOrderByWithRelationInput[];
    cursor?: Prisma.FamilyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FamilyScalarFieldEnum | Prisma.FamilyScalarFieldEnum[];
};
export type FamilyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilySelect<ExtArgs> | null;
    omit?: Prisma.FamilyOmit<ExtArgs> | null;
    include?: Prisma.FamilyInclude<ExtArgs> | null;
    where?: Prisma.FamilyWhereInput;
    orderBy?: Prisma.FamilyOrderByWithRelationInput | Prisma.FamilyOrderByWithRelationInput[];
    cursor?: Prisma.FamilyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FamilyScalarFieldEnum | Prisma.FamilyScalarFieldEnum[];
};
export type FamilyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilySelect<ExtArgs> | null;
    omit?: Prisma.FamilyOmit<ExtArgs> | null;
    include?: Prisma.FamilyInclude<ExtArgs> | null;
    where?: Prisma.FamilyWhereInput;
    orderBy?: Prisma.FamilyOrderByWithRelationInput | Prisma.FamilyOrderByWithRelationInput[];
    cursor?: Prisma.FamilyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FamilyScalarFieldEnum | Prisma.FamilyScalarFieldEnum[];
};
export type FamilyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilySelect<ExtArgs> | null;
    omit?: Prisma.FamilyOmit<ExtArgs> | null;
    include?: Prisma.FamilyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FamilyCreateInput, Prisma.FamilyUncheckedCreateInput>;
};
export type FamilyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FamilyCreateManyInput | Prisma.FamilyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FamilyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FamilyOmit<ExtArgs> | null;
    data: Prisma.FamilyCreateManyInput | Prisma.FamilyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FamilyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilySelect<ExtArgs> | null;
    omit?: Prisma.FamilyOmit<ExtArgs> | null;
    include?: Prisma.FamilyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FamilyUpdateInput, Prisma.FamilyUncheckedUpdateInput>;
    where: Prisma.FamilyWhereUniqueInput;
};
export type FamilyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FamilyUpdateManyMutationInput, Prisma.FamilyUncheckedUpdateManyInput>;
    where?: Prisma.FamilyWhereInput;
    limit?: number;
};
export type FamilyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FamilyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FamilyUpdateManyMutationInput, Prisma.FamilyUncheckedUpdateManyInput>;
    where?: Prisma.FamilyWhereInput;
    limit?: number;
};
export type FamilyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilySelect<ExtArgs> | null;
    omit?: Prisma.FamilyOmit<ExtArgs> | null;
    include?: Prisma.FamilyInclude<ExtArgs> | null;
    where: Prisma.FamilyWhereUniqueInput;
    create: Prisma.XOR<Prisma.FamilyCreateInput, Prisma.FamilyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FamilyUpdateInput, Prisma.FamilyUncheckedUpdateInput>;
};
export type FamilyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilySelect<ExtArgs> | null;
    omit?: Prisma.FamilyOmit<ExtArgs> | null;
    include?: Prisma.FamilyInclude<ExtArgs> | null;
    where: Prisma.FamilyWhereUniqueInput;
};
export type FamilyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FamilyWhereInput;
    limit?: number;
};
export type Family$membersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Family$invitationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Family$transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Family$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FamilyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilySelect<ExtArgs> | null;
    omit?: Prisma.FamilyOmit<ExtArgs> | null;
    include?: Prisma.FamilyInclude<ExtArgs> | null;
};
export {};
