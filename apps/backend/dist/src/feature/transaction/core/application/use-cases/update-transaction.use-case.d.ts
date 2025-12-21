import { type ITransactionRepository } from '../../domain/repositories/transaction.repository.interface';
import { UpdateTransactionDto } from '../dto/update-transaction.dto';
import { Transaction } from '../../domain/entities/transaction.entity';
export declare class UpdateTransactionUseCase {
    private readonly transactionRepository;
    constructor(transactionRepository: ITransactionRepository);
    execute(id: string, dto: UpdateTransactionDto): Promise<Transaction>;
    private validateUpdateData;
}
