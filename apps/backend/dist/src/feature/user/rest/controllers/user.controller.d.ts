import { UserService } from '../../core/application/services/user.service';
import { UserResponseDto } from '../dto/user-response.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findOne(id: string): Promise<UserResponseDto>;
}
