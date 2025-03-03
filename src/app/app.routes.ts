import { CategoryListComponent } from './category-list/category-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { guardGuard } from './guard.guard';

export const routes: Routes = [
  {
    path: "",
    component: LoginComponent
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
    loadComponent: () => import('./navbar/navbar.component').then(m => m.NavbarComponent),
    children: [
      {
        path: "Kullanıcı-Ayarları",
        loadComponent: () => import('./user-setting/user-setting.component').then(m => m.UserSettingComponent)
      },
      {
        path: "Ürün-Ekleme",
        canActivate: [guardGuard],
        loadComponent: () => import('./products-create/products-create.component').then(m => m.ProductsCreateComponent)
      },
      {
        path: "Açıklama",
        loadComponent: () => import('./description/description.component').then(m => m.DescriptionComponent)
      },
      {
        path: "Ürünler",
        loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent)
      }
    ]
  }
];

