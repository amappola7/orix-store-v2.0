import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

export const detailsPageGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if (authService.userIsAuthenticated()) {
    return true;
  } else {
    alert('You dont\' have access to see product details, please log in');
    return router.createUrlTree(['auth/login']);
  }
};
