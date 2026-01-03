import { Module } from '@nestjs/common';
import { FamilyCoreModule } from './core/family-core.module';
import { FamilyController } from './rest/controllers/family.controller';
import { FamilyMemberGuard } from './rest/guards/family-member.guard';

@Module({
  imports: [FamilyCoreModule],
  controllers: [FamilyController],
  providers: [FamilyMemberGuard],
  exports: [FamilyCoreModule],
})
export class FamilyModule {}
