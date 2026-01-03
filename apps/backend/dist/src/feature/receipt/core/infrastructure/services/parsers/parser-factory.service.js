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
var ReceiptParserFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiptParserFactory = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const albanian_receipt_parser_1 = require("./albanian-receipt.parser");
const generic_receipt_parser_1 = require("./generic-receipt.parser");
let ReceiptParserFactory = ReceiptParserFactory_1 = class ReceiptParserFactory {
    configService;
    albanianParser;
    genericParser;
    logger = new common_1.Logger(ReceiptParserFactory_1.name);
    parsers = [];
    constructor(configService, albanianParser, genericParser) {
        this.configService = configService;
        this.albanianParser = albanianParser;
        this.genericParser = genericParser;
        this.initializeParsers();
    }
    initializeParsers() {
        this.registerParser(this.albanianParser);
        this.registerParser(this.genericParser);
        this.logger.log(`Initialized ${this.parsers.length} parsers: ${this.parsers.map((p) => p.name).join(', ')}`);
    }
    async parse(text, context) {
        for (const parser of this.parsers) {
            if (parser.canParse(text)) {
                this.logger.log(`Using parser: ${parser.name}`);
                return parser.parse(text, context);
            }
        }
        throw new Error('No suitable parser found for receipt');
    }
    registerParser(parser) {
        this.parsers.push(parser);
    }
};
exports.ReceiptParserFactory = ReceiptParserFactory;
exports.ReceiptParserFactory = ReceiptParserFactory = ReceiptParserFactory_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        albanian_receipt_parser_1.AlbanianReceiptParser,
        generic_receipt_parser_1.GenericReceiptParser])
], ReceiptParserFactory);
//# sourceMappingURL=parser-factory.service.js.map