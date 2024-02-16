import { Injectable } from '@angular/core';
import { Observable, catchError, map, take, tap, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserM } from 'src/app/models/user';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _url: string = 'http://localhost:3000/login';
  private _userRole: string = 'user';
  get userRole(): string {
    return this._userRole;
  }

  constructor(
    private userService: UserService,
    private http: HttpClient
  ) { }

  userIsAuthenticated(): boolean {
    return this.getAccessToken() ? true : false;
  }

  logIn(userData: UserM): Observable<boolean> {
    // Fake Version
    return this.userService.getUsers().pipe(
      map((usersList) => usersList.find((user) => (userData.username === user.username && userData.password === user.password))),
      tap((user) => { if (user) this.setAccessToken(user) }),
      map((user) => user ? true : false),
      take(1)
    );

    // Real Version - Not working
    // const loginData = {username: userData.username, password: userData.password};
    // return this.http.post(this._url, loginData).pipe(
    //   tap((response) => console.log('Log in result', response)),
    //   catchError((error) => {
    //     console.log('Error logging in', error);
    //     return of(null);
    //   })
    // );
  }

  logout(): void {
    sessionStorage.removeItem('OX_access_token');
  }

  getUserRole(): string {
    const userRole = this.getUserInfo().role;
    return userRole;
  }

  private generateAccessToken(userInfo: UserM): string {
    return btoa(JSON.stringify(userInfo));
  }

  private setAccessToken(userInfo: UserM): void {
    const token: string = this.generateAccessToken(userInfo);
    sessionStorage.setItem('OX_access_token', token);
  }

  private getAccessToken(): string | null {
    return sessionStorage.getItem('OX_access_token');
  }

  private getUserInfo(): UserM {
    const token = this.getAccessToken();
    return token ? JSON.parse(atob(token)) : null;
  }
}
