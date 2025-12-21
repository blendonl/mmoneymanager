import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type IncomeModel = runtime.Types.Result.DefaultSelection<Prisma.$IncomePayload>;
export type AggregateIncome = {
    _count: IncomeCountAggregateOutputType | null;
    _min: IncomeMinAggregateOutputType | null;
    _max: IncomeMaxAggregateOutputType | null;
};
export type IncomeMinAggregateOutputType = {
    id: string | null;
    transactionId: string | null;
    storeId: string | null;
    categoryId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type IncomeMaxAggregateOutputType = {
    id: string | null;
    transactionId: string | null;
    storeId: string | null;
    categoryId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type IncomeCountAggregateOutputType = {
    id: number;
    transactionId: number;
    storeId: number;
    categoryId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type IncomeMinAggregateInputType = {
    id?: true;
    transactionId?: true;
    storeId?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type IncomeMaxAggregateInputType = {
    id?: true;
    transactionId?: true;
    storeId?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type IncomeCountAggregateInputType = {
    id?: true;
    transactionId?: true;
    storeId?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type IncomeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncomeWhereInput;
    orderBy?: Prisma.IncomeOrderByWithRelationInput | Prisma.IncomeOrderByWithRelationInput[];
    cursor?: Prisma.IncomeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | IncomeCountAggregateInputType;
    _min?: IncomeMinAggregateInputType;
    _max?: IncomeMaxAggregateInputType;
};
export type GetIncomeAggregateType<T extends IncomeAggregateArgs> = {
    [P in keyof T & keyof AggregateIncome]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIncome[P]> : Prisma.GetScalarType<T[P], AggregateIncome[P]>;
};
export type IncomeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncomeWhereInput;
    orderBy?: Prisma.IncomeOrderByWithAggregationInput | Prisma.IncomeOrderByWithAggregationInput[];
    by: Prisma.IncomeScalarFieldEnum[] | Prisma.IncomeScalarFieldEnum;
    having?: Prisma.IncomeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IncomeCountAggregateInputType | true;
    _min?: IncomeMinAggregateInputType;
    _max?: IncomeMaxAggregateInputType;
};
export type IncomeGroupByOutputType = {
    id: string;
    transactionId: string;
    storeId: string;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: IncomeCountAggregateOutputType | null;
    _min: IncomeMinAggregateOutputType | null;
    _max: IncomeMaxAggregateOutputType | null;
};
type GetIncomeGroupByPayload<T extends IncomeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IncomeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IncomeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IncomeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IncomeGroupByOutputType[P]>;
}>>;
export type IncomeWhereInput = {
    AND?: Prisma.IncomeWhereInput | Prisma.IncomeWhereInput[];
    OR?: Prisma.IncomeWhereInput[];
    NOT?: Prisma.IncomeWhereInput | Prisma.IncomeWhereInput[];
    id?: Prisma.StringFilter<"Income"> | string;
    transactionId?: Prisma.StringFilter<"Income"> | string;
    storeId?: Prisma.StringFilter<"Income"> | string;
    categoryId?: Prisma.StringFilter<"Income"> | string;
    createdAt?: Prisma.DateTimeFilter<"Income"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Income"> | Date | string;
    category?: Prisma.XOR<Prisma.IncomeCategoryScalarRelationFilter, Prisma.IncomeCategoryWhereInput>;
    transaction?: Prisma.XOR<Prisma.TransactionScalarRelationFilter, Prisma.TransactionWhereInput>;
};
export type IncomeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    storeId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    category?: Prisma.IncomeCategoryOrderByWithRelationInput;
    transaction?: Prisma.TransactionOrderByWithRelationInput;
};
export type IncomeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    transactionId?: string;
    AND?: Prisma.IncomeWhereInput | Prisma.IncomeWhereInput[];
    OR?: Prisma.IncomeWhereInput[];
    NOT?: Prisma.IncomeWhereInput | Prisma.IncomeWhereInput[];
    storeId?: Prisma.StringFilter<"Income"> | string;
    categoryId?: Prisma.StringFilter<"Income"> | string;
    createdAt?: Prisma.DateTimeFilter<"Income"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Income"> | Date | string;
    category?: Prisma.XOR<Prisma.IncomeCategoryScalarRelationFilter, Prisma.IncomeCategoryWhereInput>;
    transaction?: Prisma.XOR<Prisma.TransactionScalarRelationFilter, Prisma.TransactionWhereInput>;
}, "id" | "transactionId">;
export type IncomeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    storeId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.IncomeCountOrderByAggregateInput;
    _max?: Prisma.IncomeMaxOrderByAggregateInput;
    _min?: Prisma.IncomeMinOrderByAggregateInput;
};
export type IncomeScalarWhereWithAggregatesInput = {
    AND?: Prisma.IncomeScalarWhereWithAggregatesInput | Prisma.IncomeScalarWhereWithAggregatesInput[];
    OR?: Prisma.IncomeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IncomeScalarWhereWithAggregatesInput | Prisma.IncomeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Income"> | string;
    transactionId?: Prisma.StringWithAggregatesFilter<"Income"> | string;
    storeId?: Prisma.StringWithAggregatesFilter<"Income"> | string;
    categoryId?: Prisma.StringWithAggregatesFilter<"Income"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Income"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Income"> | Date | string;
};
export type IncomeCreateInput = {
    id: string;
    storeId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: Prisma.IncomeCategoryCreateNestedOneWithoutIncomesInput;
    transaction: Prisma.TransactionCreateNestedOneWithoutIncomeInput;
};
export type IncomeUncheckedCreateInput = {
    id: string;
    transactionId: string;
    storeId: string;
    categoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type IncomeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.IncomeCategoryUpdateOneRequiredWithoutIncomesNestedInput;
    transaction?: Prisma.TransactionUpdateOneRequiredWithoutIncomeNestedInput;
};
export type IncomeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    storeId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IncomeCreateManyInput = {
    id: string;
    transactionId: string;
    storeId: string;
    categoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type IncomeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IncomeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    storeId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IncomeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    storeId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type IncomeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    storeId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type IncomeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    storeId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type IncomeListRelationFilter = {
    every?: Prisma.IncomeWhereInput;
    some?: Prisma.IncomeWhereInput;
    none?: Prisma.IncomeWhereInput;
};
export type IncomeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IncomeNullableScalarRelationFilter = {
    is?: Prisma.IncomeWhereInput | null;
    isNot?: Prisma.IncomeWhereInput | null;
};
export type IncomeCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.IncomeCreateWithoutCategoryInput, Prisma.IncomeUncheckedCreateWithoutCategoryInput> | Prisma.IncomeCreateWithoutCategoryInput[] | Prisma.IncomeUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.IncomeCreateOrConnectWithoutCategoryInput | Prisma.IncomeCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.IncomeCreateManyCategoryInputEnvelope;
    connect?: Prisma.IncomeWhereUniqueInput | Prisma.IncomeWhereUniqueInput[];
};
export type IncomeUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.IncomeCreateWithoutCategoryInput, Prisma.IncomeUncheckedCreateWithoutCategoryInput> | Prisma.IncomeCreateWithoutCategoryInput[] | Prisma.IncomeUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.IncomeCreateOrConnectWithoutCategoryInput | Prisma.IncomeCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.IncomeCreateManyCategoryInputEnvelope;
    connect?: Prisma.IncomeWhereUniqueInput | Prisma.IncomeWhereUniqueInput[];
};
export type IncomeUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.IncomeCreateWithoutCategoryInput, Prisma.IncomeUncheckedCreateWithoutCategoryInput> | Prisma.IncomeCreateWithoutCategoryInput[] | Prisma.IncomeUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.IncomeCreateOrConnectWithoutCategoryInput | Prisma.IncomeCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.IncomeUpsertWithWhereUniqueWithoutCategoryInput | Prisma.IncomeUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.IncomeCreateManyCategoryInputEnvelope;
    set?: Prisma.IncomeWhereUniqueInput | Prisma.IncomeWhereUniqueInput[];
    disconnect?: Prisma.IncomeWhereUniqueInput | Prisma.IncomeWhereUniqueInput[];
    delete?: Prisma.IncomeWhereUniqueInput | Prisma.IncomeWhereUniqueInput[];
    connect?: Prisma.IncomeWhereUniqueInput | Prisma.IncomeWhereUniqueInput[];
    update?: Prisma.IncomeUpdateWithWhereUniqueWithoutCategoryInput | Prisma.IncomeUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.IncomeUpdateManyWithWhereWithoutCategoryInput | Prisma.IncomeUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.IncomeScalarWhereInput | Prisma.IncomeScalarWhereInput[];
};
export type IncomeUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.IncomeCreateWithoutCategoryInput, Prisma.IncomeUncheckedCreateWithoutCategoryInput> | Prisma.IncomeCreateWithoutCategoryInput[] | Prisma.IncomeUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.IncomeCreateOrConnectWithoutCategoryInput | Prisma.IncomeCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.IncomeUpsertWithWhereUniqueWithoutCategoryInput | Prisma.IncomeUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.IncomeCreateManyCategoryInputEnvelope;
    set?: Prisma.IncomeWhereUniqueInput | Prisma.IncomeWhereUniqueInput[];
    disconnect?: Prisma.IncomeWhereUniqueInput | Prisma.IncomeWhereUniqueInput[];
    delete?: Prisma.IncomeWhereUniqueInput | Prisma.IncomeWhereUniqueInput[];
    connect?: Prisma.IncomeWhereUniqueInput | Prisma.IncomeWhereUniqueInput[];
    update?: Prisma.IncomeUpdateWithWhereUniqueWithoutCategoryInput | Prisma.IncomeUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.IncomeUpdateManyWithWhereWithoutCategoryInput | Prisma.IncomeUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.IncomeScalarWhereInput | Prisma.IncomeScalarWhereInput[];
};
export type IncomeCreateNestedOneWithoutTransactionInput = {
    create?: Prisma.XOR<Prisma.IncomeCreateWithoutTransactionInput, Prisma.IncomeUncheckedCreateWithoutTransactionInput>;
    connectOrCreate?: Prisma.IncomeCreateOrConnectWithoutTransactionInput;
    connect?: Prisma.IncomeWhereUniqueInput;
};
export type IncomeUncheckedCreateNestedOneWithoutTransactionInput = {
    create?: Prisma.XOR<Prisma.IncomeCreateWithoutTransactionInput, Prisma.IncomeUncheckedCreateWithoutTransactionInput>;
    connectOrCreate?: Prisma.IncomeCreateOrConnectWithoutTransactionInput;
    connect?: Prisma.IncomeWhereUniqueInput;
};
export type IncomeUpdateOneWithoutTransactionNestedInput = {
    create?: Prisma.XOR<Prisma.IncomeCreateWithoutTransactionInput, Prisma.IncomeUncheckedCreateWithoutTransactionInput>;
    connectOrCreate?: Prisma.IncomeCreateOrConnectWithoutTransactionInput;
    upsert?: Prisma.IncomeUpsertWithoutTransactionInput;
    disconnect?: Prisma.IncomeWhereInput | boolean;
    delete?: Prisma.IncomeWhereInput | boolean;
    connect?: Prisma.IncomeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.IncomeUpdateToOneWithWhereWithoutTransactionInput, Prisma.IncomeUpdateWithoutTransactionInput>, Prisma.IncomeUncheckedUpdateWithoutTransactionInput>;
};
export type IncomeUncheckedUpdateOneWithoutTransactionNestedInput = {
    create?: Prisma.XOR<Prisma.IncomeCreateWithoutTransactionInput, Prisma.IncomeUncheckedCreateWithoutTransactionInput>;
    connectOrCreate?: Prisma.IncomeCreateOrConnectWithoutTransactionInput;
    upsert?: Prisma.IncomeUpsertWithoutTransactionInput;
    disconnect?: Prisma.IncomeWhereInput | boolean;
    delete?: Prisma.IncomeWhereInput | boolean;
    connect?: Prisma.IncomeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.IncomeUpdateToOneWithWhereWithoutTransactionInput, Prisma.IncomeUpdateWithoutTransactionInput>, Prisma.IncomeUncheckedUpdateWithoutTransactionInput>;
};
export type IncomeCreateWithoutCategoryInput = {
    id: string;
    storeId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transaction: Prisma.TransactionCreateNestedOneWithoutIncomeInput;
};
export type IncomeUncheckedCreateWithoutCategoryInput = {
    id: string;
    transactionId: string;
    storeId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type IncomeCreateOrConnectWithoutCategoryInput = {
    where: Prisma.IncomeWhereUniqueInput;
    create: Prisma.XOR<Prisma.IncomeCreateWithoutCategoryInput, Prisma.IncomeUncheckedCreateWithoutCategoryInput>;
};
export type IncomeCreateManyCategoryInputEnvelope = {
    data: Prisma.IncomeCreateManyCategoryInput | Prisma.IncomeCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type IncomeUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.IncomeWhereUniqueInput;
    update: Prisma.XOR<Prisma.IncomeUpdateWithoutCategoryInput, Prisma.IncomeUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.IncomeCreateWithoutCategoryInput, Prisma.IncomeUncheckedCreateWithoutCategoryInput>;
};
export type IncomeUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.IncomeWhereUniqueInput;
    data: Prisma.XOR<Prisma.IncomeUpdateWithoutCategoryInput, Prisma.IncomeUncheckedUpdateWithoutCategoryInput>;
};
export type IncomeUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.IncomeScalarWhereInput;
    data: Prisma.XOR<Prisma.IncomeUpdateManyMutationInput, Prisma.IncomeUncheckedUpdateManyWithoutCategoryInput>;
};
export type IncomeScalarWhereInput = {
    AND?: Prisma.IncomeScalarWhereInput | Prisma.IncomeScalarWhereInput[];
    OR?: Prisma.IncomeScalarWhereInput[];
    NOT?: Prisma.IncomeScalarWhereInput | Prisma.IncomeScalarWhereInput[];
    id?: Prisma.StringFilter<"Income"> | string;
    transactionId?: Prisma.StringFilter<"Income"> | string;
    storeId?: Prisma.StringFilter<"Income"> | string;
    categoryId?: Prisma.StringFilter<"Income"> | string;
    createdAt?: Prisma.DateTimeFilter<"Income"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Income"> | Date | string;
};
export type IncomeCreateWithoutTransactionInput = {
    id: string;
    storeId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: Prisma.IncomeCategoryCreateNestedOneWithoutIncomesInput;
};
export type IncomeUncheckedCreateWithoutTransactionInput = {
    id: string;
    storeId: string;
    categoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type IncomeCreateOrConnectWithoutTransactionInput = {
    where: Prisma.IncomeWhereUniqueInput;
    create: Prisma.XOR<Prisma.IncomeCreateWithoutTransactionInput, Prisma.IncomeUncheckedCreateWithoutTransactionInput>;
};
export type IncomeUpsertWithoutTransactionInput = {
    update: Prisma.XOR<Prisma.IncomeUpdateWithoutTransactionInput, Prisma.IncomeUncheckedUpdateWithoutTransactionInput>;
    create: Prisma.XOR<Prisma.IncomeCreateWithoutTransactionInput, Prisma.IncomeUncheckedCreateWithoutTransactionInput>;
    where?: Prisma.IncomeWhereInput;
};
export type IncomeUpdateToOneWithWhereWithoutTransactionInput = {
    where?: Prisma.IncomeWhereInput;
    data: Prisma.XOR<Prisma.IncomeUpdateWithoutTransactionInput, Prisma.IncomeUncheckedUpdateWithoutTransactionInput>;
};
export type IncomeUpdateWithoutTransactionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.IncomeCategoryUpdateOneRequiredWithoutIncomesNestedInput;
};
export type IncomeUncheckedUpdateWithoutTransactionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IncomeCreateManyCategoryInput = {
    id: string;
    transactionId: string;
    storeId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type IncomeUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction?: Prisma.TransactionUpdateOneRequiredWithoutIncomeNestedInput;
};
export type IncomeUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    storeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IncomeUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    storeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IncomeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transactionId?: boolean;
    storeId?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.IncomeCategoryDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.TransactionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["income"]>;
export type IncomeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transactionId?: boolean;
    storeId?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.IncomeCategoryDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.TransactionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["income"]>;
export type IncomeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transactionId?: boolean;
    storeId?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.IncomeCategoryDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.TransactionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["income"]>;
export type IncomeSelectScalar = {
    id?: boolean;
    transactionId?: boolean;
    storeId?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type IncomeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "transactionId" | "storeId" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["income"]>;
export type IncomeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.IncomeCategoryDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.TransactionDefaultArgs<ExtArgs>;
};
export type IncomeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.IncomeCategoryDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.TransactionDefaultArgs<ExtArgs>;
};
export type IncomeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.IncomeCategoryDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.TransactionDefaultArgs<ExtArgs>;
};
export type $IncomePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Income";
    objects: {
        category: Prisma.$IncomeCategoryPayload<ExtArgs>;
        transaction: Prisma.$TransactionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        transactionId: string;
        storeId: string;
        categoryId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["income"]>;
    composites: {};
};
export type IncomeGetPayload<S extends boolean | null | undefined | IncomeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IncomePayload, S>;
export type IncomeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IncomeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IncomeCountAggregateInputType | true;
};
export interface IncomeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Income'];
        meta: {
            name: 'Income';
        };
    };
    findUnique<T extends IncomeFindUniqueArgs>(args: Prisma.SelectSubset<T, IncomeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IncomeClient<runtime.Types.Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends IncomeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IncomeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IncomeClient<runtime.Types.Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends IncomeFindFirstArgs>(args?: Prisma.SelectSubset<T, IncomeFindFirstArgs<ExtArgs>>): Prisma.Prisma__IncomeClient<runtime.Types.Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends IncomeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IncomeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IncomeClient<runtime.Types.Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends IncomeFindManyArgs>(args?: Prisma.SelectSubset<T, IncomeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends IncomeCreateArgs>(args: Prisma.SelectSubset<T, IncomeCreateArgs<ExtArgs>>): Prisma.Prisma__IncomeClient<runtime.Types.Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends IncomeCreateManyArgs>(args?: Prisma.SelectSubset<T, IncomeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends IncomeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IncomeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends IncomeDeleteArgs>(args: Prisma.SelectSubset<T, IncomeDeleteArgs<ExtArgs>>): Prisma.Prisma__IncomeClient<runtime.Types.Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends IncomeUpdateArgs>(args: Prisma.SelectSubset<T, IncomeUpdateArgs<ExtArgs>>): Prisma.Prisma__IncomeClient<runtime.Types.Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends IncomeDeleteManyArgs>(args?: Prisma.SelectSubset<T, IncomeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends IncomeUpdateManyArgs>(args: Prisma.SelectSubset<T, IncomeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends IncomeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IncomeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends IncomeUpsertArgs>(args: Prisma.SelectSubset<T, IncomeUpsertArgs<ExtArgs>>): Prisma.Prisma__IncomeClient<runtime.Types.Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends IncomeCountArgs>(args?: Prisma.Subset<T, IncomeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IncomeCountAggregateOutputType> : number>;
    aggregate<T extends IncomeAggregateArgs>(args: Prisma.Subset<T, IncomeAggregateArgs>): Prisma.PrismaPromise<GetIncomeAggregateType<T>>;
    groupBy<T extends IncomeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IncomeGroupByArgs['orderBy'];
    } : {
        orderBy?: IncomeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IncomeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncomeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: IncomeFieldRefs;
}
export interface Prisma__IncomeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    category<T extends Prisma.IncomeCategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.IncomeCategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__IncomeCategoryClient<runtime.Types.Result.GetResult<Prisma.$IncomeCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    transaction<T extends Prisma.TransactionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TransactionDefaultArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface IncomeFieldRefs {
    readonly id: Prisma.FieldRef<"Income", 'String'>;
    readonly transactionId: Prisma.FieldRef<"Income", 'String'>;
    readonly storeId: Prisma.FieldRef<"Income", 'String'>;
    readonly categoryId: Prisma.FieldRef<"Income", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Income", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Income", 'DateTime'>;
}
export type IncomeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeSelect<ExtArgs> | null;
    omit?: Prisma.IncomeOmit<ExtArgs> | null;
    include?: Prisma.IncomeInclude<ExtArgs> | null;
    where: Prisma.IncomeWhereUniqueInput;
};
export type IncomeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeSelect<ExtArgs> | null;
    omit?: Prisma.IncomeOmit<ExtArgs> | null;
    include?: Prisma.IncomeInclude<ExtArgs> | null;
    where: Prisma.IncomeWhereUniqueInput;
};
export type IncomeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type IncomeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type IncomeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type IncomeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeSelect<ExtArgs> | null;
    omit?: Prisma.IncomeOmit<ExtArgs> | null;
    include?: Prisma.IncomeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IncomeCreateInput, Prisma.IncomeUncheckedCreateInput>;
};
export type IncomeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.IncomeCreateManyInput | Prisma.IncomeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IncomeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IncomeOmit<ExtArgs> | null;
    data: Prisma.IncomeCreateManyInput | Prisma.IncomeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.IncomeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type IncomeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeSelect<ExtArgs> | null;
    omit?: Prisma.IncomeOmit<ExtArgs> | null;
    include?: Prisma.IncomeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IncomeUpdateInput, Prisma.IncomeUncheckedUpdateInput>;
    where: Prisma.IncomeWhereUniqueInput;
};
export type IncomeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.IncomeUpdateManyMutationInput, Prisma.IncomeUncheckedUpdateManyInput>;
    where?: Prisma.IncomeWhereInput;
    limit?: number;
};
export type IncomeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IncomeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IncomeUpdateManyMutationInput, Prisma.IncomeUncheckedUpdateManyInput>;
    where?: Prisma.IncomeWhereInput;
    limit?: number;
    include?: Prisma.IncomeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type IncomeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeSelect<ExtArgs> | null;
    omit?: Prisma.IncomeOmit<ExtArgs> | null;
    include?: Prisma.IncomeInclude<ExtArgs> | null;
    where: Prisma.IncomeWhereUniqueInput;
    create: Prisma.XOR<Prisma.IncomeCreateInput, Prisma.IncomeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.IncomeUpdateInput, Prisma.IncomeUncheckedUpdateInput>;
};
export type IncomeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeSelect<ExtArgs> | null;
    omit?: Prisma.IncomeOmit<ExtArgs> | null;
    include?: Prisma.IncomeInclude<ExtArgs> | null;
    where: Prisma.IncomeWhereUniqueInput;
};
export type IncomeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncomeWhereInput;
    limit?: number;
};
export type IncomeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncomeSelect<ExtArgs> | null;
    omit?: Prisma.IncomeOmit<ExtArgs> | null;
    include?: Prisma.IncomeInclude<ExtArgs> | null;
};
export {};
