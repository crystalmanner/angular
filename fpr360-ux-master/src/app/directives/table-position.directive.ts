import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[tablePosition]'
})
export class TablePositionDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer) {
    renderer.listen(elRef.nativeElement, 'wheel', e => {
      const el = elRef.nativeElement;
      let blockPosition = el.getBoundingClientRect().top;
      blockPosition <= 64
        ? renderer.setElementClass(elRef.nativeElement, 'fix-position', true)
        : null;
      blockPosition > 64
        ? renderer.setElementClass(elRef.nativeElement, 'fix-position', false)
        : null;
    });
  }
}
