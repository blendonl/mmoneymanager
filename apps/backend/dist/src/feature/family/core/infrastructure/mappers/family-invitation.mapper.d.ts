import { FamilyInvitation } from '../../domain/entities/family-invitation.entity';
import { FamilyInvitation as PrismaFamilyInvitation } from 'prisma/generated/prisma/client';
export declare class FamilyInvitationMapper {
    static toDomain(prismaInvitation: PrismaFamilyInvitation): FamilyInvitation;
    static toPrisma(invitation: FamilyInvitation): any;
    private static mapStatusToDomain;
    private static mapStatusToPrisma;
}
