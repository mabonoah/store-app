import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { ProductsListComponent } from './components';
import { AdminViewRoutingModule } from './admin-view-routing.module';
import { AdminViewComponent } from './pages/admin-view/admin-view.component';

const components = [ProductsListComponent];

@NgModule({
  declarations: [
    ...components,
    AdminViewComponent
  ],
  imports: [
    SharedModule,
    AdminViewRoutingModule
  ]
})
export class AdminViewModule { }
