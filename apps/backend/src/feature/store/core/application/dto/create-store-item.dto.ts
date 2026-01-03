export class CreateStoreItemDto {
  storeId: string;
  name: string;
  price: number;
  categoryId: string;
  isDiscounted?: boolean;

  constructor(
    storeId: string,
    name: string,
    price: number,
    categoryId: string,
    isDiscounted?: boolean,
  ) {
    this.storeId = storeId;
    this.name = name;
    this.price = price;
    this.categoryId = categoryId;
    this.isDiscounted = isDiscounted ?? false;
  }
}
