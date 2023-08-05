import { SnackBarService } from './../../shared/services/snack-bar.service';
import { Injectable } from '@angular/core';
import { User } from 'src/app/modules/account/types/user.type';
import { Role } from './role.enum';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private snackBar: SnackBarService, private router: Router) { }

  login(user: User): void {
    if (user.username === Role.admin && user.password === Role.admin) {
      this.setToken();
      this.onAdminLogin();
    }
    else if (user.username === Role.user && user.password === Role.user) {
      this.setToken();
      this.onUserLogin();
    }
    else this.onInvalidCredentials();
  }

  private setToken(): void {
    const fakeToken: string = "eyJhbGciOiJIUzI1NiIsInR";
    localStorage.setItem('token', fakeToken);
  }

  private onAdminLogin(): void {
    this.setRole(Role.admin);
    this.router.navigate(['/products']);
  }

  private onUserLogin(): void {
    this.setRole(Role.user);
    this.router.navigate(['/categorized-products']);
  }

  private onInvalidCredentials(): void {
    this.snackBar.openFailureSnackBar('Invalid credentials', 'Login');
  }

  private setRole(role: Role): void {
    localStorage.setItem('role', role);
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  isLoggedIn(): boolean {
    return !!this.getAuthorizationToken();
  }

  getAuthorizationToken(): string {
    return localStorage.getItem('token') || '';
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

}
