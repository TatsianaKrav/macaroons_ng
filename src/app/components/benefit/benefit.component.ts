import {Component, Input} from '@angular/core';
import {BenefitType} from "../../types/benefit.type";

@Component({
  selector: 'benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.scss']
})
export class BenefitComponent {
  @Input() benefit: BenefitType;
  @Input() index: number = -1;

  constructor() {
    this.benefit = {
      title: '',
      description: ''
    }
  }
}
