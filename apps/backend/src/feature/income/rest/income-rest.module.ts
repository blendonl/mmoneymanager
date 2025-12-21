import { Module } from '@nestjs/common';
import { IncomeCoreModule } from '../core/income-core.module';
import { IncomeController } from './controllers/income.controller';

@Module({
  imports: [IncomeCoreModule],
  controllers: [IncomeController],
})
export class IncomeRestModule {}
