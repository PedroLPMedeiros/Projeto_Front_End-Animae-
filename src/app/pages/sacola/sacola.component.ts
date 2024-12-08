import { Component, inject } from '@angular/core';
import { SacolaService } from '../../services/sacola.service';
import { SacolaItemComponent } from './sacola-item/sacola-item.component';
import { ResumoComprasComponent } from "./resumo-compras/resumo-compras.component";

@Component({
  selector: 'app-sacola',
  imports: [SacolaItemComponent, ResumoComprasComponent],
  template: `
    <div class="p-3 d-flex flex-column gap-3">
      <h2 class="fs-4">Meus itens geek</h2>
      @for (item of sacolaService.sacola(); track item.id) {
        <app-sacola-item [item]="item"/>
      }
      <app-resumo-compras/>
    </div>
  `,
  styles: ``
})
export class SacolaComponent {
  sacolaService = inject(SacolaService);
}
