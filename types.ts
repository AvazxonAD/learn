export interface CreateProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}

export interface UpdateProduct {
  id: number;
  price: number;
}
