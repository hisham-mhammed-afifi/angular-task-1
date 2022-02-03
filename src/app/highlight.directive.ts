import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.onmouseover = function () {
      this.className += ' blue';
    };
    this.el.nativeElement.onmouseout = function () {
      this.className = 'card';
    };
  }
}
