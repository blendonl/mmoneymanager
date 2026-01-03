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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrichReceiptDataUseCase = void 0;
const common_1 = require("@nestjs/common");
const find_store_by_similarity_use_case_1 = require("../../../../store/core/application/use-cases/find-store-by-similarity.use-case");
let EnrichReceiptDataUseCase = class EnrichReceiptDataUseCase {
    findStoreBySimilarityUseCase;
    storeItemRepository;
    constructor(findStoreBySimilarityUseCase, storeItemRepository) {
        this.findStoreBySimilarityUseCase = findStoreBySimilarityUseCase;
        this.storeItemRepository = storeItemRepository;
    }
    async execute(processedData) {
        const store = await this.findStoreBySimilarityUseCase.execute(processedData.storeName);
        const enrichedItems = store
            ? await Promise.all(processedData.items.map(async (item) => {
                const existingItem = await this.storeItemRepository.findByStoreAndName(store.id, item.name);
                return {
                    id: existingItem?.id,
                    name: item.name,
                    price: item.price,
                    category: existingItem?.item?.categoryId,
                    quantity: item.quantity,
                };
            }))
            : processedData.items.map((item) => ({
                id: undefined,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
            }));
        return {
            store: {
                id: store?.id,
                name: store?.name || processedData.storeName,
                location: store?.location || processedData.storeLocation,
            },
            items: enrichedItems,
            recordedAt: processedData.recordedAt,
            extractedText: processedData.extractedText,
            confidence: processedData.confidence,
            preprocessingApplied: processedData.preprocessingApplied,
            parserUsed: processedData.parserUsed,
        };
    }
};
exports.EnrichReceiptDataUseCase = EnrichReceiptDataUseCase;
exports.EnrichReceiptDataUseCase = EnrichReceiptDataUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)('StoreItemRepository')),
    __metadata("design:paramtypes", [find_store_by_similarity_use_case_1.FindStoreBySimilarityUseCase, Object])
], EnrichReceiptDataUseCase);
//# sourceMappingURL=enrich-receipt-data.use-case.js.map