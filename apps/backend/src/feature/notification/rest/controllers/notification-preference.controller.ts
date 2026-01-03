import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { GetNotificationPreferencesUseCase } from '../../core/application/use-cases/get-notification-preferences.use-case';
import { UpdateNotificationPreferencesUseCase } from '../../core/application/use-cases/update-notification-preferences.use-case';
import { RegisterDeviceTokenUseCase } from '../../core/application/use-cases/register-device-token.use-case';
import { UnregisterDeviceTokenUseCase } from '../../core/application/use-cases/unregister-device-token.use-case';
import { CurrentUser } from '../../../auth/rest/decorators/current-user.decorator';
import { User } from '../../../user/core/domain/entities/user.entity';
import { UpdatePreferenceRequestDto } from '../dto/update-preference-request.dto';
import { RegisterTokenRequestDto } from '../dto/register-token-request.dto';

@Controller('notification-preferences')
export class NotificationPreferenceController {
  constructor(
    private readonly getPreferencesUseCase: GetNotificationPreferencesUseCase,
    private readonly updatePreferencesUseCase: UpdateNotificationPreferencesUseCase,
    private readonly registerTokenUseCase: RegisterDeviceTokenUseCase,
    private readonly unregisterTokenUseCase: UnregisterDeviceTokenUseCase,
  ) {}

  @Get()
  async getPreferences(@CurrentUser() user: User) {
    const preferences = await this.getPreferencesUseCase.execute(user.id);
    return preferences.toJSON();
  }

  @Put()
  async updatePreferences(
    @Body() dto: UpdatePreferenceRequestDto,
    @CurrentUser() user: User,
  ) {
    const preferences = await this.updatePreferencesUseCase.execute({
      userId: user.id,
      ...dto,
    });
    return preferences.toJSON();
  }

  @Post('devices')
  @HttpCode(HttpStatus.CREATED)
  async registerDevice(
    @Body() dto: RegisterTokenRequestDto,
    @CurrentUser() user: User,
  ) {
    const token = await this.registerTokenUseCase.execute({
      userId: user.id,
      expoPushToken: dto.expoPushToken,
      platform: dto.platform,
      deviceId: dto.deviceId,
      deviceName: dto.deviceName,
    });
    return token.toJSON();
  }

  @Delete('devices/:token')
  @HttpCode(HttpStatus.NO_CONTENT)
  async unregisterDevice(
    @Param('token') expoPushToken: string,
    @CurrentUser() user: User,
  ) {
    await this.unregisterTokenUseCase.execute(expoPushToken, user.id);
  }
}
