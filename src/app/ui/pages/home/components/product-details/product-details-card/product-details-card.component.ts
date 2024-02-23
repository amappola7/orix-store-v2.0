import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ProductM } from 'src/app/models/product';
import { ShoppingCartItemM } from 'src/app/models/shopping-cart';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ProductService } from 'src/app/services/product/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'orix-product-details-card',
  templateUrl: './product-details-card.component.html',
  styleUrls: ['./product-details-card.component.scss', './product-details-card-desktop.component.scss']
})
export class ProductDetailsCardComponent implements OnInit {
  productInfo$!: Observable<ProductM | null>;
  productId!: number;
  icons = {
    add: faPlus,
    remove: faMinus,
    shoppingCart: faShoppingCart
  };
  cart: ShoppingCartItemM[] = [];
  totalCart: number = 0;
  quantity: number = 1;

  constructor(
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute,
    private alertsService: AlertsService
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params) => {
        this.productId = params['id'];
        this.productInfo$ = this.productService.getProductById(this.productId);
      });

    this.cart = this.shoppingCartService.cart;
  }

  addQuantityToProduct(): void {
    this.quantity += 1;
  }

  removeQuantityToProduct(): void {
    if (this.quantity > 0) this.quantity -= 1;
  }

  addProductToCart(id: number): void {
    this.productService.getProductById(id)
    .subscribe((product) => {
      this.shoppingCartService.addProduct(product!, this.quantity);
      this.alertsService.showSimpleAlert('Product added to cart', 'Done');
    })
  };
}

