import { IncomeCategory as PrismaIncomeCategory } from 'prisma/generated/prisma/client';
import { IncomeCategory } from '../../domain/entities/income-category.entity';
export declare class IncomeCategoryMapper {
    static toDomain(prismaCategory: PrismaIncomeCategory): IncomeCategory;
    static toPersistence(category: IncomeCategory): {
        id: string;
        parentId: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    };
}
