export class UpdateExpenseItemCategoryDto {
  name?: string;
  parentId?: string | null;

  constructor(data: { name?: string; parentId?: string | null }) {
    this.name = data.name;
    this.parentId = data.parentId;
  }
}
