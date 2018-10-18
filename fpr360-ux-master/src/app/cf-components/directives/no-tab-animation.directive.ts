import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appNoTabAnimation]'
})
export class NoTabAnimationDirective {
  @HostBinding('@.disabled') disabled = true;
  constructor() {}
}
