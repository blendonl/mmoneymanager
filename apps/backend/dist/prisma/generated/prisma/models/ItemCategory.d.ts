import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ItemCategoryModel = runtime.Types.Result.DefaultSelection<Prisma.$ItemCategoryPayload>;
export type AggregateItemCategory = {
    _count: ItemCategoryCountAggregateOutputType | null;
    _min: ItemCategoryMinAggregateOutputType | null;
    _max: ItemCategoryMaxAggregateOutputType | null;
};
export type ItemCategoryMinAggregateOutputType = {
    id: string | null;
    parentId: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ItemCategoryMaxAggregateOutputType = {
    id: string | null;
    parentId: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ItemCategoryCountAggregateOutputType = {
    id: number;
    parentId: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ItemCategoryMinAggregateInputType = {
    id?: true;
    parentId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ItemCategoryMaxAggregateInputType = {
    id?: true;
    parentId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ItemCategoryCountAggregateInputType = {
    id?: true;
    parentId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ItemCategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemCategoryWhereInput;
    orderBy?: Prisma.ItemCategoryOrderByWithRelationInput | Prisma.ItemCategoryOrderByWithRelationInput[];
    cursor?: Prisma.ItemCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ItemCategoryCountAggregateInputType;
    _min?: ItemCategoryMinAggregateInputType;
    _max?: ItemCategoryMaxAggregateInputType;
};
export type GetItemCategoryAggregateType<T extends ItemCategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateItemCategory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateItemCategory[P]> : Prisma.GetScalarType<T[P], AggregateItemCategory[P]>;
};
export type ItemCategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemCategoryWhereInput;
    orderBy?: Prisma.ItemCategoryOrderByWithAggregationInput | Prisma.ItemCategoryOrderByWithAggregationInput[];
    by: Prisma.ItemCategoryScalarFieldEnum[] | Prisma.ItemCategoryScalarFieldEnum;
    having?: Prisma.ItemCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ItemCategoryCountAggregateInputType | true;
    _min?: ItemCategoryMinAggregateInputType;
    _max?: ItemCategoryMaxAggregateInputType;
};
export type ItemCategoryGroupByOutputType = {
    id: string;
    parentId: string | null;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ItemCategoryCountAggregateOutputType | null;
    _min: ItemCategoryMinAggregateOutputType | null;
    _max: ItemCategoryMaxAggregateOutputType | null;
};
type GetItemCategoryGroupByPayload<T extends ItemCategoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ItemCategoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ItemCategoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ItemCategoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ItemCategoryGroupByOutputType[P]>;
}>>;
export type ItemCategoryWhereInput = {
    AND?: Prisma.ItemCategoryWhereInput | Prisma.ItemCategoryWhereInput[];
    OR?: Prisma.ItemCategoryWhereInput[];
    NOT?: Prisma.ItemCategoryWhereInput | Prisma.ItemCategoryWhereInput[];
    id?: Prisma.StringFilter<"ItemCategory"> | string;
    parentId?: Prisma.StringNullableFilter<"ItemCategory"> | string | null;
    name?: Prisma.StringFilter<"ItemCategory"> | string;
    createdAt?: Prisma.DateTimeFilter<"ItemCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ItemCategory"> | Date | string;
    parent?: Prisma.XOR<Prisma.ItemCategoryNullableScalarRelationFilter, Prisma.ItemCategoryWhereInput> | null;
    children?: Prisma.ItemCategoryListRelationFilter;
    items?: Prisma.ItemListRelationFilter;
};
export type ItemCategoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    parentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    parent?: Prisma.ItemCategoryOrderByWithRelationInput;
    children?: Prisma.ItemCategoryOrderByRelationAggregateInput;
    items?: Prisma.ItemOrderByRelationAggregateInput;
};
export type ItemCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ItemCategoryWhereInput | Prisma.ItemCategoryWhereInput[];
    OR?: Prisma.ItemCategoryWhereInput[];
    NOT?: Prisma.ItemCategoryWhereInput | Prisma.ItemCategoryWhereInput[];
    parentId?: Prisma.StringNullableFilter<"ItemCategory"> | string | null;
    name?: Prisma.StringFilter<"ItemCategory"> | string;
    createdAt?: Prisma.DateTimeFilter<"ItemCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ItemCategory"> | Date | string;
    parent?: Prisma.XOR<Prisma.ItemCategoryNullableScalarRelationFilter, Prisma.ItemCategoryWhereInput> | null;
    children?: Prisma.ItemCategoryListRelationFilter;
    items?: Prisma.ItemListRelationFilter;
}, "id">;
export type ItemCategoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    parentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ItemCategoryCountOrderByAggregateInput;
    _max?: Prisma.ItemCategoryMaxOrderByAggregateInput;
    _min?: Prisma.ItemCategoryMinOrderByAggregateInput;
};
export type ItemCategoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.ItemCategoryScalarWhereWithAggregatesInput | Prisma.ItemCategoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.ItemCategoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ItemCategoryScalarWhereWithAggregatesInput | Prisma.ItemCategoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ItemCategory"> | string;
    parentId?: Prisma.StringNullableWithAggregatesFilter<"ItemCategory"> | string | null;
    name?: Prisma.StringWithAggregatesFilter<"ItemCategory"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ItemCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ItemCategory"> | Date | string;
};
export type ItemCategoryCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parent?: Prisma.ItemCategoryCreateNestedOneWithoutChildrenInput;
    children?: Prisma.ItemCategoryCreateNestedManyWithoutParentInput;
    items?: Prisma.ItemCreateNestedManyWithoutCategoryInput;
};
export type ItemCategoryUncheckedCreateInput = {
    id?: string;
    parentId?: string | null;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: Prisma.ItemCategoryUncheckedCreateNestedManyWithoutParentInput;
    items?: Prisma.ItemUncheckedCreateNestedManyWithoutCategoryInput;
};
export type ItemCategoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: Prisma.ItemCategoryUpdateOneWithoutChildrenNestedInput;
    children?: Prisma.ItemCategoryUpdateManyWithoutParentNestedInput;
    items?: Prisma.ItemUpdateManyWithoutCategoryNestedInput;
};
export type ItemCategoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    children?: Prisma.ItemCategoryUncheckedUpdateManyWithoutParentNestedInput;
    items?: Prisma.ItemUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type ItemCategoryCreateManyInput = {
    id?: string;
    parentId?: string | null;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ItemCategoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ItemCategoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ItemCategoryScalarRelationFilter = {
    is?: Prisma.ItemCategoryWhereInput;
    isNot?: Prisma.ItemCategoryWhereInput;
};
export type ItemCategoryNullableScalarRelationFilter = {
    is?: Prisma.ItemCategoryWhereInput | null;
    isNot?: Prisma.ItemCategoryWhereInput | null;
};
export type ItemCategoryListRelationFilter = {
    every?: Prisma.ItemCategoryWhereInput;
    some?: Prisma.ItemCategoryWhereInput;
    none?: Prisma.ItemCategoryWhereInput;
};
export type ItemCategoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ItemCategoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ItemCategoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ItemCategoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ItemCategoryCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.ItemCategoryCreateWithoutItemsInput, Prisma.ItemCategoryUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.ItemCategoryCreateOrConnectWithoutItemsInput;
    connect?: Prisma.ItemCategoryWhereUniqueInput;
};
export type ItemCategoryUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ItemCategoryCreateWithoutItemsInput, Prisma.ItemCategoryUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.ItemCategoryCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.ItemCategoryUpsertWithoutItemsInput;
    connect?: Prisma.ItemCategoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ItemCategoryUpdateToOneWithWhereWithoutItemsInput, Prisma.ItemCategoryUpdateWithoutItemsInput>, Prisma.ItemCategoryUncheckedUpdateWithoutItemsInput>;
};
export type ItemCategoryCreateNestedOneWithoutChildrenInput = {
    create?: Prisma.XOR<Prisma.ItemCategoryCreateWithoutChildrenInput, Prisma.ItemCategoryUncheckedCreateWithoutChildrenInput>;
    connectOrCreate?: Prisma.ItemCategoryCreateOrConnectWithoutChildrenInput;
    connect?: Prisma.ItemCategoryWhereUniqueInput;
};
export type ItemCategoryCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.ItemCategoryCreateWithoutParentInput, Prisma.ItemCategoryUncheckedCreateWithoutParentInput> | Prisma.ItemCategoryCreateWithoutParentInput[] | Prisma.ItemCategoryUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ItemCategoryCreateOrConnectWithoutParentInput | Prisma.ItemCategoryCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.ItemCategoryCreateManyParentInputEnvelope;
    connect?: Prisma.ItemCategoryWhereUniqueInput | Prisma.ItemCategoryWhereUniqueInput[];
};
export type ItemCategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.ItemCategoryCreateWithoutParentInput, Prisma.ItemCategoryUncheckedCreateWithoutParentInput> | Prisma.ItemCategoryCreateWithoutParentInput[] | Prisma.ItemCategoryUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ItemCategoryCreateOrConnectWithoutParentInput | Prisma.ItemCategoryCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.ItemCategoryCreateManyParentInputEnvelope;
    connect?: Prisma.ItemCategoryWhereUniqueInput | Prisma.ItemCategoryWhereUniqueInput[];
};
export type ItemCategoryUpdateOneWithoutChildrenNestedInput = {
    create?: Prisma.XOR<Prisma.ItemCategoryCreateWithoutChildrenInput, Prisma.ItemCategoryUncheckedCreateWithoutChildrenInput>;
    connectOrCreate?: Prisma.ItemCategoryCreateOrConnectWithoutChildrenInput;
    upsert?: Prisma.ItemCategoryUpsertWithoutChildrenInput;
    disconnect?: Prisma.ItemCategoryWhereInput | boolean;
    delete?: Prisma.ItemCategoryWhereInput | boolean;
    connect?: Prisma.ItemCategoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ItemCategoryUpdateToOneWithWhereWithoutChildrenInput, Prisma.ItemCategoryUpdateWithoutChildrenInput>, Prisma.ItemCategoryUncheckedUpdateWithoutChildrenInput>;
};
export type ItemCategoryUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.ItemCategoryCreateWithoutParentInput, Prisma.ItemCategoryUncheckedCreateWithoutParentInput> | Prisma.ItemCategoryCreateWithoutParentInput[] | Prisma.ItemCategoryUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ItemCategoryCreateOrConnectWithoutParentInput | Prisma.ItemCategoryCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.ItemCategoryUpsertWithWhereUniqueWithoutParentInput | Prisma.ItemCategoryUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.ItemCategoryCreateManyParentInputEnvelope;
    set?: Prisma.ItemCategoryWhereUniqueInput | Prisma.ItemCategoryWhereUniqueInput[];
    disconnect?: Prisma.ItemCategoryWhereUniqueInput | Prisma.ItemCategoryWhereUniqueInput[];
    delete?: Prisma.ItemCategoryWhereUniqueInput | Prisma.ItemCategoryWhereUniqueInput[];
    connect?: Prisma.ItemCategoryWhereUniqueInput | Prisma.ItemCategoryWhereUniqueInput[];
    update?: Prisma.ItemCategoryUpdateWithWhereUniqueWithoutParentInput | Prisma.ItemCategoryUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.ItemCategoryUpdateManyWithWhereWithoutParentInput | Prisma.ItemCategoryUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.ItemCategoryScalarWhereInput | Prisma.ItemCategoryScalarWhereInput[];
};
export type ItemCategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.ItemCategoryCreateWithoutParentInput, Prisma.ItemCategoryUncheckedCreateWithoutParentInput> | Prisma.ItemCategoryCreateWithoutParentInput[] | Prisma.ItemCategoryUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ItemCategoryCreateOrConnectWithoutParentInput | Prisma.ItemCategoryCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.ItemCategoryUpsertWithWhereUniqueWithoutParentInput | Prisma.ItemCategoryUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.ItemCategoryCreateManyParentInputEnvelope;
    set?: Prisma.ItemCategoryWhereUniqueInput | Prisma.ItemCategoryWhereUniqueInput[];
    disconnect?: Prisma.ItemCategoryWhereUniqueInput | Prisma.ItemCategoryWhereUniqueInput[];
    delete?: Prisma.ItemCategoryWhereUniqueInput | Prisma.ItemCategoryWhereUniqueInput[];
    connect?: Prisma.ItemCategoryWhereUniqueInput | Prisma.ItemCategoryWhereUniqueInput[];
    update?: Prisma.ItemCategoryUpdateWithWhereUniqueWithoutParentInput | Prisma.ItemCategoryUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.ItemCategoryUpdateManyWithWhereWithoutParentInput | Prisma.ItemCategoryUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.ItemCategoryScalarWhereInput | Prisma.ItemCategoryScalarWhereInput[];
};
export type ItemCategoryCreateWithoutItemsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parent?: Prisma.ItemCategoryCreateNestedOneWithoutChildrenInput;
    children?: Prisma.ItemCategoryCreateNestedManyWithoutParentInput;
};
export type ItemCategoryUncheckedCreateWithoutItemsInput = {
    id?: string;
    parentId?: string | null;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: Prisma.ItemCategoryUncheckedCreateNestedManyWithoutParentInput;
};
export type ItemCategoryCreateOrConnectWithoutItemsInput = {
    where: Prisma.ItemCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItemCategoryCreateWithoutItemsInput, Prisma.ItemCategoryUncheckedCreateWithoutItemsInput>;
};
export type ItemCategoryUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.ItemCategoryUpdateWithoutItemsInput, Prisma.ItemCategoryUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.ItemCategoryCreateWithoutItemsInput, Prisma.ItemCategoryUncheckedCreateWithoutItemsInput>;
    where?: Prisma.ItemCategoryWhereInput;
};
export type ItemCategoryUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.ItemCategoryWhereInput;
    data: Prisma.XOR<Prisma.ItemCategoryUpdateWithoutItemsInput, Prisma.ItemCategoryUncheckedUpdateWithoutItemsInput>;
};
export type ItemCategoryUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: Prisma.ItemCategoryUpdateOneWithoutChildrenNestedInput;
    children?: Prisma.ItemCategoryUpdateManyWithoutParentNestedInput;
};
export type ItemCategoryUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    children?: Prisma.ItemCategoryUncheckedUpdateManyWithoutParentNestedInput;
};
export type ItemCategoryCreateWithoutChildrenInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parent?: Prisma.ItemCategoryCreateNestedOneWithoutChildrenInput;
    items?: Prisma.ItemCreateNestedManyWithoutCategoryInput;
};
export type ItemCategoryUncheckedCreateWithoutChildrenInput = {
    id?: string;
    parentId?: string | null;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.ItemUncheckedCreateNestedManyWithoutCategoryInput;
};
export type ItemCategoryCreateOrConnectWithoutChildrenInput = {
    where: Prisma.ItemCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItemCategoryCreateWithoutChildrenInput, Prisma.ItemCategoryUncheckedCreateWithoutChildrenInput>;
};
export type ItemCategoryCreateWithoutParentInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: Prisma.ItemCategoryCreateNestedManyWithoutParentInput;
    items?: Prisma.ItemCreateNestedManyWithoutCategoryInput;
};
export type ItemCategoryUncheckedCreateWithoutParentInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: Prisma.ItemCategoryUncheckedCreateNestedManyWithoutParentInput;
    items?: Prisma.ItemUncheckedCreateNestedManyWithoutCategoryInput;
};
export type ItemCategoryCreateOrConnectWithoutParentInput = {
    where: Prisma.ItemCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItemCategoryCreateWithoutParentInput, Prisma.ItemCategoryUncheckedCreateWithoutParentInput>;
};
export type ItemCategoryCreateManyParentInputEnvelope = {
    data: Prisma.ItemCategoryCreateManyParentInput | Prisma.ItemCategoryCreateManyParentInput[];
    skipDuplicates?: boolean;
};
export type ItemCategoryUpsertWithoutChildrenInput = {
    update: Prisma.XOR<Prisma.ItemCategoryUpdateWithoutChildrenInput, Prisma.ItemCategoryUncheckedUpdateWithoutChildrenInput>;
    create: Prisma.XOR<Prisma.ItemCategoryCreateWithoutChildrenInput, Prisma.ItemCategoryUncheckedCreateWithoutChildrenInput>;
    where?: Prisma.ItemCategoryWhereInput;
};
export type ItemCategoryUpdateToOneWithWhereWithoutChildrenInput = {
    where?: Prisma.ItemCategoryWhereInput;
    data: Prisma.XOR<Prisma.ItemCategoryUpdateWithoutChildrenInput, Prisma.ItemCategoryUncheckedUpdateWithoutChildrenInput>;
};
export type ItemCategoryUpdateWithoutChildrenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: Prisma.ItemCategoryUpdateOneWithoutChildrenNestedInput;
    items?: Prisma.ItemUpdateManyWithoutCategoryNestedInput;
};
export type ItemCategoryUncheckedUpdateWithoutChildrenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.ItemUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type ItemCategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: Prisma.ItemCategoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.ItemCategoryUpdateWithoutParentInput, Prisma.ItemCategoryUncheckedUpdateWithoutParentInput>;
    create: Prisma.XOR<Prisma.ItemCategoryCreateWithoutParentInput, Prisma.ItemCategoryUncheckedCreateWithoutParentInput>;
};
export type ItemCategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: Prisma.ItemCategoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.ItemCategoryUpdateWithoutParentInput, Prisma.ItemCategoryUncheckedUpdateWithoutParentInput>;
};
export type ItemCategoryUpdateManyWithWhereWithoutParentInput = {
    where: Prisma.ItemCategoryScalarWhereInput;
    data: Prisma.XOR<Prisma.ItemCategoryUpdateManyMutationInput, Prisma.ItemCategoryUncheckedUpdateManyWithoutParentInput>;
};
export type ItemCategoryScalarWhereInput = {
    AND?: Prisma.ItemCategoryScalarWhereInput | Prisma.ItemCategoryScalarWhereInput[];
    OR?: Prisma.ItemCategoryScalarWhereInput[];
    NOT?: Prisma.ItemCategoryScalarWhereInput | Prisma.ItemCategoryScalarWhereInput[];
    id?: Prisma.StringFilter<"ItemCategory"> | string;
    parentId?: Prisma.StringNullableFilter<"ItemCategory"> | string | null;
    name?: Prisma.StringFilter<"ItemCategory"> | string;
    createdAt?: Prisma.DateTimeFilter<"ItemCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ItemCategory"> | Date | string;
};
export type ItemCategoryCreateManyParentInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ItemCategoryUpdateWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    children?: Prisma.ItemCategoryUpdateManyWithoutParentNestedInput;
    items?: Prisma.ItemUpdateManyWithoutCategoryNestedInput;
};
export type ItemCategoryUncheckedUpdateWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    children?: Prisma.ItemCategoryUncheckedUpdateManyWithoutParentNestedInput;
    items?: Prisma.ItemUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type ItemCategoryUncheckedUpdateManyWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ItemCategoryCountOutputType = {
    children: number;
    items: number;
};
export type ItemCategoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    children?: boolean | ItemCategoryCountOutputTypeCountChildrenArgs;
    items?: boolean | ItemCategoryCountOutputTypeCountItemsArgs;
};
export type ItemCategoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemCategoryCountOutputTypeSelect<ExtArgs> | null;
};
export type ItemCategoryCountOutputTypeCountChildrenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemCategoryWhereInput;
};
export type ItemCategoryCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemWhereInput;
};
export type ItemCategorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parentId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    parent?: boolean | Prisma.ItemCategory$parentArgs<ExtArgs>;
    children?: boolean | Prisma.ItemCategory$childrenArgs<ExtArgs>;
    items?: boolean | Prisma.ItemCategory$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ItemCategoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["itemCategory"]>;
export type ItemCategorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parentId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    parent?: boolean | Prisma.ItemCategory$parentArgs<ExtArgs>;
}, ExtArgs["result"]["itemCategory"]>;
export type ItemCategorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parentId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    parent?: boolean | Prisma.ItemCategory$parentArgs<ExtArgs>;
}, ExtArgs["result"]["itemCategory"]>;
export type ItemCategorySelectScalar = {
    id?: boolean;
    parentId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ItemCategoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "parentId" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["itemCategory"]>;
export type ItemCategoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parent?: boolean | Prisma.ItemCategory$parentArgs<ExtArgs>;
    children?: boolean | Prisma.ItemCategory$childrenArgs<ExtArgs>;
    items?: boolean | Prisma.ItemCategory$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ItemCategoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ItemCategoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parent?: boolean | Prisma.ItemCategory$parentArgs<ExtArgs>;
};
export type ItemCategoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parent?: boolean | Prisma.ItemCategory$parentArgs<ExtArgs>;
};
export type $ItemCategoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ItemCategory";
    objects: {
        parent: Prisma.$ItemCategoryPayload<ExtArgs> | null;
        children: Prisma.$ItemCategoryPayload<ExtArgs>[];
        items: Prisma.$ItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        parentId: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["itemCategory"]>;
    composites: {};
};
export type ItemCategoryGetPayload<S extends boolean | null | undefined | ItemCategoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ItemCategoryPayload, S>;
export type ItemCategoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ItemCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ItemCategoryCountAggregateInputType | true;
};
export interface ItemCategoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ItemCategory'];
        meta: {
            name: 'ItemCategory';
        };
    };
    findUnique<T extends ItemCategoryFindUniqueArgs>(args: Prisma.SelectSubset<T, ItemCategoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ItemCategoryClient<runtime.Types.Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ItemCategoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ItemCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ItemCategoryClient<runtime.Types.Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ItemCategoryFindFirstArgs>(args?: Prisma.SelectSubset<T, ItemCategoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__ItemCategoryClient<runtime.Types.Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ItemCategoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ItemCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ItemCategoryClient<runtime.Types.Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ItemCategoryFindManyArgs>(args?: Prisma.SelectSubset<T, ItemCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ItemCategoryCreateArgs>(args: Prisma.SelectSubset<T, ItemCategoryCreateArgs<ExtArgs>>): Prisma.Prisma__ItemCategoryClient<runtime.Types.Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ItemCategoryCreateManyArgs>(args?: Prisma.SelectSubset<T, ItemCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ItemCategoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ItemCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ItemCategoryDeleteArgs>(args: Prisma.SelectSubset<T, ItemCategoryDeleteArgs<ExtArgs>>): Prisma.Prisma__ItemCategoryClient<runtime.Types.Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ItemCategoryUpdateArgs>(args: Prisma.SelectSubset<T, ItemCategoryUpdateArgs<ExtArgs>>): Prisma.Prisma__ItemCategoryClient<runtime.Types.Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ItemCategoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, ItemCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ItemCategoryUpdateManyArgs>(args: Prisma.SelectSubset<T, ItemCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ItemCategoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ItemCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ItemCategoryUpsertArgs>(args: Prisma.SelectSubset<T, ItemCategoryUpsertArgs<ExtArgs>>): Prisma.Prisma__ItemCategoryClient<runtime.Types.Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ItemCategoryCountArgs>(args?: Prisma.Subset<T, ItemCategoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ItemCategoryCountAggregateOutputType> : number>;
    aggregate<T extends ItemCategoryAggregateArgs>(args: Prisma.Subset<T, ItemCategoryAggregateArgs>): Prisma.PrismaPromise<GetItemCategoryAggregateType<T>>;
    groupBy<T extends ItemCategoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ItemCategoryGroupByArgs['orderBy'];
    } : {
        orderBy?: ItemCategoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ItemCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ItemCategoryFieldRefs;
}
export interface Prisma__ItemCategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    parent<T extends Prisma.ItemCategory$parentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ItemCategory$parentArgs<ExtArgs>>): Prisma.Prisma__ItemCategoryClient<runtime.Types.Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    children<T extends Prisma.ItemCategory$childrenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ItemCategory$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    items<T extends Prisma.ItemCategory$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ItemCategory$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ItemCategoryFieldRefs {
    readonly id: Prisma.FieldRef<"ItemCategory", 'String'>;
    readonly parentId: Prisma.FieldRef<"ItemCategory", 'String'>;
    readonly name: Prisma.FieldRef<"ItemCategory", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ItemCategory", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ItemCategory", 'DateTime'>;
}
export type ItemCategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ItemCategoryInclude<ExtArgs> | null;
    where: Prisma.ItemCategoryWhereUniqueInput;
};
export type ItemCategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ItemCategoryInclude<ExtArgs> | null;
    where: Prisma.ItemCategoryWhereUniqueInput;
};
export type ItemCategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ItemCategoryInclude<ExtArgs> | null;
    where?: Prisma.ItemCategoryWhereInput;
    orderBy?: Prisma.ItemCategoryOrderByWithRelationInput | Prisma.ItemCategoryOrderByWithRelationInput[];
    cursor?: Prisma.ItemCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ItemCategoryScalarFieldEnum | Prisma.ItemCategoryScalarFieldEnum[];
};
export type ItemCategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ItemCategoryInclude<ExtArgs> | null;
    where?: Prisma.ItemCategoryWhereInput;
    orderBy?: Prisma.ItemCategoryOrderByWithRelationInput | Prisma.ItemCategoryOrderByWithRelationInput[];
    cursor?: Prisma.ItemCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ItemCategoryScalarFieldEnum | Prisma.ItemCategoryScalarFieldEnum[];
};
export type ItemCategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ItemCategoryInclude<ExtArgs> | null;
    where?: Prisma.ItemCategoryWhereInput;
    orderBy?: Prisma.ItemCategoryOrderByWithRelationInput | Prisma.ItemCategoryOrderByWithRelationInput[];
    cursor?: Prisma.ItemCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ItemCategoryScalarFieldEnum | Prisma.ItemCategoryScalarFieldEnum[];
};
export type ItemCategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ItemCategoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ItemCategoryCreateInput, Prisma.ItemCategoryUncheckedCreateInput>;
};
export type ItemCategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ItemCategoryCreateManyInput | Prisma.ItemCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ItemCategoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemCategorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ItemCategoryOmit<ExtArgs> | null;
    data: Prisma.ItemCategoryCreateManyInput | Prisma.ItemCategoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ItemCategoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ItemCategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ItemCategoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ItemCategoryUpdateInput, Prisma.ItemCategoryUncheckedUpdateInput>;
    where: Prisma.ItemCategoryWhereUniqueInput;
};
export type ItemCategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ItemCategoryUpdateManyMutationInput, Prisma.ItemCategoryUncheckedUpdateManyInput>;
    where?: Prisma.ItemCategoryWhereInput;
    limit?: number;
};
export type ItemCategoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ItemCategoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ItemCategoryUpdateManyMutationInput, Prisma.ItemCategoryUncheckedUpdateManyInput>;
    where?: Prisma.ItemCategoryWhereInput;
    limit?: number;
    include?: Prisma.ItemCategoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ItemCategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ItemCategoryInclude<ExtArgs> | null;
    where: Prisma.ItemCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItemCategoryCreateInput, Prisma.ItemCategoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ItemCategoryUpdateInput, Prisma.ItemCategoryUncheckedUpdateInput>;
};
export type ItemCategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ItemCategoryInclude<ExtArgs> | null;
    where: Prisma.ItemCategoryWhereUniqueInput;
};
export type ItemCategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemCategoryWhereInput;
    limit?: number;
};
export type ItemCategory$parentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ItemCategoryInclude<ExtArgs> | null;
    where?: Prisma.ItemCategoryWhereInput;
};
export type ItemCategory$childrenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ItemCategoryInclude<ExtArgs> | null;
    where?: Prisma.ItemCategoryWhereInput;
    orderBy?: Prisma.ItemCategoryOrderByWithRelationInput | Prisma.ItemCategoryOrderByWithRelationInput[];
    cursor?: Prisma.ItemCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ItemCategoryScalarFieldEnum | Prisma.ItemCategoryScalarFieldEnum[];
};
export type ItemCategory$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    where?: Prisma.ItemWhereInput;
    orderBy?: Prisma.ItemOrderByWithRelationInput | Prisma.ItemOrderByWithRelationInput[];
    cursor?: Prisma.ItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ItemScalarFieldEnum | Prisma.ItemScalarFieldEnum[];
};
export type ItemCategoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemCategorySelect<ExtArgs> | null;
    omit?: Prisma.ItemCategoryOmit<ExtArgs> | null;
    include?: Prisma.ItemCategoryInclude<ExtArgs> | null;
};
export {};
