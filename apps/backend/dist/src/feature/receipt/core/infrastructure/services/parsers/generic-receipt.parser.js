"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericReceiptParser = void 0;
const common_1 = require("@nestjs/common");
const base_receipt_parser_1 = require("./base-receipt.parser");
const generic_store_name_parser_1 = require("./implementations/generic/generic-store-name.parser");
const generic_store_location_parser_1 = require("./implementations/generic/generic-store-location.parser");
const generic_date_parser_1 = require("./implementations/generic/generic-date.parser");
const generic_time_parser_1 = require("./implementations/generic/generic-time.parser");
const generic_items_parser_1 = require("./implementations/generic/generic-items.parser");
const generic_total_parser_1 = require("./implementations/generic/generic-total.parser");
const date_time_parser_util_1 = require("../../utils/date-time-parser.util");
let GenericReceiptParser = class GenericReceiptParser extends base_receipt_parser_1.BaseReceiptParser {
    storeNameParser;
    storeLocationParser;
    dateParser;
    timeParser;
    itemsParser;
    totalParser;
    name = 'generic';
    constructor(storeNameParser, storeLocationParser, dateParser, timeParser, itemsParser, totalParser) {
        super();
        this.storeNameParser = storeNameParser;
        this.storeLocationParser = storeLocationParser;
        this.dateParser = dateParser;
        this.timeParser = timeParser;
        this.itemsParser = itemsParser;
        this.totalParser = totalParser;
    }
    canParse(text) {
        return true;
    }
    async parse(text, context) {
        const lines = this.getCleanLines(text);
        const date = this.dateParser.extractDate(lines);
        const time = this.timeParser.extractTime(lines);
        return {
            storeName: this.storeNameParser.extractStoreName(lines),
            storeLocation: this.storeLocationParser.extractStoreLocation(lines),
            date,
            time,
            recordedAt: date_time_parser_util_1.DateTimeParser.parseGenericDateTime(date, time),
            items: this.itemsParser.extractItems(lines),
            totalAmount: this.totalParser.extractTotal(text),
            parserUsed: this.name,
        };
    }
    getCleanLines(text) {
        return text
            .split('\n')
            .map((line) => line.trim())
            .filter((line) => line.length > 0);
    }
};
exports.GenericReceiptParser = GenericReceiptParser;
exports.GenericReceiptParser = GenericReceiptParser = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [generic_store_name_parser_1.GenericStoreNameParser,
        generic_store_location_parser_1.GenericStoreLocationParser,
        generic_date_parser_1.GenericDateParser,
        generic_time_parser_1.GenericTimeParser,
        generic_items_parser_1.GenericItemsParser,
        generic_total_parser_1.GenericTotalParser])
], GenericReceiptParser);
//# sourceMappingURL=generic-receipt.parser.js.map