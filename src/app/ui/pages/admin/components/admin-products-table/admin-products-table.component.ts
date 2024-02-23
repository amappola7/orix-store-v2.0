import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() openModalNotification: EventEmitter<string> = new EventEmitter();

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productList$ = this.productService.getProducts();
  }

  openModal(actionInfo: string, productData: ProductM): void {
    this.openModalNotification.emit(actionInfo);
    this.productService.fillForm(productData);
  }

  deleteProduct(product: ProductM): void {
    this.productService.deleteProduct(product.id)
    .subscribe(() => alert('Product successfully deleted'))
  }
}
