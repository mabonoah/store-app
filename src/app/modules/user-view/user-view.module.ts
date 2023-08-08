import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserViewRoutingModule } from './user-view-routing.module';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { CategorizedProductsComponent, CategoriesComponent, ProductCardComponent } from './components';

const components = [UserViewComponent, CategorizedProductsComponent, CategoriesComponent, ProductCardComponent];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    SharedModule,
    UserViewRoutingModule
  ]
})
export class UserViewModule { }
