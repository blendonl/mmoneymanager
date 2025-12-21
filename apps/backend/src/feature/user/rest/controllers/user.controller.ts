import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '../../core/application/services/user.service';
import { UserResponseDto } from '../dto/user-response.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findById(id);
    return UserResponseDto.fromEntity(user);
  }
}
