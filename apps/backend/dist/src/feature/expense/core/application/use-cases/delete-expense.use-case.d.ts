import { PrismaService } from '../../../../../common/prisma/prisma.service';
import { type IExpenseRepository } from '../../domain/repositories/expense.repository.interface';
export declare class DeleteExpenseUseCase {
    private readonly expenseRepository;
    private readonly prisma;
    constructor(expenseRepository: IExpenseRepository, prisma: PrismaService);
    execute(id: string, userId: string): Promise<void>;
}
