import { IsNumber, IsOptional, IsDateString, Min } from 'class-validator';

export class UpdateStoreItemDiscountRequestDto {
  @IsNumber()
  @Min(0.01)
  @IsOptional()
  discount?: number;

  @IsDateString()
  @IsOptional()
  endedAt?: string;
}
