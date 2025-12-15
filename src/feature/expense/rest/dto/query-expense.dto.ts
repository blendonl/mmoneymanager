import { IsUUID, IsOptional, IsDateString, IsNumber, Type as TypeTransform } from 'class-validator';
import { Type } from 'class-transformer';

export class QueryExpenseDto {
  @IsUUID()
  @IsOptional()
  userId?: string;

  @IsUUID()
  @IsOptional()
  categoryId?: string;

  @IsUUID()
  @IsOptional()
  storeId?: string;

  @IsDateString()
  @IsOptional()
  dateFrom?: string;

  @IsDateString()
  @IsOptional()
  dateTo?: string;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  valueMin?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  valueMax?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  page?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  limit?: number;
}
