import { IsNumber, IsOptional, IsDateString, Min } from 'class-validator';

export class CreateStoreItemDiscountRequestDto {
  @IsNumber()
  @Min(0.01)
  discount!: number;

  @IsDateString()
  @IsOptional()
  startedAt?: string;
}
