import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'button-component',
    imports: [],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Output() onclick = new EventEmitter();

  buttonClicked(): void {
    this.onclick.emit();
  }

}
