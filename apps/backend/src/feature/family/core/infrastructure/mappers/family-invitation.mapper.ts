import {
  FamilyInvitation,
  FamilyInvitationStatus,
} from '../../domain/entities/family-invitation.entity';
import {
  FamilyInvitation as PrismaFamilyInvitation,
  FamilyInvitationStatus as PrismaFamilyInvitationStatus,
} from 'prisma/generated/prisma/client';

export class FamilyInvitationMapper {
  static toDomain(
    prismaInvitation: PrismaFamilyInvitation,
  ): FamilyInvitation {
    return new FamilyInvitation({
      id: prismaInvitation.id,
      familyId: prismaInvitation.familyId,
      inviterId: prismaInvitation.inviterId,
      inviteeId: prismaInvitation.inviteeId ?? undefined,
      inviteeEmail: prismaInvitation.inviteeEmail,
      status: this.mapStatusToDomain(prismaInvitation.status),
      expiresAt: prismaInvitation.expiresAt,
      createdAt: prismaInvitation.createdAt,
      updatedAt: prismaInvitation.updatedAt,
    });
  }

  static toPrisma(invitation: FamilyInvitation): any {
    return {
      id: invitation.id,
      familyId: invitation.familyId,
      inviterId: invitation.inviterId,
      inviteeId: invitation.inviteeId ?? null,
      inviteeEmail: invitation.inviteeEmail,
      status: this.mapStatusToPrisma(invitation.status),
      expiresAt: invitation.expiresAt,
    };
  }

  private static mapStatusToDomain(
    prismaStatus: PrismaFamilyInvitationStatus,
  ): FamilyInvitationStatus {
    const statusMap: Record<
      PrismaFamilyInvitationStatus,
      FamilyInvitationStatus
    > = {
      PENDING: FamilyInvitationStatus.PENDING,
      ACCEPTED: FamilyInvitationStatus.ACCEPTED,
      REJECTED: FamilyInvitationStatus.REJECTED,
      CANCELLED: FamilyInvitationStatus.CANCELLED,
    };
    return statusMap[prismaStatus];
  }

  private static mapStatusToPrisma(
    status: FamilyInvitationStatus,
  ): PrismaFamilyInvitationStatus {
    const statusMap: Record<
      FamilyInvitationStatus,
      PrismaFamilyInvitationStatus
    > = {
      [FamilyInvitationStatus.PENDING]: 'PENDING',
      [FamilyInvitationStatus.ACCEPTED]: 'ACCEPTED',
      [FamilyInvitationStatus.REJECTED]: 'REJECTED',
      [FamilyInvitationStatus.CANCELLED]: 'CANCELLED',
    };
    return statusMap[status];
  }
}
