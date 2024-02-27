import { Component, EventEmitter, Output } from '@angular/core';
import { IconDefinition, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'orix-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {
  closeModalIcon: IconDefinition = faXmark;
  screenMode$!: Observable<boolean>;
  screenMode!: boolean;
  logos = {
    lightModeLogo: '../../../../../assets/logos/Logo Light Mode.png',
    darkModeLogo: '../../../../../assets/logos/Logo Dark Mode.png',
  }

  @Output() closeMobileMenuNotification: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private store: Store<{ screenMode: boolean }>
  ) { }

  ngOnInit(): void {
    this.screenMode$ = this.store.select('screenMode');
    this.screenMode$.subscribe(mode => this.screenMode = mode);
  }
  closeMobileMenu() {
    this.closeMobileMenuNotification.emit(true);
  }
}
