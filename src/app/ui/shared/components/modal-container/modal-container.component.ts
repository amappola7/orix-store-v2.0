import { Component, EventEmitter, OnDestroy, OnInit, ViewChild, ViewContainerRef, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { DarkModeButtonComponent } from '../dark-mode-button/dark-mode-button.component';

@Component({
  selector: 'orix-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss', './modal-container-desktop.component.scss']
})
export class ModalContainerComponent /*implements OnInit, OnDestroy*/ {
  closeModalIcon: IconDefinition = faXmark;

  constructor (  ) {}

  @Output() closeModalNotification: EventEmitter<string> = new EventEmitter();
  // @ViewChild('modalContent', {read: ViewContainerRef}) modalContentContainer!: ViewContainerRef;

  // ngOnInit(): void {
  //   this.createComponent();
  // }

  // ngOnDestroy(): void {
  //   this.modalContentContainer.clear();
  // }

  // createComponent(modalContent: any = DarkModeButtonComponent): void {
  //   this.modalContentContainer.createComponent(modalContent);
  // }

  closeModal(): void {
    this.closeModalNotification.emit('close');
  }
}
