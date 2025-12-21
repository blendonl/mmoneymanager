import { Request } from 'express';
import { AuthService } from '../../core/application/services/auth.service';
import { RegisterRequestDto } from '../dto/register-request.dto';
import { LoginRequestDto } from '../dto/login-request.dto';
import { User } from '../../../user/core/domain/entities/user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterRequestDto): Promise<import("../../core/application/dto/auth-result.dto").AuthResultDto>;
    login(dto: LoginRequestDto): Promise<import("../../core/application/dto/auth-result.dto").AuthResultDto>;
    logout(req: Request): Promise<void>;
    me(user: User): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
    }>;
}
