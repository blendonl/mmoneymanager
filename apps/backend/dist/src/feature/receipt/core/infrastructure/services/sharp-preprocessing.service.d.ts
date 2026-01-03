import { ConfigService } from '@nestjs/config';
import { IImagePreprocessingService, PreprocessingOptions, PreprocessingResult } from '../../application/services/image-preprocessing.service';
export declare class SharpPreprocessingService implements IImagePreprocessingService {
    private readonly configService;
    private readonly logger;
    constructor(configService: ConfigService);
    private getSharpInstance;
    preprocess(imageBuffer: Buffer, options?: PreprocessingOptions): Promise<PreprocessingResult>;
    private getDefaultOptions;
    private getNoiseReductionSigma;
}
