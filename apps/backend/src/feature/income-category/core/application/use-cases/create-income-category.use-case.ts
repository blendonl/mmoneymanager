import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { type IIncomeCategoryRepository } from '../../domain/repositories/income-category.repository.interface';
import { CreateIncomeCategoryDto } from '../dto/create-income-category.dto';
import { IncomeCategory } from '../../domain/entities/income-category.entity';

@Injectable()
export class CreateIncomeCategoryUseCase {
  constructor(
    @Inject('IncomeCategoryRepository')
    private readonly incomeCategoryRepository: IIncomeCategoryRepository,
  ) {}

  async execute(dto: CreateIncomeCategoryDto): Promise<IncomeCategory> {
    await this.validate(dto);

    const category = await this.incomeCategoryRepository.create({
      name: dto.name,
      parentId: dto.parentId ?? null,
    } as Partial<IncomeCategory>);

    return category;
  }

  private async validate(dto: CreateIncomeCategoryDto): Promise<void> {
    if (!dto.name || dto.name.trim() === '') {
      throw new BadRequestException('Category name is required');
    }

    if (dto.parentId) {
      const parent =
        await this.incomeCategoryRepository.findById(dto.parentId);
      if (!parent) {
        throw new BadRequestException('Parent category not found');
      }
    }
  }
}
