import { Component, Input } from '@angular/core';
import { faInfo, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductM } from 'src/app/models/product';

@Component({
  selector: 'orix-product-list-card',
  templateUrl: './product-list-card.component.html',
  styleUrl: './product-list-card.component.scss'
})
export class ProductListCardComponent {
  icons = {
    shoppingCartIcon: faShoppingCart,
    moreInfoIcon: faInfo
  };
  @Input() productInfo!: ProductM;
}
