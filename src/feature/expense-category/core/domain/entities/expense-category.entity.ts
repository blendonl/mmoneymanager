export interface ExpenseCategoryProps {
  id: string;
  parentId: string | null;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export class ExpenseCategory {
  private readonly props: ExpenseCategoryProps;

  constructor(props: ExpenseCategoryProps) {
    this.validate(props);
    this.props = props;
  }

  private validate(props: ExpenseCategoryProps): void {
    if (!props.id || props.id.trim() === '') {
      throw new Error('Expense category ID is required');
    }

    if (!props.name || props.name.trim() === '') {
      throw new Error('Expense category name is required');
    }

    if (!props.createdAt) {
      throw new Error('Created date is required');
    }

    if (!props.updatedAt) {
      throw new Error('Updated date is required');
    }
  }

  get id(): string {
    return this.props.id;
  }

  get parentId(): string | null {
    return this.props.parentId;
  }

  get name(): string {
    return this.props.name;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  isRoot(): boolean {
    return this.props.parentId === null;
  }

  isChildOf(parentId: string): boolean {
    return this.props.parentId === parentId;
  }

  toJSON() {
    return {
      id: this.props.id,
      parentId: this.props.parentId,
      name: this.props.name,
      createdAt: this.props.createdAt,
      updatedAt: this.props.updatedAt,
    };
  }
}
