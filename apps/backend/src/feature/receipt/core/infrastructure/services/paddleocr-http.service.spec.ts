import { ConfigService } from '@nestjs/config';
import { PaddleOcrHttpService } from './paddleocr-http.service';

describe('PaddleOcrHttpService', () => {
  let service: PaddleOcrHttpService;
  let configService: ConfigService;
  let originalFetch: typeof global.fetch;

  beforeEach(() => {
    configService = {
      get: jest.fn((key: string, defaultValue?: any) => {
        const config: Record<string, any> = {
          PADDLEOCR_SERVICE_URL: 'http://localhost:8000',
          PADDLEOCR_TIMEOUT: 30000,
        };
        return config[key] ?? defaultValue;
      }),
    } as any;

    service = new PaddleOcrHttpService(configService);
    originalFetch = global.fetch;
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('extractText', () => {
    it('should successfully extract text from image', async () => {
      const mockResponse = {
        text: 'Sample receipt text',
        confidence: 0.95,
      };

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
      } as Response);

      const imageBuffer = Buffer.from('fake-image-data');
      const result = await service.extractText(imageBuffer);

      expect(result).toEqual({
        text: 'Sample receipt text',
        confidence: 0.95,
      });
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    it('should trim extracted text', async () => {
      const mockResponse = {
        text: '  Sample receipt text  \n',
        confidence: 0.85,
      };

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
      } as Response);

      const imageBuffer = Buffer.from('fake-image-data');
      const result = await service.extractText(imageBuffer);

      expect(result.text).toBe('Sample receipt text');
    });

    it('should handle service errors', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 500,
        text: async () => 'Internal server error',
      } as Response);

      const imageBuffer = Buffer.from('fake-image-data');

      await expect(service.extractText(imageBuffer)).rejects.toThrow(
        /PaddleOCR service error/,
      );
    });

    it('should retry on network failure', async () => {
      global.fetch = jest
        .fn()
        .mockRejectedValueOnce(new Error('Network error'))
        .mockRejectedValueOnce(new Error('Network error'))
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({ text: 'Success after retries', confidence: 0.9 }),
        } as Response);

      const imageBuffer = Buffer.from('fake-image-data');
      const result = await service.extractText(imageBuffer);

      expect(result.text).toBe('Success after retries');
      expect(global.fetch).toHaveBeenCalledTimes(3);
    });

    it('should fail after max retries', async () => {
      global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));

      const imageBuffer = Buffer.from('fake-image-data');

      await expect(service.extractText(imageBuffer)).rejects.toThrow(
        /Failed to extract text from image after 3 attempts/,
      );
      expect(global.fetch).toHaveBeenCalledTimes(3);
    });

    it('should handle timeout errors', async () => {
      global.fetch = jest.fn().mockImplementation(() => {
        const abortError = new Error('Aborted');
        abortError.name = 'AbortError';
        return Promise.reject(abortError);
      });

      const imageBuffer = Buffer.from('fake-image-data');

      await expect(service.extractText(imageBuffer)).rejects.toThrow();
      expect(global.fetch).toHaveBeenCalledTimes(3);
    });

    it('should use correct service URL from config', async () => {
      const customConfigService = {
        get: jest.fn((key: string, defaultValue?: any) => {
          if (key === 'PADDLEOCR_SERVICE_URL') return 'http://custom:9000';
          if (key === 'PADDLEOCR_TIMEOUT') return 5000;
          return defaultValue;
        }),
      } as any;

      const customService = new PaddleOcrHttpService(customConfigService);

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ text: 'Test', confidence: 0.8 }),
      } as Response);

      const imageBuffer = Buffer.from('fake-image-data');
      await customService.extractText(imageBuffer);

      expect(global.fetch).toHaveBeenCalledWith(
        'http://custom:9000/ocr/extract',
        expect.any(Object),
      );
    });
  });
});
