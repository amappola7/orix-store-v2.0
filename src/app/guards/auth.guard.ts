import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if (!authService.userIsAuthenticated()) {
    return router.createUrlTree(['auth/login']);
  } else if (authService.getUserRole() === 'admin') {
    return true;
  } else if (authService.getUserRole() === 'user') {
    alert('You don\'t have access to this page');
    return router.createUrlTree(['home']);
  } else {
    return router.createUrlTree(['auth/login']);
  }
};
