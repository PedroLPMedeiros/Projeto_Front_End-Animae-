import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component'
import { ProductsListComponent } from "./pages/products-list/products-list.component";
import { RouterOutlet } from '@angular/router';
import { RodapeComponent } from "./components/footer/rodape/rodape.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, RodapeComponent],
  template: `
    <app-header/>
    <router-outlet/>
    <app-rodape/>
  `,
  styles: [],
})
export class AppComponent {

}
