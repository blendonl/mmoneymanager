import { type IExpenseRepository } from '../../domain/repositories/expense.repository.interface';
import { type IExpenseCategoryRepository } from '../../../../expense-category/core/domain/repositories/expense-category.repository.interface';
import { TransactionService } from '../../../../transaction/core/application/services/transaction.service';
import { StoreService } from '../../../../store/core/application/services/store.service';
import { ExpenseItemService } from '../../../../expense-item/core/application/services/expense-item.service';
import { CreateExpenseDto } from '../dto/create-expense.dto';
import { Expense } from '../../domain/entities/expense.entity';
export declare class CreateExpenseUseCase {
    private readonly expenseRepository;
    private readonly expenseCategoryRepository;
    private readonly transactionService;
    private readonly storeService;
    private readonly expenseItemService;
    constructor(expenseRepository: IExpenseRepository, expenseCategoryRepository: IExpenseCategoryRepository, transactionService: TransactionService, storeService: StoreService, expenseItemService: ExpenseItemService);
    execute(dto: CreateExpenseDto): Promise<Expense>;
    private validate;
}
