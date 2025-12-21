import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ExpenseItemCategoryModel = runtime.Types.Result.DefaultSelection<Prisma.$ExpenseItemCategoryPayload>;
export type AggregateExpenseItemCategory = {
    _count: ExpenseItemCategoryCountAggregateOutputType | null;
    _min: ExpenseItemCategoryMinAggregateOutputType | null;
    _max: ExpenseItemCategoryMaxAggregateOutputType | null;
};
export type ExpenseItemCategoryMinAggregateOutputType = {
    id: string | null;
    parentId: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ExpenseItemCategoryMaxAggregateOutputType = {
    id: string | null;
    parentId: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ExpenseItemCategoryCountAggregateOutputType = {
    id: number;
    parentId: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ExpenseItemCategoryMinAggregateInputType = {
    id?: true;
    parentId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ExpenseItemCategoryMaxAggregateInputType = {
    id?: true;
    parentId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ExpenseItemCategoryCountAggregateInputType = {
    id?: true;
    parentId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ExpenseItemCategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseItemCategoryWhereInput;
    orderBy?: Prisma.ExpenseItemCategoryOrderByWithRelationInput | Prisma.ExpenseItemCategoryOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseItemCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ExpenseItemCategoryCountAggregateInputType;
    _min?: ExpenseItemCategoryMinAggregateInputType;
    _max?: ExpenseItemCategoryMaxAggregateInputType;
};
export type GetExpenseItemCategoryAggregateType<T extends ExpenseItemCategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateExpenseItemCategory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExpenseItemCategory[P]> : Prisma.GetScalarType<T[P], AggregateExpenseItemCategory[P]>;
};
export type ExpenseItemCategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseItemCategoryWhereInput;
    orderBy?: Prisma.ExpenseItemCategoryOrderByWithAggregationInput | Prisma.ExpenseItemCategoryOrderByWithAggregationInput[];
    by: Prisma.ExpenseItemCategoryScalarFieldEnum[] | Prisma.ExpenseItemCategoryScalarFieldEnum;
    having?: Prisma.ExpenseItemCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExpenseItemCategoryCountAggregateInputType | true;
    _min?: ExpenseItemCategoryMinAggregateInputType;
    _max?: ExpenseItemCategoryMaxAggregateInputType;
};
export type ExpenseItemCategoryGroupByOutputType = {
    id: string;
    parentId: string | null;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ExpenseItemCategoryCountAggregateOutputType | null;
    _min: ExpenseItemCategoryMinAggregateOutputType | null;
    _max: ExpenseItemCategoryMaxAggregateOutputType | null;
};
type GetExpenseItemCategoryGroupByPayload<T extends ExpenseItemCategoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExpenseItemCategoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExpenseItemCategoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExpenseItemCategoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExpenseItemCategoryGroupByOutputType[P]>;
}>>;
export type ExpenseItemCategoryWhereInput = {
    AND?: Prisma.ExpenseItemCategoryWhereInput | Prisma.ExpenseItemCategoryWhereInput[];
    OR?: Prisma.ExpenseItemCategoryWhereInput[];
    NOT?: Prisma.ExpenseItemCategoryWhereInput | Prisma.ExpenseItemCategoryWhereInput[];
    id?: Prisma.StringFilter<"ExpenseItemCategory"> | string;
    parentId?: Prisma.StringNullableFilter<"ExpenseItemCategory"> | string | null;
    name?: Prisma.StringFilter<"ExpenseItemCategory"> | string;
    createdAt?: Prisma.DateTimeFilter<"ExpenseItemCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ExpenseItemCategory"> | Date | string;
    parent?: Prisma.XOR<Prisma.ExpenseItemCategoryNullableScalarRelationFilter, Prisma.ExpenseItemCategoryWhereInput> | null;
    children?: Prisma.ExpenseItemCategoryListRelationFilter;
    items?: Prisma.ExpenseItemListRelationFilter;
};
export type ExpenseItemCategoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    parentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    parent?: Prisma.ExpenseItemCategoryOrderByWithRelationInput;
    children?: Prisma.ExpenseItemCategoryOrderByRelationAggregateInput;
    items?: Prisma.ExpenseItemOrderByRelationAggregateInput;
};
export type ExpenseItemCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ExpenseItemCategoryWhereInput | Prisma.ExpenseItemCategoryWhereInput[];
    OR?: Prisma.ExpenseItemCategoryWhereInput[];
    NOT?: Prisma.ExpenseItemCategoryWhereInput | Prisma.ExpenseItemCategoryWhereInput[];
    parentId?: Prisma.StringNullableFilter<"ExpenseItemCategory"> | string | null;
    name?: Prisma.StringFilter<"ExpenseItemCategory"> | string;
    createdAt?: Prisma.DateTimeFilter<"ExpenseItemCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ExpenseItemCategory"> | Date | string;
    parent?: Prisma.XOR<Prisma.ExpenseItemCategoryNullableScalarRelationFilter, Prisma.ExpenseItemCategoryWhereInput> | null;
    children?: Prisma.ExpenseItemCategoryListRelationFilter;
    items?: Prisma.ExpenseItemListRelationFilter;
}, "id">;
export type ExpenseItemCategoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    parentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ExpenseItemCategoryCountOrderByAggregateInput;
    _max?: Prisma.ExpenseItemCategoryMaxOrderByAggregateInput;
    _min?: Prisma.ExpenseItemCategoryMinOrderByAggregateInput;
};
export type ExpenseItemCategoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExpenseItemCategoryScalarWhereWithAggregatesInput | Prisma.ExpenseItemCategoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExpenseItemCategoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExpenseItemCategoryScalarWhereWithAggregatesInput | Prisma.ExpenseItemCategoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ExpenseItemCategory"> | string;
    parentId?: Prisma.StringNullableWithAggregatesFilter<"ExpenseItemCategory"> | string | null;
    name?: Prisma.StringWithAggregatesFilter<"ExpenseItemCategory"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ExpenseItemCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ExpenseItemCategory"> | Date | string;
};
export type ExpenseItemCategoryCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parent?: Prisma.ExpenseItemCategoryCreateNestedOneWithoutChildrenInput;
    children?: Prisma.ExpenseItemCategoryCreateNestedManyWithoutParentInput;
    items?: Prisma.ExpenseItemCreateNestedManyWithoutCategoryInput;
};
export type ExpenseItemCategoryUncheckedCreateInput = {
    id?: string;
    parentId?: string | null;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: Prisma.ExpenseItemCategoryUncheckedCreateNestedManyWithoutParentInput;
    items?: Prisma.ExpenseItemUncheckedCreateNestedManyWithoutCategoryInput;
};
export type ExpenseItemCategoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: Prisma.ExpenseItemCategoryUpdateOneWithoutChildrenNestedInput;
    children?: Prisma.ExpenseItemCategoryUpdateManyWithoutParentNestedInput;
    items?: Prisma.ExpenseItemUpdateManyWithoutCategoryNestedInput;
};
export type ExpenseItemCategoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    children?: Prisma.ExpenseItemCategoryUncheckedUpdateManyWithoutParentNestedInput;
    items?: Prisma.ExpenseItemUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type ExpenseItemCategoryCreateManyInput = {
    id?: string;
    parentId?: string | null;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExpenseItemCategoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseItemCategoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseItemCategoryScalarRelationFilter = {
    is?: Prisma.ExpenseItemCategoryWhereInput;
    isNot?: Prisma.ExpenseItemCategoryWhereInput;
};
export type ExpenseItemCategoryNullableScalarRelationFilter = {
    is?: Prisma.ExpenseItemCategoryWhereInput | null;
    isNot?: Prisma.ExpenseItemCategoryWhereInput | null;
};
export type ExpenseItemCategoryListRelationFilter = {
    every?: Prisma.ExpenseItemCategoryWhereInput;
    some?: Prisma.ExpenseItemCategoryWhereInput;
    none?: Prisma.ExpenseItemCategoryWhereInput;
};
export type ExpenseItemCategoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ExpenseItemCategoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExpenseItemCategoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExpenseItemCategoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExpenseItemCategoryCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.ExpenseItemCategoryCreateWithoutItemsInput, Prisma.ExpenseItemCategoryUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.ExpenseItemCategoryCreateOrConnectWithoutItemsInput;
    connect?: Prisma.ExpenseItemCategoryWhereUniqueInput;
};
export type ExpenseItemCategoryUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseItemCategoryCreateWithoutItemsInput, Prisma.ExpenseItemCategoryUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.ExpenseItemCategoryCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.ExpenseItemCategoryUpsertWithoutItemsInput;
    connect?: Prisma.ExpenseItemCategoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ExpenseItemCategoryUpdateToOneWithWhereWithoutItemsInput, Prisma.ExpenseItemCategoryUpdateWithoutItemsInput>, Prisma.ExpenseItemCategoryUncheckedUpdateWithoutItemsInput>;
};
export type ExpenseItemCategoryCreateNestedOneWithoutChildrenInput = {
    create?: Prisma.XOR<Prisma.ExpenseItemCategoryCreateWithoutChildrenInput, Prisma.ExpenseItemCategoryUncheckedCreateWithoutChildrenInput>;
    connectOrCreate?: Prisma.ExpenseItemCategoryCreateOrConnectWithoutChildrenInput;
    connect?: Prisma.ExpenseItemCategoryWhereUniqueInput;
};
export type ExpenseItemCategoryCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.ExpenseItemCategoryCreateWithoutParentInput, Prisma.ExpenseItemCategoryUncheckedCreateWithoutParentInput> | Prisma.ExpenseItemCategoryCreateWithoutParentInput[] | Prisma.ExpenseItemCategoryUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ExpenseItemCategoryCreateOrConnectWithoutParentInput | Prisma.ExpenseItemCategoryCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.ExpenseItemCategoryCreateManyParentInputEnvelope;
    connect?: Prisma.ExpenseItemCategoryWhereUniqueInput | Prisma.ExpenseItemCategoryWhereUniqueInput[];
};
export type ExpenseItemCategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.ExpenseItemCategoryCreateWithoutParentInput, Prisma.ExpenseItemCategoryUncheckedCreateWithoutParentInput> | Prisma.ExpenseItemCategoryCreateWithoutParentInput[] | Prisma.ExpenseItemCategoryUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ExpenseItemCategoryCreateOrConnectWithoutParentInput | Prisma.ExpenseItemCategoryCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.ExpenseItemCategoryCreateManyParentInputEnvelope;
    connect?: Prisma.ExpenseItemCategoryWhereUniqueInput | Prisma.ExpenseItemCategoryWhereUniqueInput[];
};
export type ExpenseItemCategoryUpdateOneWithoutChildrenNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseItemCategoryCreateWithoutChildrenInput, Prisma.ExpenseItemCategoryUncheckedCreateWithoutChildrenInput>;
    connectOrCreate?: Prisma.ExpenseItemCategoryCreateOrConnectWithoutChildrenInput;
    upsert?: Prisma.ExpenseItemCategoryUpsertWithoutChildrenInput;
    disconnect?: Prisma.ExpenseItemCategoryWhereInput | boolean;
    delete?: Prisma.ExpenseItemCategoryWhereInput | boolean;
    connect?: Prisma.ExpenseItemCategoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ExpenseItemCategoryUpdateToOneWithWhereWithoutChildrenInput, Prisma.ExpenseItemCategoryUpdateWithoutChildrenInput>, Prisma.ExpenseItemCategoryUncheckedUpdateWithoutChildrenInput>;
};
export type ExpenseItemCategoryUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseItemCategoryCreateWithoutParentInput, Prisma.ExpenseItemCategoryUncheckedCreateWithoutParentInput> | Prisma.ExpenseItemCategoryCreateWithoutParentInput[] | Prisma.ExpenseItemCategoryUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ExpenseItemCategoryCreateOrConnectWithoutParentInput | Prisma.ExpenseItemCategoryCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.ExpenseItemCategoryUpsertWithWhereUniqueWithoutParentInput | Prisma.ExpenseItemCategoryUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.ExpenseItemCategoryCreateManyParentInputEnvelope;
    set?: Prisma.ExpenseItemCategoryWhereUniqueInput | Prisma.ExpenseItemCategoryWhereUniqueInput[];
    disconnect?: Prisma.ExpenseItemCategoryWhereUniqueInput | Prisma.ExpenseItemCategoryWhereUniqueInput[];
    delete?: Prisma.ExpenseItemCategoryWhereUniqueInput | Prisma.ExpenseItemCategoryWhereUniqueInput[];
    connect?: Prisma.ExpenseItemCategoryWhereUniqueInput | Prisma.ExpenseItemCategoryWhereUniqueInput[];
    update?: Prisma.ExpenseItemCategoryUpdateWithWhereUniqueWithoutParentInput | Prisma.ExpenseItemCategoryUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.ExpenseItemCategoryUpdateManyWithWhereWithoutParentInput | Prisma.ExpenseItemCategoryUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.ExpenseItemCategoryScalarWhereInput | Prisma.ExpenseItemCategoryScalarWhereInput[];
};
export type ExpenseItemCategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseItemCategoryCreateWithoutParentInput, Prisma.ExpenseItemCategoryUncheckedCreateWithoutParentInput> | Prisma.ExpenseItemCategoryCreateWithoutParentInput[] | Prisma.ExpenseItemCategoryUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ExpenseItemCategoryCreateOrConnectWithoutParentInput | Prisma.ExpenseItemCategoryCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.ExpenseItemCategoryUpsertWithWhereUniqueWithoutParentInput | Prisma.ExpenseItemCategoryUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.ExpenseItemCategoryCreateManyParentInputEnvelope;
    set?: Prisma.ExpenseItemCategoryWhereUniqueInput | Prisma.ExpenseItemCategoryWhereUniqueInput[];
    disconnect?: Prisma.ExpenseItemCategoryWhereUniqueInput | Prisma.ExpenseItemCategoryWhereUniqueInput[];
    delete?: Prisma.ExpenseItemCategoryWhereUniqueInput | Prisma.ExpenseItemCategoryWhereUniqueInput[];
    connect?: Prisma.ExpenseItemCategoryWhereUniqueInput | Prisma.ExpenseItemCategoryWhereUniqueInput[];
    update?: Prisma.ExpenseItemCategoryUpdateWithWhereUniqueWithoutParentInput | Prisma.ExpenseItemCategoryUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.ExpenseItemCategoryUpdateManyWithWhereWithoutParentInput | Prisma.ExpenseItemCategoryUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.ExpenseItemCategoryScalarWhereInput | Prisma.ExpenseItemCategoryScalarWhereInput[];
};
export type ExpenseItemCategoryCreateWithoutItemsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parent?: Prisma.ExpenseItemCategoryCreateNestedOneWithoutChildrenInput;
    children?: Prisma.ExpenseItemCategoryCreateNestedManyWithoutParentInput;
};
export type ExpenseItemCategoryUncheckedCreateWithoutItemsInput = {
    id?: string;
    parentId?: string | null;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: Prisma.ExpenseItemCategoryUncheckedCreateNestedManyWithoutParentInput;
};
export type ExpenseItemCategoryCreateOrConnectWithoutItemsInput = {
    where: Prisma.ExpenseItemCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseItemCategoryCreateWithoutItemsInput, Prisma.ExpenseItemCategoryUncheckedCreateWithoutItemsInput>;
};
export type ExpenseItemCategoryUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.ExpenseItemCategoryUpdateWithoutItemsInput, Prisma.ExpenseItemCategoryUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.ExpenseItemCategoryCreateWithoutItemsInput, Prisma.ExpenseItemCategoryUncheckedCreateWithoutItemsInput>;
    where?: Prisma.ExpenseItemCategoryWhereInput;
};
export type ExpenseItemCategoryUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.ExpenseItemCategoryWhereInput;
    data: Prisma.XOR<Prisma.ExpenseItemCategoryUpdateWithoutItemsInput, Prisma.ExpenseItemCategoryUncheckedUpdateWithoutItemsInput>;
};
export type ExpenseItemCategoryUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: Prisma.ExpenseItemCategoryUpdateOneWithoutChildrenNestedInput;
    children?: Prisma.ExpenseItemCategoryUpdateManyWithoutParentNestedInput;
};
export type ExpenseItemCategoryUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    children?: Prisma.ExpenseItemCategoryUncheckedUpdateManyWithoutParentNestedInput;
};
export type ExpenseItemCategoryCreateWithoutChildrenInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parent?: Prisma.ExpenseItemCategoryCreateNestedOneWithoutChildrenInput;
    items?: Prisma.ExpenseItemCreateNestedManyWithoutCategoryInput;
};
export type ExpenseItemCategoryUncheckedCreateWithoutChildrenInput = {
    id?: string;
    parentId?: string | null;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.ExpenseItemUncheckedCreateNestedManyWithoutCategoryInput;
};
export type ExpenseItemCategoryCreateOrConnectWithoutChildrenInput = {
    where: Prisma.ExpenseItemCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseItemCategoryCreateWithoutChildrenInput, Prisma.ExpenseItemCategoryUncheckedCreateWithoutChildrenInput>;
};
export type ExpenseItemCategoryCreateWithoutParentInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: Prisma.ExpenseItemCategoryCreateNestedManyWithoutParentInput;
    items?: Prisma.ExpenseItemCreateNestedManyWithoutCategoryInput;
};
export type ExpenseItemCategoryUncheckedCreateWithoutParentInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: Prisma.ExpenseItemCategoryUncheckedCreateNestedManyWithoutParentInput;
    items?: Prisma.ExpenseItemUncheckedCreateNestedManyWithoutCategoryInput;
};
export type ExpenseItemCategoryCreateOrConnectWithoutParentInput = {
    where: Prisma.ExpenseItemCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseItemCategoryCreateWithoutParentInput, Prisma.ExpenseItemCategoryUncheckedCreateWithoutParentInput>;
};
export type ExpenseItemCategoryCreateManyParentInputEnvelope = {
    data: Prisma.ExpenseItemCategoryCreateManyParentInput | Prisma.ExpenseItemCategoryCreateManyParentInput[];
    skipDuplicates?: boolean;
};
export type ExpenseItemCategoryUpsertWithoutChildrenInput = {
    update: Prisma.XOR<Prisma.ExpenseItemCategoryUpdateWithoutChildrenInput, Prisma.ExpenseItemCategoryUncheckedUpdateWithoutChildrenInput>;
    create: Prisma.XOR<Prisma.ExpenseItemCategoryCreateWithoutChildrenInput, Prisma.ExpenseItemCategoryUncheckedCreateWithoutChildrenInput>;
    where?: Prisma.ExpenseItemCategoryWhereInput;
};
export type ExpenseItemCategoryUpdateToOneWithWhereWithoutChildrenInput = {
    where?: Prisma.ExpenseItemCategoryWhereInput;
    data: Prisma.XOR<Prisma.ExpenseItemCategoryUpdateWithoutChildrenInput, Prisma.ExpenseItemCategoryUncheckedUpdateWithoutChildrenInput>;
};
export type ExpenseItemCategoryUpdateWithoutChildrenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: Prisma.ExpenseItemCategoryUpdateOneWithoutChildrenNestedInput;
    items?: Prisma.ExpenseItemUpdateManyWithoutCategoryNestedInput;
};
export type ExpenseItemCategoryUncheckedUpdateWithoutChildrenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.ExpenseItemUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type ExpenseItemCategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: Prisma.ExpenseItemCategoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExpenseItemCategoryUpdateWithoutParentInput, Prisma.ExpenseItemCategoryUncheckedUpdateWithoutParentInput>;
    create: Prisma.XOR<Prisma.ExpenseItemCategoryCreateWithoutParentInput, Prisma.ExpenseItemCategoryUncheckedCreateWithoutParentInput>;
};
export type ExpenseItemCategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: Prisma.ExpenseItemCategoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExpenseItemCategoryUpdateWithoutParentInput, Prisma.ExpenseItemCategoryUncheckedUpdateWithoutParentInput>;
};
export type ExpenseItemCategoryUpdateManyWithWhereWithoutParentInput = {
    where: Prisma.ExpenseItemCategoryScalarWhereInput;
    data: Prisma.XOR<Prisma.ExpenseItemCategoryUpdateManyMutationInput, Prisma.ExpenseItemCategoryUncheckedUpdateManyWithoutParentInput>;
};
export type ExpenseItemCategoryScalarWhereInput = {
    AND?: Prisma.ExpenseItemCategoryScalarWhereInput | Prisma.ExpenseItemCategoryScalarWhereInput[];
    OR?: Prisma.ExpenseItemCategoryScalarWhereInput[];
    NOT?: Prisma.ExpenseItemCategoryScalarWhereInput | Prisma.ExpenseItemCategoryScalarWhereInput[];
    id?: Prisma.StringFilter<"ExpenseItemCategory"> | string;
    parentId?: Prisma.StringNullableFilter<"ExpenseItemCategory"> | string | null;
    name?: Prisma.StringFilter<"ExpenseItemCategory"> | string;
    createdAt?: Prisma.DateTimeFilter<"ExpenseItemCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ExpenseItemCategory"> | Date | string;
};
export type ExpenseItemCategoryCreateManyParentInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExpenseItemCategoryUpdateWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    children?: Prisma.ExpenseItemCategoryUpdateManyWithoutParentNestedInput;
    items?: Prisma.ExpenseItemUpdateManyWithoutCategoryNestedInput;
};
export type ExpenseItemCategoryUncheckedUpdateWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    children?: Prisma.ExpenseItemCategoryUncheckedUpdateManyWithoutParentNestedInput;
    items?: Prisma.ExpenseItemUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type ExpenseItemCategoryUncheckedUpdateManyWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseItemCategoryCountOutputType = {
    children: number;
    items: number;
};
export type ExpenseItemCategoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    children?: boolean | ExpenseItemCategoryCountOutputTypeCountChildrenArgs;
    items?: boolean | ExpenseItemCategoryCountOutputTypeCountItemsArgs;
};
export type ExpenseItemCategoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseItemCategoryCountOutputTypeSelect<ExtArgs> | null;
};
export type ExpenseItemCategoryCountOutputTypeCountChildrenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseItemCategoryWhereInput;
};
export type ExpenseItemCategoryCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseItemWhereInput;
};
export type ExpenseItemCategorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parentId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    parent?: boolean | Prisma.ExpenseItemCategory$parentArgs<ExtArgs>;
    children?: boolean | Prisma.ExpenseItemCategory$childrenArgs<ExtArgs>;
    items?: boolean | Prisma.ExpenseItemCategory$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ExpenseItemCategoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expenseItemCategory"]>;
export type ExpenseItemCategorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parentId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    parent?: boolean | Prisma.ExpenseItemCategory$parentArgs<ExtArgs>;
}, ExtArgs["result"]["expenseItemCategory"]>;
export type ExpenseItemCategorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parentId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    parent?: boolean | Prisma.ExpenseItemCategory$parentArgs<ExtArgs>;
}, ExtArgs["result"]["expenseItemCategory"]>;
export type ExpenseItemCategorySelectScalar = {
    id?: boolean;
    parentId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ExpenseItemCategoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "parentId" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["expenseItemCategory"]>;
export type ExpenseItemCategoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parent?: boolean | Prisma.ExpenseItemCategory$parentArgs<ExtArgs>;
    children?: boolean | Prisma.ExpenseItemCategory$childrenArgs<ExtArgs>;
    items?: boolean | Prisma.ExpenseItemCategory$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ExpenseItemCategoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ExpenseItemCategoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parent?: boolean | Prisma.ExpenseItemCategory$parentArgs<ExtArgs>;
};
export type ExpenseItemCategoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parent?: boolean | Prisma.ExpenseItemCategory$parentArgs<ExtArgs>;
};
export type $ExpenseItemCategoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ExpenseItemCategory";
    objects: {
        parent: Prisma.$ExpenseItemCategoryPayload<ExtArgs> | null;
        children: Prisma.$ExpenseItemCategoryPayload<ExtArgs>[];
        items: Prisma.$ExpenseItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        parentId: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["expenseItemCategory"]>;
    composites: {};
};
export type ExpenseItemCategoryGetPayload<S extends boolean | null | undefined | ExpenseItemCategoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExpenseItemCategoryPayload, S>;
export type ExpenseItemCategoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExpenseItemCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExpenseItemCategoryCountAggregateInputType | true;
};
export interface ExpenseItemCategoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ExpenseItemCategory'];
        meta: {
            name: 'ExpenseItemCategory';
        };
    };
    findUnique<T extends ExpenseItemCategoryFindUniqueArgs>(args: Prisma.SelectSubset<T, ExpenseItemCategoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExpenseItemCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseItemCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ExpenseItemCategoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExpenseItemCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExpenseItemCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseItemCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ExpenseItemCategoryFindFirstArgs>(args?: Prisma.SelectSubset<T, ExpenseItemCategoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExpenseItemCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseItemCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ExpenseItemCategoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExpenseItemCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExpenseItemCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseItemCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ExpenseItemCategoryFindManyArgs>(args?: Prisma.SelectSubset<T, ExpenseItemCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpenseItemCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ExpenseItemCategoryCreateArgs>(args: Prisma.SelectSubset<T, ExpenseItemCategoryCreateArgs<ExtArgs>>): Prisma.Prisma__ExpenseItemCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseItemCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ExpenseItemCategoryCreateManyArgs>(args?: Prisma.SelectSubset<T, ExpenseItemCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ExpenseItemCategoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExpenseItemCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpenseItemCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ExpenseItemCategoryDeleteArgs>(args: Prisma.SelectSubset<T, ExpenseItemCategoryDeleteArgs<ExtArgs>>): Prisma.Prisma__ExpenseItemCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseItemCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ExpenseItemCategoryUpdateArgs>(args: Prisma.SelectSubset<T, ExpenseItemCategoryUpdateArgs<ExtArgs>>): Prisma.Prisma__ExpenseItemCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseItemCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ExpenseItemCategoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExpenseItemCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ExpenseItemCategoryUpdateManyArgs>(args: Prisma.SelectSubset<T, ExpenseItemCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ExpenseItemCategoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExpenseItemCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpenseItemCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ExpenseItemCategoryUpsertArgs>(args: Prisma.SelectSubset<T, ExpenseItemCategoryUpsertArgs<ExtArgs>>): Prisma.Prisma__ExpenseItemCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseItemCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ExpenseItemCategoryCountArgs>(args?: Prisma.Subset<T, ExpenseItemCategoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExpenseItemCategoryCountAggregateOutputType> : number>;
    aggregate<T extends ExpenseItemCategoryAggregateArgs>(args: Prisma.Subset<T, ExpenseItemCategoryAggregateArgs>): Prisma.PrismaPromise<GetExpenseItemCategoryAggregateType<T>>;
    groupBy<T extends ExpenseItemCategoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExpenseItemCategoryGroupByArgs['orderBy'];
    } : {
        orderBy?: ExpenseItemCategoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExpenseItemCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseItemCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ExpenseItemCategoryFieldRefs;
}
export interface Prisma__ExpenseItemCategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    parent<T extends Prisma.ExpenseItemCategory$parentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ExpenseItemCategory$parentArgs<ExtArgs>>): Prisma.Prisma__ExpenseItemCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseItemCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    children<T extends Prisma.ExpenseItemCategory$childrenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ExpenseItemCategory$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpenseItemCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    items<T extends Prisma.ExpenseItemCategory$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ExpenseItemCategory$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpenseItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ExpenseItemCategoryFieldRefs {
    readonly id: Prisma.FieldRef<"ExpenseItemCategory", 'String'>;
    readonly parentId: Prisma.FieldRef<"ExpenseItemCategory", 'String'>;
    readonly name: Prisma.FieldRef<"ExpenseItemCategory", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ExpenseItemCategory", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ExpenseItemCategory", 'DateTime'>;
}
export type ExpenseItemCategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseItemCategoryInclude<ExtArgs> | null;
    where: Prisma.ExpenseItemCategoryWhereUniqueInput;
};
export type ExpenseItemCategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseItemCategoryInclude<ExtArgs> | null;
    where: Prisma.ExpenseItemCategoryWhereUniqueInput;
};
export type ExpenseItemCategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseItemCategoryInclude<ExtArgs> | null;
    where?: Prisma.ExpenseItemCategoryWhereInput;
    orderBy?: Prisma.ExpenseItemCategoryOrderByWithRelationInput | Prisma.ExpenseItemCategoryOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseItemCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseItemCategoryScalarFieldEnum | Prisma.ExpenseItemCategoryScalarFieldEnum[];
};
export type ExpenseItemCategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseItemCategoryInclude<ExtArgs> | null;
    where?: Prisma.ExpenseItemCategoryWhereInput;
    orderBy?: Prisma.ExpenseItemCategoryOrderByWithRelationInput | Prisma.ExpenseItemCategoryOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseItemCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseItemCategoryScalarFieldEnum | Prisma.ExpenseItemCategoryScalarFieldEnum[];
};
export type ExpenseItemCategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseItemCategoryInclude<ExtArgs> | null;
    where?: Prisma.ExpenseItemCategoryWhereInput;
    orderBy?: Prisma.ExpenseItemCategoryOrderByWithRelationInput | Prisma.ExpenseItemCategoryOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseItemCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseItemCategoryScalarFieldEnum | Prisma.ExpenseItemCategoryScalarFieldEnum[];
};
export type ExpenseItemCategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseItemCategoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExpenseItemCategoryCreateInput, Prisma.ExpenseItemCategoryUncheckedCreateInput>;
};
export type ExpenseItemCategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ExpenseItemCategoryCreateManyInput | Prisma.ExpenseItemCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExpenseItemCategoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseItemCategorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExpenseItemCategoryOmit<ExtArgs> | null;
    data: Prisma.ExpenseItemCategoryCreateManyInput | Prisma.ExpenseItemCategoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ExpenseItemCategoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ExpenseItemCategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseItemCategoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExpenseItemCategoryUpdateInput, Prisma.ExpenseItemCategoryUncheckedUpdateInput>;
    where: Prisma.ExpenseItemCategoryWhereUniqueInput;
};
export type ExpenseItemCategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ExpenseItemCategoryUpdateManyMutationInput, Prisma.ExpenseItemCategoryUncheckedUpdateManyInput>;
    where?: Prisma.ExpenseItemCategoryWhereInput;
    limit?: number;
};
export type ExpenseItemCategoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseItemCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExpenseItemCategoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExpenseItemCategoryUpdateManyMutationInput, Prisma.ExpenseItemCategoryUncheckedUpdateManyInput>;
    where?: Prisma.ExpenseItemCategoryWhereInput;
    limit?: number;
    include?: Prisma.ExpenseItemCategoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ExpenseItemCategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseItemCategoryInclude<ExtArgs> | null;
    where: Prisma.ExpenseItemCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseItemCategoryCreateInput, Prisma.ExpenseItemCategoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ExpenseItemCategoryUpdateInput, Prisma.ExpenseItemCategoryUncheckedUpdateInput>;
};
export type ExpenseItemCategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseItemCategoryInclude<ExtArgs> | null;
    where: Prisma.ExpenseItemCategoryWhereUniqueInput;
};
export type ExpenseItemCategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseItemCategoryWhereInput;
    limit?: number;
};
export type ExpenseItemCategory$parentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseItemCategoryInclude<ExtArgs> | null;
    where?: Prisma.ExpenseItemCategoryWhereInput;
};
export type ExpenseItemCategory$childrenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseItemCategoryInclude<ExtArgs> | null;
    where?: Prisma.ExpenseItemCategoryWhereInput;
    orderBy?: Prisma.ExpenseItemCategoryOrderByWithRelationInput | Prisma.ExpenseItemCategoryOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseItemCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseItemCategoryScalarFieldEnum | Prisma.ExpenseItemCategoryScalarFieldEnum[];
};
export type ExpenseItemCategory$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseItemSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseItemOmit<ExtArgs> | null;
    include?: Prisma.ExpenseItemInclude<ExtArgs> | null;
    where?: Prisma.ExpenseItemWhereInput;
    orderBy?: Prisma.ExpenseItemOrderByWithRelationInput | Prisma.ExpenseItemOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseItemScalarFieldEnum | Prisma.ExpenseItemScalarFieldEnum[];
};
export type ExpenseItemCategoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseItemCategoryInclude<ExtArgs> | null;
};
export {};
