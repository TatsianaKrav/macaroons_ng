import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductType} from "./types/product.type";
import {BenefitType} from "./types/benefit.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('menu')
  private elem!: ElementRef;

  phoneValue: string = '375293689868';
  instagramValue: string = 'Мы в Instagram';

  sum: number = 0;

  benefits: BenefitType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты,\n' +
        '        ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили\n' +
        '        22.06.2016 г.'
    }
  ]


  products: ProductType[] = [];

  constructor(private productService: ProductService,
              public cartService: CartService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  formValues = {
    productTitle: '',
    name: '',
    phone: '',
  }


  showPresent: boolean = true;


  scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  order(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
    this.cartService.count++;

    this.sum += product.price;
    alert(product.title + " добавлен в корзину!");
  }


  openBurgerMenu(): void {
    this.elem.nativeElement.classList.add('open');
  }

  closeBurgerMen(): void {
    this.elem.nativeElement.classList.remove('open');
  }

}
