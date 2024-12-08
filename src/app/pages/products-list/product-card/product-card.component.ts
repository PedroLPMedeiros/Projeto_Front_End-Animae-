import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.models';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { SacolaService } from '../../../services/sacola.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
      <div class="cardsanimae card bg-white shadow border rounded-1 p-5 mb-5">
        <img class="img-fluid shadow" [src]="product().image">

        <div class="card-body mt-2">
          <span class="text-md h6">
            {{product().name}}
          </span>
          <span>
            {{'R$' + product().price + ',00'}}
          </span>
          <app-primary-button
          label="Comprar" (btnClicked)="sacolaService.addToSacola(product())"/>
        </div>

        <span class="estoque bg-" [class]="product().stock ? 'bg-success-subtle rounded text-success' : 'bg-danger-subtle rounded text-danger'">
          @if (product().stock) {
            {{product().stock}} em estoque
          } @else {
            Indisponível
          }
        </span>
      </div>

 `,
  styles: ``
})
export class ProductCardComponent {
  sacolaService = inject(SacolaService);

  product = input.required<Product>();
}
