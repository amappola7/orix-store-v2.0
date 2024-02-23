import { Component } from '@angular/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ShoppingCartItemM } from 'src/app/models/shopping-cart';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'orix-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss', './shopping-cart-desktop.component.scss']
})
export class ShoppingCartComponent {
  displayMobileMenu: boolean = false;
  screenSize: number = window.screen.width;
  cart: ShoppingCartItemM[] = [];
  productsInCart: number[] = [];
  totalCart: number = 0;
  icons = {
    addProductIcon: faPlus,
    removeProductIcon: faMinus
  };

  constructor(
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit() {
    this.cart = this.shoppingCartService.cart;
    this.productsInCart = this.shoppingCartService.productsInCart;
    this.totalCart = this.shoppingCartService.calculateTotalInCart();
  }

  ngOnDestroy() {
    localStorage.setItem('shopping-cart', JSON.stringify(this.cart));
    localStorage.setItem('products-in-cart', JSON.stringify(this.productsInCart));
  }

  openMobileMenu(): void {
    this.displayMobileMenu = true;
  }

  closeMobileMenu(): void {
    this.displayMobileMenu = false;
  }

  clearCart() {
    this.shoppingCartService.clearCart();
    this.cart = [];
    this.totalCart = this.shoppingCartService.calculateTotalInCart();
  }

  addQuantityToProduct(id: number) {
    this.cart = this.shoppingCartService.addQuantity(id);
    this.totalCart = this.shoppingCartService.calculateTotalInCart();
  }

  removeQuantityToProduct(id: number) {
    this.cart = this.shoppingCartService.removeQuantity(id);
    this.totalCart = this.shoppingCartService.calculateTotalInCart();
  }

  // checkoutAlert(): void {
  //   this._snackBar.open('This page is under construction', 'Done', {
  //     duration: 2500,
  //   });
  // }
}
