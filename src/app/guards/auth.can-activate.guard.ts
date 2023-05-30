import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService, ErrorService } from '../services';

export const authCanActivateGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const errorService = inject(ErrorService);

  if (authService.isAuthorized$.value) {
    return true;
  }

  errorService.errorMessage = 'You must be authorized to view this page!';
  return router.navigate(['error']);
};
