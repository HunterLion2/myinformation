import { Component } from '@angular/core';
import { CategoryListComponent } from "../category-list/category-list.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CategoryListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(
    private routes: Router
  ) {}

}
