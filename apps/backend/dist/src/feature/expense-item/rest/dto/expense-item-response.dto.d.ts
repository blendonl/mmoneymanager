import { ExpenseItem } from '../../core/domain/entities/expense-item.entity';
export declare class ExpenseItemResponseDto {
    id: string;
    itemId: string;
    name: string;
    expenseId: string;
    categoryId: string;
    price: number;
    discount: number;
    finalPrice: number;
    discountPercentage: number;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
    static fromEntity(item: ExpenseItem): ExpenseItemResponseDto;
    static fromEntities(items: ExpenseItem[]): ExpenseItemResponseDto[];
}
