import { Component, Input } from '@angular/core';
import { faCircleInfo, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductM } from 'src/app/models/product';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ProductService } from 'src/app/services/product/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'orix-product-list-card',
  templateUrl: './product-list-card.component.html',
  styleUrls: ['./product-list-card.component.scss', './product-list-card-desktop.component.scss']
})
export class ProductListCardComponent {
  icons = {
    shoppingCartIcon: faShoppingCart,
    moreInfoIcon: faCircleInfo
  };

  @Input() productInfo!: ProductM;

  constructor(
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
    private alertsService: AlertsService
  ) { }

  addProductToCart(id: number): void {
    this.productService.getProductById(id)
      .subscribe((product) => {
        this.shoppingCartService.addProduct(product!, 1);
        this.alertsService.showSimpleAlert('Product added to cart', 'Done');
        // this.openCartAlert();
      })
  }
}
