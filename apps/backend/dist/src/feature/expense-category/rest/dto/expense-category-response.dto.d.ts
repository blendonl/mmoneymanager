import { ExpenseCategory } from '../../core/domain/entities/expense-category.entity';
export declare class ExpenseCategoryResponseDto {
    id: string;
    parentId: string | null;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    isConnectedToStore: boolean;
    static fromEntity(category: ExpenseCategory): ExpenseCategoryResponseDto;
    static fromEntities(categories: ExpenseCategory[]): ExpenseCategoryResponseDto[];
}
