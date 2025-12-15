import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace';
import { TransactionType } from '../value-objects/transaction-type.vo';

export interface TransactionProps {
  id: string;
  userId: string;
  type: TransactionType;
  value: Decimal;
  createdAt: Date;
  updatedAt: Date;
}

export class Transaction {
  private readonly props: TransactionProps;

  constructor(props: TransactionProps) {
    this.validate(props);
    this.props = props;
  }

  private validate(props: TransactionProps): void {
    if (!props.id || props.id.trim() === '') {
      throw new Error('Transaction ID is required');
    }

    if (!props.userId || props.userId.trim() === '') {
      throw new Error('User ID is required');
    }

    if (!props.type) {
      throw new Error('Transaction type is required');
    }

    if (!props.value || props.value.toNumber() <= 0) {
      throw new Error('Transaction value must be positive');
    }
  }

  get id(): string {
    return this.props.id;
  }

  get userId(): string {
    return this.props.userId;
  }

  get type(): TransactionType {
    return this.props.type;
  }

  get value(): Decimal {
    return this.props.value;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  isExpense(): boolean {
    return this.props.type === TransactionType.EXPENSE;
  }

  isIncome(): boolean {
    return this.props.type === TransactionType.INCOME;
  }

  toJSON() {
    return {
      id: this.id,
      userId: this.userId,
      type: this.type,
      value: this.value.toNumber(),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
