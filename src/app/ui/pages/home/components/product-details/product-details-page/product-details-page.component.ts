import { Component } from '@angular/core';

@Component({
  selector: 'orix-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.scss'
})
export class ProductDetailsPageComponent {
  displayMobileMenu: boolean = false;
  screenSize: number = window.screen.width;

  openMobileMenu(): void {
    this.displayMobileMenu = true;
  }

  closeMobileMenu(): void {
    this.displayMobileMenu = false;
  }
}
