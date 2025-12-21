import { Module } from '@nestjs/common';
import { PrismaModule } from '../../../common/prisma/prisma.module';
import { PrismaUserRepository } from './infrastructure/repositories/prisma-user.repository';
import { UserService } from './application/services/user.service';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: 'UserRepository',
      useClass: PrismaUserRepository,
    },
    UserService,
  ],
  exports: [UserService],
})
export class UserCoreModule {}
