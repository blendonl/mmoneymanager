import { IsUUID, IsNumber, Min, IsOptional } from 'class-validator';

export class UpdateExpenseItemRequestDto {
  @IsUUID()
  @IsOptional()
  categoryId?: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  price?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  discount?: number;
}
