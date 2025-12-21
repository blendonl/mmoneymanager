import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type StoreItemDiscountModel = runtime.Types.Result.DefaultSelection<Prisma.$StoreItemDiscountPayload>;
export type AggregateStoreItemDiscount = {
    _count: StoreItemDiscountCountAggregateOutputType | null;
    _avg: StoreItemDiscountAvgAggregateOutputType | null;
    _sum: StoreItemDiscountSumAggregateOutputType | null;
    _min: StoreItemDiscountMinAggregateOutputType | null;
    _max: StoreItemDiscountMaxAggregateOutputType | null;
};
export type StoreItemDiscountAvgAggregateOutputType = {
    discount: runtime.Decimal | null;
};
export type StoreItemDiscountSumAggregateOutputType = {
    discount: runtime.Decimal | null;
};
export type StoreItemDiscountMinAggregateOutputType = {
    id: string | null;
    storeItemId: string | null;
    discount: runtime.Decimal | null;
    startedAt: Date | null;
    endedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StoreItemDiscountMaxAggregateOutputType = {
    id: string | null;
    storeItemId: string | null;
    discount: runtime.Decimal | null;
    startedAt: Date | null;
    endedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StoreItemDiscountCountAggregateOutputType = {
    id: number;
    storeItemId: number;
    discount: number;
    startedAt: number;
    endedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type StoreItemDiscountAvgAggregateInputType = {
    discount?: true;
};
export type StoreItemDiscountSumAggregateInputType = {
    discount?: true;
};
export type StoreItemDiscountMinAggregateInputType = {
    id?: true;
    storeItemId?: true;
    discount?: true;
    startedAt?: true;
    endedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StoreItemDiscountMaxAggregateInputType = {
    id?: true;
    storeItemId?: true;
    discount?: true;
    startedAt?: true;
    endedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StoreItemDiscountCountAggregateInputType = {
    id?: true;
    storeItemId?: true;
    discount?: true;
    startedAt?: true;
    endedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type StoreItemDiscountAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StoreItemDiscountWhereInput;
    orderBy?: Prisma.StoreItemDiscountOrderByWithRelationInput | Prisma.StoreItemDiscountOrderByWithRelationInput[];
    cursor?: Prisma.StoreItemDiscountWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StoreItemDiscountCountAggregateInputType;
    _avg?: StoreItemDiscountAvgAggregateInputType;
    _sum?: StoreItemDiscountSumAggregateInputType;
    _min?: StoreItemDiscountMinAggregateInputType;
    _max?: StoreItemDiscountMaxAggregateInputType;
};
export type GetStoreItemDiscountAggregateType<T extends StoreItemDiscountAggregateArgs> = {
    [P in keyof T & keyof AggregateStoreItemDiscount]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStoreItemDiscount[P]> : Prisma.GetScalarType<T[P], AggregateStoreItemDiscount[P]>;
};
export type StoreItemDiscountGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StoreItemDiscountWhereInput;
    orderBy?: Prisma.StoreItemDiscountOrderByWithAggregationInput | Prisma.StoreItemDiscountOrderByWithAggregationInput[];
    by: Prisma.StoreItemDiscountScalarFieldEnum[] | Prisma.StoreItemDiscountScalarFieldEnum;
    having?: Prisma.StoreItemDiscountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StoreItemDiscountCountAggregateInputType | true;
    _avg?: StoreItemDiscountAvgAggregateInputType;
    _sum?: StoreItemDiscountSumAggregateInputType;
    _min?: StoreItemDiscountMinAggregateInputType;
    _max?: StoreItemDiscountMaxAggregateInputType;
};
export type StoreItemDiscountGroupByOutputType = {
    id: string;
    storeItemId: string;
    discount: runtime.Decimal;
    startedAt: Date;
    endedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: StoreItemDiscountCountAggregateOutputType | null;
    _avg: StoreItemDiscountAvgAggregateOutputType | null;
    _sum: StoreItemDiscountSumAggregateOutputType | null;
    _min: StoreItemDiscountMinAggregateOutputType | null;
    _max: StoreItemDiscountMaxAggregateOutputType | null;
};
type GetStoreItemDiscountGroupByPayload<T extends StoreItemDiscountGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StoreItemDiscountGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StoreItemDiscountGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StoreItemDiscountGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StoreItemDiscountGroupByOutputType[P]>;
}>>;
export type StoreItemDiscountWhereInput = {
    AND?: Prisma.StoreItemDiscountWhereInput | Prisma.StoreItemDiscountWhereInput[];
    OR?: Prisma.StoreItemDiscountWhereInput[];
    NOT?: Prisma.StoreItemDiscountWhereInput | Prisma.StoreItemDiscountWhereInput[];
    id?: Prisma.StringFilter<"StoreItemDiscount"> | string;
    storeItemId?: Prisma.StringFilter<"StoreItemDiscount"> | string;
    discount?: Prisma.DecimalFilter<"StoreItemDiscount"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    startedAt?: Prisma.DateTimeFilter<"StoreItemDiscount"> | Date | string;
    endedAt?: Prisma.DateTimeNullableFilter<"StoreItemDiscount"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"StoreItemDiscount"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StoreItemDiscount"> | Date | string;
    storeItem?: Prisma.XOR<Prisma.StoreItemScalarRelationFilter, Prisma.StoreItemWhereInput>;
};
export type StoreItemDiscountOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    storeItemId?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    storeItem?: Prisma.StoreItemOrderByWithRelationInput;
};
export type StoreItemDiscountWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.StoreItemDiscountWhereInput | Prisma.StoreItemDiscountWhereInput[];
    OR?: Prisma.StoreItemDiscountWhereInput[];
    NOT?: Prisma.StoreItemDiscountWhereInput | Prisma.StoreItemDiscountWhereInput[];
    storeItemId?: Prisma.StringFilter<"StoreItemDiscount"> | string;
    discount?: Prisma.DecimalFilter<"StoreItemDiscount"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    startedAt?: Prisma.DateTimeFilter<"StoreItemDiscount"> | Date | string;
    endedAt?: Prisma.DateTimeNullableFilter<"StoreItemDiscount"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"StoreItemDiscount"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StoreItemDiscount"> | Date | string;
    storeItem?: Prisma.XOR<Prisma.StoreItemScalarRelationFilter, Prisma.StoreItemWhereInput>;
}, "id">;
export type StoreItemDiscountOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    storeItemId?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.StoreItemDiscountCountOrderByAggregateInput;
    _avg?: Prisma.StoreItemDiscountAvgOrderByAggregateInput;
    _max?: Prisma.StoreItemDiscountMaxOrderByAggregateInput;
    _min?: Prisma.StoreItemDiscountMinOrderByAggregateInput;
    _sum?: Prisma.StoreItemDiscountSumOrderByAggregateInput;
};
export type StoreItemDiscountScalarWhereWithAggregatesInput = {
    AND?: Prisma.StoreItemDiscountScalarWhereWithAggregatesInput | Prisma.StoreItemDiscountScalarWhereWithAggregatesInput[];
    OR?: Prisma.StoreItemDiscountScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StoreItemDiscountScalarWhereWithAggregatesInput | Prisma.StoreItemDiscountScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StoreItemDiscount"> | string;
    storeItemId?: Prisma.StringWithAggregatesFilter<"StoreItemDiscount"> | string;
    discount?: Prisma.DecimalWithAggregatesFilter<"StoreItemDiscount"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    startedAt?: Prisma.DateTimeWithAggregatesFilter<"StoreItemDiscount"> | Date | string;
    endedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"StoreItemDiscount"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StoreItemDiscount"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"StoreItemDiscount"> | Date | string;
};
export type StoreItemDiscountCreateInput = {
    id: string;
    discount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    storeItem: Prisma.StoreItemCreateNestedOneWithoutDiscountsInput;
};
export type StoreItemDiscountUncheckedCreateInput = {
    id: string;
    storeItemId: string;
    discount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StoreItemDiscountUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    storeItem?: Prisma.StoreItemUpdateOneRequiredWithoutDiscountsNestedInput;
};
export type StoreItemDiscountUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StoreItemDiscountCreateManyInput = {
    id: string;
    storeItemId: string;
    discount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StoreItemDiscountUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StoreItemDiscountUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StoreItemDiscountListRelationFilter = {
    every?: Prisma.StoreItemDiscountWhereInput;
    some?: Prisma.StoreItemDiscountWhereInput;
    none?: Prisma.StoreItemDiscountWhereInput;
};
export type StoreItemDiscountOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StoreItemDiscountCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    storeItemId?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StoreItemDiscountAvgOrderByAggregateInput = {
    discount?: Prisma.SortOrder;
};
export type StoreItemDiscountMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    storeItemId?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StoreItemDiscountMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    storeItemId?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StoreItemDiscountSumOrderByAggregateInput = {
    discount?: Prisma.SortOrder;
};
export type StoreItemDiscountCreateNestedManyWithoutStoreItemInput = {
    create?: Prisma.XOR<Prisma.StoreItemDiscountCreateWithoutStoreItemInput, Prisma.StoreItemDiscountUncheckedCreateWithoutStoreItemInput> | Prisma.StoreItemDiscountCreateWithoutStoreItemInput[] | Prisma.StoreItemDiscountUncheckedCreateWithoutStoreItemInput[];
    connectOrCreate?: Prisma.StoreItemDiscountCreateOrConnectWithoutStoreItemInput | Prisma.StoreItemDiscountCreateOrConnectWithoutStoreItemInput[];
    createMany?: Prisma.StoreItemDiscountCreateManyStoreItemInputEnvelope;
    connect?: Prisma.StoreItemDiscountWhereUniqueInput | Prisma.StoreItemDiscountWhereUniqueInput[];
};
export type StoreItemDiscountUncheckedCreateNestedManyWithoutStoreItemInput = {
    create?: Prisma.XOR<Prisma.StoreItemDiscountCreateWithoutStoreItemInput, Prisma.StoreItemDiscountUncheckedCreateWithoutStoreItemInput> | Prisma.StoreItemDiscountCreateWithoutStoreItemInput[] | Prisma.StoreItemDiscountUncheckedCreateWithoutStoreItemInput[];
    connectOrCreate?: Prisma.StoreItemDiscountCreateOrConnectWithoutStoreItemInput | Prisma.StoreItemDiscountCreateOrConnectWithoutStoreItemInput[];
    createMany?: Prisma.StoreItemDiscountCreateManyStoreItemInputEnvelope;
    connect?: Prisma.StoreItemDiscountWhereUniqueInput | Prisma.StoreItemDiscountWhereUniqueInput[];
};
export type StoreItemDiscountUpdateManyWithoutStoreItemNestedInput = {
    create?: Prisma.XOR<Prisma.StoreItemDiscountCreateWithoutStoreItemInput, Prisma.StoreItemDiscountUncheckedCreateWithoutStoreItemInput> | Prisma.StoreItemDiscountCreateWithoutStoreItemInput[] | Prisma.StoreItemDiscountUncheckedCreateWithoutStoreItemInput[];
    connectOrCreate?: Prisma.StoreItemDiscountCreateOrConnectWithoutStoreItemInput | Prisma.StoreItemDiscountCreateOrConnectWithoutStoreItemInput[];
    upsert?: Prisma.StoreItemDiscountUpsertWithWhereUniqueWithoutStoreItemInput | Prisma.StoreItemDiscountUpsertWithWhereUniqueWithoutStoreItemInput[];
    createMany?: Prisma.StoreItemDiscountCreateManyStoreItemInputEnvelope;
    set?: Prisma.StoreItemDiscountWhereUniqueInput | Prisma.StoreItemDiscountWhereUniqueInput[];
    disconnect?: Prisma.StoreItemDiscountWhereUniqueInput | Prisma.StoreItemDiscountWhereUniqueInput[];
    delete?: Prisma.StoreItemDiscountWhereUniqueInput | Prisma.StoreItemDiscountWhereUniqueInput[];
    connect?: Prisma.StoreItemDiscountWhereUniqueInput | Prisma.StoreItemDiscountWhereUniqueInput[];
    update?: Prisma.StoreItemDiscountUpdateWithWhereUniqueWithoutStoreItemInput | Prisma.StoreItemDiscountUpdateWithWhereUniqueWithoutStoreItemInput[];
    updateMany?: Prisma.StoreItemDiscountUpdateManyWithWhereWithoutStoreItemInput | Prisma.StoreItemDiscountUpdateManyWithWhereWithoutStoreItemInput[];
    deleteMany?: Prisma.StoreItemDiscountScalarWhereInput | Prisma.StoreItemDiscountScalarWhereInput[];
};
export type StoreItemDiscountUncheckedUpdateManyWithoutStoreItemNestedInput = {
    create?: Prisma.XOR<Prisma.StoreItemDiscountCreateWithoutStoreItemInput, Prisma.StoreItemDiscountUncheckedCreateWithoutStoreItemInput> | Prisma.StoreItemDiscountCreateWithoutStoreItemInput[] | Prisma.StoreItemDiscountUncheckedCreateWithoutStoreItemInput[];
    connectOrCreate?: Prisma.StoreItemDiscountCreateOrConnectWithoutStoreItemInput | Prisma.StoreItemDiscountCreateOrConnectWithoutStoreItemInput[];
    upsert?: Prisma.StoreItemDiscountUpsertWithWhereUniqueWithoutStoreItemInput | Prisma.StoreItemDiscountUpsertWithWhereUniqueWithoutStoreItemInput[];
    createMany?: Prisma.StoreItemDiscountCreateManyStoreItemInputEnvelope;
    set?: Prisma.StoreItemDiscountWhereUniqueInput | Prisma.StoreItemDiscountWhereUniqueInput[];
    disconnect?: Prisma.StoreItemDiscountWhereUniqueInput | Prisma.StoreItemDiscountWhereUniqueInput[];
    delete?: Prisma.StoreItemDiscountWhereUniqueInput | Prisma.StoreItemDiscountWhereUniqueInput[];
    connect?: Prisma.StoreItemDiscountWhereUniqueInput | Prisma.StoreItemDiscountWhereUniqueInput[];
    update?: Prisma.StoreItemDiscountUpdateWithWhereUniqueWithoutStoreItemInput | Prisma.StoreItemDiscountUpdateWithWhereUniqueWithoutStoreItemInput[];
    updateMany?: Prisma.StoreItemDiscountUpdateManyWithWhereWithoutStoreItemInput | Prisma.StoreItemDiscountUpdateManyWithWhereWithoutStoreItemInput[];
    deleteMany?: Prisma.StoreItemDiscountScalarWhereInput | Prisma.StoreItemDiscountScalarWhereInput[];
};
export type StoreItemDiscountCreateWithoutStoreItemInput = {
    id: string;
    discount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StoreItemDiscountUncheckedCreateWithoutStoreItemInput = {
    id: string;
    discount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StoreItemDiscountCreateOrConnectWithoutStoreItemInput = {
    where: Prisma.StoreItemDiscountWhereUniqueInput;
    create: Prisma.XOR<Prisma.StoreItemDiscountCreateWithoutStoreItemInput, Prisma.StoreItemDiscountUncheckedCreateWithoutStoreItemInput>;
};
export type StoreItemDiscountCreateManyStoreItemInputEnvelope = {
    data: Prisma.StoreItemDiscountCreateManyStoreItemInput | Prisma.StoreItemDiscountCreateManyStoreItemInput[];
    skipDuplicates?: boolean;
};
export type StoreItemDiscountUpsertWithWhereUniqueWithoutStoreItemInput = {
    where: Prisma.StoreItemDiscountWhereUniqueInput;
    update: Prisma.XOR<Prisma.StoreItemDiscountUpdateWithoutStoreItemInput, Prisma.StoreItemDiscountUncheckedUpdateWithoutStoreItemInput>;
    create: Prisma.XOR<Prisma.StoreItemDiscountCreateWithoutStoreItemInput, Prisma.StoreItemDiscountUncheckedCreateWithoutStoreItemInput>;
};
export type StoreItemDiscountUpdateWithWhereUniqueWithoutStoreItemInput = {
    where: Prisma.StoreItemDiscountWhereUniqueInput;
    data: Prisma.XOR<Prisma.StoreItemDiscountUpdateWithoutStoreItemInput, Prisma.StoreItemDiscountUncheckedUpdateWithoutStoreItemInput>;
};
export type StoreItemDiscountUpdateManyWithWhereWithoutStoreItemInput = {
    where: Prisma.StoreItemDiscountScalarWhereInput;
    data: Prisma.XOR<Prisma.StoreItemDiscountUpdateManyMutationInput, Prisma.StoreItemDiscountUncheckedUpdateManyWithoutStoreItemInput>;
};
export type StoreItemDiscountScalarWhereInput = {
    AND?: Prisma.StoreItemDiscountScalarWhereInput | Prisma.StoreItemDiscountScalarWhereInput[];
    OR?: Prisma.StoreItemDiscountScalarWhereInput[];
    NOT?: Prisma.StoreItemDiscountScalarWhereInput | Prisma.StoreItemDiscountScalarWhereInput[];
    id?: Prisma.StringFilter<"StoreItemDiscount"> | string;
    storeItemId?: Prisma.StringFilter<"StoreItemDiscount"> | string;
    discount?: Prisma.DecimalFilter<"StoreItemDiscount"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    startedAt?: Prisma.DateTimeFilter<"StoreItemDiscount"> | Date | string;
    endedAt?: Prisma.DateTimeNullableFilter<"StoreItemDiscount"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"StoreItemDiscount"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StoreItemDiscount"> | Date | string;
};
export type StoreItemDiscountCreateManyStoreItemInput = {
    id: string;
    discount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StoreItemDiscountUpdateWithoutStoreItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StoreItemDiscountUncheckedUpdateWithoutStoreItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StoreItemDiscountUncheckedUpdateManyWithoutStoreItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StoreItemDiscountSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    storeItemId?: boolean;
    discount?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    storeItem?: boolean | Prisma.StoreItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["storeItemDiscount"]>;
export type StoreItemDiscountSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    storeItemId?: boolean;
    discount?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    storeItem?: boolean | Prisma.StoreItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["storeItemDiscount"]>;
export type StoreItemDiscountSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    storeItemId?: boolean;
    discount?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    storeItem?: boolean | Prisma.StoreItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["storeItemDiscount"]>;
export type StoreItemDiscountSelectScalar = {
    id?: boolean;
    storeItemId?: boolean;
    discount?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type StoreItemDiscountOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "storeItemId" | "discount" | "startedAt" | "endedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["storeItemDiscount"]>;
export type StoreItemDiscountInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    storeItem?: boolean | Prisma.StoreItemDefaultArgs<ExtArgs>;
};
export type StoreItemDiscountIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    storeItem?: boolean | Prisma.StoreItemDefaultArgs<ExtArgs>;
};
export type StoreItemDiscountIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    storeItem?: boolean | Prisma.StoreItemDefaultArgs<ExtArgs>;
};
export type $StoreItemDiscountPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StoreItemDiscount";
    objects: {
        storeItem: Prisma.$StoreItemPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        storeItemId: string;
        discount: runtime.Decimal;
        startedAt: Date;
        endedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["storeItemDiscount"]>;
    composites: {};
};
export type StoreItemDiscountGetPayload<S extends boolean | null | undefined | StoreItemDiscountDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StoreItemDiscountPayload, S>;
export type StoreItemDiscountCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StoreItemDiscountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StoreItemDiscountCountAggregateInputType | true;
};
export interface StoreItemDiscountDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StoreItemDiscount'];
        meta: {
            name: 'StoreItemDiscount';
        };
    };
    findUnique<T extends StoreItemDiscountFindUniqueArgs>(args: Prisma.SelectSubset<T, StoreItemDiscountFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StoreItemDiscountClient<runtime.Types.Result.GetResult<Prisma.$StoreItemDiscountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StoreItemDiscountFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StoreItemDiscountFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StoreItemDiscountClient<runtime.Types.Result.GetResult<Prisma.$StoreItemDiscountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StoreItemDiscountFindFirstArgs>(args?: Prisma.SelectSubset<T, StoreItemDiscountFindFirstArgs<ExtArgs>>): Prisma.Prisma__StoreItemDiscountClient<runtime.Types.Result.GetResult<Prisma.$StoreItemDiscountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StoreItemDiscountFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StoreItemDiscountFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StoreItemDiscountClient<runtime.Types.Result.GetResult<Prisma.$StoreItemDiscountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StoreItemDiscountFindManyArgs>(args?: Prisma.SelectSubset<T, StoreItemDiscountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StoreItemDiscountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StoreItemDiscountCreateArgs>(args: Prisma.SelectSubset<T, StoreItemDiscountCreateArgs<ExtArgs>>): Prisma.Prisma__StoreItemDiscountClient<runtime.Types.Result.GetResult<Prisma.$StoreItemDiscountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StoreItemDiscountCreateManyArgs>(args?: Prisma.SelectSubset<T, StoreItemDiscountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StoreItemDiscountCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StoreItemDiscountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StoreItemDiscountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StoreItemDiscountDeleteArgs>(args: Prisma.SelectSubset<T, StoreItemDiscountDeleteArgs<ExtArgs>>): Prisma.Prisma__StoreItemDiscountClient<runtime.Types.Result.GetResult<Prisma.$StoreItemDiscountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StoreItemDiscountUpdateArgs>(args: Prisma.SelectSubset<T, StoreItemDiscountUpdateArgs<ExtArgs>>): Prisma.Prisma__StoreItemDiscountClient<runtime.Types.Result.GetResult<Prisma.$StoreItemDiscountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StoreItemDiscountDeleteManyArgs>(args?: Prisma.SelectSubset<T, StoreItemDiscountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StoreItemDiscountUpdateManyArgs>(args: Prisma.SelectSubset<T, StoreItemDiscountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StoreItemDiscountUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StoreItemDiscountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StoreItemDiscountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StoreItemDiscountUpsertArgs>(args: Prisma.SelectSubset<T, StoreItemDiscountUpsertArgs<ExtArgs>>): Prisma.Prisma__StoreItemDiscountClient<runtime.Types.Result.GetResult<Prisma.$StoreItemDiscountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StoreItemDiscountCountArgs>(args?: Prisma.Subset<T, StoreItemDiscountCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StoreItemDiscountCountAggregateOutputType> : number>;
    aggregate<T extends StoreItemDiscountAggregateArgs>(args: Prisma.Subset<T, StoreItemDiscountAggregateArgs>): Prisma.PrismaPromise<GetStoreItemDiscountAggregateType<T>>;
    groupBy<T extends StoreItemDiscountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StoreItemDiscountGroupByArgs['orderBy'];
    } : {
        orderBy?: StoreItemDiscountGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StoreItemDiscountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreItemDiscountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StoreItemDiscountFieldRefs;
}
export interface Prisma__StoreItemDiscountClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    storeItem<T extends Prisma.StoreItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StoreItemDefaultArgs<ExtArgs>>): Prisma.Prisma__StoreItemClient<runtime.Types.Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StoreItemDiscountFieldRefs {
    readonly id: Prisma.FieldRef<"StoreItemDiscount", 'String'>;
    readonly storeItemId: Prisma.FieldRef<"StoreItemDiscount", 'String'>;
    readonly discount: Prisma.FieldRef<"StoreItemDiscount", 'Decimal'>;
    readonly startedAt: Prisma.FieldRef<"StoreItemDiscount", 'DateTime'>;
    readonly endedAt: Prisma.FieldRef<"StoreItemDiscount", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"StoreItemDiscount", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"StoreItemDiscount", 'DateTime'>;
}
export type StoreItemDiscountFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreItemDiscountSelect<ExtArgs> | null;
    omit?: Prisma.StoreItemDiscountOmit<ExtArgs> | null;
    include?: Prisma.StoreItemDiscountInclude<ExtArgs> | null;
    where: Prisma.StoreItemDiscountWhereUniqueInput;
};
export type StoreItemDiscountFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreItemDiscountSelect<ExtArgs> | null;
    omit?: Prisma.StoreItemDiscountOmit<ExtArgs> | null;
    include?: Prisma.StoreItemDiscountInclude<ExtArgs> | null;
    where: Prisma.StoreItemDiscountWhereUniqueInput;
};
export type StoreItemDiscountFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreItemDiscountSelect<ExtArgs> | null;
    omit?: Prisma.StoreItemDiscountOmit<ExtArgs> | null;
    include?: Prisma.StoreItemDiscountInclude<ExtArgs> | null;
    where?: Prisma.StoreItemDiscountWhereInput;
    orderBy?: Prisma.StoreItemDiscountOrderByWithRelationInput | Prisma.StoreItemDiscountOrderByWithRelationInput[];
    cursor?: Prisma.StoreItemDiscountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StoreItemDiscountScalarFieldEnum | Prisma.StoreItemDiscountScalarFieldEnum[];
};
export type StoreItemDiscountFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreItemDiscountSelect<ExtArgs> | null;
    omit?: Prisma.StoreItemDiscountOmit<ExtArgs> | null;
    include?: Prisma.StoreItemDiscountInclude<ExtArgs> | null;
    where?: Prisma.StoreItemDiscountWhereInput;
    orderBy?: Prisma.StoreItemDiscountOrderByWithRelationInput | Prisma.StoreItemDiscountOrderByWithRelationInput[];
    cursor?: Prisma.StoreItemDiscountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StoreItemDiscountScalarFieldEnum | Prisma.StoreItemDiscountScalarFieldEnum[];
};
export type StoreItemDiscountFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreItemDiscountSelect<ExtArgs> | null;
    omit?: Prisma.StoreItemDiscountOmit<ExtArgs> | null;
    include?: Prisma.StoreItemDiscountInclude<ExtArgs> | null;
    where?: Prisma.StoreItemDiscountWhereInput;
    orderBy?: Prisma.StoreItemDiscountOrderByWithRelationInput | Prisma.StoreItemDiscountOrderByWithRelationInput[];
    cursor?: Prisma.StoreItemDiscountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StoreItemDiscountScalarFieldEnum | Prisma.StoreItemDiscountScalarFieldEnum[];
};
export type StoreItemDiscountCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreItemDiscountSelect<ExtArgs> | null;
    omit?: Prisma.StoreItemDiscountOmit<ExtArgs> | null;
    include?: Prisma.StoreItemDiscountInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StoreItemDiscountCreateInput, Prisma.StoreItemDiscountUncheckedCreateInput>;
};
export type StoreItemDiscountCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StoreItemDiscountCreateManyInput | Prisma.StoreItemDiscountCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StoreItemDiscountCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreItemDiscountSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StoreItemDiscountOmit<ExtArgs> | null;
    data: Prisma.StoreItemDiscountCreateManyInput | Prisma.StoreItemDiscountCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StoreItemDiscountIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StoreItemDiscountUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreItemDiscountSelect<ExtArgs> | null;
    omit?: Prisma.StoreItemDiscountOmit<ExtArgs> | null;
    include?: Prisma.StoreItemDiscountInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StoreItemDiscountUpdateInput, Prisma.StoreItemDiscountUncheckedUpdateInput>;
    where: Prisma.StoreItemDiscountWhereUniqueInput;
};
export type StoreItemDiscountUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StoreItemDiscountUpdateManyMutationInput, Prisma.StoreItemDiscountUncheckedUpdateManyInput>;
    where?: Prisma.StoreItemDiscountWhereInput;
    limit?: number;
};
export type StoreItemDiscountUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreItemDiscountSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StoreItemDiscountOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StoreItemDiscountUpdateManyMutationInput, Prisma.StoreItemDiscountUncheckedUpdateManyInput>;
    where?: Prisma.StoreItemDiscountWhereInput;
    limit?: number;
    include?: Prisma.StoreItemDiscountIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StoreItemDiscountUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreItemDiscountSelect<ExtArgs> | null;
    omit?: Prisma.StoreItemDiscountOmit<ExtArgs> | null;
    include?: Prisma.StoreItemDiscountInclude<ExtArgs> | null;
    where: Prisma.StoreItemDiscountWhereUniqueInput;
    create: Prisma.XOR<Prisma.StoreItemDiscountCreateInput, Prisma.StoreItemDiscountUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StoreItemDiscountUpdateInput, Prisma.StoreItemDiscountUncheckedUpdateInput>;
};
export type StoreItemDiscountDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreItemDiscountSelect<ExtArgs> | null;
    omit?: Prisma.StoreItemDiscountOmit<ExtArgs> | null;
    include?: Prisma.StoreItemDiscountInclude<ExtArgs> | null;
    where: Prisma.StoreItemDiscountWhereUniqueInput;
};
export type StoreItemDiscountDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StoreItemDiscountWhereInput;
    limit?: number;
};
export type StoreItemDiscountDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreItemDiscountSelect<ExtArgs> | null;
    omit?: Prisma.StoreItemDiscountOmit<ExtArgs> | null;
    include?: Prisma.StoreItemDiscountInclude<ExtArgs> | null;
};
export {};
