import { Module } from '@nestjs/common';
import { AuthCoreModule } from '../core/auth-core.module';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [AuthCoreModule],
  controllers: [AuthController],
})
export class AuthRestModule {}
