import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import sharp from 'sharp';
import {
  IImagePreprocessingService,
  PreprocessingOptions,
  PreprocessingResult,
} from '../../application/services/image-preprocessing.service';

@Injectable()
export class SharpPreprocessingService implements IImagePreprocessingService {
  private readonly logger = new Logger(SharpPreprocessingService.name);

  constructor(private readonly configService: ConfigService) {
    sharp.concurrency(1);
    sharp.cache({ memory: 50 });
  }

  private getSharpInstance(buffer: Buffer) {
    return sharp(buffer, {
      limitInputPixels: 500000000,
      sequentialRead: true,
    });
  }

  async preprocess(
    imageBuffer: Buffer,
    options?: PreprocessingOptions,
  ): Promise<PreprocessingResult> {
    const opts = this.getDefaultOptions(options);
    const appliedTransformations: string[] = [];

    try {
      this.logger.log('Starting image preprocessing');
      const startTime = Date.now();

      let pipeline = this.getSharpInstance(imageBuffer);
      const metadata = await pipeline.metadata();

      const originalSize = {
        width: metadata.width || 0,
        height: metadata.height || 0,
      };

      const maxDimension = 4000;
      if (originalSize.width > maxDimension || originalSize.height > maxDimension) {
        const scale = Math.min(
          maxDimension / originalSize.width,
          maxDimension / originalSize.height,
        );
        pipeline = pipeline.resize({
          width: Math.round(originalSize.width * scale),
          height: Math.round(originalSize.height * scale),
          fit: 'inside',
        });
        appliedTransformations.push(
          `downscale-to-${maxDimension}px-max`,
        );
      }

      if (metadata.orientation && metadata.orientation > 1) {
        pipeline = pipeline.rotate();
        appliedTransformations.push('auto-rotation');
      }

      if (
        opts.targetDPI &&
        metadata.density &&
        metadata.density < opts.targetDPI &&
        originalSize.width < 2000 &&
        originalSize.height < 2000
      ) {
        const scale = Math.min(opts.targetDPI / metadata.density, 2.0);
        pipeline = pipeline.resize({
          width: Math.round(originalSize.width * scale),
          height: Math.round(originalSize.height * scale),
          fit: 'fill',
        });
        appliedTransformations.push(`upscale-to-${opts.targetDPI}dpi`);
      }

      pipeline = pipeline.grayscale();
      appliedTransformations.push('grayscale');

      if (opts.contrastEnhancement) {
        pipeline = pipeline.normalize();
        appliedTransformations.push('contrast-enhancement');
      }

      if (opts.noiseReductionLevel && opts.noiseReductionLevel !== 'none') {
        const sigma = this.getNoiseReductionSigma(opts.noiseReductionLevel);
        pipeline = pipeline.median(Math.ceil(sigma * 2));
        appliedTransformations.push(
          `noise-reduction-${opts.noiseReductionLevel}`,
        );
      }

      if (opts.enableBinarization) {
        pipeline = pipeline.linear(1.5, -(128 * 0.5)).threshold();
        appliedTransformations.push('adaptive-binarization');
      }

      if (opts.borderCropPercent && opts.borderCropPercent > 0) {
        const currentMetadata = await pipeline.metadata();
        const currentWidth = currentMetadata.width || originalSize.width;
        const currentHeight = currentMetadata.height || originalSize.height;

        const cropPixelsH = Math.round(
          currentWidth * (opts.borderCropPercent / 100),
        );
        const cropPixelsV = Math.round(
          currentHeight * (opts.borderCropPercent / 100),
        );

        if (
          cropPixelsH * 2 < currentWidth &&
          cropPixelsV * 2 < currentHeight
        ) {
          pipeline = pipeline.extract({
            left: cropPixelsH,
            top: cropPixelsV,
            width: currentWidth - cropPixelsH * 2,
            height: currentHeight - cropPixelsV * 2,
          });
          appliedTransformations.push(`border-crop-${opts.borderCropPercent}%`);
        }
      }

      const processedBuffer = await pipeline.png().toBuffer();
      const processedMetadata = await this.getSharpInstance(
        processedBuffer,
      ).metadata();
      const processedSize = {
        width: processedMetadata.width || 0,
        height: processedMetadata.height || 0,
      };

      const processingTime = Date.now() - startTime;
      this.logger.log(
        `Preprocessing completed in ${processingTime}ms. Applied: ${appliedTransformations.join(', ')}`,
      );

      return {
        processedBuffer,
        appliedTransformations,
        originalSize,
        processedSize,
      };
    } catch (error) {
      this.logger.error('Preprocessing failed', error);
      throw new Error('Failed to preprocess image');
    }
  }

  private getDefaultOptions(
    options?: PreprocessingOptions,
  ): PreprocessingOptions {
    return {
      targetDPI:
        options?.targetDPI ||
        this.configService.get<number>('IMAGE_TARGET_DPI', 300),
      enableDeskewing:
        options?.enableDeskewing ??
        this.configService.get<boolean>('IMAGE_ENABLE_DESKEWING', true),
      enableBinarization:
        options?.enableBinarization ??
        this.configService.get<boolean>('IMAGE_ENABLE_BINARIZATION', false),
      noiseReductionLevel:
        options?.noiseReductionLevel ||
        this.configService.get<'none' | 'light' | 'medium' | 'heavy'>(
          'IMAGE_NOISE_REDUCTION',
          'light',
        ),
      contrastEnhancement:
        options?.contrastEnhancement ??
        this.configService.get<boolean>('IMAGE_CONTRAST_ENHANCEMENT', true),
      borderCropPercent:
        options?.borderCropPercent ??
        this.configService.get<number>('IMAGE_BORDER_CROP_PERCENT', 0),
    };
  }

  private getNoiseReductionSigma(
    level: 'none' | 'light' | 'medium' | 'heavy',
  ): number {
    switch (level) {
      case 'light':
        return 1;
      case 'medium':
        return 2;
      case 'heavy':
        return 3;
      default:
        return 0;
    }
  }
}
