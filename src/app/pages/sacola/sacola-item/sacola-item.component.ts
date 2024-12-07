import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.models';
import { ButtonComponent } from "../../../components/button/button.component";
import { SacolaService } from '../../../services/sacola.service';

@Component({
  selector: 'app-sacola-item',
  imports: [ButtonComponent],
  template: `

    <div class="bg-white shadow border-info rounded-4 p-4 d-flex gap-3 align-items-center">

      <img [src]="item().image" class="img-fluid" style="width: 50px; height: 50px; object-fit: contain;">
      <div class="d-flex flex-column">
        <span class="fs-5 fw-bold">
          {{item().name}}
        </span>
        <span class="fs-6 fw-bold">
          {{'R$' + item().price + ',00'}}
        </span>
      </div>
      <div class="d-flex flex-fill">
        <app-button label="Remover" (btnClicked)="sacolaService.removeFromSacola(item().id)"/>
      </div>
    </div>

  `,
  styles: ``
})
export class SacolaItemComponent {
  sacolaService = inject(SacolaService);

  item = input.required<Product>();
}
