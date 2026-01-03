export class UpdateStoreItemDiscountDto {
  discount?: number;
  endedAt?: Date;

  constructor(discount?: number, endedAt?: Date) {
    this.discount = discount;
    this.endedAt = endedAt;
  }
}
