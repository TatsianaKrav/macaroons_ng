import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() index: number = -1;
  @Input() product: ProductType;
  @Output() orderProductEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  constructor() {
    this.product = {
      image: '',
      title: '',
      price: 0
    }
  }

  orderProduct(): void {
    this.orderProductEvent.emit(this.product);
  }



}
