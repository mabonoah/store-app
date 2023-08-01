import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { ProductsListComponent } from './components';
import { AdminViewRoutingModule } from './admin-view-routing.module';

const components = [ProductsListComponent];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    SharedModule,
    AdminViewRoutingModule
  ]
})
export class AdminViewModule { }
