import { Component, EventEmitter, Input, Output, ContentChildren, QueryList, ViewContainerRef, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'orix-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss', './modal-container-desktop.component.scss']
})
export class ModalContainerComponent {
  closeModalIcon: IconDefinition = faXmark;

  @Output() closeModalNotification: EventEmitter<string> = new EventEmitter();

  closeModal(): void {
    this.closeModalNotification.emit('close');
  }
}
