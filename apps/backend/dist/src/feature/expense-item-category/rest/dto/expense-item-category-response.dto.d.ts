import { ExpenseItemCategory } from '../../core/domain/entities/expense-item-category.entity';
export declare class ExpenseItemCategoryResponseDto {
    id: string;
    parentId: string | null;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    static fromEntity(category: ExpenseItemCategory): ExpenseItemCategoryResponseDto;
    static fromEntities(categories: ExpenseItemCategory[]): ExpenseItemCategoryResponseDto[];
}
