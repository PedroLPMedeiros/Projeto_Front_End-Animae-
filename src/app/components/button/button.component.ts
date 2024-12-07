import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button class="text-black w-100 px-4 py-2 rounded-4 shadow hover-opacity" (click)="btnClicked.emit()">
      {{label()}}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  label = input('');

  btnClicked = output();
}
