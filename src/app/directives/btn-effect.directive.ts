import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[btnEffect]'
})
export class BtnEffectDirective implements OnInit{

  @Input() btnEffectDefaultBgColor: string = '#a9394d';
  @Input() btnEffectHoverBgColor: string = '#f68e9c';


  constructor(private elem: ElementRef,
              private rend: Renderer2) {
  }

  @HostListener('mouseenter')
  hover() {
    this.rend.setStyle(this.elem.nativeElement, 'background-color', this.btnEffectHoverBgColor);
  }

  @HostListener('mouseleave')
  blur() {
    this.rend.setStyle(this.elem.nativeElement, 'background-color', this.btnEffectDefaultBgColor );
  }

  ngOnInit() {
    this.rend.setStyle(this.elem.nativeElement, 'background-color', this.btnEffectDefaultBgColor);
  }

}
