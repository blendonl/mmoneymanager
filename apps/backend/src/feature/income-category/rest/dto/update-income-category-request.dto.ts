import { IsString, IsOptional, IsUUID } from 'class-validator';

export class UpdateIncomeCategoryRequestDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsUUID()
  @IsOptional()
  parentId?: string | null;
}
