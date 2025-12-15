import { TransactionType } from '../../domain/value-objects/transaction-type.vo';

export class CreateTransactionDto {
  userId: string;
  type: TransactionType;
  value: number;

  constructor(userId: string, type: TransactionType, value: number) {
    this.userId = userId;
    this.type = type;
    this.value = value;
  }
}
