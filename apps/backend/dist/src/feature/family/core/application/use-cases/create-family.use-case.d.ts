import { IFamilyRepository } from '../../domain/repositories/family.repository.interface';
import { CreateFamilyDto } from '../dto/create-family.dto';
import { Family } from '../../domain/entities/family.entity';
export declare class CreateFamilyUseCase {
    private readonly familyRepository;
    constructor(familyRepository: IFamilyRepository);
    execute(dto: CreateFamilyDto, ownerId: string): Promise<Family>;
}
