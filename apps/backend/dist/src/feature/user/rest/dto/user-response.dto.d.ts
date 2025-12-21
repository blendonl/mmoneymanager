import { User } from '../../core/domain/entities/user.entity';
export declare class UserResponseDto {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    balance: string;
    emailVerified: boolean;
    createdAt: string;
    updatedAt: string;
    static fromEntity(user: User): UserResponseDto;
}
