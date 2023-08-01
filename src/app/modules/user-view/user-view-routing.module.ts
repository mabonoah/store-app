import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorizedProductsComponent } from './components';

const routes: Routes = [
  {
    path: "",
    component: CategorizedProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserViewRoutingModule { }
