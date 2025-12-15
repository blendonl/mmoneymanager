export class TransactionStatistics {
  totalIncome: number;
  totalExpense: number;
  balance: number;
  count: number;

  constructor(
    totalIncome: number,
    totalExpense: number,
    balance: number,
    count: number,
  ) {
    this.totalIncome = totalIncome;
    this.totalExpense = totalExpense;
    this.balance = balance;
    this.count = count;
  }
}
