import { PrismaService } from '../../../../../common/prisma/prisma.service';
import { IFamilyRepository, FamilyWithMembersAndUsers } from '../../domain/repositories/family.repository.interface';
import { Family } from '../../domain/entities/family.entity';
import { FamilyMember, FamilyMemberRole } from '../../domain/entities/family-member.entity';
export declare class PrismaFamilyRepository implements IFamilyRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Partial<Family>): Promise<Family>;
    findById(id: string): Promise<Family | null>;
    findByIdWithMembers(id: string): Promise<FamilyWithMembersAndUsers | null>;
    findByUserId(userId: string): Promise<Family[]>;
    update(id: string, data: Partial<Family>): Promise<Family>;
    delete(id: string): Promise<void>;
    addMember(member: Partial<FamilyMember>): Promise<FamilyMember>;
    removeMember(familyId: string, userId: string): Promise<void>;
    findMember(familyId: string, userId: string): Promise<FamilyMember | null>;
    findMembers(familyId: string): Promise<FamilyMember[]>;
    updateMemberRole(familyId: string, userId: string, role: FamilyMemberRole): Promise<FamilyMember>;
    updateMemberBalance(familyId: string, userId: string, balance: number): Promise<void>;
    updateFamilyBalance(familyId: string, balance: number): Promise<void>;
    calculateFamilyBalance(familyId: string): Promise<number>;
}
