import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductM } from 'src/app/models/product';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
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
  screenMode$!: Observable<boolean>;
  screenMode!: boolean;

  @Input() changeInDataBaseNotification!: boolean;
  @Output() openModalNotification: EventEmitter<string> = new EventEmitter();

  constructor(
    private productService: ProductService,
    private alertsService: AlertsService,
    private store: Store<{ screenMode: boolean }>
  ) { }

  ngOnInit(): void {
    this.productList$ = this.productService.getProducts();
    this.screenMode$ = this.store.select('screenMode');
    this.screenMode$.subscribe(mode => this.screenMode = mode);
  }

  ngOnChanges(): void {
    this.productList$ = this.productService.getProducts();
  }

  openModal(actionInfo: string, productData: ProductM): void {
    this.openModalNotification.emit(actionInfo);
    this.productService.fillForm(productData);
  }

  deleteProduct(product: ProductM): void {
    this.productService.deleteProduct(product.id)
      .subscribe(() => {
        this.alertsService.showSimpleAlert('Product successfully deleted', 'Done');
        this.productList$ = this.productService.getProducts();
      })
  }
}
