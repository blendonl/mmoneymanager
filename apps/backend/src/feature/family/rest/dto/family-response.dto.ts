import { Family } from '../../core/domain/entities/family.entity';

export class FamilyResponseDto {
  id: string;
  name: string;
  balance: number;
  createdAt: Date;
  updatedAt: Date;

  static fromEntity(family: Family): FamilyResponseDto {
    return {
      id: family.id,
      name: family.name,
      balance: family.balance,
      createdAt: family.createdAt,
      updatedAt: family.updatedAt,
    };
  }

  static fromEntities(families: Family[]): FamilyResponseDto[] {
    return families.map((f) => this.fromEntity(f));
  }
}
