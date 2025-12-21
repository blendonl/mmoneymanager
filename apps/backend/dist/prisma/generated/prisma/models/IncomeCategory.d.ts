import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type IncomeCategoryModel = runtime.Types.Result.DefaultSelection<Prisma.$IncomeCategoryPayload>;
export type AggregateIncomeCategory = {
    _count: IncomeCategoryCountAggregateOutputType | null;
    _min: IncomeCategoryMinAggregateOutputType | null;
    _max: IncomeCategoryMaxAggregateOutputType | null;
};
export type IncomeCategoryMinAggregateOutputType = {
    id: string | null;
    parentId: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type IncomeCategoryMaxAggregateOutputType = {
    id: string | null;
    parentId: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type IncomeCategoryCountAggregateOutputType = {
    id: number;
    parentId: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type IncomeCategoryMinAggregateInputType = {
    id?: true;
    parentId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type IncomeCategoryMaxAggregateInputType = {
    id?: true;
    parentId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type IncomeCategoryCountAggregateInputType = {
    id?: true;
    parentId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type IncomeCategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncomeCategoryWhereInput;
    orderBy?: Prisma.IncomeCategoryOrderByWithRelationInput | Prisma.IncomeCategoryOrderByWithRelationInput[];
    cursor?: Prisma.IncomeCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | IncomeCategoryCountAggregateInputType;
    _min?: IncomeCategoryMinAggregateInputType;
    _max?: IncomeCategoryMaxAggregateInputType;
};
export type GetIncomeCategoryAggregateType<T extends IncomeCategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateIncomeCategory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIncomeCategory[P]> : Prisma.GetScalarType<T[P], AggregateIncomeCategory[P]>;
};
export type IncomeCategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncomeCategoryWhereInput;
    orderBy?: Prisma.IncomeCategoryOrderByWithAggregationInput | Prisma.IncomeCategoryOrderByWithAggregationInput[];
    by: Prisma.IncomeCategoryScalarFieldEnum[] | Prisma.IncomeCategoryScalarFieldEnum;
    having?: Prisma.IncomeCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IncomeCategoryCountAggregateInputType | true;
    _min?: IncomeCategoryMinAggregateInputType;
    _max?: IncomeCategoryMaxAggregateInputType;
};
export type IncomeCategoryGroupByOutputType = {
    id: string;
    parentId: string | null;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    _count: IncomeCategoryCountAggregateOutputType | null;
    _min: IncomeCategoryMinAggregateOutputType | null;
    _max: IncomeCategoryMaxAggregateOutputType | null;
};
type GetIncomeCategoryGroupByPayload<T extends IncomeCategoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IncomeCategoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IncomeCategoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IncomeCategoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IncomeCategoryGroupByOutputType[P]>;
}>>;
export type IncomeCategoryWhereInput = {
    AND?: Prisma.IncomeCategoryWhereInput | Prisma.IncomeCategoryWhereInput[];
    OR?: Prisma.IncomeCategoryWhereInput[];
    NOT?: Prisma.IncomeCategoryWhereInput | Prisma.IncomeCategoryWhereInput[];
    id?: Prisma.StringFilter<"IncomeCategory"> | string;
    parentId?: Prisma.StringNullableFilter<"IncomeCategory"> | string | null;
    name?: Prisma.StringFilter<"IncomeCategory"> | string;
    createdAt?: Prisma.DateTimeFilter<"IncomeCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"IncomeCategory"> | Date | string;
    parent?: Prisma.XOR<Prisma.IncomeCategoryNullableScalarRelationFilter, Prisma.IncomeCategoryWhereInput> | null;
    children?: Prisma.IncomeCategoryListRelationFilter;
    incomes?: Prisma.IncomeListRelationFilter;
};
export type IncomeCategoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    parentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    parent?: Prisma.IncomeCategoryOrderByWithRelationInput;
    children?: Prisma.IncomeCategoryOrderByRelationAggregateInput;
    incomes?: Prisma.IncomeOrderByRelationAggregateInput;
};
export type IncomeCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    AND?: Prisma.IncomeCategoryWhereInput | Prisma.IncomeCategoryWhereInput[];
    OR?: Prisma.IncomeCategoryWhereInput[];
    NOT?: Prisma.IncomeCategoryWhereInput | Prisma.IncomeCategoryWhereInput[];
    parentId?: Prisma.StringNullableFilter<"IncomeCategory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"IncomeCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"IncomeCategory"> | Date | string;
    parent?: Prisma.XOR<Prisma.IncomeCategoryNullableScalarRelationFilter, Prisma.IncomeCategoryWhereInput> | null;
    children?: Prisma.IncomeCategoryListRelationFilter;
    incomes?: Prisma.IncomeListRelationFilter;
}, "id" | "name">;
export type IncomeCategoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    parentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.IncomeCategoryCountOrderByAggregateInput;
    _max?: Prisma.IncomeCategoryMaxOrderByAggregateInput;
    _min?: Prisma.IncomeCategoryMinOrderByAggregateInput;
};
export type IncomeCategoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.IncomeCategoryScalarWhereWithAggregatesInput | Prisma.IncomeCategoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.IncomeCategoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IncomeCategoryScalarWhereWithAggregatesInput | Prisma.IncomeCategoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"IncomeCategory"> | string;
    parentId?: Prisma.StringNullableWithAggregatesFilter<"IncomeCategory"> | string | null;
    name?: Prisma.StringWithAggregatesFilter<"IncomeCategory"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"IncomeCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"IncomeCategory"> | Date | string;
};
export type IncomeCategoryCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parent?: Prisma.IncomeCategoryCreateNestedOneWithoutChildrenInput;
    children?: Prisma.IncomeCategoryCreateNestedManyWithoutParentInput;
    incomes?: Prisma.IncomeCreateNestedManyWithoutCategoryInput;
};
export type IncomeCategoryUncheckedCreateInput = {
    id?: string;
    parentId?: string | null;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: Prisma.IncomeCategoryUncheckedCreateNestedManyWithoutParentInput;
    incomes?: Prisma.IncomeUncheckedCreateNestedManyWithoutCategoryInput;
};
export type IncomeCategoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: Prisma.IncomeCategoryUpdateOneWithoutChildrenNestedInput;
    children?: Prisma.IncomeCategoryUpdateManyWithoutParentNestedInput;
    incomes?: Prisma.IncomeUpdateManyWithoutCategoryNestedInput;
};
export type IncomeCategoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    children?: Prisma.IncomeCategoryUncheckedUpdateManyWithoutParentNestedInput;
    incomes?: Prisma.IncomeUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type IncomeCategoryCreateManyInput = {
    id?: string;
    parentId?: string | null;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type IncomeCategoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IncomeCategoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IncomeCategoryScalarRelationFilter = {
    is?: Prisma.IncomeCategoryWhereInput;
    isNot?: Prisma.IncomeCategoryWhereInput;
};
export type IncomeCategoryNullableScalarRelationFilter = {
    is?: Prisma.IncomeCategoryWhereInput | null;
    isNot?: Prisma.IncomeCategoryWhereInput | null;
};
export type IncomeCategoryListRelationFilter = {
    every?: Prisma.IncomeCategoryWhereInput;
    some?: Prisma.IncomeCategoryWhereInput;
    none?: Prisma.IncomeCategoryWhereInput;
};
export type IncomeCategoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IncomeCategoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type IncomeCategoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type IncomeCategoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type IncomeCategoryCreateNestedOneWithoutIncomesInput = {
    create?: Prisma.XOR<Prisma.IncomeCategoryCreateWithoutIncomesInput, Prisma.IncomeCategoryUncheckedCreateWithoutIncomesInput>;
    connectOrCreate?: Prisma.IncomeCategoryCreateOrConnectWithoutIncomesInput;
    connect?: Prisma.IncomeCategoryWhereUniqueInput;
};
export type IncomeCategoryUpdateOneRequiredWithoutIncomesNestedInput = {
    create?: Prisma.XOR<Prisma.IncomeCategoryCreateWithoutIncomesInput, Prisma.IncomeCategoryUncheckedCreateWithoutIncomesInput>;
    connectOrCreate?: Prisma.IncomeCategoryCreateOrConnectWithoutIncomesInput;
    upsert?: Prisma.IncomeCategoryUpsertWithoutIncomesInput;
    connect?: Prisma.IncomeCategoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.IncomeCategoryUpdateToOneWithWhereWithoutIncomesInput, Prisma.IncomeCategoryUpdateWithoutIncomesInput>, Prisma.IncomeCategoryUncheckedUpdateWithoutIncomesInput>;
};
export type IncomeCategoryCreateNestedOneWithoutChildrenInput = {
    create?: Prisma.XOR<Prisma.IncomeCategoryCreateWithoutChildrenInput, Prisma.IncomeCategoryUncheckedCreateWithoutChildrenInput>;
    connectOrCreate?: Prisma.IncomeCategoryCreateOrConnectWithoutChildrenInput;
    connect?: Prisma.IncomeCategoryWhereUniqueInput;
};
export type IncomeCategoryCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.IncomeCategoryCreateWithoutParentInput, Prisma.IncomeCategoryUncheckedCreateWithoutParentInput> | Prisma.IncomeCategoryCreateWithoutParentInput[] | Prisma.IncomeCategoryUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.IncomeCategoryCreateOrConnectWithoutParentInput | Prisma.IncomeCategoryCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.IncomeCategoryCreateManyParentInputEnvelope;
    connect?: Prisma.IncomeCategoryWhereUniqueInput | Prisma.IncomeCategoryWhereUniqueInput[];
};
export type IncomeCategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.IncomeCategoryCreateWithoutParentInput, Prisma.IncomeCategoryUncheckedCreateWithoutParentInput> | Prisma.IncomeCategoryCreateWithoutParentInput[] | Prisma.IncomeCategoryUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.IncomeCategoryCreateOrConnectWithoutParentInput | Prisma.IncomeCategoryCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.IncomeCategoryCreateManyParentInputEnvelope;
    connect?: Prisma.IncomeCategoryWhereUniqueInput | Prisma.IncomeCategoryWhereUniqueInput[];
};
export type IncomeCategoryUpdateOneWithoutChildrenNestedInput = {
    create?: Prisma.XOR<Prisma.IncomeCategoryCreateWithoutChildrenInput, Prisma.IncomeCategoryUncheckedCreateWithoutChildrenInput>;
    connectOrCreate?: Prisma.IncomeCategoryCreateOrConnectWithoutChildrenInput;
    upsert?: Prisma.IncomeCategoryUpsertWithoutChildrenInput;
    disconnect?: Prisma.IncomeCategoryWhereInput | boolean;
    delete?: Prisma.IncomeCategoryWhereInput | boolean;
    connect?: Prisma.IncomeCategoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.IncomeCategoryUpdateToOneWithWhereWithoutChildrenInput, Prisma.IncomeCategoryUpdateWithoutChildrenInput>, Prisma.IncomeCategoryUncheckedUpdateWithoutChildrenInput>;
};
export type IncomeCategoryUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.IncomeCategoryCreateWithoutParentInput, Prisma.IncomeCategoryUncheckedCreateWithoutParentInput> | Prisma.IncomeCategoryCreateWithoutParentInput[] | Prisma.IncomeCategoryUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.IncomeCategoryCreateOrConnectWithoutParentInput | Prisma.IncomeCategoryCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.IncomeCategoryUpsertWithWhereUniqueWithoutParentInput | Prisma.IncomeCategoryUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.IncomeCategoryCreateManyParentInputEnvelope;
    set?: Prisma.IncomeCategoryWhereUniqueInput | Prisma.IncomeCategoryWhereUniqueInput[];
    disconnect?: Prisma.IncomeCategoryWhereUniqueInput | Prisma.IncomeCategoryWhereUniqueInput[];
    delete?: Prisma.IncomeCategoryWhereUniqueInput | Prisma.IncomeCategoryWhereUniqueInput[];
    connect?: Prisma.IncomeCategoryWhereUniqueInput | Prisma.IncomeCategoryWhereUniqueInput[];
    update?: Prisma.IncomeCategoryUpdateWithWhereUniqueWithoutParentInput | Prisma.IncomeCategoryUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.IncomeCategoryUpdateManyWithWhereWithoutParentInput | Prisma.IncomeCategoryUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.IncomeCategoryScalarWhereInput | Prisma.IncomeCategoryScalarWhereInput[];
};
export type IncomeCategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.IncomeCategoryCreateWithoutParentInput, Prisma.IncomeCategoryUncheckedCreateWithoutParentInput> | Prisma.IncomeCategoryCreateWithoutParentInput[] | Prisma.IncomeCategoryUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.IncomeCategoryCreateOrConnectWithoutParentInput | Prisma.IncomeCategoryCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.IncomeCategoryUpsertWithWhereUniqueWithoutParentInput | Prisma.IncomeCategoryUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.IncomeCategoryCreateManyParentInputEnvelope;
    set?: Prisma.IncomeCategoryWhereUniqueInput | Prisma.IncomeCategoryWhereUniqueInput[];
    disconnect?: Prisma.IncomeCategoryWhereUniqueInput | Prisma.IncomeCategoryWhereUniqueInput[];
    delete?: Prisma.IncomeCategoryWhereUniqueInput | Prisma.IncomeCategoryWhereUniqueInput[];
    connect?: Prisma.IncomeCategoryWhereUniqueInput | Prisma.IncomeCategoryWhereUniqueInput[];
    update?: Prisma.IncomeCategoryUpdateWithWhereUniqueWithoutParentInput | Prisma.IncomeCategoryUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.IncomeCategoryUpdateManyWithWhereWithoutParentInput | Prisma.IncomeCategoryUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.IncomeCategoryScalarWhereInput | Prisma.IncomeCategoryScalarWhereInput[];
};
export type IncomeCategoryCreateWithoutIncomesInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parent?: Prisma.IncomeCategoryCreateNestedOneWithoutChildrenInput;
    children?: Prisma.IncomeCategoryCreateNestedManyWithoutParentInput;
};
export type IncomeCategoryUncheckedCreateWithoutIncomesInput = {
    id?: string;
    parentId?: string | null;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: Prisma.IncomeCategoryUncheckedCreateNestedManyWithoutParentInput;
};
export type IncomeCategoryCreateOrConnectWithoutIncomesInput = {
    where: Prisma.IncomeCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.IncomeCategoryCreateWithoutIncomesInput, Prisma.IncomeCategoryUncheckedCreateWithoutIncomesInput>;
};
export type IncomeCategoryUpsertWithoutIncomesInput = {
    update: Prisma.XOR<Prisma.IncomeCategoryUpdateWithoutIncomesInput, Prisma.IncomeCategoryUncheckedUpdateWithoutIncomesInput>;
    create: Prisma.XOR<Prisma.IncomeCategoryCreateWithoutIncomesInput, Prisma.IncomeCategoryUncheckedCreateWithoutIncomesInput>;
    where?: Prisma.IncomeCategoryWhereInput;
};
export type IncomeCategoryUpdateToOneWithWhereWithoutIncomesInput = {
    where?: Prisma.IncomeCategoryWhereInput;
    data: Prisma.XOR<Prisma.IncomeCategoryUpdateWithoutIncomesInput, Prisma.IncomeCategoryUncheckedUpdateWithoutIncomesInput>;
};
export type IncomeCategoryUpdateWithoutIncomesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: Prisma.IncomeCategoryUpdateOneWithoutChildrenNestedInput;
    children?: Prisma.IncomeCategoryUpdateManyWithoutParentNestedInput;
};
export type IncomeCategoryUncheckedUpdateWithoutIncomesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    children?: Prisma.IncomeCategoryUncheckedUpdateManyWithoutParentNestedInput;
};
export type IncomeCategoryCreateWithoutChildrenInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parent?: Prisma.IncomeCategoryCreateNestedOneWithoutChildrenInput;
    incomes?: Prisma.IncomeCreateNestedManyWithoutCategoryInput;
};
export type IncomeCategoryUncheckedCreateWithoutChildrenInput = {
    id?: string;
    parentId?: string | null;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    incomes?: Prisma.IncomeUncheckedCreateNestedManyWithoutCategoryInput;
};
export type IncomeCategoryCreateOrConnectWithoutChildrenInput = {
    where: Prisma.IncomeCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.IncomeCategoryCreateWithoutChildrenInput, Prisma.IncomeCategoryUncheckedCreateWithoutChildrenInput>;
};
export type IncomeCategoryCreateWithoutParentInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: Prisma.IncomeCategoryCreateNestedManyWithoutParentInput;
    incomes?: Prisma.IncomeCreateNestedManyWithoutCategoryInput;
};
export type IncomeCategoryUncheckedCreateWithoutParentInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: Prisma.IncomeCategoryUncheckedCreateNestedManyWithoutParentInput;
    incomes?: Prisma.IncomeUncheckedCreateNestedManyWithoutCategoryInput;
};
export type IncomeCategoryCreateOrConnectWithoutParentInput = {
    where: Prisma.IncomeCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.IncomeCategoryCreateWithoutParentInput, Prisma.IncomeCategoryUncheckedCreateWithoutParentInput>;
};
export type IncomeCategoryCreateManyParentInputEnvelope = {
    data: Prisma.IncomeCategoryCreateManyParentInput | Prisma.IncomeCategoryCreateManyParentInput[];
    skipDuplicates?: boolean;
};
export type IncomeCategoryUpsertWithoutChildrenInput = {
    update: Prisma.XOR<Prisma.IncomeCategoryUpdateWithoutChildrenInput, Prisma.IncomeCategoryUncheckedUpdateWithoutChildrenInput>;
    create: Prisma.XOR<Prisma.IncomeCategoryCreateWithoutChildrenInput, Prisma.IncomeCategoryUncheckedCreateWithoutChildrenInput>;
    where?: Prisma.IncomeCategoryWhereInput;
};
export type IncomeCategoryUpdateToOneWithWhereWithoutChildrenInput = {
    where?: Prisma.IncomeCategoryWhereInput;
    data: Prisma.XOR<Prisma.IncomeCategoryUpdateWithoutChildrenInput, Prisma.IncomeCategoryUncheckedUpdateWithoutChildrenInput>;
};
export type IncomeCategoryUpdateWithoutChildrenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: Prisma.IncomeCategoryUpdateOneWithoutChildrenNestedInput;
    incomes?: Prisma.IncomeUpdateManyWithoutCategoryNestedInput;
};
export type IncomeCategoryUncheckedUpdateWithoutChildrenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    incomes?: Prisma.IncomeUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type IncomeCategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: Prisma.IncomeCategoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.IncomeCategoryUpdateWithoutParentInput, Prisma.IncomeCategoryUncheckedUpdateWithoutParentInput>;
    create: Prisma.XOR<Prisma.IncomeCategoryCreateWithoutParentInput, Prisma.IncomeCategoryUncheckedCreateWithoutParentInput>;
};
export type IncomeCategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: Prisma.IncomeCategoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.IncomeCategoryUpdateWithoutParentInput, Prisma.IncomeCategoryUncheckedUpdateWithoutParentInput>;
};
export type IncomeCategoryUpdateManyWithWhereWithoutParentInput = {
    where: Prisma.IncomeCategoryScalarWhereInput;
    data: Prisma.XOR<Prisma.IncomeCategoryUpdateManyMutationInput, Prisma.IncomeCategoryUncheckedUpdateManyWithoutParentInput>;
};
export type IncomeCategoryScalarWhereInput = {
    AND?: Prisma.IncomeCategoryScalarWhereInput | Prisma.IncomeCategoryScalarWhereInput[];
    OR?: Prisma.IncomeCategoryScalarWhereInput[];
    NOT?: Prisma.IncomeCategoryScalarWhereInput | Prisma.IncomeCategoryScalarWhereInput[];
    id?: Prisma.StringFilter<"IncomeCategory"> | string;
    parentId?: Prisma.StringNullableFilter<"IncomeCategory"> | string | null;
    name?: Prisma.StringFilter<"IncomeCategory"> | string;
    createdAt?: Prisma.DateTimeFilter<"IncomeCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"IncomeCategory"> | Date | string;
};
export type IncomeCategoryCreateManyParentInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type IncomeCategoryUpdateWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    children?: Prisma.IncomeCategoryUpdateManyWithoutParentNestedInput;
    incomes?: Prisma.IncomeUpdateManyWithoutCategoryNestedInput;
};
export type IncomeCategoryUncheckedUpdateWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    children?: Prisma.IncomeCategoryUncheckedUpdateManyWithoutParentNestedInput;
    incomes?: Prisma.IncomeUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type IncomeCategoryUncheckedUpdateManyWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IncomeCategoryCountOutputType = {
    children: number;
    incomes: number;
};
export type IncomeCategoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    children?: boolean | IncomeCategoryCountOutputTypeCountChildrenArgs;
    incomes?: boolean | IncomeCategoryCountOutputTypeCountIncomesArgs;
};
export type IncomeCategoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeCategoryCountOutputTypeSelect<ExtArgs> | null;
};
export type IncomeCategoryCountOutputTypeCountChildrenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncomeCategoryWhereInput;
};
export type IncomeCategoryCountOutputTypeCountIncomesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncomeWhereInput;
};
export type IncomeCategorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parentId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    parent?: boolean | Prisma.IncomeCategory$parentArgs<ExtArgs>;
    children?: boolean | Prisma.IncomeCategory$childrenArgs<ExtArgs>;
    incomes?: boolean | Prisma.IncomeCategory$incomesArgs<ExtArgs>;
    _count?: boolean | Prisma.IncomeCategoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["incomeCategory"]>;
export type IncomeCategorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parentId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    parent?: boolean | Prisma.IncomeCategory$parentArgs<ExtArgs>;
}, ExtArgs["result"]["incomeCategory"]>;
export type IncomeCategorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parentId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    parent?: boolean | Prisma.IncomeCategory$parentArgs<ExtArgs>;
}, ExtArgs["result"]["incomeCategory"]>;
export type IncomeCategorySelectScalar = {
    id?: boolean;
    parentId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type IncomeCategoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "parentId" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["incomeCategory"]>;
export type IncomeCategoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parent?: boolean | Prisma.IncomeCategory$parentArgs<ExtArgs>;
    children?: boolean | Prisma.IncomeCategory$childrenArgs<ExtArgs>;
    incomes?: boolean | Prisma.IncomeCategory$incomesArgs<ExtArgs>;
    _count?: boolean | Prisma.IncomeCategoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type IncomeCategoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parent?: boolean | Prisma.IncomeCategory$parentArgs<ExtArgs>;
};
export type IncomeCategoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parent?: boolean | Prisma.IncomeCategory$parentArgs<ExtArgs>;
};
export type $IncomeCategoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "IncomeCategory";
    objects: {
        parent: Prisma.$IncomeCategoryPayload<ExtArgs> | null;
        children: Prisma.$IncomeCategoryPayload<ExtArgs>[];
        incomes: Prisma.$IncomePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        parentId: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["incomeCategory"]>;
    composites: {};
};
export type IncomeCategoryGetPayload<S extends boolean | null | undefined | IncomeCategoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IncomeCategoryPayload, S>;
export type IncomeCategoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IncomeCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IncomeCategoryCountAggregateInputType | true;
};
export interface IncomeCategoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['IncomeCategory'];
        meta: {
            name: 'IncomeCategory';
        };
    };
    findUnique<T extends IncomeCategoryFindUniqueArgs>(args: Prisma.SelectSubset<T, IncomeCategoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IncomeCategoryClient<runtime.Types.Result.GetResult<Prisma.$IncomeCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends IncomeCategoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IncomeCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IncomeCategoryClient<runtime.Types.Result.GetResult<Prisma.$IncomeCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends IncomeCategoryFindFirstArgs>(args?: Prisma.SelectSubset<T, IncomeCategoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__IncomeCategoryClient<runtime.Types.Result.GetResult<Prisma.$IncomeCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends IncomeCategoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IncomeCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IncomeCategoryClient<runtime.Types.Result.GetResult<Prisma.$IncomeCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends IncomeCategoryFindManyArgs>(args?: Prisma.SelectSubset<T, IncomeCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncomeCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends IncomeCategoryCreateArgs>(args: Prisma.SelectSubset<T, IncomeCategoryCreateArgs<ExtArgs>>): Prisma.Prisma__IncomeCategoryClient<runtime.Types.Result.GetResult<Prisma.$IncomeCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends IncomeCategoryCreateManyArgs>(args?: Prisma.SelectSubset<T, IncomeCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends IncomeCategoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IncomeCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncomeCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends IncomeCategoryDeleteArgs>(args: Prisma.SelectSubset<T, IncomeCategoryDeleteArgs<ExtArgs>>): Prisma.Prisma__IncomeCategoryClient<runtime.Types.Result.GetResult<Prisma.$IncomeCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends IncomeCategoryUpdateArgs>(args: Prisma.SelectSubset<T, IncomeCategoryUpdateArgs<ExtArgs>>): Prisma.Prisma__IncomeCategoryClient<runtime.Types.Result.GetResult<Prisma.$IncomeCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends IncomeCategoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, IncomeCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends IncomeCategoryUpdateManyArgs>(args: Prisma.SelectSubset<T, IncomeCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends IncomeCategoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IncomeCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncomeCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends IncomeCategoryUpsertArgs>(args: Prisma.SelectSubset<T, IncomeCategoryUpsertArgs<ExtArgs>>): Prisma.Prisma__IncomeCategoryClient<runtime.Types.Result.GetResult<Prisma.$IncomeCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends IncomeCategoryCountArgs>(args?: Prisma.Subset<T, IncomeCategoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IncomeCategoryCountAggregateOutputType> : number>;
    aggregate<T extends IncomeCategoryAggregateArgs>(args: Prisma.Subset<T, IncomeCategoryAggregateArgs>): Prisma.PrismaPromise<GetIncomeCategoryAggregateType<T>>;
    groupBy<T extends IncomeCategoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IncomeCategoryGroupByArgs['orderBy'];
    } : {
        orderBy?: IncomeCategoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IncomeCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncomeCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: IncomeCategoryFieldRefs;
}
export interface Prisma__IncomeCategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    parent<T extends Prisma.IncomeCategory$parentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.IncomeCategory$parentArgs<ExtArgs>>): Prisma.Prisma__IncomeCategoryClient<runtime.Types.Result.GetResult<Prisma.$IncomeCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    children<T extends Prisma.IncomeCategory$childrenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.IncomeCategory$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncomeCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    incomes<T extends Prisma.IncomeCategory$incomesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.IncomeCategory$incomesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface IncomeCategoryFieldRefs {
    readonly id: Prisma.FieldRef<"IncomeCategory", 'String'>;
    readonly parentId: Prisma.FieldRef<"IncomeCategory", 'String'>;
    readonly name: Prisma.FieldRef<"IncomeCategory", 'String'>;
    readonly createdAt: Prisma.FieldRef<"IncomeCategory", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"IncomeCategory", 'DateTime'>;
}
export type IncomeCategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeCategorySelect<ExtArgs> | null;
    omit?: Prisma.IncomeCategoryOmit<ExtArgs> | null;
    include?: Prisma.IncomeCategoryInclude<ExtArgs> | null;
    where: Prisma.IncomeCategoryWhereUniqueInput;
};
export type IncomeCategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeCategorySelect<ExtArgs> | null;
    omit?: Prisma.IncomeCategoryOmit<ExtArgs> | null;
    include?: Prisma.IncomeCategoryInclude<ExtArgs> | null;
    where: Prisma.IncomeCategoryWhereUniqueInput;
};
export type IncomeCategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeCategorySelect<ExtArgs> | null;
    omit?: Prisma.IncomeCategoryOmit<ExtArgs> | null;
    include?: Prisma.IncomeCategoryInclude<ExtArgs> | null;
    where?: Prisma.IncomeCategoryWhereInput;
    orderBy?: Prisma.IncomeCategoryOrderByWithRelationInput | Prisma.IncomeCategoryOrderByWithRelationInput[];
    cursor?: Prisma.IncomeCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IncomeCategoryScalarFieldEnum | Prisma.IncomeCategoryScalarFieldEnum[];
};
export type IncomeCategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeCategorySelect<ExtArgs> | null;
    omit?: Prisma.IncomeCategoryOmit<ExtArgs> | null;
    include?: Prisma.IncomeCategoryInclude<ExtArgs> | null;
    where?: Prisma.IncomeCategoryWhereInput;
    orderBy?: Prisma.IncomeCategoryOrderByWithRelationInput | Prisma.IncomeCategoryOrderByWithRelationInput[];
    cursor?: Prisma.IncomeCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IncomeCategoryScalarFieldEnum | Prisma.IncomeCategoryScalarFieldEnum[];
};
export type IncomeCategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeCategorySelect<ExtArgs> | null;
    omit?: Prisma.IncomeCategoryOmit<ExtArgs> | null;
    include?: Prisma.IncomeCategoryInclude<ExtArgs> | null;
    where?: Prisma.IncomeCategoryWhereInput;
    orderBy?: Prisma.IncomeCategoryOrderByWithRelationInput | Prisma.IncomeCategoryOrderByWithRelationInput[];
    cursor?: Prisma.IncomeCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IncomeCategoryScalarFieldEnum | Prisma.IncomeCategoryScalarFieldEnum[];
};
export type IncomeCategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeCategorySelect<ExtArgs> | null;
    omit?: Prisma.IncomeCategoryOmit<ExtArgs> | null;
    include?: Prisma.IncomeCategoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IncomeCategoryCreateInput, Prisma.IncomeCategoryUncheckedCreateInput>;
};
export type IncomeCategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.IncomeCategoryCreateManyInput | Prisma.IncomeCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IncomeCategoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeCategorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IncomeCategoryOmit<ExtArgs> | null;
    data: Prisma.IncomeCategoryCreateManyInput | Prisma.IncomeCategoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.IncomeCategoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type IncomeCategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeCategorySelect<ExtArgs> | null;
    omit?: Prisma.IncomeCategoryOmit<ExtArgs> | null;
    include?: Prisma.IncomeCategoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IncomeCategoryUpdateInput, Prisma.IncomeCategoryUncheckedUpdateInput>;
    where: Prisma.IncomeCategoryWhereUniqueInput;
};
export type IncomeCategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.IncomeCategoryUpdateManyMutationInput, Prisma.IncomeCategoryUncheckedUpdateManyInput>;
    where?: Prisma.IncomeCategoryWhereInput;
    limit?: number;
};
export type IncomeCategoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IncomeCategoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IncomeCategoryUpdateManyMutationInput, Prisma.IncomeCategoryUncheckedUpdateManyInput>;
    where?: Prisma.IncomeCategoryWhereInput;
    limit?: number;
    include?: Prisma.IncomeCategoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type IncomeCategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeCategorySelect<ExtArgs> | null;
    omit?: Prisma.IncomeCategoryOmit<ExtArgs> | null;
    include?: Prisma.IncomeCategoryInclude<ExtArgs> | null;
    where: Prisma.IncomeCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.IncomeCategoryCreateInput, Prisma.IncomeCategoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.IncomeCategoryUpdateInput, Prisma.IncomeCategoryUncheckedUpdateInput>;
};
export type IncomeCategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeCategorySelect<ExtArgs> | null;
    omit?: Prisma.IncomeCategoryOmit<ExtArgs> | null;
    include?: Prisma.IncomeCategoryInclude<ExtArgs> | null;
    where: Prisma.IncomeCategoryWhereUniqueInput;
};
export type IncomeCategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncomeCategoryWhereInput;
    limit?: number;
};
export type IncomeCategory$parentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeCategorySelect<ExtArgs> | null;
    omit?: Prisma.IncomeCategoryOmit<ExtArgs> | null;
    include?: Prisma.IncomeCategoryInclude<ExtArgs> | null;
    where?: Prisma.IncomeCategoryWhereInput;
};
export type IncomeCategory$childrenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeCategorySelect<ExtArgs> | null;
    omit?: Prisma.IncomeCategoryOmit<ExtArgs> | null;
    include?: Prisma.IncomeCategoryInclude<ExtArgs> | null;
    where?: Prisma.IncomeCategoryWhereInput;
    orderBy?: Prisma.IncomeCategoryOrderByWithRelationInput | Prisma.IncomeCategoryOrderByWithRelationInput[];
    cursor?: Prisma.IncomeCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IncomeCategoryScalarFieldEnum | Prisma.IncomeCategoryScalarFieldEnum[];
};
export type IncomeCategory$incomesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeSelect<ExtArgs> | null;
    omit?: Prisma.IncomeOmit<ExtArgs> | null;
    include?: Prisma.IncomeInclude<ExtArgs> | null;
    where?: Prisma.IncomeWhereInput;
    orderBy?: Prisma.IncomeOrderByWithRelationInput | Prisma.IncomeOrderByWithRelationInput[];
    cursor?: Prisma.IncomeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IncomeScalarFieldEnum | Prisma.IncomeScalarFieldEnum[];
};
export type IncomeCategoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeCategorySelect<ExtArgs> | null;
    omit?: Prisma.IncomeCategoryOmit<ExtArgs> | null;
    include?: Prisma.IncomeCategoryInclude<ExtArgs> | null;
};
export {};
