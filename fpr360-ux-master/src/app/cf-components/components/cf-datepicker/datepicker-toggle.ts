import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { CfDatepickerComponent } from './datepicker';

@Component({
  moduleId: module.id,
  selector: 'button[CfDatepickerToggle]',
  template: '&nbsp;',
  styleUrls: ['datepicker-toggle.scss'],
  host: {
    type: 'button',
    class: 'cf-datepicker-toggle',
    'aria-label': 'Open calendar',
    '(click)': '_open($event)'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CfDatepickerToggleComponent<D> {
  /** Datepicker instance that the button will toggle. */
  @Input('CfDatepickerToggle') datepicker: CfDatepickerComponent;

  _open(event: Event): void {
    if (this.datepicker) {
      this.datepicker.open();
      event.stopPropagation();
    }
  }
}
