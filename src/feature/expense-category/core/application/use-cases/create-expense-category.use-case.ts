import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { type IExpenseCategoryRepository } from '../../domain/repositories/expense-category.repository.interface';
import { CreateExpenseCategoryDto } from '../dto/create-expense-category.dto';
import { ExpenseCategory } from '../../domain/entities/expense-category.entity';

@Injectable()
export class CreateExpenseCategoryUseCase {
  constructor(
    @Inject('ExpenseCategoryRepository')
    private readonly expenseCategoryRepository: IExpenseCategoryRepository,
  ) {}

  async execute(dto: CreateExpenseCategoryDto): Promise<ExpenseCategory> {
    await this.validate(dto);

    const category = await this.expenseCategoryRepository.create({
      name: dto.name,
      parentId: dto.parentId ?? null,
    } as Partial<ExpenseCategory>);

    return category;
  }

  private async validate(dto: CreateExpenseCategoryDto): Promise<void> {
    if (!dto.name || dto.name.trim() === '') {
      throw new BadRequestException('Category name is required');
    }

    // Check name uniqueness
    const existingCategory =
      await this.expenseCategoryRepository.findByName(dto.name);
    if (existingCategory) {
      throw new BadRequestException('Category name must be unique');
    }

    // Validate parent exists if provided
    if (dto.parentId) {
      const parent =
        await this.expenseCategoryRepository.findById(dto.parentId);
      if (!parent) {
        throw new BadRequestException('Parent category not found');
      }
    }
  }
}
