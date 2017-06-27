import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Product } from '../models/product';


@Injectable()
export class ProductService {

  private baseURL:string = 'http://localhost:3000/api/products'

  constructor (
    private http: Http
  ) {}

//get all products
  getProducts(): Observable<any> {
    return this.http.get(this.baseURL)
                    .map((res:Response) => res.json());
  }

  //get product by id
  getProduct(id):  Observable<any> {
    return this.http.get(this.baseURL+id).map((res:Response) => res.json());
  }

}
