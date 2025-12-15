import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { type ITransactionRepository } from '../../domain/repositories/transaction.repository.interface';

@Injectable()
export class DeleteTransactionUseCase {
  constructor(
    @Inject('TransactionRepository')
    private readonly transactionRepository: ITransactionRepository,
  ) { }

  async execute(id: string): Promise<void> {
    const existingTransaction = await this.transactionRepository.findById(id);
    if (!existingTransaction) {
      throw new NotFoundException(`Transaction with ID ${id} not found`);
    }

    await this.transactionRepository.delete(id);
  }
}
