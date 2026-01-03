import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type FamilyInvitationModel = runtime.Types.Result.DefaultSelection<Prisma.$FamilyInvitationPayload>;
export type AggregateFamilyInvitation = {
    _count: FamilyInvitationCountAggregateOutputType | null;
    _min: FamilyInvitationMinAggregateOutputType | null;
    _max: FamilyInvitationMaxAggregateOutputType | null;
};
export type FamilyInvitationMinAggregateOutputType = {
    id: string | null;
    familyId: string | null;
    inviterId: string | null;
    inviteeId: string | null;
    inviteeEmail: string | null;
    status: $Enums.FamilyInvitationStatus | null;
    expiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FamilyInvitationMaxAggregateOutputType = {
    id: string | null;
    familyId: string | null;
    inviterId: string | null;
    inviteeId: string | null;
    inviteeEmail: string | null;
    status: $Enums.FamilyInvitationStatus | null;
    expiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FamilyInvitationCountAggregateOutputType = {
    id: number;
    familyId: number;
    inviterId: number;
    inviteeId: number;
    inviteeEmail: number;
    status: number;
    expiresAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FamilyInvitationMinAggregateInputType = {
    id?: true;
    familyId?: true;
    inviterId?: true;
    inviteeId?: true;
    inviteeEmail?: true;
    status?: true;
    expiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FamilyInvitationMaxAggregateInputType = {
    id?: true;
    familyId?: true;
    inviterId?: true;
    inviteeId?: true;
    inviteeEmail?: true;
    status?: true;
    expiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FamilyInvitationCountAggregateInputType = {
    id?: true;
    familyId?: true;
    inviterId?: true;
    inviteeId?: true;
    inviteeEmail?: true;
    status?: true;
    expiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FamilyInvitationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FamilyInvitationWhereInput;
    orderBy?: Prisma.FamilyInvitationOrderByWithRelationInput | Prisma.FamilyInvitationOrderByWithRelationInput[];
    cursor?: Prisma.FamilyInvitationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FamilyInvitationCountAggregateInputType;
    _min?: FamilyInvitationMinAggregateInputType;
    _max?: FamilyInvitationMaxAggregateInputType;
};
export type GetFamilyInvitationAggregateType<T extends FamilyInvitationAggregateArgs> = {
    [P in keyof T & keyof AggregateFamilyInvitation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFamilyInvitation[P]> : Prisma.GetScalarType<T[P], AggregateFamilyInvitation[P]>;
};
export type FamilyInvitationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FamilyInvitationWhereInput;
    orderBy?: Prisma.FamilyInvitationOrderByWithAggregationInput | Prisma.FamilyInvitationOrderByWithAggregationInput[];
    by: Prisma.FamilyInvitationScalarFieldEnum[] | Prisma.FamilyInvitationScalarFieldEnum;
    having?: Prisma.FamilyInvitationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FamilyInvitationCountAggregateInputType | true;
    _min?: FamilyInvitationMinAggregateInputType;
    _max?: FamilyInvitationMaxAggregateInputType;
};
export type FamilyInvitationGroupByOutputType = {
    id: string;
    familyId: string;
    inviterId: string;
    inviteeId: string | null;
    inviteeEmail: string;
    status: $Enums.FamilyInvitationStatus;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: FamilyInvitationCountAggregateOutputType | null;
    _min: FamilyInvitationMinAggregateOutputType | null;
    _max: FamilyInvitationMaxAggregateOutputType | null;
};
type GetFamilyInvitationGroupByPayload<T extends FamilyInvitationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FamilyInvitationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FamilyInvitationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FamilyInvitationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FamilyInvitationGroupByOutputType[P]>;
}>>;
export type FamilyInvitationWhereInput = {
    AND?: Prisma.FamilyInvitationWhereInput | Prisma.FamilyInvitationWhereInput[];
    OR?: Prisma.FamilyInvitationWhereInput[];
    NOT?: Prisma.FamilyInvitationWhereInput | Prisma.FamilyInvitationWhereInput[];
    id?: Prisma.StringFilter<"FamilyInvitation"> | string;
    familyId?: Prisma.StringFilter<"FamilyInvitation"> | string;
    inviterId?: Prisma.StringFilter<"FamilyInvitation"> | string;
    inviteeId?: Prisma.StringNullableFilter<"FamilyInvitation"> | string | null;
    inviteeEmail?: Prisma.StringFilter<"FamilyInvitation"> | string;
    status?: Prisma.EnumFamilyInvitationStatusFilter<"FamilyInvitation"> | $Enums.FamilyInvitationStatus;
    expiresAt?: Prisma.DateTimeFilter<"FamilyInvitation"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"FamilyInvitation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FamilyInvitation"> | Date | string;
    family?: Prisma.XOR<Prisma.FamilyScalarRelationFilter, Prisma.FamilyWhereInput>;
    inviter?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    invitee?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type FamilyInvitationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    familyId?: Prisma.SortOrder;
    inviterId?: Prisma.SortOrder;
    inviteeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    inviteeEmail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    family?: Prisma.FamilyOrderByWithRelationInput;
    inviter?: Prisma.UserOrderByWithRelationInput;
    invitee?: Prisma.UserOrderByWithRelationInput;
};
export type FamilyInvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.FamilyInvitationWhereInput | Prisma.FamilyInvitationWhereInput[];
    OR?: Prisma.FamilyInvitationWhereInput[];
    NOT?: Prisma.FamilyInvitationWhereInput | Prisma.FamilyInvitationWhereInput[];
    familyId?: Prisma.StringFilter<"FamilyInvitation"> | string;
    inviterId?: Prisma.StringFilter<"FamilyInvitation"> | string;
    inviteeId?: Prisma.StringNullableFilter<"FamilyInvitation"> | string | null;
    inviteeEmail?: Prisma.StringFilter<"FamilyInvitation"> | string;
    status?: Prisma.EnumFamilyInvitationStatusFilter<"FamilyInvitation"> | $Enums.FamilyInvitationStatus;
    expiresAt?: Prisma.DateTimeFilter<"FamilyInvitation"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"FamilyInvitation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FamilyInvitation"> | Date | string;
    family?: Prisma.XOR<Prisma.FamilyScalarRelationFilter, Prisma.FamilyWhereInput>;
    inviter?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    invitee?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type FamilyInvitationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    familyId?: Prisma.SortOrder;
    inviterId?: Prisma.SortOrder;
    inviteeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    inviteeEmail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FamilyInvitationCountOrderByAggregateInput;
    _max?: Prisma.FamilyInvitationMaxOrderByAggregateInput;
    _min?: Prisma.FamilyInvitationMinOrderByAggregateInput;
};
export type FamilyInvitationScalarWhereWithAggregatesInput = {
    AND?: Prisma.FamilyInvitationScalarWhereWithAggregatesInput | Prisma.FamilyInvitationScalarWhereWithAggregatesInput[];
    OR?: Prisma.FamilyInvitationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FamilyInvitationScalarWhereWithAggregatesInput | Prisma.FamilyInvitationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FamilyInvitation"> | string;
    familyId?: Prisma.StringWithAggregatesFilter<"FamilyInvitation"> | string;
    inviterId?: Prisma.StringWithAggregatesFilter<"FamilyInvitation"> | string;
    inviteeId?: Prisma.StringNullableWithAggregatesFilter<"FamilyInvitation"> | string | null;
    inviteeEmail?: Prisma.StringWithAggregatesFilter<"FamilyInvitation"> | string;
    status?: Prisma.EnumFamilyInvitationStatusWithAggregatesFilter<"FamilyInvitation"> | $Enums.FamilyInvitationStatus;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"FamilyInvitation"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FamilyInvitation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"FamilyInvitation"> | Date | string;
};
export type FamilyInvitationCreateInput = {
    id?: string;
    inviteeEmail: string;
    status?: $Enums.FamilyInvitationStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    family: Prisma.FamilyCreateNestedOneWithoutInvitationsInput;
    inviter: Prisma.UserCreateNestedOneWithoutSentInvitationsInput;
    invitee?: Prisma.UserCreateNestedOneWithoutReceivedInvitationsInput;
};
export type FamilyInvitationUncheckedCreateInput = {
    id?: string;
    familyId: string;
    inviterId: string;
    inviteeId?: string | null;
    inviteeEmail: string;
    status?: $Enums.FamilyInvitationStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FamilyInvitationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inviteeEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFamilyInvitationStatusFieldUpdateOperationsInput | $Enums.FamilyInvitationStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    family?: Prisma.FamilyUpdateOneRequiredWithoutInvitationsNestedInput;
    inviter?: Prisma.UserUpdateOneRequiredWithoutSentInvitationsNestedInput;
    invitee?: Prisma.UserUpdateOneWithoutReceivedInvitationsNestedInput;
};
export type FamilyInvitationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    familyId?: Prisma.StringFieldUpdateOperationsInput | string;
    inviterId?: Prisma.StringFieldUpdateOperationsInput | string;
    inviteeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inviteeEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFamilyInvitationStatusFieldUpdateOperationsInput | $Enums.FamilyInvitationStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FamilyInvitationCreateManyInput = {
    id?: string;
    familyId: string;
    inviterId: string;
    inviteeId?: string | null;
    inviteeEmail: string;
    status?: $Enums.FamilyInvitationStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FamilyInvitationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inviteeEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFamilyInvitationStatusFieldUpdateOperationsInput | $Enums.FamilyInvitationStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FamilyInvitationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    familyId?: Prisma.StringFieldUpdateOperationsInput | string;
    inviterId?: Prisma.StringFieldUpdateOperationsInput | string;
    inviteeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inviteeEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFamilyInvitationStatusFieldUpdateOperationsInput | $Enums.FamilyInvitationStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FamilyInvitationListRelationFilter = {
    every?: Prisma.FamilyInvitationWhereInput;
    some?: Prisma.FamilyInvitationWhereInput;
    none?: Prisma.FamilyInvitationWhereInput;
};
export type FamilyInvitationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FamilyInvitationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    familyId?: Prisma.SortOrder;
    inviterId?: Prisma.SortOrder;
    inviteeId?: Prisma.SortOrder;
    inviteeEmail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FamilyInvitationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    familyId?: Prisma.SortOrder;
    inviterId?: Prisma.SortOrder;
    inviteeId?: Prisma.SortOrder;
    inviteeEmail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FamilyInvitationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    familyId?: Prisma.SortOrder;
    inviterId?: Prisma.SortOrder;
    inviteeId?: Prisma.SortOrder;
    inviteeEmail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FamilyInvitationCreateNestedManyWithoutFamilyInput = {
    create?: Prisma.XOR<Prisma.FamilyInvitationCreateWithoutFamilyInput, Prisma.FamilyInvitationUncheckedCreateWithoutFamilyInput> | Prisma.FamilyInvitationCreateWithoutFamilyInput[] | Prisma.FamilyInvitationUncheckedCreateWithoutFamilyInput[];
    connectOrCreate?: Prisma.FamilyInvitationCreateOrConnectWithoutFamilyInput | Prisma.FamilyInvitationCreateOrConnectWithoutFamilyInput[];
    createMany?: Prisma.FamilyInvitationCreateManyFamilyInputEnvelope;
    connect?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
};
export type FamilyInvitationUncheckedCreateNestedManyWithoutFamilyInput = {
    create?: Prisma.XOR<Prisma.FamilyInvitationCreateWithoutFamilyInput, Prisma.FamilyInvitationUncheckedCreateWithoutFamilyInput> | Prisma.FamilyInvitationCreateWithoutFamilyInput[] | Prisma.FamilyInvitationUncheckedCreateWithoutFamilyInput[];
    connectOrCreate?: Prisma.FamilyInvitationCreateOrConnectWithoutFamilyInput | Prisma.FamilyInvitationCreateOrConnectWithoutFamilyInput[];
    createMany?: Prisma.FamilyInvitationCreateManyFamilyInputEnvelope;
    connect?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
};
export type FamilyInvitationUpdateManyWithoutFamilyNestedInput = {
    create?: Prisma.XOR<Prisma.FamilyInvitationCreateWithoutFamilyInput, Prisma.FamilyInvitationUncheckedCreateWithoutFamilyInput> | Prisma.FamilyInvitationCreateWithoutFamilyInput[] | Prisma.FamilyInvitationUncheckedCreateWithoutFamilyInput[];
    connectOrCreate?: Prisma.FamilyInvitationCreateOrConnectWithoutFamilyInput | Prisma.FamilyInvitationCreateOrConnectWithoutFamilyInput[];
    upsert?: Prisma.FamilyInvitationUpsertWithWhereUniqueWithoutFamilyInput | Prisma.FamilyInvitationUpsertWithWhereUniqueWithoutFamilyInput[];
    createMany?: Prisma.FamilyInvitationCreateManyFamilyInputEnvelope;
    set?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    disconnect?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    delete?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    connect?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    update?: Prisma.FamilyInvitationUpdateWithWhereUniqueWithoutFamilyInput | Prisma.FamilyInvitationUpdateWithWhereUniqueWithoutFamilyInput[];
    updateMany?: Prisma.FamilyInvitationUpdateManyWithWhereWithoutFamilyInput | Prisma.FamilyInvitationUpdateManyWithWhereWithoutFamilyInput[];
    deleteMany?: Prisma.FamilyInvitationScalarWhereInput | Prisma.FamilyInvitationScalarWhereInput[];
};
export type FamilyInvitationUncheckedUpdateManyWithoutFamilyNestedInput = {
    create?: Prisma.XOR<Prisma.FamilyInvitationCreateWithoutFamilyInput, Prisma.FamilyInvitationUncheckedCreateWithoutFamilyInput> | Prisma.FamilyInvitationCreateWithoutFamilyInput[] | Prisma.FamilyInvitationUncheckedCreateWithoutFamilyInput[];
    connectOrCreate?: Prisma.FamilyInvitationCreateOrConnectWithoutFamilyInput | Prisma.FamilyInvitationCreateOrConnectWithoutFamilyInput[];
    upsert?: Prisma.FamilyInvitationUpsertWithWhereUniqueWithoutFamilyInput | Prisma.FamilyInvitationUpsertWithWhereUniqueWithoutFamilyInput[];
    createMany?: Prisma.FamilyInvitationCreateManyFamilyInputEnvelope;
    set?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    disconnect?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    delete?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    connect?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    update?: Prisma.FamilyInvitationUpdateWithWhereUniqueWithoutFamilyInput | Prisma.FamilyInvitationUpdateWithWhereUniqueWithoutFamilyInput[];
    updateMany?: Prisma.FamilyInvitationUpdateManyWithWhereWithoutFamilyInput | Prisma.FamilyInvitationUpdateManyWithWhereWithoutFamilyInput[];
    deleteMany?: Prisma.FamilyInvitationScalarWhereInput | Prisma.FamilyInvitationScalarWhereInput[];
};
export type EnumFamilyInvitationStatusFieldUpdateOperationsInput = {
    set?: $Enums.FamilyInvitationStatus;
};
export type FamilyInvitationCreateNestedManyWithoutInviterInput = {
    create?: Prisma.XOR<Prisma.FamilyInvitationCreateWithoutInviterInput, Prisma.FamilyInvitationUncheckedCreateWithoutInviterInput> | Prisma.FamilyInvitationCreateWithoutInviterInput[] | Prisma.FamilyInvitationUncheckedCreateWithoutInviterInput[];
    connectOrCreate?: Prisma.FamilyInvitationCreateOrConnectWithoutInviterInput | Prisma.FamilyInvitationCreateOrConnectWithoutInviterInput[];
    createMany?: Prisma.FamilyInvitationCreateManyInviterInputEnvelope;
    connect?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
};
export type FamilyInvitationCreateNestedManyWithoutInviteeInput = {
    create?: Prisma.XOR<Prisma.FamilyInvitationCreateWithoutInviteeInput, Prisma.FamilyInvitationUncheckedCreateWithoutInviteeInput> | Prisma.FamilyInvitationCreateWithoutInviteeInput[] | Prisma.FamilyInvitationUncheckedCreateWithoutInviteeInput[];
    connectOrCreate?: Prisma.FamilyInvitationCreateOrConnectWithoutInviteeInput | Prisma.FamilyInvitationCreateOrConnectWithoutInviteeInput[];
    createMany?: Prisma.FamilyInvitationCreateManyInviteeInputEnvelope;
    connect?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
};
export type FamilyInvitationUncheckedCreateNestedManyWithoutInviterInput = {
    create?: Prisma.XOR<Prisma.FamilyInvitationCreateWithoutInviterInput, Prisma.FamilyInvitationUncheckedCreateWithoutInviterInput> | Prisma.FamilyInvitationCreateWithoutInviterInput[] | Prisma.FamilyInvitationUncheckedCreateWithoutInviterInput[];
    connectOrCreate?: Prisma.FamilyInvitationCreateOrConnectWithoutInviterInput | Prisma.FamilyInvitationCreateOrConnectWithoutInviterInput[];
    createMany?: Prisma.FamilyInvitationCreateManyInviterInputEnvelope;
    connect?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
};
export type FamilyInvitationUncheckedCreateNestedManyWithoutInviteeInput = {
    create?: Prisma.XOR<Prisma.FamilyInvitationCreateWithoutInviteeInput, Prisma.FamilyInvitationUncheckedCreateWithoutInviteeInput> | Prisma.FamilyInvitationCreateWithoutInviteeInput[] | Prisma.FamilyInvitationUncheckedCreateWithoutInviteeInput[];
    connectOrCreate?: Prisma.FamilyInvitationCreateOrConnectWithoutInviteeInput | Prisma.FamilyInvitationCreateOrConnectWithoutInviteeInput[];
    createMany?: Prisma.FamilyInvitationCreateManyInviteeInputEnvelope;
    connect?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
};
export type FamilyInvitationUpdateManyWithoutInviterNestedInput = {
    create?: Prisma.XOR<Prisma.FamilyInvitationCreateWithoutInviterInput, Prisma.FamilyInvitationUncheckedCreateWithoutInviterInput> | Prisma.FamilyInvitationCreateWithoutInviterInput[] | Prisma.FamilyInvitationUncheckedCreateWithoutInviterInput[];
    connectOrCreate?: Prisma.FamilyInvitationCreateOrConnectWithoutInviterInput | Prisma.FamilyInvitationCreateOrConnectWithoutInviterInput[];
    upsert?: Prisma.FamilyInvitationUpsertWithWhereUniqueWithoutInviterInput | Prisma.FamilyInvitationUpsertWithWhereUniqueWithoutInviterInput[];
    createMany?: Prisma.FamilyInvitationCreateManyInviterInputEnvelope;
    set?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    disconnect?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    delete?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    connect?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    update?: Prisma.FamilyInvitationUpdateWithWhereUniqueWithoutInviterInput | Prisma.FamilyInvitationUpdateWithWhereUniqueWithoutInviterInput[];
    updateMany?: Prisma.FamilyInvitationUpdateManyWithWhereWithoutInviterInput | Prisma.FamilyInvitationUpdateManyWithWhereWithoutInviterInput[];
    deleteMany?: Prisma.FamilyInvitationScalarWhereInput | Prisma.FamilyInvitationScalarWhereInput[];
};
export type FamilyInvitationUpdateManyWithoutInviteeNestedInput = {
    create?: Prisma.XOR<Prisma.FamilyInvitationCreateWithoutInviteeInput, Prisma.FamilyInvitationUncheckedCreateWithoutInviteeInput> | Prisma.FamilyInvitationCreateWithoutInviteeInput[] | Prisma.FamilyInvitationUncheckedCreateWithoutInviteeInput[];
    connectOrCreate?: Prisma.FamilyInvitationCreateOrConnectWithoutInviteeInput | Prisma.FamilyInvitationCreateOrConnectWithoutInviteeInput[];
    upsert?: Prisma.FamilyInvitationUpsertWithWhereUniqueWithoutInviteeInput | Prisma.FamilyInvitationUpsertWithWhereUniqueWithoutInviteeInput[];
    createMany?: Prisma.FamilyInvitationCreateManyInviteeInputEnvelope;
    set?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    disconnect?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    delete?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    connect?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    update?: Prisma.FamilyInvitationUpdateWithWhereUniqueWithoutInviteeInput | Prisma.FamilyInvitationUpdateWithWhereUniqueWithoutInviteeInput[];
    updateMany?: Prisma.FamilyInvitationUpdateManyWithWhereWithoutInviteeInput | Prisma.FamilyInvitationUpdateManyWithWhereWithoutInviteeInput[];
    deleteMany?: Prisma.FamilyInvitationScalarWhereInput | Prisma.FamilyInvitationScalarWhereInput[];
};
export type FamilyInvitationUncheckedUpdateManyWithoutInviterNestedInput = {
    create?: Prisma.XOR<Prisma.FamilyInvitationCreateWithoutInviterInput, Prisma.FamilyInvitationUncheckedCreateWithoutInviterInput> | Prisma.FamilyInvitationCreateWithoutInviterInput[] | Prisma.FamilyInvitationUncheckedCreateWithoutInviterInput[];
    connectOrCreate?: Prisma.FamilyInvitationCreateOrConnectWithoutInviterInput | Prisma.FamilyInvitationCreateOrConnectWithoutInviterInput[];
    upsert?: Prisma.FamilyInvitationUpsertWithWhereUniqueWithoutInviterInput | Prisma.FamilyInvitationUpsertWithWhereUniqueWithoutInviterInput[];
    createMany?: Prisma.FamilyInvitationCreateManyInviterInputEnvelope;
    set?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    disconnect?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    delete?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    connect?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    update?: Prisma.FamilyInvitationUpdateWithWhereUniqueWithoutInviterInput | Prisma.FamilyInvitationUpdateWithWhereUniqueWithoutInviterInput[];
    updateMany?: Prisma.FamilyInvitationUpdateManyWithWhereWithoutInviterInput | Prisma.FamilyInvitationUpdateManyWithWhereWithoutInviterInput[];
    deleteMany?: Prisma.FamilyInvitationScalarWhereInput | Prisma.FamilyInvitationScalarWhereInput[];
};
export type FamilyInvitationUncheckedUpdateManyWithoutInviteeNestedInput = {
    create?: Prisma.XOR<Prisma.FamilyInvitationCreateWithoutInviteeInput, Prisma.FamilyInvitationUncheckedCreateWithoutInviteeInput> | Prisma.FamilyInvitationCreateWithoutInviteeInput[] | Prisma.FamilyInvitationUncheckedCreateWithoutInviteeInput[];
    connectOrCreate?: Prisma.FamilyInvitationCreateOrConnectWithoutInviteeInput | Prisma.FamilyInvitationCreateOrConnectWithoutInviteeInput[];
    upsert?: Prisma.FamilyInvitationUpsertWithWhereUniqueWithoutInviteeInput | Prisma.FamilyInvitationUpsertWithWhereUniqueWithoutInviteeInput[];
    createMany?: Prisma.FamilyInvitationCreateManyInviteeInputEnvelope;
    set?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    disconnect?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    delete?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    connect?: Prisma.FamilyInvitationWhereUniqueInput | Prisma.FamilyInvitationWhereUniqueInput[];
    update?: Prisma.FamilyInvitationUpdateWithWhereUniqueWithoutInviteeInput | Prisma.FamilyInvitationUpdateWithWhereUniqueWithoutInviteeInput[];
    updateMany?: Prisma.FamilyInvitationUpdateManyWithWhereWithoutInviteeInput | Prisma.FamilyInvitationUpdateManyWithWhereWithoutInviteeInput[];
    deleteMany?: Prisma.FamilyInvitationScalarWhereInput | Prisma.FamilyInvitationScalarWhereInput[];
};
export type FamilyInvitationCreateWithoutFamilyInput = {
    id?: string;
    inviteeEmail: string;
    status?: $Enums.FamilyInvitationStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inviter: Prisma.UserCreateNestedOneWithoutSentInvitationsInput;
    invitee?: Prisma.UserCreateNestedOneWithoutReceivedInvitationsInput;
};
export type FamilyInvitationUncheckedCreateWithoutFamilyInput = {
    id?: string;
    inviterId: string;
    inviteeId?: string | null;
    inviteeEmail: string;
    status?: $Enums.FamilyInvitationStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FamilyInvitationCreateOrConnectWithoutFamilyInput = {
    where: Prisma.FamilyInvitationWhereUniqueInput;
    create: Prisma.XOR<Prisma.FamilyInvitationCreateWithoutFamilyInput, Prisma.FamilyInvitationUncheckedCreateWithoutFamilyInput>;
};
export type FamilyInvitationCreateManyFamilyInputEnvelope = {
    data: Prisma.FamilyInvitationCreateManyFamilyInput | Prisma.FamilyInvitationCreateManyFamilyInput[];
    skipDuplicates?: boolean;
};
export type FamilyInvitationUpsertWithWhereUniqueWithoutFamilyInput = {
    where: Prisma.FamilyInvitationWhereUniqueInput;
    update: Prisma.XOR<Prisma.FamilyInvitationUpdateWithoutFamilyInput, Prisma.FamilyInvitationUncheckedUpdateWithoutFamilyInput>;
    create: Prisma.XOR<Prisma.FamilyInvitationCreateWithoutFamilyInput, Prisma.FamilyInvitationUncheckedCreateWithoutFamilyInput>;
};
export type FamilyInvitationUpdateWithWhereUniqueWithoutFamilyInput = {
    where: Prisma.FamilyInvitationWhereUniqueInput;
    data: Prisma.XOR<Prisma.FamilyInvitationUpdateWithoutFamilyInput, Prisma.FamilyInvitationUncheckedUpdateWithoutFamilyInput>;
};
export type FamilyInvitationUpdateManyWithWhereWithoutFamilyInput = {
    where: Prisma.FamilyInvitationScalarWhereInput;
    data: Prisma.XOR<Prisma.FamilyInvitationUpdateManyMutationInput, Prisma.FamilyInvitationUncheckedUpdateManyWithoutFamilyInput>;
};
export type FamilyInvitationScalarWhereInput = {
    AND?: Prisma.FamilyInvitationScalarWhereInput | Prisma.FamilyInvitationScalarWhereInput[];
    OR?: Prisma.FamilyInvitationScalarWhereInput[];
    NOT?: Prisma.FamilyInvitationScalarWhereInput | Prisma.FamilyInvitationScalarWhereInput[];
    id?: Prisma.StringFilter<"FamilyInvitation"> | string;
    familyId?: Prisma.StringFilter<"FamilyInvitation"> | string;
    inviterId?: Prisma.StringFilter<"FamilyInvitation"> | string;
    inviteeId?: Prisma.StringNullableFilter<"FamilyInvitation"> | string | null;
    inviteeEmail?: Prisma.StringFilter<"FamilyInvitation"> | string;
    status?: Prisma.EnumFamilyInvitationStatusFilter<"FamilyInvitation"> | $Enums.FamilyInvitationStatus;
    expiresAt?: Prisma.DateTimeFilter<"FamilyInvitation"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"FamilyInvitation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FamilyInvitation"> | Date | string;
};
export type FamilyInvitationCreateWithoutInviterInput = {
    id?: string;
    inviteeEmail: string;
    status?: $Enums.FamilyInvitationStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    family: Prisma.FamilyCreateNestedOneWithoutInvitationsInput;
    invitee?: Prisma.UserCreateNestedOneWithoutReceivedInvitationsInput;
};
export type FamilyInvitationUncheckedCreateWithoutInviterInput = {
    id?: string;
    familyId: string;
    inviteeId?: string | null;
    inviteeEmail: string;
    status?: $Enums.FamilyInvitationStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FamilyInvitationCreateOrConnectWithoutInviterInput = {
    where: Prisma.FamilyInvitationWhereUniqueInput;
    create: Prisma.XOR<Prisma.FamilyInvitationCreateWithoutInviterInput, Prisma.FamilyInvitationUncheckedCreateWithoutInviterInput>;
};
export type FamilyInvitationCreateManyInviterInputEnvelope = {
    data: Prisma.FamilyInvitationCreateManyInviterInput | Prisma.FamilyInvitationCreateManyInviterInput[];
    skipDuplicates?: boolean;
};
export type FamilyInvitationCreateWithoutInviteeInput = {
    id?: string;
    inviteeEmail: string;
    status?: $Enums.FamilyInvitationStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    family: Prisma.FamilyCreateNestedOneWithoutInvitationsInput;
    inviter: Prisma.UserCreateNestedOneWithoutSentInvitationsInput;
};
export type FamilyInvitationUncheckedCreateWithoutInviteeInput = {
    id?: string;
    familyId: string;
    inviterId: string;
    inviteeEmail: string;
    status?: $Enums.FamilyInvitationStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FamilyInvitationCreateOrConnectWithoutInviteeInput = {
    where: Prisma.FamilyInvitationWhereUniqueInput;
    create: Prisma.XOR<Prisma.FamilyInvitationCreateWithoutInviteeInput, Prisma.FamilyInvitationUncheckedCreateWithoutInviteeInput>;
};
export type FamilyInvitationCreateManyInviteeInputEnvelope = {
    data: Prisma.FamilyInvitationCreateManyInviteeInput | Prisma.FamilyInvitationCreateManyInviteeInput[];
    skipDuplicates?: boolean;
};
export type FamilyInvitationUpsertWithWhereUniqueWithoutInviterInput = {
    where: Prisma.FamilyInvitationWhereUniqueInput;
    update: Prisma.XOR<Prisma.FamilyInvitationUpdateWithoutInviterInput, Prisma.FamilyInvitationUncheckedUpdateWithoutInviterInput>;
    create: Prisma.XOR<Prisma.FamilyInvitationCreateWithoutInviterInput, Prisma.FamilyInvitationUncheckedCreateWithoutInviterInput>;
};
export type FamilyInvitationUpdateWithWhereUniqueWithoutInviterInput = {
    where: Prisma.FamilyInvitationWhereUniqueInput;
    data: Prisma.XOR<Prisma.FamilyInvitationUpdateWithoutInviterInput, Prisma.FamilyInvitationUncheckedUpdateWithoutInviterInput>;
};
export type FamilyInvitationUpdateManyWithWhereWithoutInviterInput = {
    where: Prisma.FamilyInvitationScalarWhereInput;
    data: Prisma.XOR<Prisma.FamilyInvitationUpdateManyMutationInput, Prisma.FamilyInvitationUncheckedUpdateManyWithoutInviterInput>;
};
export type FamilyInvitationUpsertWithWhereUniqueWithoutInviteeInput = {
    where: Prisma.FamilyInvitationWhereUniqueInput;
    update: Prisma.XOR<Prisma.FamilyInvitationUpdateWithoutInviteeInput, Prisma.FamilyInvitationUncheckedUpdateWithoutInviteeInput>;
    create: Prisma.XOR<Prisma.FamilyInvitationCreateWithoutInviteeInput, Prisma.FamilyInvitationUncheckedCreateWithoutInviteeInput>;
};
export type FamilyInvitationUpdateWithWhereUniqueWithoutInviteeInput = {
    where: Prisma.FamilyInvitationWhereUniqueInput;
    data: Prisma.XOR<Prisma.FamilyInvitationUpdateWithoutInviteeInput, Prisma.FamilyInvitationUncheckedUpdateWithoutInviteeInput>;
};
export type FamilyInvitationUpdateManyWithWhereWithoutInviteeInput = {
    where: Prisma.FamilyInvitationScalarWhereInput;
    data: Prisma.XOR<Prisma.FamilyInvitationUpdateManyMutationInput, Prisma.FamilyInvitationUncheckedUpdateManyWithoutInviteeInput>;
};
export type FamilyInvitationCreateManyFamilyInput = {
    id?: string;
    inviterId: string;
    inviteeId?: string | null;
    inviteeEmail: string;
    status?: $Enums.FamilyInvitationStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FamilyInvitationUpdateWithoutFamilyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inviteeEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFamilyInvitationStatusFieldUpdateOperationsInput | $Enums.FamilyInvitationStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inviter?: Prisma.UserUpdateOneRequiredWithoutSentInvitationsNestedInput;
    invitee?: Prisma.UserUpdateOneWithoutReceivedInvitationsNestedInput;
};
export type FamilyInvitationUncheckedUpdateWithoutFamilyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inviterId?: Prisma.StringFieldUpdateOperationsInput | string;
    inviteeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inviteeEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFamilyInvitationStatusFieldUpdateOperationsInput | $Enums.FamilyInvitationStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FamilyInvitationUncheckedUpdateManyWithoutFamilyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inviterId?: Prisma.StringFieldUpdateOperationsInput | string;
    inviteeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inviteeEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFamilyInvitationStatusFieldUpdateOperationsInput | $Enums.FamilyInvitationStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FamilyInvitationCreateManyInviterInput = {
    id?: string;
    familyId: string;
    inviteeId?: string | null;
    inviteeEmail: string;
    status?: $Enums.FamilyInvitationStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FamilyInvitationCreateManyInviteeInput = {
    id?: string;
    familyId: string;
    inviterId: string;
    inviteeEmail: string;
    status?: $Enums.FamilyInvitationStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FamilyInvitationUpdateWithoutInviterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inviteeEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFamilyInvitationStatusFieldUpdateOperationsInput | $Enums.FamilyInvitationStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    family?: Prisma.FamilyUpdateOneRequiredWithoutInvitationsNestedInput;
    invitee?: Prisma.UserUpdateOneWithoutReceivedInvitationsNestedInput;
};
export type FamilyInvitationUncheckedUpdateWithoutInviterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    familyId?: Prisma.StringFieldUpdateOperationsInput | string;
    inviteeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inviteeEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFamilyInvitationStatusFieldUpdateOperationsInput | $Enums.FamilyInvitationStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FamilyInvitationUncheckedUpdateManyWithoutInviterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    familyId?: Prisma.StringFieldUpdateOperationsInput | string;
    inviteeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inviteeEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFamilyInvitationStatusFieldUpdateOperationsInput | $Enums.FamilyInvitationStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FamilyInvitationUpdateWithoutInviteeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inviteeEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFamilyInvitationStatusFieldUpdateOperationsInput | $Enums.FamilyInvitationStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    family?: Prisma.FamilyUpdateOneRequiredWithoutInvitationsNestedInput;
    inviter?: Prisma.UserUpdateOneRequiredWithoutSentInvitationsNestedInput;
};
export type FamilyInvitationUncheckedUpdateWithoutInviteeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    familyId?: Prisma.StringFieldUpdateOperationsInput | string;
    inviterId?: Prisma.StringFieldUpdateOperationsInput | string;
    inviteeEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFamilyInvitationStatusFieldUpdateOperationsInput | $Enums.FamilyInvitationStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FamilyInvitationUncheckedUpdateManyWithoutInviteeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    familyId?: Prisma.StringFieldUpdateOperationsInput | string;
    inviterId?: Prisma.StringFieldUpdateOperationsInput | string;
    inviteeEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFamilyInvitationStatusFieldUpdateOperationsInput | $Enums.FamilyInvitationStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FamilyInvitationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    familyId?: boolean;
    inviterId?: boolean;
    inviteeId?: boolean;
    inviteeEmail?: boolean;
    status?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    family?: boolean | Prisma.FamilyDefaultArgs<ExtArgs>;
    inviter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    invitee?: boolean | Prisma.FamilyInvitation$inviteeArgs<ExtArgs>;
}, ExtArgs["result"]["familyInvitation"]>;
export type FamilyInvitationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    familyId?: boolean;
    inviterId?: boolean;
    inviteeId?: boolean;
    inviteeEmail?: boolean;
    status?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    family?: boolean | Prisma.FamilyDefaultArgs<ExtArgs>;
    inviter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    invitee?: boolean | Prisma.FamilyInvitation$inviteeArgs<ExtArgs>;
}, ExtArgs["result"]["familyInvitation"]>;
export type FamilyInvitationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    familyId?: boolean;
    inviterId?: boolean;
    inviteeId?: boolean;
    inviteeEmail?: boolean;
    status?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    family?: boolean | Prisma.FamilyDefaultArgs<ExtArgs>;
    inviter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    invitee?: boolean | Prisma.FamilyInvitation$inviteeArgs<ExtArgs>;
}, ExtArgs["result"]["familyInvitation"]>;
export type FamilyInvitationSelectScalar = {
    id?: boolean;
    familyId?: boolean;
    inviterId?: boolean;
    inviteeId?: boolean;
    inviteeEmail?: boolean;
    status?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FamilyInvitationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "familyId" | "inviterId" | "inviteeId" | "inviteeEmail" | "status" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["familyInvitation"]>;
export type FamilyInvitationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    family?: boolean | Prisma.FamilyDefaultArgs<ExtArgs>;
    inviter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    invitee?: boolean | Prisma.FamilyInvitation$inviteeArgs<ExtArgs>;
};
export type FamilyInvitationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    family?: boolean | Prisma.FamilyDefaultArgs<ExtArgs>;
    inviter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    invitee?: boolean | Prisma.FamilyInvitation$inviteeArgs<ExtArgs>;
};
export type FamilyInvitationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    family?: boolean | Prisma.FamilyDefaultArgs<ExtArgs>;
    inviter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    invitee?: boolean | Prisma.FamilyInvitation$inviteeArgs<ExtArgs>;
};
export type $FamilyInvitationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FamilyInvitation";
    objects: {
        family: Prisma.$FamilyPayload<ExtArgs>;
        inviter: Prisma.$UserPayload<ExtArgs>;
        invitee: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        familyId: string;
        inviterId: string;
        inviteeId: string | null;
        inviteeEmail: string;
        status: $Enums.FamilyInvitationStatus;
        expiresAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["familyInvitation"]>;
    composites: {};
};
export type FamilyInvitationGetPayload<S extends boolean | null | undefined | FamilyInvitationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FamilyInvitationPayload, S>;
export type FamilyInvitationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FamilyInvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FamilyInvitationCountAggregateInputType | true;
};
export interface FamilyInvitationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FamilyInvitation'];
        meta: {
            name: 'FamilyInvitation';
        };
    };
    findUnique<T extends FamilyInvitationFindUniqueArgs>(args: Prisma.SelectSubset<T, FamilyInvitationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FamilyInvitationClient<runtime.Types.Result.GetResult<Prisma.$FamilyInvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FamilyInvitationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FamilyInvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FamilyInvitationClient<runtime.Types.Result.GetResult<Prisma.$FamilyInvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FamilyInvitationFindFirstArgs>(args?: Prisma.SelectSubset<T, FamilyInvitationFindFirstArgs<ExtArgs>>): Prisma.Prisma__FamilyInvitationClient<runtime.Types.Result.GetResult<Prisma.$FamilyInvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FamilyInvitationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FamilyInvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FamilyInvitationClient<runtime.Types.Result.GetResult<Prisma.$FamilyInvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FamilyInvitationFindManyArgs>(args?: Prisma.SelectSubset<T, FamilyInvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FamilyInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FamilyInvitationCreateArgs>(args: Prisma.SelectSubset<T, FamilyInvitationCreateArgs<ExtArgs>>): Prisma.Prisma__FamilyInvitationClient<runtime.Types.Result.GetResult<Prisma.$FamilyInvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FamilyInvitationCreateManyArgs>(args?: Prisma.SelectSubset<T, FamilyInvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FamilyInvitationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FamilyInvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FamilyInvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FamilyInvitationDeleteArgs>(args: Prisma.SelectSubset<T, FamilyInvitationDeleteArgs<ExtArgs>>): Prisma.Prisma__FamilyInvitationClient<runtime.Types.Result.GetResult<Prisma.$FamilyInvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FamilyInvitationUpdateArgs>(args: Prisma.SelectSubset<T, FamilyInvitationUpdateArgs<ExtArgs>>): Prisma.Prisma__FamilyInvitationClient<runtime.Types.Result.GetResult<Prisma.$FamilyInvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FamilyInvitationDeleteManyArgs>(args?: Prisma.SelectSubset<T, FamilyInvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FamilyInvitationUpdateManyArgs>(args: Prisma.SelectSubset<T, FamilyInvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FamilyInvitationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FamilyInvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FamilyInvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FamilyInvitationUpsertArgs>(args: Prisma.SelectSubset<T, FamilyInvitationUpsertArgs<ExtArgs>>): Prisma.Prisma__FamilyInvitationClient<runtime.Types.Result.GetResult<Prisma.$FamilyInvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FamilyInvitationCountArgs>(args?: Prisma.Subset<T, FamilyInvitationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FamilyInvitationCountAggregateOutputType> : number>;
    aggregate<T extends FamilyInvitationAggregateArgs>(args: Prisma.Subset<T, FamilyInvitationAggregateArgs>): Prisma.PrismaPromise<GetFamilyInvitationAggregateType<T>>;
    groupBy<T extends FamilyInvitationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FamilyInvitationGroupByArgs['orderBy'];
    } : {
        orderBy?: FamilyInvitationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FamilyInvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilyInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FamilyInvitationFieldRefs;
}
export interface Prisma__FamilyInvitationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    family<T extends Prisma.FamilyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FamilyDefaultArgs<ExtArgs>>): Prisma.Prisma__FamilyClient<runtime.Types.Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    inviter<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    invitee<T extends Prisma.FamilyInvitation$inviteeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FamilyInvitation$inviteeArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FamilyInvitationFieldRefs {
    readonly id: Prisma.FieldRef<"FamilyInvitation", 'String'>;
    readonly familyId: Prisma.FieldRef<"FamilyInvitation", 'String'>;
    readonly inviterId: Prisma.FieldRef<"FamilyInvitation", 'String'>;
    readonly inviteeId: Prisma.FieldRef<"FamilyInvitation", 'String'>;
    readonly inviteeEmail: Prisma.FieldRef<"FamilyInvitation", 'String'>;
    readonly status: Prisma.FieldRef<"FamilyInvitation", 'FamilyInvitationStatus'>;
    readonly expiresAt: Prisma.FieldRef<"FamilyInvitation", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"FamilyInvitation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"FamilyInvitation", 'DateTime'>;
}
export type FamilyInvitationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilyInvitationSelect<ExtArgs> | null;
    omit?: Prisma.FamilyInvitationOmit<ExtArgs> | null;
    include?: Prisma.FamilyInvitationInclude<ExtArgs> | null;
    where: Prisma.FamilyInvitationWhereUniqueInput;
};
export type FamilyInvitationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilyInvitationSelect<ExtArgs> | null;
    omit?: Prisma.FamilyInvitationOmit<ExtArgs> | null;
    include?: Prisma.FamilyInvitationInclude<ExtArgs> | null;
    where: Prisma.FamilyInvitationWhereUniqueInput;
};
export type FamilyInvitationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FamilyInvitationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FamilyInvitationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FamilyInvitationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilyInvitationSelect<ExtArgs> | null;
    omit?: Prisma.FamilyInvitationOmit<ExtArgs> | null;
    include?: Prisma.FamilyInvitationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FamilyInvitationCreateInput, Prisma.FamilyInvitationUncheckedCreateInput>;
};
export type FamilyInvitationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FamilyInvitationCreateManyInput | Prisma.FamilyInvitationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FamilyInvitationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilyInvitationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FamilyInvitationOmit<ExtArgs> | null;
    data: Prisma.FamilyInvitationCreateManyInput | Prisma.FamilyInvitationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FamilyInvitationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FamilyInvitationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilyInvitationSelect<ExtArgs> | null;
    omit?: Prisma.FamilyInvitationOmit<ExtArgs> | null;
    include?: Prisma.FamilyInvitationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FamilyInvitationUpdateInput, Prisma.FamilyInvitationUncheckedUpdateInput>;
    where: Prisma.FamilyInvitationWhereUniqueInput;
};
export type FamilyInvitationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FamilyInvitationUpdateManyMutationInput, Prisma.FamilyInvitationUncheckedUpdateManyInput>;
    where?: Prisma.FamilyInvitationWhereInput;
    limit?: number;
};
export type FamilyInvitationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilyInvitationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FamilyInvitationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FamilyInvitationUpdateManyMutationInput, Prisma.FamilyInvitationUncheckedUpdateManyInput>;
    where?: Prisma.FamilyInvitationWhereInput;
    limit?: number;
    include?: Prisma.FamilyInvitationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FamilyInvitationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilyInvitationSelect<ExtArgs> | null;
    omit?: Prisma.FamilyInvitationOmit<ExtArgs> | null;
    include?: Prisma.FamilyInvitationInclude<ExtArgs> | null;
    where: Prisma.FamilyInvitationWhereUniqueInput;
    create: Prisma.XOR<Prisma.FamilyInvitationCreateInput, Prisma.FamilyInvitationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FamilyInvitationUpdateInput, Prisma.FamilyInvitationUncheckedUpdateInput>;
};
export type FamilyInvitationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilyInvitationSelect<ExtArgs> | null;
    omit?: Prisma.FamilyInvitationOmit<ExtArgs> | null;
    include?: Prisma.FamilyInvitationInclude<ExtArgs> | null;
    where: Prisma.FamilyInvitationWhereUniqueInput;
};
export type FamilyInvitationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FamilyInvitationWhereInput;
    limit?: number;
};
export type FamilyInvitation$inviteeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type FamilyInvitationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilyInvitationSelect<ExtArgs> | null;
    omit?: Prisma.FamilyInvitationOmit<ExtArgs> | null;
    include?: Prisma.FamilyInvitationInclude<ExtArgs> | null;
};
export {};
