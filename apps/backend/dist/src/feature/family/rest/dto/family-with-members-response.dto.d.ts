import { Family } from '../../core/domain/entities/family.entity';
import { FamilyMember, FamilyMemberRole } from '../../core/domain/entities/family-member.entity';
import { User } from '../../../user/core/domain/entities/user.entity';
import { FamilyResponseDto } from './family-response.dto';
export declare class FamilyMemberUserDto {
    id: string;
    userId: string;
    role: FamilyMemberRole;
    balance: number;
    joinedAt: Date;
    user: {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
    };
    static fromMemberAndUser(member: FamilyMember, user: User): FamilyMemberUserDto;
}
export declare class FamilyWithMembersResponseDto extends FamilyResponseDto {
    members: FamilyMemberUserDto[];
    static fromFamilyAndMembers(family: Family, membersWithUsers: Array<{
        member: FamilyMember;
        user: User;
    }>): FamilyWithMembersResponseDto;
}
