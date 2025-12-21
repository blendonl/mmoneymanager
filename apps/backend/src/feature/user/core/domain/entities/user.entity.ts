export interface UserProps {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  balance: number;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class User {
  private readonly props: UserProps;

  constructor(props: UserProps) {
    this.validate(props);
    this.props = props;
  }

  private validate(props: UserProps): void {
    if (!props.id?.trim()) throw new Error('User ID is required');
    if (!props.email?.includes('@')) throw new Error('Valid email is required');
    if (!props.firstName?.trim()) throw new Error('First name is required');
    if (!props.lastName?.trim()) throw new Error('Last name is required');
  }

  get id(): string {
    return this.props.id;
  }
  get email(): string {
    return this.props.email;
  }
  get firstName(): string {
    return this.props.firstName;
  }
  get lastName(): string {
    return this.props.lastName;
  }
  get balance(): number {
    return this.props.balance;
  }
  get emailVerified(): boolean {
    return this.props.emailVerified;
  }
  get createdAt(): Date {
    return this.props.createdAt;
  }
  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  get fullName(): string {
    return `${this.props.firstName} ${this.props.lastName}`;
  }

  toJSON() {
    return { ...this.props };
  }
}
