import { TransactionType } from '../../domain/value-objects/transaction-type.vo';

export class UpdateTransactionDto {
  type?: TransactionType;
  value?: number;

  constructor(data: { type?: TransactionType; value?: number }) {
    this.type = data.type;
    this.value = data.value;
  }
}
