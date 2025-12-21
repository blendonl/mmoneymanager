import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ExpenseCategoryModel = runtime.Types.Result.DefaultSelection<Prisma.$ExpenseCategoryPayload>;
export type AggregateExpenseCategory = {
    _count: ExpenseCategoryCountAggregateOutputType | null;
    _min: ExpenseCategoryMinAggregateOutputType | null;
    _max: ExpenseCategoryMaxAggregateOutputType | null;
};
export type ExpenseCategoryMinAggregateOutputType = {
    id: string | null;
    parentId: string | null;
    name: string | null;
    isConnectedToStore: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ExpenseCategoryMaxAggregateOutputType = {
    id: string | null;
    parentId: string | null;
    name: string | null;
    isConnectedToStore: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ExpenseCategoryCountAggregateOutputType = {
    id: number;
    parentId: number;
    name: number;
    isConnectedToStore: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ExpenseCategoryMinAggregateInputType = {
    id?: true;
    parentId?: true;
    name?: true;
    isConnectedToStore?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ExpenseCategoryMaxAggregateInputType = {
    id?: true;
    parentId?: true;
    name?: true;
    isConnectedToStore?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ExpenseCategoryCountAggregateInputType = {
    id?: true;
    parentId?: true;
    name?: true;
    isConnectedToStore?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ExpenseCategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseCategoryWhereInput;
    orderBy?: Prisma.ExpenseCategoryOrderByWithRelationInput | Prisma.ExpenseCategoryOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ExpenseCategoryCountAggregateInputType;
    _min?: ExpenseCategoryMinAggregateInputType;
    _max?: ExpenseCategoryMaxAggregateInputType;
};
export type GetExpenseCategoryAggregateType<T extends ExpenseCategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateExpenseCategory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExpenseCategory[P]> : Prisma.GetScalarType<T[P], AggregateExpenseCategory[P]>;
};
export type ExpenseCategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseCategoryWhereInput;
    orderBy?: Prisma.ExpenseCategoryOrderByWithAggregationInput | Prisma.ExpenseCategoryOrderByWithAggregationInput[];
    by: Prisma.ExpenseCategoryScalarFieldEnum[] | Prisma.ExpenseCategoryScalarFieldEnum;
    having?: Prisma.ExpenseCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExpenseCategoryCountAggregateInputType | true;
    _min?: ExpenseCategoryMinAggregateInputType;
    _max?: ExpenseCategoryMaxAggregateInputType;
};
export type ExpenseCategoryGroupByOutputType = {
    id: string;
    parentId: string | null;
    name: string;
    isConnectedToStore: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ExpenseCategoryCountAggregateOutputType | null;
    _min: ExpenseCategoryMinAggregateOutputType | null;
    _max: ExpenseCategoryMaxAggregateOutputType | null;
};
type GetExpenseCategoryGroupByPayload<T extends ExpenseCategoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExpenseCategoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExpenseCategoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExpenseCategoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExpenseCategoryGroupByOutputType[P]>;
}>>;
export type ExpenseCategoryWhereInput = {
    AND?: Prisma.ExpenseCategoryWhereInput | Prisma.ExpenseCategoryWhereInput[];
    OR?: Prisma.ExpenseCategoryWhereInput[];
    NOT?: Prisma.ExpenseCategoryWhereInput | Prisma.ExpenseCategoryWhereInput[];
    id?: Prisma.StringFilter<"ExpenseCategory"> | string;
    parentId?: Prisma.StringNullableFilter<"ExpenseCategory"> | string | null;
    name?: Prisma.StringFilter<"ExpenseCategory"> | string;
    isConnectedToStore?: Prisma.BoolFilter<"ExpenseCategory"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ExpenseCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ExpenseCategory"> | Date | string;
    parent?: Prisma.XOR<Prisma.ExpenseCategoryNullableScalarRelationFilter, Prisma.ExpenseCategoryWhereInput> | null;
    children?: Prisma.ExpenseCategoryListRelationFilter;
    expenses?: Prisma.ExpenseListRelationFilter;
};
export type ExpenseCategoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    parentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isConnectedToStore?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    parent?: Prisma.ExpenseCategoryOrderByWithRelationInput;
    children?: Prisma.ExpenseCategoryOrderByRelationAggregateInput;
    expenses?: Prisma.ExpenseOrderByRelationAggregateInput;
};
export type ExpenseCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    AND?: Prisma.ExpenseCategoryWhereInput | Prisma.ExpenseCategoryWhereInput[];
    OR?: Prisma.ExpenseCategoryWhereInput[];
    NOT?: Prisma.ExpenseCategoryWhereInput | Prisma.ExpenseCategoryWhereInput[];
    parentId?: Prisma.StringNullableFilter<"ExpenseCategory"> | string | null;
    isConnectedToStore?: Prisma.BoolFilter<"ExpenseCategory"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ExpenseCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ExpenseCategory"> | Date | string;
    parent?: Prisma.XOR<Prisma.ExpenseCategoryNullableScalarRelationFilter, Prisma.ExpenseCategoryWhereInput> | null;
    children?: Prisma.ExpenseCategoryListRelationFilter;
    expenses?: Prisma.ExpenseListRelationFilter;
}, "id" | "name">;
export type ExpenseCategoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    parentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isConnectedToStore?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ExpenseCategoryCountOrderByAggregateInput;
    _max?: Prisma.ExpenseCategoryMaxOrderByAggregateInput;
    _min?: Prisma.ExpenseCategoryMinOrderByAggregateInput;
};
export type ExpenseCategoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExpenseCategoryScalarWhereWithAggregatesInput | Prisma.ExpenseCategoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExpenseCategoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExpenseCategoryScalarWhereWithAggregatesInput | Prisma.ExpenseCategoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ExpenseCategory"> | string;
    parentId?: Prisma.StringNullableWithAggregatesFilter<"ExpenseCategory"> | string | null;
    name?: Prisma.StringWithAggregatesFilter<"ExpenseCategory"> | string;
    isConnectedToStore?: Prisma.BoolWithAggregatesFilter<"ExpenseCategory"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ExpenseCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ExpenseCategory"> | Date | string;
};
export type ExpenseCategoryCreateInput = {
    id?: string;
    name: string;
    isConnectedToStore?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parent?: Prisma.ExpenseCategoryCreateNestedOneWithoutChildrenInput;
    children?: Prisma.ExpenseCategoryCreateNestedManyWithoutParentInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutCategoryInput;
};
export type ExpenseCategoryUncheckedCreateInput = {
    id?: string;
    parentId?: string | null;
    name: string;
    isConnectedToStore?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: Prisma.ExpenseCategoryUncheckedCreateNestedManyWithoutParentInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutCategoryInput;
};
export type ExpenseCategoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isConnectedToStore?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: Prisma.ExpenseCategoryUpdateOneWithoutChildrenNestedInput;
    children?: Prisma.ExpenseCategoryUpdateManyWithoutParentNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutCategoryNestedInput;
};
export type ExpenseCategoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isConnectedToStore?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    children?: Prisma.ExpenseCategoryUncheckedUpdateManyWithoutParentNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type ExpenseCategoryCreateManyInput = {
    id?: string;
    parentId?: string | null;
    name: string;
    isConnectedToStore?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExpenseCategoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isConnectedToStore?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseCategoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isConnectedToStore?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseCategoryScalarRelationFilter = {
    is?: Prisma.ExpenseCategoryWhereInput;
    isNot?: Prisma.ExpenseCategoryWhereInput;
};
export type ExpenseCategoryNullableScalarRelationFilter = {
    is?: Prisma.ExpenseCategoryWhereInput | null;
    isNot?: Prisma.ExpenseCategoryWhereInput | null;
};
export type ExpenseCategoryListRelationFilter = {
    every?: Prisma.ExpenseCategoryWhereInput;
    some?: Prisma.ExpenseCategoryWhereInput;
    none?: Prisma.ExpenseCategoryWhereInput;
};
export type ExpenseCategoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ExpenseCategoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isConnectedToStore?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExpenseCategoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isConnectedToStore?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExpenseCategoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isConnectedToStore?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExpenseCategoryCreateNestedOneWithoutExpensesInput = {
    create?: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutExpensesInput, Prisma.ExpenseCategoryUncheckedCreateWithoutExpensesInput>;
    connectOrCreate?: Prisma.ExpenseCategoryCreateOrConnectWithoutExpensesInput;
    connect?: Prisma.ExpenseCategoryWhereUniqueInput;
};
export type ExpenseCategoryUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutExpensesInput, Prisma.ExpenseCategoryUncheckedCreateWithoutExpensesInput>;
    connectOrCreate?: Prisma.ExpenseCategoryCreateOrConnectWithoutExpensesInput;
    upsert?: Prisma.ExpenseCategoryUpsertWithoutExpensesInput;
    connect?: Prisma.ExpenseCategoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ExpenseCategoryUpdateToOneWithWhereWithoutExpensesInput, Prisma.ExpenseCategoryUpdateWithoutExpensesInput>, Prisma.ExpenseCategoryUncheckedUpdateWithoutExpensesInput>;
};
export type ExpenseCategoryCreateNestedOneWithoutChildrenInput = {
    create?: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutChildrenInput, Prisma.ExpenseCategoryUncheckedCreateWithoutChildrenInput>;
    connectOrCreate?: Prisma.ExpenseCategoryCreateOrConnectWithoutChildrenInput;
    connect?: Prisma.ExpenseCategoryWhereUniqueInput;
};
export type ExpenseCategoryCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutParentInput, Prisma.ExpenseCategoryUncheckedCreateWithoutParentInput> | Prisma.ExpenseCategoryCreateWithoutParentInput[] | Prisma.ExpenseCategoryUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ExpenseCategoryCreateOrConnectWithoutParentInput | Prisma.ExpenseCategoryCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.ExpenseCategoryCreateManyParentInputEnvelope;
    connect?: Prisma.ExpenseCategoryWhereUniqueInput | Prisma.ExpenseCategoryWhereUniqueInput[];
};
export type ExpenseCategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutParentInput, Prisma.ExpenseCategoryUncheckedCreateWithoutParentInput> | Prisma.ExpenseCategoryCreateWithoutParentInput[] | Prisma.ExpenseCategoryUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ExpenseCategoryCreateOrConnectWithoutParentInput | Prisma.ExpenseCategoryCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.ExpenseCategoryCreateManyParentInputEnvelope;
    connect?: Prisma.ExpenseCategoryWhereUniqueInput | Prisma.ExpenseCategoryWhereUniqueInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type ExpenseCategoryUpdateOneWithoutChildrenNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutChildrenInput, Prisma.ExpenseCategoryUncheckedCreateWithoutChildrenInput>;
    connectOrCreate?: Prisma.ExpenseCategoryCreateOrConnectWithoutChildrenInput;
    upsert?: Prisma.ExpenseCategoryUpsertWithoutChildrenInput;
    disconnect?: Prisma.ExpenseCategoryWhereInput | boolean;
    delete?: Prisma.ExpenseCategoryWhereInput | boolean;
    connect?: Prisma.ExpenseCategoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ExpenseCategoryUpdateToOneWithWhereWithoutChildrenInput, Prisma.ExpenseCategoryUpdateWithoutChildrenInput>, Prisma.ExpenseCategoryUncheckedUpdateWithoutChildrenInput>;
};
export type ExpenseCategoryUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutParentInput, Prisma.ExpenseCategoryUncheckedCreateWithoutParentInput> | Prisma.ExpenseCategoryCreateWithoutParentInput[] | Prisma.ExpenseCategoryUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ExpenseCategoryCreateOrConnectWithoutParentInput | Prisma.ExpenseCategoryCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.ExpenseCategoryUpsertWithWhereUniqueWithoutParentInput | Prisma.ExpenseCategoryUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.ExpenseCategoryCreateManyParentInputEnvelope;
    set?: Prisma.ExpenseCategoryWhereUniqueInput | Prisma.ExpenseCategoryWhereUniqueInput[];
    disconnect?: Prisma.ExpenseCategoryWhereUniqueInput | Prisma.ExpenseCategoryWhereUniqueInput[];
    delete?: Prisma.ExpenseCategoryWhereUniqueInput | Prisma.ExpenseCategoryWhereUniqueInput[];
    connect?: Prisma.ExpenseCategoryWhereUniqueInput | Prisma.ExpenseCategoryWhereUniqueInput[];
    update?: Prisma.ExpenseCategoryUpdateWithWhereUniqueWithoutParentInput | Prisma.ExpenseCategoryUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.ExpenseCategoryUpdateManyWithWhereWithoutParentInput | Prisma.ExpenseCategoryUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.ExpenseCategoryScalarWhereInput | Prisma.ExpenseCategoryScalarWhereInput[];
};
export type ExpenseCategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutParentInput, Prisma.ExpenseCategoryUncheckedCreateWithoutParentInput> | Prisma.ExpenseCategoryCreateWithoutParentInput[] | Prisma.ExpenseCategoryUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ExpenseCategoryCreateOrConnectWithoutParentInput | Prisma.ExpenseCategoryCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.ExpenseCategoryUpsertWithWhereUniqueWithoutParentInput | Prisma.ExpenseCategoryUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.ExpenseCategoryCreateManyParentInputEnvelope;
    set?: Prisma.ExpenseCategoryWhereUniqueInput | Prisma.ExpenseCategoryWhereUniqueInput[];
    disconnect?: Prisma.ExpenseCategoryWhereUniqueInput | Prisma.ExpenseCategoryWhereUniqueInput[];
    delete?: Prisma.ExpenseCategoryWhereUniqueInput | Prisma.ExpenseCategoryWhereUniqueInput[];
    connect?: Prisma.ExpenseCategoryWhereUniqueInput | Prisma.ExpenseCategoryWhereUniqueInput[];
    update?: Prisma.ExpenseCategoryUpdateWithWhereUniqueWithoutParentInput | Prisma.ExpenseCategoryUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.ExpenseCategoryUpdateManyWithWhereWithoutParentInput | Prisma.ExpenseCategoryUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.ExpenseCategoryScalarWhereInput | Prisma.ExpenseCategoryScalarWhereInput[];
};
export type ExpenseCategoryCreateWithoutExpensesInput = {
    id?: string;
    name: string;
    isConnectedToStore?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parent?: Prisma.ExpenseCategoryCreateNestedOneWithoutChildrenInput;
    children?: Prisma.ExpenseCategoryCreateNestedManyWithoutParentInput;
};
export type ExpenseCategoryUncheckedCreateWithoutExpensesInput = {
    id?: string;
    parentId?: string | null;
    name: string;
    isConnectedToStore?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: Prisma.ExpenseCategoryUncheckedCreateNestedManyWithoutParentInput;
};
export type ExpenseCategoryCreateOrConnectWithoutExpensesInput = {
    where: Prisma.ExpenseCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutExpensesInput, Prisma.ExpenseCategoryUncheckedCreateWithoutExpensesInput>;
};
export type ExpenseCategoryUpsertWithoutExpensesInput = {
    update: Prisma.XOR<Prisma.ExpenseCategoryUpdateWithoutExpensesInput, Prisma.ExpenseCategoryUncheckedUpdateWithoutExpensesInput>;
    create: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutExpensesInput, Prisma.ExpenseCategoryUncheckedCreateWithoutExpensesInput>;
    where?: Prisma.ExpenseCategoryWhereInput;
};
export type ExpenseCategoryUpdateToOneWithWhereWithoutExpensesInput = {
    where?: Prisma.ExpenseCategoryWhereInput;
    data: Prisma.XOR<Prisma.ExpenseCategoryUpdateWithoutExpensesInput, Prisma.ExpenseCategoryUncheckedUpdateWithoutExpensesInput>;
};
export type ExpenseCategoryUpdateWithoutExpensesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isConnectedToStore?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: Prisma.ExpenseCategoryUpdateOneWithoutChildrenNestedInput;
    children?: Prisma.ExpenseCategoryUpdateManyWithoutParentNestedInput;
};
export type ExpenseCategoryUncheckedUpdateWithoutExpensesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isConnectedToStore?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    children?: Prisma.ExpenseCategoryUncheckedUpdateManyWithoutParentNestedInput;
};
export type ExpenseCategoryCreateWithoutChildrenInput = {
    id?: string;
    name: string;
    isConnectedToStore?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parent?: Prisma.ExpenseCategoryCreateNestedOneWithoutChildrenInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutCategoryInput;
};
export type ExpenseCategoryUncheckedCreateWithoutChildrenInput = {
    id?: string;
    parentId?: string | null;
    name: string;
    isConnectedToStore?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutCategoryInput;
};
export type ExpenseCategoryCreateOrConnectWithoutChildrenInput = {
    where: Prisma.ExpenseCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutChildrenInput, Prisma.ExpenseCategoryUncheckedCreateWithoutChildrenInput>;
};
export type ExpenseCategoryCreateWithoutParentInput = {
    id?: string;
    name: string;
    isConnectedToStore?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: Prisma.ExpenseCategoryCreateNestedManyWithoutParentInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutCategoryInput;
};
export type ExpenseCategoryUncheckedCreateWithoutParentInput = {
    id?: string;
    name: string;
    isConnectedToStore?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: Prisma.ExpenseCategoryUncheckedCreateNestedManyWithoutParentInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutCategoryInput;
};
export type ExpenseCategoryCreateOrConnectWithoutParentInput = {
    where: Prisma.ExpenseCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutParentInput, Prisma.ExpenseCategoryUncheckedCreateWithoutParentInput>;
};
export type ExpenseCategoryCreateManyParentInputEnvelope = {
    data: Prisma.ExpenseCategoryCreateManyParentInput | Prisma.ExpenseCategoryCreateManyParentInput[];
    skipDuplicates?: boolean;
};
export type ExpenseCategoryUpsertWithoutChildrenInput = {
    update: Prisma.XOR<Prisma.ExpenseCategoryUpdateWithoutChildrenInput, Prisma.ExpenseCategoryUncheckedUpdateWithoutChildrenInput>;
    create: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutChildrenInput, Prisma.ExpenseCategoryUncheckedCreateWithoutChildrenInput>;
    where?: Prisma.ExpenseCategoryWhereInput;
};
export type ExpenseCategoryUpdateToOneWithWhereWithoutChildrenInput = {
    where?: Prisma.ExpenseCategoryWhereInput;
    data: Prisma.XOR<Prisma.ExpenseCategoryUpdateWithoutChildrenInput, Prisma.ExpenseCategoryUncheckedUpdateWithoutChildrenInput>;
};
export type ExpenseCategoryUpdateWithoutChildrenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isConnectedToStore?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: Prisma.ExpenseCategoryUpdateOneWithoutChildrenNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutCategoryNestedInput;
};
export type ExpenseCategoryUncheckedUpdateWithoutChildrenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isConnectedToStore?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type ExpenseCategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: Prisma.ExpenseCategoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExpenseCategoryUpdateWithoutParentInput, Prisma.ExpenseCategoryUncheckedUpdateWithoutParentInput>;
    create: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutParentInput, Prisma.ExpenseCategoryUncheckedCreateWithoutParentInput>;
};
export type ExpenseCategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: Prisma.ExpenseCategoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExpenseCategoryUpdateWithoutParentInput, Prisma.ExpenseCategoryUncheckedUpdateWithoutParentInput>;
};
export type ExpenseCategoryUpdateManyWithWhereWithoutParentInput = {
    where: Prisma.ExpenseCategoryScalarWhereInput;
    data: Prisma.XOR<Prisma.ExpenseCategoryUpdateManyMutationInput, Prisma.ExpenseCategoryUncheckedUpdateManyWithoutParentInput>;
};
export type ExpenseCategoryScalarWhereInput = {
    AND?: Prisma.ExpenseCategoryScalarWhereInput | Prisma.ExpenseCategoryScalarWhereInput[];
    OR?: Prisma.ExpenseCategoryScalarWhereInput[];
    NOT?: Prisma.ExpenseCategoryScalarWhereInput | Prisma.ExpenseCategoryScalarWhereInput[];
    id?: Prisma.StringFilter<"ExpenseCategory"> | string;
    parentId?: Prisma.StringNullableFilter<"ExpenseCategory"> | string | null;
    name?: Prisma.StringFilter<"ExpenseCategory"> | string;
    isConnectedToStore?: Prisma.BoolFilter<"ExpenseCategory"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ExpenseCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ExpenseCategory"> | Date | string;
};
export type ExpenseCategoryCreateManyParentInput = {
    id?: string;
    name: string;
    isConnectedToStore?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExpenseCategoryUpdateWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isConnectedToStore?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    children?: Prisma.ExpenseCategoryUpdateManyWithoutParentNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutCategoryNestedInput;
};
export type ExpenseCategoryUncheckedUpdateWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isConnectedToStore?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    children?: Prisma.ExpenseCategoryUncheckedUpdateManyWithoutParentNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type ExpenseCategoryUncheckedUpdateManyWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isConnectedToStore?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseCategoryCountOutputType = {
    children: number;
    expenses: number;
};
export type ExpenseCategoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    children?: boolean | ExpenseCategoryCountOutputTypeCountChildrenArgs;
    expenses?: boolean | ExpenseCategoryCountOutputTypeCountExpensesArgs;
};
export type ExpenseCategoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategoryCountOutputTypeSelect<ExtArgs> | null;
};
export type ExpenseCategoryCountOutputTypeCountChildrenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseCategoryWhereInput;
};
export type ExpenseCategoryCountOutputTypeCountExpensesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseWhereInput;
};
export type ExpenseCategorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parentId?: boolean;
    name?: boolean;
    isConnectedToStore?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    parent?: boolean | Prisma.ExpenseCategory$parentArgs<ExtArgs>;
    children?: boolean | Prisma.ExpenseCategory$childrenArgs<ExtArgs>;
    expenses?: boolean | Prisma.ExpenseCategory$expensesArgs<ExtArgs>;
    _count?: boolean | Prisma.ExpenseCategoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expenseCategory"]>;
export type ExpenseCategorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parentId?: boolean;
    name?: boolean;
    isConnectedToStore?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    parent?: boolean | Prisma.ExpenseCategory$parentArgs<ExtArgs>;
}, ExtArgs["result"]["expenseCategory"]>;
export type ExpenseCategorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parentId?: boolean;
    name?: boolean;
    isConnectedToStore?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    parent?: boolean | Prisma.ExpenseCategory$parentArgs<ExtArgs>;
}, ExtArgs["result"]["expenseCategory"]>;
export type ExpenseCategorySelectScalar = {
    id?: boolean;
    parentId?: boolean;
    name?: boolean;
    isConnectedToStore?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ExpenseCategoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "parentId" | "name" | "isConnectedToStore" | "createdAt" | "updatedAt", ExtArgs["result"]["expenseCategory"]>;
export type ExpenseCategoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parent?: boolean | Prisma.ExpenseCategory$parentArgs<ExtArgs>;
    children?: boolean | Prisma.ExpenseCategory$childrenArgs<ExtArgs>;
    expenses?: boolean | Prisma.ExpenseCategory$expensesArgs<ExtArgs>;
    _count?: boolean | Prisma.ExpenseCategoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ExpenseCategoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parent?: boolean | Prisma.ExpenseCategory$parentArgs<ExtArgs>;
};
export type ExpenseCategoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parent?: boolean | Prisma.ExpenseCategory$parentArgs<ExtArgs>;
};
export type $ExpenseCategoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ExpenseCategory";
    objects: {
        parent: Prisma.$ExpenseCategoryPayload<ExtArgs> | null;
        children: Prisma.$ExpenseCategoryPayload<ExtArgs>[];
        expenses: Prisma.$ExpensePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        parentId: string | null;
        name: string;
        isConnectedToStore: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["expenseCategory"]>;
    composites: {};
};
export type ExpenseCategoryGetPayload<S extends boolean | null | undefined | ExpenseCategoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload, S>;
export type ExpenseCategoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExpenseCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExpenseCategoryCountAggregateInputType | true;
};
export interface ExpenseCategoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ExpenseCategory'];
        meta: {
            name: 'ExpenseCategory';
        };
    };
    findUnique<T extends ExpenseCategoryFindUniqueArgs>(args: Prisma.SelectSubset<T, ExpenseCategoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExpenseCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ExpenseCategoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExpenseCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExpenseCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ExpenseCategoryFindFirstArgs>(args?: Prisma.SelectSubset<T, ExpenseCategoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExpenseCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ExpenseCategoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExpenseCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExpenseCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ExpenseCategoryFindManyArgs>(args?: Prisma.SelectSubset<T, ExpenseCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ExpenseCategoryCreateArgs>(args: Prisma.SelectSubset<T, ExpenseCategoryCreateArgs<ExtArgs>>): Prisma.Prisma__ExpenseCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ExpenseCategoryCreateManyArgs>(args?: Prisma.SelectSubset<T, ExpenseCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ExpenseCategoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExpenseCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ExpenseCategoryDeleteArgs>(args: Prisma.SelectSubset<T, ExpenseCategoryDeleteArgs<ExtArgs>>): Prisma.Prisma__ExpenseCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ExpenseCategoryUpdateArgs>(args: Prisma.SelectSubset<T, ExpenseCategoryUpdateArgs<ExtArgs>>): Prisma.Prisma__ExpenseCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ExpenseCategoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExpenseCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ExpenseCategoryUpdateManyArgs>(args: Prisma.SelectSubset<T, ExpenseCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ExpenseCategoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExpenseCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ExpenseCategoryUpsertArgs>(args: Prisma.SelectSubset<T, ExpenseCategoryUpsertArgs<ExtArgs>>): Prisma.Prisma__ExpenseCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ExpenseCategoryCountArgs>(args?: Prisma.Subset<T, ExpenseCategoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExpenseCategoryCountAggregateOutputType> : number>;
    aggregate<T extends ExpenseCategoryAggregateArgs>(args: Prisma.Subset<T, ExpenseCategoryAggregateArgs>): Prisma.PrismaPromise<GetExpenseCategoryAggregateType<T>>;
    groupBy<T extends ExpenseCategoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExpenseCategoryGroupByArgs['orderBy'];
    } : {
        orderBy?: ExpenseCategoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExpenseCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ExpenseCategoryFieldRefs;
}
export interface Prisma__ExpenseCategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    parent<T extends Prisma.ExpenseCategory$parentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ExpenseCategory$parentArgs<ExtArgs>>): Prisma.Prisma__ExpenseCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    children<T extends Prisma.ExpenseCategory$childrenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ExpenseCategory$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    expenses<T extends Prisma.ExpenseCategory$expensesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ExpenseCategory$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ExpenseCategoryFieldRefs {
    readonly id: Prisma.FieldRef<"ExpenseCategory", 'String'>;
    readonly parentId: Prisma.FieldRef<"ExpenseCategory", 'String'>;
    readonly name: Prisma.FieldRef<"ExpenseCategory", 'String'>;
    readonly isConnectedToStore: Prisma.FieldRef<"ExpenseCategory", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"ExpenseCategory", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ExpenseCategory", 'DateTime'>;
}
export type ExpenseCategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseCategoryInclude<ExtArgs> | null;
    where: Prisma.ExpenseCategoryWhereUniqueInput;
};
export type ExpenseCategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseCategoryInclude<ExtArgs> | null;
    where: Prisma.ExpenseCategoryWhereUniqueInput;
};
export type ExpenseCategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseCategoryInclude<ExtArgs> | null;
    where?: Prisma.ExpenseCategoryWhereInput;
    orderBy?: Prisma.ExpenseCategoryOrderByWithRelationInput | Prisma.ExpenseCategoryOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseCategoryScalarFieldEnum | Prisma.ExpenseCategoryScalarFieldEnum[];
};
export type ExpenseCategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseCategoryInclude<ExtArgs> | null;
    where?: Prisma.ExpenseCategoryWhereInput;
    orderBy?: Prisma.ExpenseCategoryOrderByWithRelationInput | Prisma.ExpenseCategoryOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseCategoryScalarFieldEnum | Prisma.ExpenseCategoryScalarFieldEnum[];
};
export type ExpenseCategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseCategoryInclude<ExtArgs> | null;
    where?: Prisma.ExpenseCategoryWhereInput;
    orderBy?: Prisma.ExpenseCategoryOrderByWithRelationInput | Prisma.ExpenseCategoryOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseCategoryScalarFieldEnum | Prisma.ExpenseCategoryScalarFieldEnum[];
};
export type ExpenseCategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseCategoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExpenseCategoryCreateInput, Prisma.ExpenseCategoryUncheckedCreateInput>;
};
export type ExpenseCategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ExpenseCategoryCreateManyInput | Prisma.ExpenseCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExpenseCategoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    data: Prisma.ExpenseCategoryCreateManyInput | Prisma.ExpenseCategoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ExpenseCategoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ExpenseCategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseCategoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExpenseCategoryUpdateInput, Prisma.ExpenseCategoryUncheckedUpdateInput>;
    where: Prisma.ExpenseCategoryWhereUniqueInput;
};
export type ExpenseCategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ExpenseCategoryUpdateManyMutationInput, Prisma.ExpenseCategoryUncheckedUpdateManyInput>;
    where?: Prisma.ExpenseCategoryWhereInput;
    limit?: number;
};
export type ExpenseCategoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExpenseCategoryUpdateManyMutationInput, Prisma.ExpenseCategoryUncheckedUpdateManyInput>;
    where?: Prisma.ExpenseCategoryWhereInput;
    limit?: number;
    include?: Prisma.ExpenseCategoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ExpenseCategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseCategoryInclude<ExtArgs> | null;
    where: Prisma.ExpenseCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseCategoryCreateInput, Prisma.ExpenseCategoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ExpenseCategoryUpdateInput, Prisma.ExpenseCategoryUncheckedUpdateInput>;
};
export type ExpenseCategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseCategoryInclude<ExtArgs> | null;
    where: Prisma.ExpenseCategoryWhereUniqueInput;
};
export type ExpenseCategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseCategoryWhereInput;
    limit?: number;
};
export type ExpenseCategory$parentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseCategoryInclude<ExtArgs> | null;
    where?: Prisma.ExpenseCategoryWhereInput;
};
export type ExpenseCategory$childrenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseCategoryInclude<ExtArgs> | null;
    where?: Prisma.ExpenseCategoryWhereInput;
    orderBy?: Prisma.ExpenseCategoryOrderByWithRelationInput | Prisma.ExpenseCategoryOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseCategoryScalarFieldEnum | Prisma.ExpenseCategoryScalarFieldEnum[];
};
export type ExpenseCategory$expensesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    where?: Prisma.ExpenseWhereInput;
    orderBy?: Prisma.ExpenseOrderByWithRelationInput | Prisma.ExpenseOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseScalarFieldEnum | Prisma.ExpenseScalarFieldEnum[];
};
export type ExpenseCategoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseCategoryInclude<ExtArgs> | null;
};
export {};
