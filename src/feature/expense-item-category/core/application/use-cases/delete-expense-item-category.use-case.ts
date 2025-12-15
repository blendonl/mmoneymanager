import {
  Injectable,
  Inject,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { type IExpenseItemCategoryRepository } from '../../domain/repositories/expense-item-category.repository.interface';

@Injectable()
export class DeleteExpenseItemCategoryUseCase {
  constructor(
    @Inject('ExpenseItemCategoryRepository')
    private readonly expenseItemCategoryRepository: IExpenseItemCategoryRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const category = await this.expenseItemCategoryRepository.findById(id);

    if (!category) {
      throw new NotFoundException('Expense item category not found');
    }

    await this.validate(id);

    await this.expenseItemCategoryRepository.delete(id);
  }

  private async validate(id: string): Promise<void> {
    // Check if category has children
    const children = await this.expenseItemCategoryRepository.findChildren(id);
    if (children.length > 0) {
      throw new BadRequestException(
        'Cannot delete category with child categories',
      );
    }

    // TODO: Check if category is used by any expense items
    // This will be implemented when ExpenseItem feature is ready
  }
}
