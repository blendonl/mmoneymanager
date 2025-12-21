export interface Category {
  id: string;
  name: string;
  isConnectedToStore: boolean;
}

export interface Store {
  id: string;
  name: string;
  location: string;
}

export interface ExpenseItem {
  name: string;
  price: number;
  discount: number;
  categoryId: string;
}

export interface CurrentItem {
  name: string;
  price: string;
  discount: string;
  categoryId: string;
}
