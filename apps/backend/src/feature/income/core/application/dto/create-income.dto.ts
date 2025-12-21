export class CreateIncomeDto {
  transactionId: string;
  storeId: string;
  categoryId: string;

  constructor(transactionId: string, storeId: string, categoryId: string) {
    this.transactionId = transactionId;
    this.storeId = storeId;
    this.categoryId = categoryId;
  }
}
