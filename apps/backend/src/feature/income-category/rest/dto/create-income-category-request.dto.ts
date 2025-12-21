import { IsString, IsNotEmpty, IsUUID, IsOptional } from 'class-validator';

export class CreateIncomeCategoryRequestDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsUUID()
  @IsOptional()
  parentId?: string;
}
