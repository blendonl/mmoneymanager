import { TransactionResponseDto } from '~feature/transaction/rest';
import { Expense } from '../../core/domain/entities/expense.entity';
import { ExpenseCategoryResponseDto } from '~feature/expense-category/rest/dto/expense-category-response.dto';
import { StoreResponseDto } from '~feature/store/rest/dto/store-response.dto';
import { ExpenseItemResponseDto } from '~feature/expense-item/rest/dto/expense-item-response.dto';
export declare class ExpenseResponseDto {
    id: string;
    transactionId: string;
    categoryId: string;
    storeId: string;
    transaction: TransactionResponseDto;
    category: ExpenseCategoryResponseDto;
    store: StoreResponseDto;
    items: ExpenseItemResponseDto[];
    name: string;
    createdAt: Date;
    updatedAt: Date;
    static fromEntity(expense: Expense): ExpenseResponseDto;
    static fromEntities(expenses: Expense[]): ExpenseResponseDto[];
}
