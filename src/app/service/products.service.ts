import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ProductsResponse } from '../products-create/products-create.model';

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

  getProducts(): Observable<ProductsResponse[]> {
    return this.http.get<ProductsResponse[]>(this.dataUrl + "urunler.json").pipe(
      map(data => {
        console.log(data)
        return data
      })
    )
  }

}
