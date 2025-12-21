import { Injectable, Inject } from '@nestjs/common';
import { type IExpenseCategoryRepository } from '../../domain/repositories/expense-category.repository.interface';
import { ExpenseCategory } from '../../domain/entities/expense-category.entity';

export interface CategoryTree {
  category: ExpenseCategory;
  children: CategoryTree[];
}

@Injectable()
export class GetCategoryTreeUseCase {
  constructor(
    @Inject('ExpenseCategoryRepository')
    private readonly expenseCategoryRepository: IExpenseCategoryRepository,
  ) {}

  async execute(): Promise<CategoryTree[]> {
    // Get all root categories (parentId === null)
    const rootCategories = await this.expenseCategoryRepository.findByParentId(
      null,
    );

    // Build tree for each root category
    const trees = await Promise.all(
      rootCategories.data.map((category) => this.buildTree(category)),
    );

    return trees;
  }

  private async buildTree(category: ExpenseCategory): Promise<CategoryTree> {
    const children =
      await this.expenseCategoryRepository.findChildren(category.id);

    const childTrees = await Promise.all(
      children.map((child) => this.buildTree(child)),
    );

    return {
      category,
      children: childTrees,
    };
  }
}
