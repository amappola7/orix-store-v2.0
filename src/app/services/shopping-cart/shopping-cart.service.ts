import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, take, of } from 'rxjs';
import { ProductM } from 'src/app/models/product';
import { ShoppingCartItemM, ShoppingCartM } from 'src/app/models/shopping-cart';

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
  _cart: ShoppingCartItemM[]  = JSON.parse(this._localStorageCart);
  get cart(): ShoppingCartItemM[] {
    return this._cart;
  }
  set cart(value: ShoppingCartItemM[]) {
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
    const item: ShoppingCartItemM = {
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

  addQuantity(id: number): ShoppingCartItemM[] {
    this.cart = this.cart.map((item) => item.product.id === id ? {quantity: item.quantity + 1, product: item.product} : item)
    return this.cart;
  }

  removeQuantity(id: number): ShoppingCartItemM[] {
    this.cart = this.cart.map((item) => {
      if(item.product.id === id) {
        return item.quantity > 0 ? {quantity: item.quantity - 1, product: item.product} : {quantity: item.quantity + 0, product: item.product};
      } else {
        return item;
      }
    })
    return this.cart;
  }

  // Implementation with API
  // private _url: string = 'http://localhost:3000/shoppingCarts';

  // constructor(
  //   private http: HttpClient
  // ) { }

  // getUserShoppingCart(userId: number): Observable<ShoppingCartM | null> {
  //   return this.http.get<ShoppingCartM>(`${this._url}?user_id=${userId}`).pipe(
  //     take(1),
  //     catchError((error) => {
  //       console.log('Error getting shopping cart', error);
  //       return of(null);
  //     })
  //   )
  // }

  // createUserShoppingCart(cartBody: ShoppingCartM): Observable<ShoppingCartM | null> {
  //   return this.http.post<ShoppingCartM>(this._url, cartBody).pipe(
  //     take(1),
  //     catchError((error) => {
  //       console.log('Error creating shopping cart', error);
  //       return of(null);
  //     })
  //   )
  // }

  // saveUserShoppingCart(cartId: number, cartBody: ShoppingCartM): Observable<ShoppingCartM | null> {
  //   return this.http.put<ShoppingCartM>(`${this._url}/${cartId}`, cartBody).pipe(
  //     take(1),
  //     catchError((error) => {
  //       console.log('Error updating shopping cart', error);
  //       return of(null);
  //     })
  //   )
  // }

  // clearShoppingCart(cartId: number): Observable<ShoppingCartM | boolean> {
  //   return this.http.delete<ShoppingCartM>(`${this._url}/${cartId}`).pipe(
  //     take(1),
  //     catchError((error) => {
  //       console.log('Error deleting shopping cart', error);
  //       return of(false);
  //     })
  //   )
  // }
}
