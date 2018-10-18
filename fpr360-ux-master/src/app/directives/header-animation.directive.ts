import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[header-animation]'
})
export class HeaderAnimationDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer) {
    renderer.listen(elRef.nativeElement, 'wheel', e => {
      const el = elRef.nativeElement;
      let windowHeight = window.innerHeight;
      let blockHeight = el.scrollHeight;
      let deltaScroll = -e.deltaY;
      let blockPosition = -el.getBoundingClientRect().top;
      let delta = windowHeight - blockHeight;

      -delta > 132 && blockPosition > 100
        ? renderer.setElementClass(el, 'no-sticky-sub-header', true)
        : renderer.setElementClass(el, 'no-sticky-sub-header', false);
      deltaScroll > 10
        ? renderer.setElementClass(el, 'back-header', true)
        : null;
      deltaScroll < -5
        ? renderer.setElementClass(el, 'back-header', false)
        : null;
    });
  }
}
