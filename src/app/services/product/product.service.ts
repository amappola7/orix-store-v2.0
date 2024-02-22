import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, take, tap } from 'rxjs';
import { ProductM, RawProductM } from 'src/app/models/product';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url: string = 'http://localhost:3000/products';
  productToEdit!: ProductM;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getProducts(): Observable<ProductM[]> {
    return this.http.get<ProductM[]>(this._url).pipe(
      take(1),
      catchError((error) => {
        console.log('Error getting products', error);
        return of([]);
      })
    )
  }

  getProductById(id: number): Observable<ProductM | null> {
    if (this.authService.userIsAuthenticated() && (this.authService.getUserRole() === 'admin' || this.authService.getUserRole() === 'user')) {
      return this.http.get<ProductM>(`${this._url}/${id}`).pipe(
        take(1),
        catchError((error) => {
          alert('Product not found');
          const voidProduct: ProductM = {
            id: 0,
            name: '',
            description: '',
            price: 0,
            image: '',
            category: ''
          };
          console.log('Error getting product', error);
          return of(voidProduct);
        })
      )
    } else {
      alert('You don\'t have access to see product details, please log in');
      return of(null);
    }
  }


  createProduct(productData: RawProductM): Observable<ProductM | null> {
    if (this.authService.userIsAuthenticated() && this.authService.getUserRole() === 'admin') {
      return this.http.post<ProductM>(this._url, productData).pipe(
        take(1),
        tap(() => console.log('Product successfully created')),
        catchError((error) => {
          console.log('Error creating product', error);
          return of(null);
        })
      )
    } else {
      alert('You don\'t have access to create a product');
      return of(null);
    }
  }

  editProduct(productData: RawProductM): Observable<ProductM | null> {
    if (this.authService.userIsAuthenticated() && this.authService.getUserRole() === 'admin') {
      return this.http.put<ProductM>(this._url, productData).pipe(
        take(1),
        tap(() => console.log('Product successfully edited')),
        catchError((error) => {
          console.log('Error editing product', error);
          return of(null);
        })
      )
    } else {
      alert('You don\'t have access to edit a product');
      return of(null);
    }
  }

  deleteProduct(productId: number): Observable<ProductM | null> {
    if (this.authService.userIsAuthenticated() && this.authService.getUserRole() === 'admin') {
      return this.http.delete<ProductM>(`${this._url}/${productId}`).pipe(
        take(1),
        tap(() => console.log('Product successfully deleted')),
        catchError((error) => {
          console.log('Error deleting product', error);
          return of(null);
        })
      )
    } else {
      alert('You don\'t have access to delete a product');
      return of(null);
    }
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`http://localhost:3000/categories`)
      .pipe(
        take(1),
        tap(() => console.log('Petition get categories successful')),
        catchError((error) => {
          console.log(`Error in the get categories petition`);
          return of(error);
        })
      )
  }

  fillForm(productData: ProductM): void {
    this.productToEdit =  productData;
  }
}
