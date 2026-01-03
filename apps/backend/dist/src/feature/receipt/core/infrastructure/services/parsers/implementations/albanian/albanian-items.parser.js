"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbanianItemsParser = void 0;
const common_1 = require("@nestjs/common");
let AlbanianItemsParser = class AlbanianItemsParser {
    ITEM_REGEX = /^(.+?)\s+(\d+(?:\.\d+)?)E$/;
    QUANTITY_REGEX = /^(\d+)X(\d+(?:\.\d+))$/;
    extractItems(lines) {
        const items = [];
        for (let i = 0; i < lines.length; i++) {
            const quantityInfo = this.extractQuantityInfo(lines[i]);
            if (quantityInfo) {
                i += 1;
                if (i >= lines.length)
                    break;
            }
            const item = this.parseItemLine(lines[i], quantityInfo);
            if (item) {
                items.push(item);
            }
        }
        return items;
    }
    extractQuantityInfo(line) {
        const match = line.match(this.QUANTITY_REGEX);
        if (!match)
            return null;
        return {
            quantity: parseInt(match[1]),
            unitPrice: parseFloat(match[2]),
        };
    }
    parseItemLine(line, quantityInfo) {
        const match = line.match(this.ITEM_REGEX);
        if (!match)
            return null;
        const price = parseFloat(match[2]);
        return {
            name: match[1],
            price,
            quantity: quantityInfo?.quantity ?? 1,
            unitPrice: quantityInfo?.unitPrice ?? price,
        };
    }
};
exports.AlbanianItemsParser = AlbanianItemsParser;
exports.AlbanianItemsParser = AlbanianItemsParser = __decorate([
    (0, common_1.Injectable)()
], AlbanianItemsParser);
//# sourceMappingURL=albanian-items.parser.js.map