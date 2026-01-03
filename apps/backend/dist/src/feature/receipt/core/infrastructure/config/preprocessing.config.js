"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreprocessingConfigFactory = void 0;
class PreprocessingConfigFactory {
    static createOptions(configService) {
        return {
            targetDPI: configService.get('IMAGE_TARGET_DPI', 300),
            enableDeskewing: configService.get('IMAGE_ENABLE_DESKEWING', true),
            enableBinarization: configService.get('IMAGE_ENABLE_BINARIZATION', true),
            noiseReductionLevel: configService.get('IMAGE_NOISE_REDUCTION', 'medium'),
            contrastEnhancement: configService.get('IMAGE_CONTRAST_ENHANCEMENT', true),
            borderCropPercent: configService.get('IMAGE_BORDER_CROP_PERCENT', 2),
        };
    }
}
exports.PreprocessingConfigFactory = PreprocessingConfigFactory;
//# sourceMappingURL=preprocessing.config.js.map