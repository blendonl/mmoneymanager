import { CreateExpenseItemDto } from '../../../../expense-item/core/application/dto/create-expense-item.dto';
export declare class CreateExpenseDto {
    userId: string;
    categoryId: string;
    storeName: string;
    storeLocation: string;
    items: CreateExpenseItemDto[];
    constructor(data: {
        userId: string;
        categoryId: string;
        storeName: string;
        storeLocation: string;
        items: CreateExpenseItemDto[];
    });
}
