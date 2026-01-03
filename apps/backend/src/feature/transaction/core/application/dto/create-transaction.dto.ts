import { TransactionType } from '../../domain/value-objects/transaction-type.vo';

export class CreateTransactionDto {
  userId: string;
  type: TransactionType;
  value: number;
  familyId?: string;
  recordedAt?: Date;

  constructor(userId: string, type: TransactionType, value: number, recordedAt?: Date, familyId?: string) {
    this.userId = userId;
    this.type = type;
    this.value = value;
    this.recordedAt = recordedAt;
    this.familyId = familyId;
  }
}
