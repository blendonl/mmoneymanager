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
exports.AlbanianReceiptParser = void 0;
const common_1 = require("@nestjs/common");
const base_receipt_parser_1 = require("./base-receipt.parser");
const albanian_store_name_parser_1 = require("./implementations/albanian/albanian-store-name.parser");
const albanian_store_location_parser_1 = require("./implementations/albanian/albanian-store-location.parser");
const albanian_date_parser_1 = require("./implementations/albanian/albanian-date.parser");
const albanian_time_parser_1 = require("./implementations/albanian/albanian-time.parser");
const albanian_items_parser_1 = require("./implementations/albanian/albanian-items.parser");
const albanian_total_parser_1 = require("./implementations/albanian/albanian-total.parser");
const date_time_parser_util_1 = require("../../utils/date-time-parser.util");
let AlbanianReceiptParser = class AlbanianReceiptParser extends base_receipt_parser_1.BaseReceiptParser {
    storeNameParser;
    storeLocationParser;
    dateParser;
    timeParser;
    itemsParser;
    totalParser;
    name = 'albanian';
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
        const albanianMarkers = ['TVSH', 'TUSH', 'ARTIKUT', 'TOTALI NE EURO'];
        return albanianMarkers.some((marker) => text.includes(marker));
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
            recordedAt: date_time_parser_util_1.DateTimeParser.parseAlbanianDateTime(date, time),
            items: this.itemsParser.extractItems(lines),
            totalAmount: this.totalParser.extractTotal(text),
            parserUsed: this.name,
        };
    }
    getCleanLines(text) {
        return text.split('\n').map((line) => line.trim());
    }
};
exports.AlbanianReceiptParser = AlbanianReceiptParser;
exports.AlbanianReceiptParser = AlbanianReceiptParser = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [albanian_store_name_parser_1.AlbanianStoreNameParser,
        albanian_store_location_parser_1.AlbanianStoreLocationParser,
        albanian_date_parser_1.AlbanianDateParser,
        albanian_time_parser_1.AlbanianTimeParser,
        albanian_items_parser_1.AlbanianItemsParser,
        albanian_total_parser_1.AlbanianTotalParser])
], AlbanianReceiptParser);
//# sourceMappingURL=albanian-receipt.parser.js.map