export class ExpenseFilters {
  userId?: string;
  categoryId?: string;
  storeId?: string;
  dateFrom?: Date;
  dateTo?: Date;
  valueMin?: number;
  valueMax?: number;

  constructor(data: {
    userId?: string;
    categoryId?: string;
    storeId?: string;
    dateFrom?: Date;
    dateTo?: Date;
    valueMin?: number;
    valueMax?: number;
  }) {
    this.userId = data.userId;
    this.categoryId = data.categoryId;
    this.storeId = data.storeId;
    this.dateFrom = data.dateFrom;
    this.dateTo = data.dateTo;
    this.valueMin = data.valueMin;
    this.valueMax = data.valueMax;
  }
}
