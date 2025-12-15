export enum TransactionType {
  EXPENSE = 'EXPENSE',
  INCOME = 'INCOME',
}

export class TransactionTypeVO {
  private readonly value: TransactionType;

  constructor(value: TransactionType) {
    this.validate(value);
    this.value = value;
  }

  private validate(value: TransactionType): void {
    if (!Object.values(TransactionType).includes(value)) {
      throw new Error(`Invalid transaction type: ${value}`);
    }
  }

  getValue(): TransactionType {
    return this.value;
  }

  isExpense(): boolean {
    return this.value === TransactionType.EXPENSE;
  }

  isIncome(): boolean {
    return this.value === TransactionType.INCOME;
  }

  equals(other: TransactionTypeVO): boolean {
    return this.value === other.value;
  }
}
