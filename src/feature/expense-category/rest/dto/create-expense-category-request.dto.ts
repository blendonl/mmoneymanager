import { IsString, IsNotEmpty, IsUUID, IsOptional } from 'class-validator';

export class CreateExpenseCategoryRequestDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsUUID()
  @IsOptional()
  parentId?: string;
}
