import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AccountRoutingModule } from './account.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
