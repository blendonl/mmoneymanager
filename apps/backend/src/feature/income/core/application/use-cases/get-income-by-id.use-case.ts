import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { type IIncomeRepository } from '../../domain/repositories/income.repository.interface';
import { Income } from '../../domain/entities/income.entity';

@Injectable()
export class GetIncomeByIdUseCase {
  constructor(
    @Inject('IncomeRepository')
    private readonly incomeRepository: IIncomeRepository,
  ) {}

  async execute(id: string): Promise<Income> {
    const income = await this.incomeRepository.findById(id);

    if (!income) {
      throw new NotFoundException('Income not found');
    }

    return income;
  }
}
