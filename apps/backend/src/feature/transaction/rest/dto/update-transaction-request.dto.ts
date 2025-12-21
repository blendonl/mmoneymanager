import { IsEnum, IsNumber, IsOptional, Min } from 'class-validator';
import { TransactionType } from '../../core/domain/value-objects/transaction-type.vo';

export class UpdateTransactionRequestDto {
  @IsEnum(TransactionType)
  @IsOptional()
  type?: TransactionType;

  @IsNumber()
  @Min(0.01)
  @IsOptional()
  value?: number;
}
