import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminViewRoutingModule } from './admin-view-routing.module';
import { AdminViewComponent } from './pages';
import { ProductsListComponent ,ProductFormComponent} from './components';

const components = [
  AdminViewComponent,
  ProductsListComponent,
  ProductFormComponent
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    SharedModule,
    AdminViewRoutingModule
  ]
})
export class AdminViewModule { }
