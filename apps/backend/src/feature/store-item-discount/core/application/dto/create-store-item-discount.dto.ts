export class CreateStoreItemDiscountDto {
  storeItemId: string;
  discount: number;
  startedAt?: Date;

  constructor(storeItemId: string, discount: number, startedAt?: Date) {
    this.storeItemId = storeItemId;
    this.discount = discount;
    this.startedAt = startedAt;
  }
}
