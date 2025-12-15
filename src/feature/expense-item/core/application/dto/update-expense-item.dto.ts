export class UpdateExpenseItemDto {
  categoryId?: string;
  price?: number;
  discount?: number;

  constructor(data: {
    categoryId?: string;
    price?: number;
    discount?: number;
  }) {
    this.categoryId = data.categoryId;
    this.price = data.price;
    this.discount = data.discount;
  }
}
