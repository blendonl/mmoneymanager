import { PrismaService } from '../../../../../common/prisma/prisma.service';
import { IFamilyInvitationRepository } from '../../domain/repositories/family-invitation.repository.interface';
import { FamilyInvitation } from '../../domain/entities/family-invitation.entity';
export declare class PrismaFamilyInvitationRepository implements IFamilyInvitationRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Partial<FamilyInvitation>): Promise<FamilyInvitation>;
    findById(id: string): Promise<FamilyInvitation | null>;
    findByFamilyId(familyId: string): Promise<FamilyInvitation[]>;
    findByInviteeEmail(email: string): Promise<FamilyInvitation[]>;
    findByInviteeId(userId: string): Promise<FamilyInvitation[]>;
    update(id: string, data: Partial<FamilyInvitation>): Promise<FamilyInvitation>;
    delete(id: string): Promise<void>;
}
