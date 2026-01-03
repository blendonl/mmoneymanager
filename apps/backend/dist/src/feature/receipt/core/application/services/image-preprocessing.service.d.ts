export interface PreprocessingOptions {
    targetDPI?: number;
    enableDeskewing?: boolean;
    enableBinarization?: boolean;
    noiseReductionLevel?: 'none' | 'light' | 'medium' | 'heavy';
    contrastEnhancement?: boolean;
    borderCropPercent?: number;
}
export interface PreprocessingResult {
    processedBuffer: Buffer;
    appliedTransformations: string[];
    originalSize: {
        width: number;
        height: number;
    };
    processedSize: {
        width: number;
        height: number;
    };
    detectedRotation?: number;
}
export interface IImagePreprocessingService {
    preprocess(imageBuffer: Buffer, options?: PreprocessingOptions): Promise<PreprocessingResult>;
}
