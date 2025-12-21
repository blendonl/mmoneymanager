import { type IExpenseRepository } from '../../domain/repositories/expense.repository.interface';
import { TransactionService } from '../../../../transaction/core/application/services/transaction.service';
import { ExpenseItemService } from '../../../../expense-item/core/application/services/expense-item.service';
import { CreateExpenseItemDto } from '../../../../expense-item/core/application/dto/create-expense-item.dto';
import { Expense } from '../../domain/entities/expense.entity';
export declare class AddItemToExpenseUseCase {
    private readonly expenseRepository;
    private readonly transactionService;
    private readonly expenseItemService;
    constructor(expenseRepository: IExpenseRepository, transactionService: TransactionService, expenseItemService: ExpenseItemService);
    execute(expenseId: string, itemDto: CreateExpenseItemDto, storeId: string): Promise<Expense>;
}
