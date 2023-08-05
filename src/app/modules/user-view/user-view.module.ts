import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { CategorizedProductsComponent } from './components';
import { UserViewRoutingModule } from './user-view-routing.module';
import { UserViewComponent } from './pages/user-view/user-view.component';

const components = [CategorizedProductsComponent];

@NgModule({
  declarations: [
    ...components,
    UserViewComponent
  ],
  imports: [
    SharedModule,
    UserViewRoutingModule
  ]
})
export class UserViewModule { }
