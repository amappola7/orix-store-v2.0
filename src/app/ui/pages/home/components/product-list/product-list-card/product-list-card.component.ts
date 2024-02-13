import { Component, Input } from '@angular/core';
import { faCircleInfo, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductM } from 'src/app/models/product';

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
}
