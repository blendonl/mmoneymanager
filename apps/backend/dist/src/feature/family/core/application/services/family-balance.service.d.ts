import { IFamilyRepository } from '../../domain/repositories/family.repository.interface';
import { Transaction } from '../../../../transaction/core/domain/entities/transaction.entity';
export declare class FamilyBalanceService {
    private readonly familyRepository;
    constructor(familyRepository: IFamilyRepository);
    updateBalancesAfterTransaction(familyId: string, userId: string, transaction: Transaction): Promise<void>;
    recalculateBalances(familyId: string): Promise<void>;
}
