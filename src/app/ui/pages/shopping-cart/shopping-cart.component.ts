import { Component } from '@angular/core';

@Component({
  selector: 'orix-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  displayMobileMenu: boolean = false;
  screenSize: number = window.screen.width;

  openMobileMenu(): void {
    this.displayMobileMenu = true;
  }

  closeMobileMenu(): void {
    this.displayMobileMenu = false;
  }
}
