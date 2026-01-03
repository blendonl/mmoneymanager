"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericDateParser = void 0;
const common_1 = require("@nestjs/common");
let GenericDateParser = class GenericDateParser {
    DATE_PATTERNS = [
        /\d{2}[\/\-.]\d{2}[\/\-.]\d{4}/,
        /\d{4}[\/\-.]\d{2}[\/\-.]\d{2}/,
    ];
    extractDate(lines) {
        const text = lines.join('\n');
        for (const pattern of this.DATE_PATTERNS) {
            const match = text.match(pattern);
            if (match) {
                const parsed = new Date(match[0]);
                if (!isNaN(parsed.getTime())) {
                    return parsed.toString();
                }
            }
        }
        return undefined;
    }
};
exports.GenericDateParser = GenericDateParser;
exports.GenericDateParser = GenericDateParser = __decorate([
    (0, common_1.Injectable)()
], GenericDateParser);
//# sourceMappingURL=generic-date.parser.js.map