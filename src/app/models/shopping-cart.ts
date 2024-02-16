import { ProductM } from "./product";

export interface ShoppingCartItem {
  quantity: number,
  product: ProductM
}

export interface ShoppingCart {
  id: number;
  userId: number,
  userEmail: string,
  items: ShoppingCartItem[],
}
