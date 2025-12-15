import { IsEnum, IsNotEmpty, IsNumber, IsUUID, Min } from 'class-validator';
import { TransactionType } from '../../core/domain/value-objects/transaction-type.vo';

export class CreateTransactionRequestDto {
  @IsUUID()
  @IsNotEmpty()
  userId!: string;

  @IsEnum(TransactionType)
  @IsNotEmpty()
  type!: TransactionType;

  @IsNumber()
  @Min(0.01)
  @IsNotEmpty()
  value!: number;
}
