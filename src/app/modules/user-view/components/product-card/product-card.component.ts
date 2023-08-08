import { Component, Input } from '@angular/core';
import { Product } from 'src/app/modules/admin-view/interfaces/product.interface';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: Product | undefined;

  constructor() { }

}
