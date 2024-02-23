import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, take, map, of } from 'rxjs';
import { UserM } from 'src/app/models/user';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _urlLocalApi: string = 'http://localhost:3000/users';
  private _urlExternalApi: string = 'https://fakestoreapi.com/users/';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get users list from the local API
   * @returns An observable with the list of users
   */
  getUsers(): Observable<UserM[]> {
    return this.http.get<UserM[]>(this._urlLocalApi).pipe(take(1));
  }

  /**
   * Get users list from the external API
   * @returns An observable with the list of users
   */
  getExternalUsers(): Observable<UserM[]> {
    return this.http.get<UserM[]>(this._urlExternalApi).pipe(take(1));
  }

  /**
   * Create a new user in the API
   * @param userData An object of type User with all the user information to be stored in the API
   * @returns If the request is correct, it won't return nothing but a message in the console with the result. If there is an error, it will return null and an error message in the console
   */
  createUser(userData: UserM): Observable<UserM | null> {
    return this.http.post<UserM>(this._urlLocalApi, userData)
    .pipe(
      tap((result) => {
        console.log('User successfully created');
      }),
      catchError((error) => {
        console.log('Error creating user', error);
        return of(null);
      })
    )
  }

  /**
   * Check if the entered email is unique or not compared to all users emails
   * @param email The email entered by the user
   * @returns true if the email is unique, false otherwise. If there is an error, it will return null and an error message in the console
   */
  isEmailUnique(email: string): Observable<boolean | null> {
    return this.getUsers()
      .pipe(
        map((users) => users.every((user) => user.email !== email)),
        catchError((error) => {
          console.log('Error while trying to validate if email is unique:', error);
          return of(null);
        })
      );
  }
}
