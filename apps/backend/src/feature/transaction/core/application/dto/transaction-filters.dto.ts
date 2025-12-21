import { TransactionType } from '../../domain/value-objects/transaction-type.vo';

export class TransactionFilters {
  userId?: string;
  type?: TransactionType;
  dateFrom?: Date;
  dateTo?: Date;
  valueMin?: number;
  valueMax?: number;

  constructor(data?: Partial<TransactionFilters>) {
    this.userId = data?.userId;
    this.type = data?.type;
    this.dateFrom = data?.dateFrom;
    this.dateTo = data?.dateTo;
    this.valueMin = data?.valueMin;
    this.valueMax = data?.valueMax;
  }
}
