import { CreateExpenseItemDto } from '../../../../expense-item/core/application/dto/create-expense-item.dto';

export class CreateExpenseDto {
  userId: string;
  categoryId: string;
  storeName: string;
  storeLocation: string;
  items: CreateExpenseItemDto[];

  constructor(data: {
    userId: string;
    categoryId: string;
    storeName: string;
    storeLocation: string;
    items: CreateExpenseItemDto[];
  }) {
    this.userId = data.userId;
    this.categoryId = data.categoryId;
    this.storeName = data.storeName;
    this.storeLocation = data.storeLocation;
    this.items = data.items;
  }
}
