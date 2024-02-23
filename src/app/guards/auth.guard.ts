import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { AlertsService } from '../services/alerts/alerts.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  const alertsService: AlertsService = inject(AlertsService);

  if (!authService.userIsAuthenticated()) {
    alertsService.showSimpleAlert('You don\'t have access to this page, please log in', 'Done');
    return router.createUrlTree(['auth/login']);
  } else if (authService.getUserRole() === 'admin') {
    return true;
  } else if (authService.getUserRole() === 'user') {
    alertsService.showSimpleAlert('You don\'t have access to this page', 'Done');
    return router.createUrlTree(['home']);
  } else {
    alertsService.showSimpleAlert('You don\'t have access to this page, please log in', 'Done');
    return router.createUrlTree(['auth/login']);
  }
};
