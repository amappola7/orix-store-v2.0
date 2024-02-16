import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, take, of } from 'rxjs';
import { ProductM } from 'src/app/models/product';
import { ShoppingCartItemM, ShoppingCartM } from 'src/app/models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private _url: string = 'http://localhost:3000/shoppingCarts';

  constructor(
    private http: HttpClient
  ) { }

  getUserShoppingCart(userId: number): Observable<ShoppingCartM | null> {
    return this.http.get<ShoppingCartM>(`${this._url}?user_id=${userId}`).pipe(
      take(1),
      catchError((error) => {
        console.log('Error getting shopping cart', error);
        return of(null);
      })
    )
  }

  createUserShoppingCart(cartBody: ShoppingCartM): Observable<ShoppingCartM | null> {
    return this.http.post<ShoppingCartM>(this._url, cartBody).pipe(
      take(1),
      catchError((error) => {
        console.log('Error creating shopping cart', error);
        return of(null);
      })
    )
  }

  saveUserShoppingCart(cartId: number, cartBody: ShoppingCartM): Observable<ShoppingCartM | null> {
    return this.http.put<ShoppingCartM>(`${this._url}/${cartId}`, cartBody).pipe(
      take(1),
      catchError((error) => {
        console.log('Error updating shopping cart', error);
        return of(null);
      })
    )
  }

  clearShoppingCart(cartId: number): Observable<ShoppingCartM | boolean> {
    return this.http.delete<ShoppingCartM>(`${this._url}/${cartId}`).pipe(
      take(1),
      catchError((error) => {
        console.log('Error deleting shopping cart', error);
        return of(false);
      })
    )
  }
}
