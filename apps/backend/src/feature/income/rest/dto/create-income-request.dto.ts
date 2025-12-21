import { IsUUID, IsNotEmpty } from 'class-validator';

export class CreateIncomeRequestDto {
  @IsUUID()
  @IsNotEmpty()
  transactionId!: string;

  @IsUUID()
  @IsNotEmpty()
  storeId!: string;

  @IsUUID()
  @IsNotEmpty()
  categoryId!: string;
}
