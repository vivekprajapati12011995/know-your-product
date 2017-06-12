import { Injectable } from '@angular/core';
import { Product } from '../models/product';

const productsPromise: Promise<Product[]> = Promise.resolve([
    {
      id:1,
      p_name:"product1",
      p_quanty: 10,
      price: 100,
      image:"assets/images/1.jpg"
    },
    {
      id:2,
      p_name:"product2",
      p_quanty: 10,
      price: 100,
      image:"assets/images/2.jpg"
    },
    {
      id:3,
      p_name:"product3",
      p_quanty: 10,
      price: 100,
      image:"assets/images/3.jpg"
    },
    {
      id:4,
      p_name:"product4",
      p_quanty: 10,
      price: 100,
      image:"assets/images/4.jpg"
    },
    {
      id:5,
      p_name:"product5",
      p_quanty: 10,
      price: 100,
      image:"assets/images/5.jpg"
    },
    {
      id:6,
      p_name:"product1",
      p_quanty: 10,
      price: 100,
      image:"assets/images/6.jpg"
    },
    {
      id:7,
      p_name:"product1",
      p_quanty: 10,
      price: 100,
      image:"assets/images/7.jpg"
    },
    {
      id:8,
      p_name:"product1",
      p_quanty: 10,
      price: 100,
      image:"assets/images/8.jpg"
    },
    {
      id:9,
      p_name:"product1",
      p_quanty: 10,
      price: 100,
      image:"assets/images/9.jpg"
    },
    {
      id:10,
      p_name:"product1",
      p_quanty: 10,
      price: 100,
      image:"assets/images/10.jpg"
    },
    {
      id:11,
      p_name:"product1",
      p_quanty: 10,
      price: 100,
      image:"assets/images/11.jpg"
    },
    {
      id:12,
      p_name:"product1",
      p_quanty: 10,
      price: 100,
      image:"assets/images/12.jpg"
    },
    {
      id:13,
      p_name:"product1",
      p_quanty: 10,
      price: 100,
      image:"assets/images/13.jpg"
    }
]);

@Injectable()
export class ProductService {

  // get all users
  getProducts() {
    return productsPromise;
  }

  // find a specific user
  getProduct(id) {
    return productsPromise.then(products => products.find(product => product.id == id));
  }

}
