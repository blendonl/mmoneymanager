import { Module } from '@nestjs/common';
import { IncomeCategoryCoreModule } from '../core/income-category-core.module';
import { IncomeCategoryController } from './controllers/income-category.controller';

@Module({
  imports: [IncomeCategoryCoreModule],
  controllers: [IncomeCategoryController],
})
export class IncomeCategoryRestModule {}
