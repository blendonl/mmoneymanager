export class CreateStoreItemDto {
  storeId: string;
  name: string;
  price: number;
  isDiscounted?: boolean;

  constructor(
    storeId: string,
    name: string,
    price: number,
    isDiscounted?: boolean,
  ) {
    this.storeId = storeId;
    this.name = name;
    this.price = price;
    this.isDiscounted = isDiscounted ?? false;
  }
}
