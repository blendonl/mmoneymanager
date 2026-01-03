import { IFamilyRepository } from '../../domain/repositories/family.repository.interface';
import { Family } from '../../domain/entities/family.entity';
export declare class GetFamiliesUseCase {
    private readonly familyRepository;
    constructor(familyRepository: IFamilyRepository);
    execute(userId: string): Promise<Family[]>;
}
