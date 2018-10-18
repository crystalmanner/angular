import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { PortalModule } from '@angular/cdk/portal';
import { A11yModule, FocusMonitor } from '@angular/cdk/a11y';
import {
  CfDatepickerComponent,
  CfDatepickerContentComponent
} from './datepicker';
import { CfDatepickerToggleComponent } from './datepicker-toggle';
import { CfCalendarComponent } from './calendar';
import { CfMonthViewComponent } from './month-view';
import { CfYearViewComponent } from './year-view';
import { CfCalendarBodyComponent } from './calendar-body';
import { CfClockComponent } from './clock';
import { DateLocale } from './date-locale';
import { DateUtil } from './date-util';

export * from './datepicker';
export * from './month-view';
export * from './year-view';
export * from './calendar-body';
export * from './clock';
export * from './date-locale';
export * from './date-util';

@NgModule({
  imports: [CommonModule, PortalModule, A11yModule, MatButtonModule],
  exports: [
    CfDatepickerComponent,
    CfDatepickerToggleComponent,
    CfCalendarBodyComponent,
    CfCalendarComponent,
    CfMonthViewComponent,
    CfYearViewComponent,
    CfClockComponent,
    MatButtonModule
  ],
  declarations: [
    CfDatepickerComponent,
    CfDatepickerContentComponent,
    CfDatepickerToggleComponent,
    CfCalendarComponent,
    CfMonthViewComponent,
    CfYearViewComponent,
    CfCalendarBodyComponent,
    CfClockComponent
    // FocusMonitor,
  ],
  providers: [DateLocale, DateUtil],
  entryComponents: [CfDatepickerContentComponent]
})
export class CfDatepickerModule {}
