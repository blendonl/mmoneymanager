export class CreateIncomeCategoryDto {
  name: string;
  parentId?: string | null;

  constructor(name: string, parentId?: string | null) {
    this.name = name;
    this.parentId = parentId;
  }
}
