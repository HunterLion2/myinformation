import { CreateAccountComponent } from './create-account/create-account.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "kayıt",
    component: CreateAccountComponent
  }
];

