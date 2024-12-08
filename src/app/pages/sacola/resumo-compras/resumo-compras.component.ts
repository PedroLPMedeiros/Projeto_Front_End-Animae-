import { Component, inject, computed } from '@angular/core';
import { SacolaService } from '../../../services/sacola.service';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-resumo-compras',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-light p-4 rounded-4 shadow border">
      <h2 class="fs-4">Resumo de compras</h2>
    <div class="d-flex flex-column gap-3">
      <div class="d-flex gap-3">
        <span class="fs-5">Total</span>
        <span class="fs-6 fw-bold">
          {{'R$' + total() + ',00'}}
        </span>
      </div>
      <app-primary-button label="Confirmar a compra"/>
    </div>
    </div>
  `,
  styles: ``
})
export class ResumoComprasComponent {
  sacolaService = inject(SacolaService);

  total = computed(() => {
    let total = 0;
    for(const item of this.sacolaService.sacola()){
      total += item.price;
    }

    return total
  })
}
