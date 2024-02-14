import { Component } from '@angular/core';

@Component({
  selector: 'orix-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  modalMode: boolean = false;

  openModal(actionInfo: string): void {
    this.modalMode = true;
  }

  closeModal(): void {
    this.modalMode = false;
  }
}
