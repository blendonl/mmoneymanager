"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbanianStoreNameParser = void 0;
const common_1 = require("@nestjs/common");
let AlbanianStoreNameParser = class AlbanianStoreNameParser {
    extractStoreName(lines) {
        return lines[0] || 'Unknown Store';
    }
};
exports.AlbanianStoreNameParser = AlbanianStoreNameParser;
exports.AlbanianStoreNameParser = AlbanianStoreNameParser = __decorate([
    (0, common_1.Injectable)()
], AlbanianStoreNameParser);
//# sourceMappingURL=albanian-store-name.parser.js.map