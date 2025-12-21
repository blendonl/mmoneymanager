import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { type ITransactionRepository } from '../../domain/repositories/transaction.repository.interface';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { Transaction } from '../../domain/entities/transaction.entity';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace';

@Injectable()
export class CreateTransactionUseCase {
  constructor(
    @Inject('TransactionRepository')
    private readonly transactionRepository: ITransactionRepository,
  ) { }

  async execute(dto: CreateTransactionDto): Promise<Transaction> {
    this.validateTransactionData(dto);

    const transaction = await this.transactionRepository.create({
      userId: dto.userId,
      type: dto.type,
      value: new Decimal(dto.value),
    } as Partial<Transaction>);

    return transaction;
  }

  private validateTransactionData(dto: CreateTransactionDto): void {
    if (dto.value <= 0) {
      throw new BadRequestException('Transaction value must be positive');
    }

    if (!dto.userId || dto.userId.trim() === '') {
      throw new BadRequestException('User ID is required');
    }

    if (!dto.type) {
      throw new BadRequestException('Transaction type is required');
    }
  }
}
