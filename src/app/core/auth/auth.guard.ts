import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { Role } from './role.enum';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if (route.data && route.data['role'] === authService.getRole()) return true;

  if (state.url === '/login' && !authService.isLoggedIn()) return true;

  if (!authService.isLoggedIn()) router.navigate(['/login']);
  else (authService.getRole() === Role.admin) ? router.navigate(['/products']) : router.navigate(['/categorized-products']);
  return false;
};
