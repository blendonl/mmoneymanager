import {
  Injectable,
  Inject,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { type ITransactionRepository } from '../../domain/repositories/transaction.repository.interface';
import { UpdateTransactionDto } from '../dto/update-transaction.dto';
import { Transaction, TransactionProps } from '../../domain/entities/transaction.entity';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace';

@Injectable()
export class UpdateTransactionUseCase {
  constructor(
    @Inject('TransactionRepository')
    private readonly transactionRepository: ITransactionRepository,
  ) { }

  async execute(id: string, dto: UpdateTransactionDto): Promise<Transaction> {
    const existingTransaction = await this.transactionRepository.findById(id);
    if (!existingTransaction) {
      throw new NotFoundException(`Transaction with ID ${id} not found`);
    }

    this.validateUpdateData(dto);

    const updateData: Partial<TransactionProps> = {};
    if (dto.type !== undefined) {
      updateData.type = dto.type;
    }
    if (dto.value !== undefined) {
      updateData.value = new Decimal(dto.value);
    }

    return this.transactionRepository.update(id, updateData);
  }

  private validateUpdateData(dto: UpdateTransactionDto): void {
    if (dto.value !== undefined && dto.value <= 0) {
      throw new BadRequestException('Transaction value must be positive');
    }
  }
}
