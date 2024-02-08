import { Component } from '@angular/core';
import { ProductM } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'orix-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrl: './product-list-page.component.scss'
})
export class ProductListPageComponent {
  productsList: ProductM[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe((products) => {
      this.productsList = products;
      console.log(this.productsList);
    })
  }
}
