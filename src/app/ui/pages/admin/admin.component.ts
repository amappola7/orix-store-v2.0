import { Component } from '@angular/core';

@Component({
  selector: 'orix-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  displayModal: boolean = false;
  modalMode: string = 'Create';
  displayMobileMenu: boolean = false;
  screenSize: number = window.screen.width;

  openModal(actionInfo: string): void {
    this.displayModal = true;
    this.modalMode =  actionInfo;
  }

  closeModal(): void {
    this.displayModal = false;
  }

  openMobileMenu(): void {
    this.displayMobileMenu = true;
  }

  closeMobileMenu(): void {
    this.displayMobileMenu = false;
  }
}
