import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.models';


@Injectable({
  providedIn: 'root'
})
export class SacolaService {

  sacola = signal<Product[]>([]);

  addToSacola(product: Product) {
    this.sacola.set([...this.sacola(), product]);

  }

  removeFromSacola(id: number){
    this.sacola.set(this.sacola().filter((p) => p.id !== id ));
  }

  constructor() { }
}
