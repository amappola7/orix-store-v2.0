import { Component, EventEmitter, Output } from '@angular/core';
import { IconDefinition, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'orix-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {
  closeModalIcon: IconDefinition = faXmark;
  screenMode: boolean = true;
  logos = {
    lightModeLogo: '../../../../../assets/logos/Logo Light Mode.png',
    darkModeLogo: '../../../../../assets/logos/Logo Dark Mode.png',
  }

  @Output() closeMobileMenuNotification: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeMobileMenu() {
    this.closeMobileMenuNotification.emit(true);
  }
}
