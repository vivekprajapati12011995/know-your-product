import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';


@Component({
  selector: 'app-product-about',
  templateUrl: './product-about.component.html',
  styleUrls: ['./product-about.component.css']
})
export class ProductAboutComponent implements OnInit {

product: Product;

constructor(private route: ActivatedRoute, private service: ProductService ) { }

ngOnInit() {
let id = this.route.snapshot.params['_id'];
 this.service.getProduct(id).subscribe(product => this.product = product)

}

}
