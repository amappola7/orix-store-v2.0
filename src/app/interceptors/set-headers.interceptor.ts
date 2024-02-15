import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class SetHeadersInterceptor implements HttpInterceptor {
  private token = sessionStorage.getItem('AS_access_token');

  constructor(
    private authService: AuthService,
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authService.userIsAuthenticated()) {
      const headers: HttpHeaders = new HttpHeaders({
        'content-type': 'application/json',
        'authorization': `Bearer ${this.token}`
      });
      const newRequest = request.clone({
        headers: headers
      })
      return next.handle(newRequest);
    } else {
      return next.handle(request);
    }
  }
}
