import { ProcessReceiptUseCase } from '../../core/application/use-cases/process-receipt.use-case';
import { EnrichReceiptDataUseCase } from '../../core/application/use-cases/enrich-receipt-data.use-case';
import { ProcessedReceiptResponseDto } from '../dto/processed-receipt-response.dto';
export declare class ReceiptController {
    private readonly processReceiptUseCase;
    private readonly enrichReceiptDataUseCase;
    constructor(processReceiptUseCase: ProcessReceiptUseCase, enrichReceiptDataUseCase: EnrichReceiptDataUseCase);
    processReceipt(file: Express.Multer.File): Promise<ProcessedReceiptResponseDto>;
}
