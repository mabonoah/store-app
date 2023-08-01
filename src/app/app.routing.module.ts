import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { authGuard } from './core/auth/auth.guard';
import { Role } from './core/auth/role.enum';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'products',
    canActivate: [authGuard],
    data: { role: Role.admin },
    loadChildren: () => import('./modules/admin-view/admin-view.module').then(m => m.AdminViewModule)
  },
  {
    path: 'categorized-products',
    canActivate: [authGuard],
    data: { role: Role.user },
    loadChildren: () => import('./modules/user-view/user-view.module').then(m => m.UserViewModule)
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
