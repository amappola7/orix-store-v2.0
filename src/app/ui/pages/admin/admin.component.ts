import { Component } from '@angular/core';
import { ProductM, RawProductM } from 'src/app/models/product';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'orix-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  displayModal: boolean = false;
  modalMode: string = 'Create';
  displayMobileMenu: boolean = false;
  screenSize: number = window.screen.width;
  changeInDataBaseNotification: boolean = false;

  constructor(
    private productService: ProductService,
    private alertsService: AlertsService
  ) { }

  openModal(actionInfo: string): void {
    this.displayModal = true;
    this.modalMode = actionInfo;
  }

  closeModal(): void {
    this.displayModal = false;
  }

  openMobileMenu(): void {
    this.displayMobileMenu = true;
  }

  closeMobileMenu(): void {
    this.displayMobileMenu = false;
  }

  onSubmit(productData: ProductM) {
    console.log(this.modalMode)
    if (this.modalMode == 'Create') {
      this.productService.createProduct(productData)
        .subscribe(() => {
          this.alertsService.showSimpleAlert('Product successfully created', 'Done');
          this.closeModal();
          this.changeInDataBaseNotification = !this.changeInDataBaseNotification;
        })
    } else {
      const productId = this.productService.productToEdit.id;
      this.productService.editProduct(productId, productData)
        .subscribe(() => {
          this.alertsService.showSimpleAlert('Product successfully edited', 'Done');
          this.closeModal();
          this.changeInDataBaseNotification = !this.changeInDataBaseNotification;
        })
    }
  }
}
