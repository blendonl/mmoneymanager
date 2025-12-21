import { Module } from '@nestjs/common';
import { TransactionCoreModule } from '../core/transaction-core.module';
import { TransactionController } from './controllers/transaction.controller';

@Module({
  imports: [TransactionCoreModule],
  controllers: [TransactionController],
})
export class TransactionRestModule {}
