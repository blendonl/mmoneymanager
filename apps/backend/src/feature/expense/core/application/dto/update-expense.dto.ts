export class UpdateExpenseDto {
  categoryId?: string;
  storeId?: string;

  constructor(data: { categoryId?: string; storeId?: string }) {
    this.categoryId = data.categoryId;
    this.storeId = data.storeId;
  }
}
