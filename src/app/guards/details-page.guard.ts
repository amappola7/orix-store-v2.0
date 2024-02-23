import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { AlertsService } from '../services/alerts/alerts.service';

export const detailsPageGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  const alertsService: AlertsService = inject(AlertsService);

  if (authService.userIsAuthenticated()) {
    return true;
  } else {
    alertsService.showSimpleAlert('You dont\' have access to see product details, please log in', 'Done');
    return router.createUrlTree(['auth/login']);
  }
};
