import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { CategorizedProductsComponent } from './components';
import { UserViewRoutingModule } from './user-view-routing.module';

const components = [CategorizedProductsComponent];

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
