import { Family } from '../../core/domain/entities/family.entity';
export declare class FamilyResponseDto {
    id: string;
    name: string;
    balance: number;
    createdAt: Date;
    updatedAt: Date;
    static fromEntity(family: Family): FamilyResponseDto;
    static fromEntities(families: Family[]): FamilyResponseDto[];
}
