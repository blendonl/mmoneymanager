export class CreateExpenseItemDto {
  expenseId: string;
  categoryId: string;
  itemName: string;
  itemPrice: number;
  discount?: number;
  itemId?: string;

  constructor(data: {
    expenseId: string;
    categoryId: string;
    itemName: string;
    itemPrice: number;
    discount?: number;
    itemId?: string;
  }) {
    this.expenseId = data.expenseId;
    this.categoryId = data.categoryId;
    this.itemName = data.itemName;
    this.itemPrice = data.itemPrice;
    this.discount = data.discount ?? 0;
    this.itemId = data.itemId;
  }
}
