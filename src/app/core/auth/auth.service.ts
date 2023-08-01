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
    if (user.username === Role.admin && user.password === Role.admin) this.onAdminLogin();
    else if (user.username === Role.user && user.password === Role.user) this.onUserLogin();
    else this.onInvalidCredentials();
  }

  private onAdminLogin() {
    this.setRole(Role.admin);
    this.router.navigate(['/products']);
  }

  private onUserLogin() {
    this.setRole(Role.user);
    this.router.navigate(['/categorized-products']);
  }

  private onInvalidCredentials() {
    this.snackBar.openFailureSnackBar('Invalid credentials', 'Login');
  }

  private setRole(role: Role) {
    localStorage.setItem('role', role);
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('role');
  }

  logout(): void {
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

}
