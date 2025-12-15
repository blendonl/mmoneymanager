import { IsUUID, IsOptional } from 'class-validator';

export class UpdateExpenseRequestDto {
  @IsUUID()
  @IsOptional()
  categoryId?: string;

  @IsUUID()
  @IsOptional()
  storeId?: string;
}
