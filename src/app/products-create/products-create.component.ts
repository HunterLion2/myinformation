import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductsService } from '../service/products.service';
import { Observable } from 'rxjs';
import { ProductsResponse } from './products-create.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-create',
  imports: [FormsModule],
  templateUrl: './products-create.component.html',
  styleUrl: './products-create.component.css',
  providers: [ProductsService]
})
export class ProductsCreateComponent {

  imageSrc: string | ArrayBuffer | null = null;
  selectedFile: string | File | null = null;
  error: string = "";

  constructor(
    private productService: ProductsService,
    private router: Router
  ) { }

  imageadd(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = e.target?.result as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }


  getProduct(Form: NgForm) {
    if (!Form.valid) {
      return
    }

    const product: ProductsResponse = {
      image: this.selectedFile ? (typeof this.selectedFile === 'string' ? this.selectedFile : '') : '',
      name: Form.value.name,
      description: Form.value.description,
      sellername: Form.value.sellername
    }

    this.productService.setProducts(product).subscribe(data => {
      this.router.navigate(['/main'])
      console.log(data)
    });

  }

}
