import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appNoScroller]'
})
export class NoScrollerDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer) {
    renderer.listen(elRef.nativeElement, 'wheel', e => {
      const el = elRef.nativeElement;
      const conditions =
        (-el.scrollTop === el.offsetHeight - el.scrollHeight &&
          (el.scrollHeight && e.deltaY > 0)) ||
        (el.scrollTop === 0 && e.deltaY < 0);
      if (conditions) {
        e = e || window.event;
        if (e.preventDefault) {
          e.preventDefault();
        }
        e.returnValue = false;
        return false;
      }
    });
  }
}
