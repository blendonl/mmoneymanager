import { IncomeCategory } from '../../core/domain/entities/income-category.entity';

export class IncomeCategoryResponseDto {
  id: string;
  parentId: string | null;
  name: string;
  createdAt: Date;
  updatedAt: Date;

  static fromEntity(category: IncomeCategory): IncomeCategoryResponseDto {
    const dto = new IncomeCategoryResponseDto();
    dto.id = category.id;
    dto.parentId = category.parentId;
    dto.name = category.name;
    dto.createdAt = category.createdAt;
    dto.updatedAt = category.updatedAt;
    return dto;
  }

  static fromEntities(
    categories: IncomeCategory[],
  ): IncomeCategoryResponseDto[] {
    return categories.map((category) => this.fromEntity(category));
  }
}
