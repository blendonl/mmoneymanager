import { ConfigService } from '@nestjs/config';
import { PreprocessingOptions } from '../../application/services/image-preprocessing.service';
export declare class PreprocessingConfigFactory {
    static createOptions(configService: ConfigService): PreprocessingOptions;
}
