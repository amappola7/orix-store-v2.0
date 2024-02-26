import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'orix-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.scss'
})
export class ProductDetailsPageComponent {
  displayMobileMenu: boolean = false;
  screenSize: number = window.screen.width;
  screenMode$!: Observable<boolean>;
  screenMode!: boolean;

  constructor(
    private store: Store<{ screenMode: boolean }>
  ) { }

  ngOnInit(): void {
    this.screenMode$ = this.store.select('screenMode');
    this.screenMode$.subscribe(mode => this.screenMode = mode);
  }

  openMobileMenu(): void {
    this.displayMobileMenu = true;
  }

  closeMobileMenu(): void {
    this.displayMobileMenu = false;
  }
}
