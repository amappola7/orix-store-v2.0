import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ProductM } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

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
  }

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params) => {
        console.log(params);
        this.productId = params['id'];
        this.productInfo$ = this.productService.getProductById(this.productId);
      });
  }
}

