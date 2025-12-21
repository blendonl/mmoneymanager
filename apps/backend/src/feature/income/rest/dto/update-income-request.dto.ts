import { IsUUID, IsOptional } from 'class-validator';

export class UpdateIncomeRequestDto {
  @IsUUID()
  @IsOptional()
  categoryId?: string;
}
