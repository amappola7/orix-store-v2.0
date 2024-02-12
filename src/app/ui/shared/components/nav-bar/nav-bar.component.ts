import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'orix-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar-desktop.component.scss', './nav-bar.component.scss']
})
export class NavBarComponent {
  cartIcon: IconDefinition = faShoppingCart
}
