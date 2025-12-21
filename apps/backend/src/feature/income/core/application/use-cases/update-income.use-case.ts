import {
  Injectable,
  Inject,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { type IIncomeRepository } from '../../domain/repositories/income.repository.interface';
import { type IIncomeCategoryRepository } from '../../../../income-category/core/domain/repositories/income-category.repository.interface';
import { UpdateIncomeDto } from '../dto/update-income.dto';
import { Income } from '../../domain/entities/income.entity';

@Injectable()
export class UpdateIncomeUseCase {
  constructor(
    @Inject('IncomeRepository')
    private readonly incomeRepository: IIncomeRepository,
    @Inject('IncomeCategoryRepository')
    private readonly incomeCategoryRepository: IIncomeCategoryRepository,
  ) {}

  async execute(id: string, dto: UpdateIncomeDto): Promise<Income> {
    const income = await this.incomeRepository.findById(id);

    if (!income) {
      throw new NotFoundException('Income not found');
    }

    await this.validate(dto);

    const updated = await this.incomeRepository.update(id, {
      categoryId: dto.categoryId,
    } as Partial<Income>);

    return updated;
  }

  private async validate(dto: UpdateIncomeDto): Promise<void> {
    if (dto.categoryId !== undefined) {
      const category = await this.incomeCategoryRepository.findById(
        dto.categoryId,
      );
      if (!category) {
        throw new BadRequestException('Income category not found');
      }
    }
  }
}
