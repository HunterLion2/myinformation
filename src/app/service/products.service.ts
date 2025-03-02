import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductsResponse } from '../products-create/products-create.module';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private dataUrl = environment.data_url;

  constructor(
    private http: HttpClient
  ) {}

  setProducts(product: ProductsResponse): Observable<ProductsResponse> {
    return this.http.post<ProductsResponse>(this.dataUrl + "urunler.json", product).pipe(
      map( data => {
        console.log(data)
        return data;
      })
    );
  }
}
