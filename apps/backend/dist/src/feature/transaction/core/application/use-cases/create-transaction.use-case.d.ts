import { type ITransactionRepository } from '../../domain/repositories/transaction.repository.interface';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { Transaction } from '../../domain/entities/transaction.entity';
export declare class CreateTransactionUseCase {
    private readonly transactionRepository;
    constructor(transactionRepository: ITransactionRepository);
    execute(dto: CreateTransactionDto): Promise<Transaction>;
    private validateTransactionData;
}
