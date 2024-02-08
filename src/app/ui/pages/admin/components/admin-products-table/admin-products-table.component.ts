import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductM } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'orix-admin-products-table',
  templateUrl: './admin-products-table.component.html',
  styleUrl: './admin-products-table.component.scss'
})
export class AdminProductsTableComponent {
  productList$!: Observable<ProductM[]>;

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productList$ = this.productService.getProducts();
  }
}
