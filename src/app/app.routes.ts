import { CreateAccountComponent } from './create-account/create-account.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "kayıt",
    component: CreateAccountComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "main",
    component: AppComponent
  }
];

