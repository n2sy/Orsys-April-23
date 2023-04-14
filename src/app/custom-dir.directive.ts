import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDir]',
})
export class CustomDirDirective {
  @HostBinding('style.backgroundColor') bg;
  @HostBinding('style.color') color;
  constructor() {}

  @HostListener('mouseenter') mouseenter() {
    this.bg = 'grey';
    this.color = 'white';
  }
  @HostListener('mouseleave') mouseleave() {
    this.bg = 'white';
    this.color = 'black';
  }
}
