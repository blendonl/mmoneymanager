import {
  Injectable,
  Inject,
  BadRequestException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { type IIncomeRepository } from '../../domain/repositories/income.repository.interface';
import { type IIncomeCategoryRepository } from '../../../../income-category/core/domain/repositories/income-category.repository.interface';
import { CreateIncomeDto } from '../dto/create-income.dto';
import { Income } from '../../domain/entities/income.entity';

@Injectable()
export class CreateIncomeUseCase {
  constructor(
    @Inject('IncomeRepository')
    private readonly incomeRepository: IIncomeRepository,
    @Inject('IncomeCategoryRepository')
    private readonly incomeCategoryRepository: IIncomeCategoryRepository,
  ) {}

  async execute(dto: CreateIncomeDto): Promise<Income> {
    await this.validate(dto);

    const income = await this.incomeRepository.create({
      transactionId: dto.transactionId,
      storeId: dto.storeId,
      categoryId: dto.categoryId,
    } as Partial<Income>);

    return income;
  }

  private async validate(dto: CreateIncomeDto): Promise<void> {
    if (!dto.transactionId || dto.transactionId.trim() === '') {
      throw new BadRequestException('Transaction ID is required');
    }

    if (!dto.storeId || dto.storeId.trim() === '') {
      throw new BadRequestException('Store ID is required');
    }

    if (!dto.categoryId || dto.categoryId.trim() === '') {
      throw new BadRequestException('Category ID is required');
    }

    const category = await this.incomeCategoryRepository.findById(
      dto.categoryId,
    );
    if (!category) {
      throw new NotFoundException('Income category not found');
    }

    const existingIncome = await this.incomeRepository.findByTransactionId(
      dto.transactionId,
    );
    if (existingIncome) {
      throw new ConflictException(
        'Income already exists for this transaction',
      );
    }
  }
}
