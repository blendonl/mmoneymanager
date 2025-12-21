import { type ITransactionRepository } from '../../domain/repositories/transaction.repository.interface';
export declare class DeleteTransactionUseCase {
    private readonly transactionRepository;
    constructor(transactionRepository: ITransactionRepository);
    execute(id: string): Promise<void>;
}
