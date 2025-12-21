import { Injectable, Inject } from '@nestjs/common';
import { type IIncomeCategoryRepository } from '../../domain/repositories/income-category.repository.interface';
import { IncomeCategory } from '../../domain/entities/income-category.entity';

export interface IncomeCategoryTree {
  category: IncomeCategory;
  children: IncomeCategoryTree[];
}

@Injectable()
export class GetIncomeCategoryTreeUseCase {
  constructor(
    @Inject('IncomeCategoryRepository')
    private readonly incomeCategoryRepository: IIncomeCategoryRepository,
  ) {}

  async execute(): Promise<IncomeCategoryTree[]> {
    const rootCategories = await this.incomeCategoryRepository.findByParentId(
      null,
    );

    const trees = await Promise.all(
      rootCategories.data.map((category) => this.buildTree(category)),
    );

    return trees;
  }

  private async buildTree(category: IncomeCategory): Promise<IncomeCategoryTree> {
    const children =
      await this.incomeCategoryRepository.findChildren(category.id);

    const childTrees = await Promise.all(
      children.map((child) => this.buildTree(child)),
    );

    return {
      category,
      children: childTrees,
    };
  }
}
