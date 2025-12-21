import { type ITransactionRepository } from '../../domain/repositories/transaction.repository.interface';
import { Transaction } from '../../domain/entities/transaction.entity';
export declare class GetTransactionByIdUseCase {
    private readonly transactionRepository;
    constructor(transactionRepository: ITransactionRepository);
    execute(id: string): Promise<Transaction>;
}
