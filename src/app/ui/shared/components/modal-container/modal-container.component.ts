import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef, reflectComponentType } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { DarkModeButtonComponent } from '../dark-mode-button/dark-mode-button.component';

@Component({
  selector: 'orix-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrl: './modal-container.component.scss'
})
export class ModalContainerComponent implements OnInit, OnDestroy {
  closeModalIcon: IconDefinition = faXmark;

  constructor (  ) {}

  @ViewChild('modalContent', {read: ViewContainerRef}) modalContentContainer!: ViewContainerRef;

  ngOnInit(): void {
    this.createComponent();
  }

  ngOnDestroy(): void {
    this.modalContentContainer.clear();
  }

  createComponent(modalContent: any = DarkModeButtonComponent): void {
    this.modalContentContainer.createComponent(modalContent);
  }
}
