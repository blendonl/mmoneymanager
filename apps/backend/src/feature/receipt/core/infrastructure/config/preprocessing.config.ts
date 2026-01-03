import { ConfigService } from '@nestjs/config';
import { PreprocessingOptions } from '../../application/services/image-preprocessing.service';

export class PreprocessingConfigFactory {
  static createOptions(configService: ConfigService): PreprocessingOptions {
    return {
      targetDPI: configService.get<number>('IMAGE_TARGET_DPI', 300),
      enableDeskewing: configService.get<boolean>(
        'IMAGE_ENABLE_DESKEWING',
        true,
      ),
      enableBinarization: configService.get<boolean>(
        'IMAGE_ENABLE_BINARIZATION',
        true,
      ),
      noiseReductionLevel: configService.get<
        'none' | 'light' | 'medium' | 'heavy'
      >('IMAGE_NOISE_REDUCTION', 'medium'),
      contrastEnhancement: configService.get<boolean>(
        'IMAGE_CONTRAST_ENHANCEMENT',
        true,
      ),
      borderCropPercent: configService.get<number>(
        'IMAGE_BORDER_CROP_PERCENT',
        2,
      ),
    };
  }
}
