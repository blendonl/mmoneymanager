export interface OcrResult {
    text: string;
    confidence: number;
}
export interface IOcrService {
    extractText(imageBuffer: Buffer): Promise<OcrResult>;
}
