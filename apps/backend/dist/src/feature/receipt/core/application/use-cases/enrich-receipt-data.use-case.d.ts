import { ProcessedReceiptData } from './process-receipt.use-case';
import { FindStoreBySimilarityUseCase } from '~feature/store/core/application/use-cases/find-store-by-similarity.use-case';
import { type IStoreItemRepository } from '~feature/store/core/domain/repositories/store-item.repository.interface';
import { EnrichedReceiptDataDto } from '../dto/enriched-receipt-data.dto';
export declare class EnrichReceiptDataUseCase {
    private readonly findStoreBySimilarityUseCase;
    private readonly storeItemRepository;
    constructor(findStoreBySimilarityUseCase: FindStoreBySimilarityUseCase, storeItemRepository: IStoreItemRepository);
    execute(processedData: ProcessedReceiptData): Promise<EnrichedReceiptDataDto>;
}
