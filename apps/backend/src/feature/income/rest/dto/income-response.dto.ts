import { Income } from '../../core/domain/entities/income.entity';

export class IncomeResponseDto {
  id: string;
  transactionId: string;
  storeId: string;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;

  static fromEntity(income: Income): IncomeResponseDto {
    const dto = new IncomeResponseDto();
    dto.id = income.id;
    dto.transactionId = income.transactionId;
    dto.storeId = income.storeId;
    dto.categoryId = income.categoryId;
    dto.createdAt = income.createdAt;
    dto.updatedAt = income.updatedAt;
    return dto;
  }

  static fromEntities(incomes: Income[]): IncomeResponseDto[] {
    return incomes.map((income) => this.fromEntity(income));
  }
}
