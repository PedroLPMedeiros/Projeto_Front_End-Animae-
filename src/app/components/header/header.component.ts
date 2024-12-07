import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { SacolaService } from '../../services/sacola.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div class="cabecalho px-4 py-3 shadow d-flex
    justify-content-between align-items-center" style="--bs-bg-opacity: .7">
      <button class="anton-sc-regular bg-transparent" routerLink="/">
        Animae!
      </button>
      <app-primary-button
      [label]="'Minha Sacola (' + sacolaService.sacola().length + ')'"
      routerLink="/sacola"
      />
    </div>
  `,
  styles: ``
})
export class HeaderComponent {

  sacolaService = inject(SacolaService)
}
