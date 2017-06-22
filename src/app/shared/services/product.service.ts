import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Product } from '../models/product';


@Injectable()
export class ProductService {

  constructor (
    private http: Http
  ) {}

//get all products
  getProducts() {
    return this.http.get('http://localhost:3000/api/products').map((res:Response) => res.json());
  }

  //get product by id
  getProduct(id) {
    return this.http.get('http://localhost:3000/api/products/'+id).map((res:Response) => res.json());
  }

}
