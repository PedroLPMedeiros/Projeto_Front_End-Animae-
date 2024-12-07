import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button type="button" class=" btn btn-outline-dark border-secundary-subtle rounded" (click)="btnClicked.emit()">
      {{label()}}
    </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {
  label = input('');

  btnClicked = output();

  handleButtonClick() {
    this.btnClicked.emit();
  }
}
