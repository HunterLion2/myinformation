import { Component } from '@angular/core';
import { CategoryListComponent } from "../category-list/category-list.component";
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { ProductsResponse } from '../products-create/products-create.model';

@Component({
  selector: 'app-products',
  imports: [CategoryListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductsService]
})
export class ProductsComponent {

  products: ProductsResponse[] = []
  loading: boolean = false;

  constructor(
    private productService: ProductsService,
    private routes: ActivatedRoute
  ) {

      this.loading = true

      this.productService.getProducts().subscribe(data => {
        this.products = data
        this.loading = false
      })
  }



}
