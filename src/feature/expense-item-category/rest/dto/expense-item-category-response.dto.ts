import { ExpenseItemCategory } from '../../core/domain/entities/expense-item-category.entity';

export class ExpenseItemCategoryResponseDto {
  id: string;
  parentId: string | null;
  name: string;
  createdAt: Date;
  updatedAt: Date;

  static fromEntity(category: ExpenseItemCategory): ExpenseItemCategoryResponseDto {
    const dto = new ExpenseItemCategoryResponseDto();
    dto.id = category.id;
    dto.parentId = category.parentId;
    dto.name = category.name;
    dto.createdAt = category.createdAt;
    dto.updatedAt = category.updatedAt;
    return dto;
  }

  static fromEntities(
    categories: ExpenseItemCategory[],
  ): ExpenseItemCategoryResponseDto[] {
    return categories.map((category) => this.fromEntity(category));
  }
}
