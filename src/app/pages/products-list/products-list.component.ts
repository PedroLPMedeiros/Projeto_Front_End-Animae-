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
        image: 'https://www.google.com/url?url=https://produto.mercadolivre.com.br/MLB-4931221882-dvd-anime-orange-serie-completa-dublada-filme-_JM%3Fmatt_tool%3D18956390%26utm_source%3Dgoogle_shopping%26utm_medium%3Dorganic&rct=j&q=&esrc=s&opi=95576897&sa=U&ved=0ahUKEwiZ2d_br5aKAxVEhJUCHRQYHUsQ1SkI3AcoAA&usg=AOvVaw0648a1E1dGEJO7rCE1BVJi',
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
        image: 'https://www.google.com/url?url=https://actionfigurebrasil.com.br/products/angel-beats-nendoroid-petit-set-2%25E3%2585%25A4%3Fvariant%3D48715012276520%26country%3DBR%26currency%3DBRL%26utm_medium%3Dproduct_sync%26utm_source%3Dgoogle%26utm_content%3Dsag_organic%26utm_campaign%3Dsag_organic%26srsltid%3DAfmBOoqTnyz1diLRNKL2_EUiUnFpQNQgVAdaPP3S1aumUQHxAJYW71vq7gM&rct=j&q=&esrc=s&opi=95576897&sa=U&ved=0ahUKEwi8pcbVsJaKAxXUrpUCHYg1NAUQ1SkI8wkoAA&usg=AOvVaw2qE9K2flYNz3YyaDy-DRKt',
        price: 40.00,
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
