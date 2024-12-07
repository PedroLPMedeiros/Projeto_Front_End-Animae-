import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { SacolaComponent } from './pages/sacola/sacola.component';

export const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: ProductsListComponent

},
{
  path: 'sacola',
  component:SacolaComponent
}
];
