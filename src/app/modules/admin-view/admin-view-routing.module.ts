import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './pages';
import { ProductFormComponent, ProductsListComponent } from './components';

const routes: Routes = [
  { path: '', redirectTo: '/products/list', pathMatch: 'full' },
  {
    path: '', component: AdminViewComponent ,
    children: [
      {
        path: 'list', component: ProductsListComponent,
      },
      {
        path: 'add',
        component: ProductFormComponent
      },
      {
        path: 'edit/:id',
        component: ProductFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminViewRoutingModule { }
