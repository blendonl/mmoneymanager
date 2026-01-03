import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class InviteMemberRequestDto {
  @IsEmail()
  @IsNotEmpty()
  inviteeEmail: string;
}
