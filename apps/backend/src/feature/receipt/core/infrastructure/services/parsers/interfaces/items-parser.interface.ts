export interface ReceiptItem {
  name: string;
  price: number;
  quantity: number;
  unitPrice: number;
}

export interface IItemsParser {
  extractItems(lines: string[]): ReceiptItem[];
}
