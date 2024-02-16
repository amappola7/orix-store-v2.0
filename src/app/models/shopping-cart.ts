import { ProductM } from "./product";

export interface ShoppingCartItemM {
  quantity: number,
  product: ProductM
}

export interface ShoppingCartM {
  id: number;
  user_id: number,
  user_email: string,
  items: ShoppingCartItemM[],
}
