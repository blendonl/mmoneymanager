import { type ITransactionRepository } from '../../domain/repositories/transaction.repository.interface';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { Transaction } from '../../domain/entities/transaction.entity';
import { IFamilyRepository } from '../../../../family/core/domain/repositories/family.repository.interface';
import { FamilyBalanceService } from '../../../../family/core/application/services/family-balance.service';
export declare class CreateTransactionUseCase {
    private readonly transactionRepository;
    private readonly familyRepository;
    private readonly familyBalanceService;
    constructor(transactionRepository: ITransactionRepository, familyRepository: IFamilyRepository, familyBalanceService: FamilyBalanceService);
    execute(dto: CreateTransactionDto): Promise<Transaction>;
    private validateTransactionData;
}
