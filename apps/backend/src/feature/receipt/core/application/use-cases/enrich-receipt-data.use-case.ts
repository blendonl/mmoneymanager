import { Injectable, Inject } from '@nestjs/common';
import { ProcessedReceiptData } from './process-receipt.use-case';
import { FindStoreBySimilarityUseCase } from '~feature/store/core/application/use-cases/find-store-by-similarity.use-case';
import { type IStoreItemRepository } from '~feature/store/core/domain/repositories/store-item.repository.interface';
import { EnrichedReceiptDataDto } from '../dto/enriched-receipt-data.dto';

@Injectable()
export class EnrichReceiptDataUseCase {
  constructor(
    private readonly findStoreBySimilarityUseCase: FindStoreBySimilarityUseCase,
    @Inject('StoreItemRepository')
    private readonly storeItemRepository: IStoreItemRepository,
  ) {}

  async execute(
    processedData: ProcessedReceiptData,
  ): Promise<EnrichedReceiptDataDto> {
    const store = await this.findStoreBySimilarityUseCase.execute(
      processedData.storeName,
    );

    const enrichedItems = store
      ? await Promise.all(
          processedData.items.map(async (item) => {
            const existingItem =
              await this.storeItemRepository.findByStoreAndName(
                store.id,
                item.name,
              );

            return {
              id: existingItem?.id,
              name: item.name,
              price: item.price,
              category: existingItem?.item?.categoryId,
              quantity: item.quantity,
            };
          }),
        )
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
}
