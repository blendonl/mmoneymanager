import { Injectable } from '@nestjs/common';
import {
  IItemsParser,
  ReceiptItem,
} from '../../interfaces/items-parser.interface';

interface QuantityInfo {
  quantity: number;
  unitPrice: number;
}

@Injectable()
export class AlbanianItemsParser implements IItemsParser {
  private readonly ITEM_REGEX = /^(.+?)\s+(\d+(?:\.\d+)?)E$/;
  private readonly QUANTITY_REGEX = /^(\d+)X(\d+(?:\.\d+))$/;

  extractItems(lines: string[]): ReceiptItem[] {
    const items: ReceiptItem[] = [];

    for (let i = 0; i < lines.length; i++) {
      const quantityInfo = this.extractQuantityInfo(lines[i]);

      if (quantityInfo) {
        i += 1;
        if (i >= lines.length) break;
      }

      const item = this.parseItemLine(lines[i], quantityInfo);
      if (item) {
        items.push(item);
      }
    }

    return items;
  }

  private extractQuantityInfo(line: string): QuantityInfo | null {
    const match = line.match(this.QUANTITY_REGEX);
    if (!match) return null;

    return {
      quantity: parseInt(match[1]),
      unitPrice: parseFloat(match[2]),
    };
  }

  private parseItemLine(
    line: string,
    quantityInfo: QuantityInfo | null,
  ): ReceiptItem | null {
    const match = line.match(this.ITEM_REGEX);
    if (!match) return null;

    const price = parseFloat(match[2]);

    return {
      name: match[1],
      price,
      quantity: quantityInfo?.quantity ?? 1,
      unitPrice: quantityInfo?.unitPrice ?? price,
    };
  }
}
