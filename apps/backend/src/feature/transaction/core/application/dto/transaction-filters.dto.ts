import { TransactionType } from '../../domain/value-objects/transaction-type.vo';
import { TransactionScope } from '../../domain/entities/transaction.entity';

export class TransactionFilters {
  userId?: string;
  type?: TransactionType;
  familyId?: string;
  scope?: TransactionScope;
  dateFrom?: Date;
  dateTo?: Date;
  valueMin?: number;
  valueMax?: number;

  constructor(data?: Partial<TransactionFilters>) {
    this.userId = data?.userId;
    this.type = data?.type;
    this.familyId = data?.familyId;
    this.scope = data?.scope;
    this.dateFrom = data?.dateFrom;
    this.dateTo = data?.dateTo;
    this.valueMin = data?.valueMin;
    this.valueMax = data?.valueMax;
  }
}
