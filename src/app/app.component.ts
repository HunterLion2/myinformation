import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryListComponent } from './category-list/category-list.component';

@Component({
  selector: 'app-ana',
  imports: [RouterOutlet, NavbarComponent, CategoryListComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myinformation';
}
