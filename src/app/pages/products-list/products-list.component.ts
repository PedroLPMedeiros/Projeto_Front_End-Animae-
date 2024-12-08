import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.models';
import { ProductCardComponent } from './product-card/product-card.component';
import { SacolaService } from '../../services/sacola.service';


@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
  <div class="p-5 container text-center">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
      @for (product of products(); track product.id){
      <app-product-card [product]="product"/>
      }
    </div>

  </div>
  `,
  styles: ``
})
export class ProductsListComponent {
  products = signal<Product[]>([
      {
        id: 1,
        name: 'Cosplay - D.Gray-man',
        image: 'https://clould.ohcosplay.com/images/ohcosplay011/A909_0.jpg',
        price: 150.00,
        stock: 10,
      },
      {
        id: 2,
        name: 'Moletom Luffy - One Piece',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTLMZbQ3sRDg4BBysr-qZDqLmexCigCHaqRzmlJ-00JazpCBuA7ZcnDrOFhjASMNMB9T1vsDW3bnwZtwvfwb3gikL2_1hkyS1OUe8OPV47KgcwfxrLgWoXxFA&usqp=CAc',
        price: 50.00,
        stock: 15,
      },
      {
        id: 3,
        name: 'Box Mangá - Fairy Tail',
        image: 'https://m.media-amazon.com/images/I/81LNL4+mF0L._AC_UF1000,1000_QL80_.jpg',
        price: 150.00,
        stock: 10,
      },
      {
        id: 4,
        name: 'Caixinha de música - Anohana',
        image: 'https://ae01.alicdn.com/kf/S86aceeac8fa849508ca734713c121779L/Caixa-De-M-sica-De-Madeira-Retangular-Anime-Anohana-A-Flor-Que-Vimos-Naquele-Dia-Preto.jpg',
        price: 40.00,
        stock: 30,
      },
      {
        id: 5,
        name: 'Coleção de DVD - Orange',
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS-bQ47cU14d4TjeI1vzCfwf-3edW7wT3lB9IFT1--FS25730XwinLyLYTVD57gBzC57jtkhpPc71JRHaIfUxYuxCPqVXI8qndwGoWH-KprXB65doK7hdKc&usqp=CAE',
        price: 200.00,
        stock: 5,
      },
      {
        id: 6,
        name: 'Action Figure - Angel Beats',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRXe5TRwaicU8bbqoGWVkLVFcOCzn962vyEPMU1JLY_PMedGljlWbQ24AIRrqIrWOLgndqge5IOGsjROlloDZj1wZgz5k65Sj6XxHYpROF4AHmpasiPq0-Y&usqp=CAE',
        price: 400.00,
        stock: 0,
      },
      {
        id: 7,
        name: 'Coleção Mangá - Kaiju no 8',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTgmsWPY9HKTRhz_6Uxn_nrWasGXDHl6DKXp_TTOKRlpbqoX4zeC0DKxCijyBrgce_yWp8wPp_gRUVjO8abqvPafVYHsHolHnXaCVo9GUSZ&usqp=CAE',
        price: 80.00,
        stock: 8,
      },
      {
        id: 8,
        name: 'Caixa misteriosa - Naruto',
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTaqr03lXKix857yOLDLyDHLEa3YkgZ-oSPhI0VwtbkTZF9KFcgtkuvbYfRJs9ees-OvieM2mV_38udFgrF24bcsfIIhntBhC1TDeDnGVOPXO0U88PcSJBa&usqp=CAE',
        price: 40.00,
        stock: 8,
      },
    ]);
}
