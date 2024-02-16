import { Injectable } from '@angular/core';
import { ProductM } from 'src/app/models/product';
import { ShoppingCartItem } from 'src/app/models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  _localStorageProductsInCart = localStorage.getItem("products-in-cart") || "[]";
  _productsInCart: number[] = JSON.parse(this._localStorageProductsInCart);
  get productsInCart(): number[] {
    return this._productsInCart;
  }

  _localStorageCart = localStorage.getItem("shopping-cart") || "[]";
  _cart: ShoppingCartItem[]  = JSON.parse(this._localStorageCart);
  get cart(): ShoppingCartItem[] {
    return this._cart;
  }
  set cart(value: ShoppingCartItem[]) {
    this._cart = value;
  }

  _totalInCart: number = 0;
  get totalInCart(): number {
    return this._totalInCart;
  }
  set totalInCart(value: number) {
    this._totalInCart = value;
  }

  constructor() { }

  addProduct(productToAdd: ProductM, quantityToAdd: number): void {
    const item: ShoppingCartItem = {
      quantity: quantityToAdd,
      product: productToAdd
    };

    if(!this._productsInCart.includes(item.product.id)) {
      this._cart.push(item);
      this._productsInCart.push(item.product.id);
    }

    localStorage.setItem("products-in-cart", JSON.stringify(this._localStorageProductsInCart));
    localStorage.setItem("shopping-cart", JSON.stringify(this._cart));

  }

  clearCart(): void {
    this._cart = [];
    localStorage.setItem("shopping-cart", JSON.stringify(this._cart));

    this._productsInCart = [];
    localStorage.setItem("products-in-cart", JSON.stringify(this._productsInCart));
  }

  calculateTotalInCart(): number {
    let total = 0;
    this.cart.forEach((item) => total += item.quantity * item.product.price);
    this.totalInCart = total;
    return total;
  }

  addQuantity(id: number): ShoppingCartItem[] {
    this.cart = this.cart.map((item) => item.product.id === id ? {quantity: item.quantity + 1, product: item.product} : item)
    return this.cart;
  }

  removeQuantity(id: number): ShoppingCartItem[] {
    this.cart = this.cart.map((item) => {
      if(item.product.id === id) {
        return item.quantity > 0 ? {quantity: item.quantity - 1, product: item.product} : {quantity: item.quantity + 0, product: item.product};
      } else {
        return item;
      }
    })
    return this.cart;
  }
}
