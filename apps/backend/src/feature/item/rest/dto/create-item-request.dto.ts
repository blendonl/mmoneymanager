import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateItemRequestDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsUUID()
  @IsNotEmpty()
  categoryId!: string;
}
