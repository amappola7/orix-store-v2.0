import { Component } from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ProductM } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'orix-admin-products-table',
  templateUrl: './admin-products-table.component.html',
  styleUrls: ['./admin-products-table.component.scss', './admin-products-table-desktop.component.scss']
})
export class AdminProductsTableComponent {
  productList$!: Observable<ProductM[]>;
  icons = {
    editIcon: faPencil,
    deleteIcon: faTrash
  };
  screenSize: number = window.screen.width;

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productList$ = this.productService.getProducts();
  }
}
