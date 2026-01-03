import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateFamilyRequestDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;
}
