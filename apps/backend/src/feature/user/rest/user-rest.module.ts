import { Module } from '@nestjs/common';
import { UserCoreModule } from '../core/user-core.module';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [UserCoreModule],
  controllers: [UserController],
})
export class UserRestModule {}
