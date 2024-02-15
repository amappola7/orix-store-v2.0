import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'orix-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss', './nav-bar-desktop.component.scss']
})
export class NavBarComponent {
  cartIcon: IconDefinition = faShoppingCart
  screenSize: number = window.screen.width;

  @Input() currentPage!: string;
}
