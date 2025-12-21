export class UpdateIncomeDto {
  categoryId?: string;

  constructor(data: { categoryId?: string }) {
    this.categoryId = data.categoryId;
  }
}
