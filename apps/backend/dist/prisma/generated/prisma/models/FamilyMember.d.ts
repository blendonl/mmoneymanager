import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type FamilyMemberModel = runtime.Types.Result.DefaultSelection<Prisma.$FamilyMemberPayload>;
export type AggregateFamilyMember = {
    _count: FamilyMemberCountAggregateOutputType | null;
    _avg: FamilyMemberAvgAggregateOutputType | null;
    _sum: FamilyMemberSumAggregateOutputType | null;
    _min: FamilyMemberMinAggregateOutputType | null;
    _max: FamilyMemberMaxAggregateOutputType | null;
};
export type FamilyMemberAvgAggregateOutputType = {
    balance: runtime.Decimal | null;
};
export type FamilyMemberSumAggregateOutputType = {
    balance: runtime.Decimal | null;
};
export type FamilyMemberMinAggregateOutputType = {
    id: string | null;
    familyId: string | null;
    userId: string | null;
    role: $Enums.FamilyMemberRole | null;
    balance: runtime.Decimal | null;
    joinedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FamilyMemberMaxAggregateOutputType = {
    id: string | null;
    familyId: string | null;
    userId: string | null;
    role: $Enums.FamilyMemberRole | null;
    balance: runtime.Decimal | null;
    joinedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FamilyMemberCountAggregateOutputType = {
    id: number;
    familyId: number;
    userId: number;
    role: number;
    balance: number;
    joinedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FamilyMemberAvgAggregateInputType = {
    balance?: true;
};
export type FamilyMemberSumAggregateInputType = {
    balance?: true;
};
export type FamilyMemberMinAggregateInputType = {
    id?: true;
    familyId?: true;
    userId?: true;
    role?: true;
    balance?: true;
    joinedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FamilyMemberMaxAggregateInputType = {
    id?: true;
    familyId?: true;
    userId?: true;
    role?: true;
    balance?: true;
    joinedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FamilyMemberCountAggregateInputType = {
    id?: true;
    familyId?: true;
    userId?: true;
    role?: true;
    balance?: true;
    joinedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FamilyMemberAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FamilyMemberWhereInput;
    orderBy?: Prisma.FamilyMemberOrderByWithRelationInput | Prisma.FamilyMemberOrderByWithRelationInput[];
    cursor?: Prisma.FamilyMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FamilyMemberCountAggregateInputType;
    _avg?: FamilyMemberAvgAggregateInputType;
    _sum?: FamilyMemberSumAggregateInputType;
    _min?: FamilyMemberMinAggregateInputType;
    _max?: FamilyMemberMaxAggregateInputType;
};
export type GetFamilyMemberAggregateType<T extends FamilyMemberAggregateArgs> = {
    [P in keyof T & keyof AggregateFamilyMember]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFamilyMember[P]> : Prisma.GetScalarType<T[P], AggregateFamilyMember[P]>;
};
export type FamilyMemberGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FamilyMemberWhereInput;
    orderBy?: Prisma.FamilyMemberOrderByWithAggregationInput | Prisma.FamilyMemberOrderByWithAggregationInput[];
    by: Prisma.FamilyMemberScalarFieldEnum[] | Prisma.FamilyMemberScalarFieldEnum;
    having?: Prisma.FamilyMemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FamilyMemberCountAggregateInputType | true;
    _avg?: FamilyMemberAvgAggregateInputType;
    _sum?: FamilyMemberSumAggregateInputType;
    _min?: FamilyMemberMinAggregateInputType;
    _max?: FamilyMemberMaxAggregateInputType;
};
export type FamilyMemberGroupByOutputType = {
    id: string;
    familyId: string;
    userId: string;
    role: $Enums.FamilyMemberRole;
    balance: runtime.Decimal;
    joinedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: FamilyMemberCountAggregateOutputType | null;
    _avg: FamilyMemberAvgAggregateOutputType | null;
    _sum: FamilyMemberSumAggregateOutputType | null;
    _min: FamilyMemberMinAggregateOutputType | null;
    _max: FamilyMemberMaxAggregateOutputType | null;
};
type GetFamilyMemberGroupByPayload<T extends FamilyMemberGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FamilyMemberGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FamilyMemberGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FamilyMemberGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FamilyMemberGroupByOutputType[P]>;
}>>;
export type FamilyMemberWhereInput = {
    AND?: Prisma.FamilyMemberWhereInput | Prisma.FamilyMemberWhereInput[];
    OR?: Prisma.FamilyMemberWhereInput[];
    NOT?: Prisma.FamilyMemberWhereInput | Prisma.FamilyMemberWhereInput[];
    id?: Prisma.StringFilter<"FamilyMember"> | string;
    familyId?: Prisma.StringFilter<"FamilyMember"> | string;
    userId?: Prisma.StringFilter<"FamilyMember"> | string;
    role?: Prisma.EnumFamilyMemberRoleFilter<"FamilyMember"> | $Enums.FamilyMemberRole;
    balance?: Prisma.DecimalFilter<"FamilyMember"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Prisma.DateTimeFilter<"FamilyMember"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"FamilyMember"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FamilyMember"> | Date | string;
    family?: Prisma.XOR<Prisma.FamilyScalarRelationFilter, Prisma.FamilyWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type FamilyMemberOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    familyId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    family?: Prisma.FamilyOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type FamilyMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    familyId_userId?: Prisma.FamilyMemberFamilyIdUserIdCompoundUniqueInput;
    AND?: Prisma.FamilyMemberWhereInput | Prisma.FamilyMemberWhereInput[];
    OR?: Prisma.FamilyMemberWhereInput[];
    NOT?: Prisma.FamilyMemberWhereInput | Prisma.FamilyMemberWhereInput[];
    familyId?: Prisma.StringFilter<"FamilyMember"> | string;
    userId?: Prisma.StringFilter<"FamilyMember"> | string;
    role?: Prisma.EnumFamilyMemberRoleFilter<"FamilyMember"> | $Enums.FamilyMemberRole;
    balance?: Prisma.DecimalFilter<"FamilyMember"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Prisma.DateTimeFilter<"FamilyMember"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"FamilyMember"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FamilyMember"> | Date | string;
    family?: Prisma.XOR<Prisma.FamilyScalarRelationFilter, Prisma.FamilyWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "familyId_userId">;
export type FamilyMemberOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    familyId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FamilyMemberCountOrderByAggregateInput;
    _avg?: Prisma.FamilyMemberAvgOrderByAggregateInput;
    _max?: Prisma.FamilyMemberMaxOrderByAggregateInput;
    _min?: Prisma.FamilyMemberMinOrderByAggregateInput;
    _sum?: Prisma.FamilyMemberSumOrderByAggregateInput;
};
export type FamilyMemberScalarWhereWithAggregatesInput = {
    AND?: Prisma.FamilyMemberScalarWhereWithAggregatesInput | Prisma.FamilyMemberScalarWhereWithAggregatesInput[];
    OR?: Prisma.FamilyMemberScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FamilyMemberScalarWhereWithAggregatesInput | Prisma.FamilyMemberScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FamilyMember"> | string;
    familyId?: Prisma.StringWithAggregatesFilter<"FamilyMember"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"FamilyMember"> | string;
    role?: Prisma.EnumFamilyMemberRoleWithAggregatesFilter<"FamilyMember"> | $Enums.FamilyMemberRole;
    balance?: Prisma.DecimalWithAggregatesFilter<"FamilyMember"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Prisma.DateTimeWithAggregatesFilter<"FamilyMember"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FamilyMember"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"FamilyMember"> | Date | string;
};
export type FamilyMemberCreateInput = {
    id?: string;
    role?: $Enums.FamilyMemberRole;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    family: Prisma.FamilyCreateNestedOneWithoutMembersInput;
    user: Prisma.UserCreateNestedOneWithoutFamilyMembershipsInput;
};
export type FamilyMemberUncheckedCreateInput = {
    id?: string;
    familyId: string;
    userId: string;
    role?: $Enums.FamilyMemberRole;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FamilyMemberUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumFamilyMemberRoleFieldUpdateOperationsInput | $Enums.FamilyMemberRole;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    family?: Prisma.FamilyUpdateOneRequiredWithoutMembersNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutFamilyMembershipsNestedInput;
};
export type FamilyMemberUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    familyId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumFamilyMemberRoleFieldUpdateOperationsInput | $Enums.FamilyMemberRole;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FamilyMemberCreateManyInput = {
    id?: string;
    familyId: string;
    userId: string;
    role?: $Enums.FamilyMemberRole;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FamilyMemberUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumFamilyMemberRoleFieldUpdateOperationsInput | $Enums.FamilyMemberRole;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FamilyMemberUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    familyId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumFamilyMemberRoleFieldUpdateOperationsInput | $Enums.FamilyMemberRole;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FamilyMemberListRelationFilter = {
    every?: Prisma.FamilyMemberWhereInput;
    some?: Prisma.FamilyMemberWhereInput;
    none?: Prisma.FamilyMemberWhereInput;
};
export type FamilyMemberOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FamilyMemberFamilyIdUserIdCompoundUniqueInput = {
    familyId: string;
    userId: string;
};
export type FamilyMemberCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    familyId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FamilyMemberAvgOrderByAggregateInput = {
    balance?: Prisma.SortOrder;
};
export type FamilyMemberMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    familyId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FamilyMemberMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    familyId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FamilyMemberSumOrderByAggregateInput = {
    balance?: Prisma.SortOrder;
};
export type FamilyMemberCreateNestedManyWithoutFamilyInput = {
    create?: Prisma.XOR<Prisma.FamilyMemberCreateWithoutFamilyInput, Prisma.FamilyMemberUncheckedCreateWithoutFamilyInput> | Prisma.FamilyMemberCreateWithoutFamilyInput[] | Prisma.FamilyMemberUncheckedCreateWithoutFamilyInput[];
    connectOrCreate?: Prisma.FamilyMemberCreateOrConnectWithoutFamilyInput | Prisma.FamilyMemberCreateOrConnectWithoutFamilyInput[];
    createMany?: Prisma.FamilyMemberCreateManyFamilyInputEnvelope;
    connect?: Prisma.FamilyMemberWhereUniqueInput | Prisma.FamilyMemberWhereUniqueInput[];
};
export type FamilyMemberUncheckedCreateNestedManyWithoutFamilyInput = {
    create?: Prisma.XOR<Prisma.FamilyMemberCreateWithoutFamilyInput, Prisma.FamilyMemberUncheckedCreateWithoutFamilyInput> | Prisma.FamilyMemberCreateWithoutFamilyInput[] | Prisma.FamilyMemberUncheckedCreateWithoutFamilyInput[];
    connectOrCreate?: Prisma.FamilyMemberCreateOrConnectWithoutFamilyInput | Prisma.FamilyMemberCreateOrConnectWithoutFamilyInput[];
    createMany?: Prisma.FamilyMemberCreateManyFamilyInputEnvelope;
    connect?: Prisma.FamilyMemberWhereUniqueInput | Prisma.FamilyMemberWhereUniqueInput[];
};
export type FamilyMemberUpdateManyWithoutFamilyNestedInput = {
    create?: Prisma.XOR<Prisma.FamilyMemberCreateWithoutFamilyInput, Prisma.FamilyMemberUncheckedCreateWithoutFamilyInput> | Prisma.FamilyMemberCreateWithoutFamilyInput[] | Prisma.FamilyMemberUncheckedCreateWithoutFamilyInput[];
    connectOrCreate?: Prisma.FamilyMemberCreateOrConnectWithoutFamilyInput | Prisma.FamilyMemberCreateOrConnectWithoutFamilyInput[];
    upsert?: Prisma.FamilyMemberUpsertWithWhereUniqueWithoutFamilyInput | Prisma.FamilyMemberUpsertWithWhereUniqueWithoutFamilyInput[];
    createMany?: Prisma.FamilyMemberCreateManyFamilyInputEnvelope;
    set?: Prisma.FamilyMemberWhereUniqueInput | Prisma.FamilyMemberWhereUniqueInput[];
    disconnect?: Prisma.FamilyMemberWhereUniqueInput | Prisma.FamilyMemberWhereUniqueInput[];
    delete?: Prisma.FamilyMemberWhereUniqueInput | Prisma.FamilyMemberWhereUniqueInput[];
    connect?: Prisma.FamilyMemberWhereUniqueInput | Prisma.FamilyMemberWhereUniqueInput[];
    update?: Prisma.FamilyMemberUpdateWithWhereUniqueWithoutFamilyInput | Prisma.FamilyMemberUpdateWithWhereUniqueWithoutFamilyInput[];
    updateMany?: Prisma.FamilyMemberUpdateManyWithWhereWithoutFamilyInput | Prisma.FamilyMemberUpdateManyWithWhereWithoutFamilyInput[];
    deleteMany?: Prisma.FamilyMemberScalarWhereInput | Prisma.FamilyMemberScalarWhereInput[];
};
export type FamilyMemberUncheckedUpdateManyWithoutFamilyNestedInput = {
    create?: Prisma.XOR<Prisma.FamilyMemberCreateWithoutFamilyInput, Prisma.FamilyMemberUncheckedCreateWithoutFamilyInput> | Prisma.FamilyMemberCreateWithoutFamilyInput[] | Prisma.FamilyMemberUncheckedCreateWithoutFamilyInput[];
    connectOrCreate?: Prisma.FamilyMemberCreateOrConnectWithoutFamilyInput | Prisma.FamilyMemberCreateOrConnectWithoutFamilyInput[];
    upsert?: Prisma.FamilyMemberUpsertWithWhereUniqueWithoutFamilyInput | Prisma.FamilyMemberUpsertWithWhereUniqueWithoutFamilyInput[];
    createMany?: Prisma.FamilyMemberCreateManyFamilyInputEnvelope;
    set?: Prisma.FamilyMemberWhereUniqueInput | Prisma.FamilyMemberWhereUniqueInput[];
    disconnect?: Prisma.FamilyMemberWhereUniqueInput | Prisma.FamilyMemberWhereUniqueInput[];
    delete?: Prisma.FamilyMemberWhereUniqueInput | Prisma.FamilyMemberWhereUniqueInput[];
    connect?: Prisma.FamilyMemberWhereUniqueInput | Prisma.FamilyMemberWhereUniqueInput[];
    update?: Prisma.FamilyMemberUpdateWithWhereUniqueWithoutFamilyInput | Prisma.FamilyMemberUpdateWithWhereUniqueWithoutFamilyInput[];
    updateMany?: Prisma.FamilyMemberUpdateManyWithWhereWithoutFamilyInput | Prisma.FamilyMemberUpdateManyWithWhereWithoutFamilyInput[];
    deleteMany?: Prisma.FamilyMemberScalarWhereInput | Prisma.FamilyMemberScalarWhereInput[];
};
export type EnumFamilyMemberRoleFieldUpdateOperationsInput = {
    set?: $Enums.FamilyMemberRole;
};
export type FamilyMemberCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.FamilyMemberCreateWithoutUserInput, Prisma.FamilyMemberUncheckedCreateWithoutUserInput> | Prisma.FamilyMemberCreateWithoutUserInput[] | Prisma.FamilyMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FamilyMemberCreateOrConnectWithoutUserInput | Prisma.FamilyMemberCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.FamilyMemberCreateManyUserInputEnvelope;
    connect?: Prisma.FamilyMemberWhereUniqueInput | Prisma.FamilyMemberWhereUniqueInput[];
};
export type FamilyMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.FamilyMemberCreateWithoutUserInput, Prisma.FamilyMemberUncheckedCreateWithoutUserInput> | Prisma.FamilyMemberCreateWithoutUserInput[] | Prisma.FamilyMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FamilyMemberCreateOrConnectWithoutUserInput | Prisma.FamilyMemberCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.FamilyMemberCreateManyUserInputEnvelope;
    connect?: Prisma.FamilyMemberWhereUniqueInput | Prisma.FamilyMemberWhereUniqueInput[];
};
export type FamilyMemberUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.FamilyMemberCreateWithoutUserInput, Prisma.FamilyMemberUncheckedCreateWithoutUserInput> | Prisma.FamilyMemberCreateWithoutUserInput[] | Prisma.FamilyMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FamilyMemberCreateOrConnectWithoutUserInput | Prisma.FamilyMemberCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.FamilyMemberUpsertWithWhereUniqueWithoutUserInput | Prisma.FamilyMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.FamilyMemberCreateManyUserInputEnvelope;
    set?: Prisma.FamilyMemberWhereUniqueInput | Prisma.FamilyMemberWhereUniqueInput[];
    disconnect?: Prisma.FamilyMemberWhereUniqueInput | Prisma.FamilyMemberWhereUniqueInput[];
    delete?: Prisma.FamilyMemberWhereUniqueInput | Prisma.FamilyMemberWhereUniqueInput[];
    connect?: Prisma.FamilyMemberWhereUniqueInput | Prisma.FamilyMemberWhereUniqueInput[];
    update?: Prisma.FamilyMemberUpdateWithWhereUniqueWithoutUserInput | Prisma.FamilyMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.FamilyMemberUpdateManyWithWhereWithoutUserInput | Prisma.FamilyMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.FamilyMemberScalarWhereInput | Prisma.FamilyMemberScalarWhereInput[];
};
export type FamilyMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.FamilyMemberCreateWithoutUserInput, Prisma.FamilyMemberUncheckedCreateWithoutUserInput> | Prisma.FamilyMemberCreateWithoutUserInput[] | Prisma.FamilyMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FamilyMemberCreateOrConnectWithoutUserInput | Prisma.FamilyMemberCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.FamilyMemberUpsertWithWhereUniqueWithoutUserInput | Prisma.FamilyMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.FamilyMemberCreateManyUserInputEnvelope;
    set?: Prisma.FamilyMemberWhereUniqueInput | Prisma.FamilyMemberWhereUniqueInput[];
    disconnect?: Prisma.FamilyMemberWhereUniqueInput | Prisma.FamilyMemberWhereUniqueInput[];
    delete?: Prisma.FamilyMemberWhereUniqueInput | Prisma.FamilyMemberWhereUniqueInput[];
    connect?: Prisma.FamilyMemberWhereUniqueInput | Prisma.FamilyMemberWhereUniqueInput[];
    update?: Prisma.FamilyMemberUpdateWithWhereUniqueWithoutUserInput | Prisma.FamilyMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.FamilyMemberUpdateManyWithWhereWithoutUserInput | Prisma.FamilyMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.FamilyMemberScalarWhereInput | Prisma.FamilyMemberScalarWhereInput[];
};
export type FamilyMemberCreateWithoutFamilyInput = {
    id?: string;
    role?: $Enums.FamilyMemberRole;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutFamilyMembershipsInput;
};
export type FamilyMemberUncheckedCreateWithoutFamilyInput = {
    id?: string;
    userId: string;
    role?: $Enums.FamilyMemberRole;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FamilyMemberCreateOrConnectWithoutFamilyInput = {
    where: Prisma.FamilyMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.FamilyMemberCreateWithoutFamilyInput, Prisma.FamilyMemberUncheckedCreateWithoutFamilyInput>;
};
export type FamilyMemberCreateManyFamilyInputEnvelope = {
    data: Prisma.FamilyMemberCreateManyFamilyInput | Prisma.FamilyMemberCreateManyFamilyInput[];
    skipDuplicates?: boolean;
};
export type FamilyMemberUpsertWithWhereUniqueWithoutFamilyInput = {
    where: Prisma.FamilyMemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.FamilyMemberUpdateWithoutFamilyInput, Prisma.FamilyMemberUncheckedUpdateWithoutFamilyInput>;
    create: Prisma.XOR<Prisma.FamilyMemberCreateWithoutFamilyInput, Prisma.FamilyMemberUncheckedCreateWithoutFamilyInput>;
};
export type FamilyMemberUpdateWithWhereUniqueWithoutFamilyInput = {
    where: Prisma.FamilyMemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.FamilyMemberUpdateWithoutFamilyInput, Prisma.FamilyMemberUncheckedUpdateWithoutFamilyInput>;
};
export type FamilyMemberUpdateManyWithWhereWithoutFamilyInput = {
    where: Prisma.FamilyMemberScalarWhereInput;
    data: Prisma.XOR<Prisma.FamilyMemberUpdateManyMutationInput, Prisma.FamilyMemberUncheckedUpdateManyWithoutFamilyInput>;
};
export type FamilyMemberScalarWhereInput = {
    AND?: Prisma.FamilyMemberScalarWhereInput | Prisma.FamilyMemberScalarWhereInput[];
    OR?: Prisma.FamilyMemberScalarWhereInput[];
    NOT?: Prisma.FamilyMemberScalarWhereInput | Prisma.FamilyMemberScalarWhereInput[];
    id?: Prisma.StringFilter<"FamilyMember"> | string;
    familyId?: Prisma.StringFilter<"FamilyMember"> | string;
    userId?: Prisma.StringFilter<"FamilyMember"> | string;
    role?: Prisma.EnumFamilyMemberRoleFilter<"FamilyMember"> | $Enums.FamilyMemberRole;
    balance?: Prisma.DecimalFilter<"FamilyMember"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Prisma.DateTimeFilter<"FamilyMember"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"FamilyMember"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FamilyMember"> | Date | string;
};
export type FamilyMemberCreateWithoutUserInput = {
    id?: string;
    role?: $Enums.FamilyMemberRole;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    family: Prisma.FamilyCreateNestedOneWithoutMembersInput;
};
export type FamilyMemberUncheckedCreateWithoutUserInput = {
    id?: string;
    familyId: string;
    role?: $Enums.FamilyMemberRole;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FamilyMemberCreateOrConnectWithoutUserInput = {
    where: Prisma.FamilyMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.FamilyMemberCreateWithoutUserInput, Prisma.FamilyMemberUncheckedCreateWithoutUserInput>;
};
export type FamilyMemberCreateManyUserInputEnvelope = {
    data: Prisma.FamilyMemberCreateManyUserInput | Prisma.FamilyMemberCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type FamilyMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.FamilyMemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.FamilyMemberUpdateWithoutUserInput, Prisma.FamilyMemberUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.FamilyMemberCreateWithoutUserInput, Prisma.FamilyMemberUncheckedCreateWithoutUserInput>;
};
export type FamilyMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.FamilyMemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.FamilyMemberUpdateWithoutUserInput, Prisma.FamilyMemberUncheckedUpdateWithoutUserInput>;
};
export type FamilyMemberUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.FamilyMemberScalarWhereInput;
    data: Prisma.XOR<Prisma.FamilyMemberUpdateManyMutationInput, Prisma.FamilyMemberUncheckedUpdateManyWithoutUserInput>;
};
export type FamilyMemberCreateManyFamilyInput = {
    id?: string;
    userId: string;
    role?: $Enums.FamilyMemberRole;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FamilyMemberUpdateWithoutFamilyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumFamilyMemberRoleFieldUpdateOperationsInput | $Enums.FamilyMemberRole;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutFamilyMembershipsNestedInput;
};
export type FamilyMemberUncheckedUpdateWithoutFamilyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumFamilyMemberRoleFieldUpdateOperationsInput | $Enums.FamilyMemberRole;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FamilyMemberUncheckedUpdateManyWithoutFamilyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumFamilyMemberRoleFieldUpdateOperationsInput | $Enums.FamilyMemberRole;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FamilyMemberCreateManyUserInput = {
    id?: string;
    familyId: string;
    role?: $Enums.FamilyMemberRole;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FamilyMemberUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumFamilyMemberRoleFieldUpdateOperationsInput | $Enums.FamilyMemberRole;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    family?: Prisma.FamilyUpdateOneRequiredWithoutMembersNestedInput;
};
export type FamilyMemberUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    familyId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumFamilyMemberRoleFieldUpdateOperationsInput | $Enums.FamilyMemberRole;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FamilyMemberUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    familyId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumFamilyMemberRoleFieldUpdateOperationsInput | $Enums.FamilyMemberRole;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FamilyMemberSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    familyId?: boolean;
    userId?: boolean;
    role?: boolean;
    balance?: boolean;
    joinedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    family?: boolean | Prisma.FamilyDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["familyMember"]>;
export type FamilyMemberSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    familyId?: boolean;
    userId?: boolean;
    role?: boolean;
    balance?: boolean;
    joinedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    family?: boolean | Prisma.FamilyDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["familyMember"]>;
export type FamilyMemberSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    familyId?: boolean;
    userId?: boolean;
    role?: boolean;
    balance?: boolean;
    joinedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    family?: boolean | Prisma.FamilyDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["familyMember"]>;
export type FamilyMemberSelectScalar = {
    id?: boolean;
    familyId?: boolean;
    userId?: boolean;
    role?: boolean;
    balance?: boolean;
    joinedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FamilyMemberOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "familyId" | "userId" | "role" | "balance" | "joinedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["familyMember"]>;
export type FamilyMemberInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    family?: boolean | Prisma.FamilyDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FamilyMemberIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    family?: boolean | Prisma.FamilyDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FamilyMemberIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    family?: boolean | Prisma.FamilyDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $FamilyMemberPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FamilyMember";
    objects: {
        family: Prisma.$FamilyPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        familyId: string;
        userId: string;
        role: $Enums.FamilyMemberRole;
        balance: runtime.Decimal;
        joinedAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["familyMember"]>;
    composites: {};
};
export type FamilyMemberGetPayload<S extends boolean | null | undefined | FamilyMemberDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FamilyMemberPayload, S>;
export type FamilyMemberCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FamilyMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FamilyMemberCountAggregateInputType | true;
};
export interface FamilyMemberDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FamilyMember'];
        meta: {
            name: 'FamilyMember';
        };
    };
    findUnique<T extends FamilyMemberFindUniqueArgs>(args: Prisma.SelectSubset<T, FamilyMemberFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FamilyMemberClient<runtime.Types.Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FamilyMemberFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FamilyMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FamilyMemberClient<runtime.Types.Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FamilyMemberFindFirstArgs>(args?: Prisma.SelectSubset<T, FamilyMemberFindFirstArgs<ExtArgs>>): Prisma.Prisma__FamilyMemberClient<runtime.Types.Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FamilyMemberFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FamilyMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FamilyMemberClient<runtime.Types.Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FamilyMemberFindManyArgs>(args?: Prisma.SelectSubset<T, FamilyMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FamilyMemberCreateArgs>(args: Prisma.SelectSubset<T, FamilyMemberCreateArgs<ExtArgs>>): Prisma.Prisma__FamilyMemberClient<runtime.Types.Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FamilyMemberCreateManyArgs>(args?: Prisma.SelectSubset<T, FamilyMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FamilyMemberCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FamilyMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FamilyMemberDeleteArgs>(args: Prisma.SelectSubset<T, FamilyMemberDeleteArgs<ExtArgs>>): Prisma.Prisma__FamilyMemberClient<runtime.Types.Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FamilyMemberUpdateArgs>(args: Prisma.SelectSubset<T, FamilyMemberUpdateArgs<ExtArgs>>): Prisma.Prisma__FamilyMemberClient<runtime.Types.Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FamilyMemberDeleteManyArgs>(args?: Prisma.SelectSubset<T, FamilyMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FamilyMemberUpdateManyArgs>(args: Prisma.SelectSubset<T, FamilyMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FamilyMemberUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FamilyMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FamilyMemberUpsertArgs>(args: Prisma.SelectSubset<T, FamilyMemberUpsertArgs<ExtArgs>>): Prisma.Prisma__FamilyMemberClient<runtime.Types.Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FamilyMemberCountArgs>(args?: Prisma.Subset<T, FamilyMemberCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FamilyMemberCountAggregateOutputType> : number>;
    aggregate<T extends FamilyMemberAggregateArgs>(args: Prisma.Subset<T, FamilyMemberAggregateArgs>): Prisma.PrismaPromise<GetFamilyMemberAggregateType<T>>;
    groupBy<T extends FamilyMemberGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FamilyMemberGroupByArgs['orderBy'];
    } : {
        orderBy?: FamilyMemberGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FamilyMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilyMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FamilyMemberFieldRefs;
}
export interface Prisma__FamilyMemberClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    family<T extends Prisma.FamilyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FamilyDefaultArgs<ExtArgs>>): Prisma.Prisma__FamilyClient<runtime.Types.Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FamilyMemberFieldRefs {
    readonly id: Prisma.FieldRef<"FamilyMember", 'String'>;
    readonly familyId: Prisma.FieldRef<"FamilyMember", 'String'>;
    readonly userId: Prisma.FieldRef<"FamilyMember", 'String'>;
    readonly role: Prisma.FieldRef<"FamilyMember", 'FamilyMemberRole'>;
    readonly balance: Prisma.FieldRef<"FamilyMember", 'Decimal'>;
    readonly joinedAt: Prisma.FieldRef<"FamilyMember", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"FamilyMember", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"FamilyMember", 'DateTime'>;
}
export type FamilyMemberFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilyMemberSelect<ExtArgs> | null;
    omit?: Prisma.FamilyMemberOmit<ExtArgs> | null;
    include?: Prisma.FamilyMemberInclude<ExtArgs> | null;
    where: Prisma.FamilyMemberWhereUniqueInput;
};
export type FamilyMemberFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilyMemberSelect<ExtArgs> | null;
    omit?: Prisma.FamilyMemberOmit<ExtArgs> | null;
    include?: Prisma.FamilyMemberInclude<ExtArgs> | null;
    where: Prisma.FamilyMemberWhereUniqueInput;
};
export type FamilyMemberFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FamilyMemberFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FamilyMemberFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FamilyMemberCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilyMemberSelect<ExtArgs> | null;
    omit?: Prisma.FamilyMemberOmit<ExtArgs> | null;
    include?: Prisma.FamilyMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FamilyMemberCreateInput, Prisma.FamilyMemberUncheckedCreateInput>;
};
export type FamilyMemberCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FamilyMemberCreateManyInput | Prisma.FamilyMemberCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FamilyMemberCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilyMemberSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FamilyMemberOmit<ExtArgs> | null;
    data: Prisma.FamilyMemberCreateManyInput | Prisma.FamilyMemberCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FamilyMemberIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FamilyMemberUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilyMemberSelect<ExtArgs> | null;
    omit?: Prisma.FamilyMemberOmit<ExtArgs> | null;
    include?: Prisma.FamilyMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FamilyMemberUpdateInput, Prisma.FamilyMemberUncheckedUpdateInput>;
    where: Prisma.FamilyMemberWhereUniqueInput;
};
export type FamilyMemberUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FamilyMemberUpdateManyMutationInput, Prisma.FamilyMemberUncheckedUpdateManyInput>;
    where?: Prisma.FamilyMemberWhereInput;
    limit?: number;
};
export type FamilyMemberUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilyMemberSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FamilyMemberOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FamilyMemberUpdateManyMutationInput, Prisma.FamilyMemberUncheckedUpdateManyInput>;
    where?: Prisma.FamilyMemberWhereInput;
    limit?: number;
    include?: Prisma.FamilyMemberIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FamilyMemberUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilyMemberSelect<ExtArgs> | null;
    omit?: Prisma.FamilyMemberOmit<ExtArgs> | null;
    include?: Prisma.FamilyMemberInclude<ExtArgs> | null;
    where: Prisma.FamilyMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.FamilyMemberCreateInput, Prisma.FamilyMemberUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FamilyMemberUpdateInput, Prisma.FamilyMemberUncheckedUpdateInput>;
};
export type FamilyMemberDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilyMemberSelect<ExtArgs> | null;
    omit?: Prisma.FamilyMemberOmit<ExtArgs> | null;
    include?: Prisma.FamilyMemberInclude<ExtArgs> | null;
    where: Prisma.FamilyMemberWhereUniqueInput;
};
export type FamilyMemberDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FamilyMemberWhereInput;
    limit?: number;
};
export type FamilyMemberDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FamilyMemberSelect<ExtArgs> | null;
    omit?: Prisma.FamilyMemberOmit<ExtArgs> | null;
    include?: Prisma.FamilyMemberInclude<ExtArgs> | null;
};
export {};
