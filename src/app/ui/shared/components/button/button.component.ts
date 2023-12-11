import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {
  @Input() content!: string;
  @Input() type!: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
  @Input() functionality!: 'button' | 'submit' | 'reset';

  ngOnInit() {
    this.type = this.type || 'primary';
    this.functionality = this.functionality || 'button';
  }
}
