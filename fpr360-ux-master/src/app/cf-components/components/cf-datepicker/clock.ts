import {
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { DateUtil } from './date-util';
import { DateLocale } from './date-locale';

export const CLOCK_RADIUS = 50;
export const CLOCK_INNER_RADIUS = 27.5;
export const CLOCK_OUTER_RADIUS = 41.25;
export const CLOCK_TICK_RADIUS = 7.0833;

export type ClockView = 'hour' | 'minute';

/**
 * A clock that is used as part of the datepicker.
 * @docs-private
 */
@Component({
  moduleId: module.id,
  selector: 'app-clock',
  templateUrl: 'clock.html',
  styleUrls: ['clock.scss'],
  host: {
    role: 'clock',
    '(mousedown)': '_handleMousedown($event)'
  }
})
export class CfClockComponent implements AfterContentInit {
  /**
   * The date to display in this clock view.
   */
  @Input()
  get activeDate(): Date {
    return this._activeDate;
  }
  set activeDate(value: Date) {
    const oldActiveDate = this._activeDate;
    this._activeDate = this._util.clampDate(value, this.min, this.max);
    if (!this._util.isSameMinute(oldActiveDate, this._activeDate)) {
      this._init();
    }
  }
  private _activeDate: Date;

  /** The currently selected date. */
  @Input()
  get selected(): Date {
    return this._selected;
  }
  set selected(value: Date) {
    this._selected = this._util.parse(value);
    if (this._selected) {
      this.activeDate = this._selected;
    }
  }
  private _selected: Date;

  /** The minimum selectable date. */
  @Input()
  get min(): Date {
    return this._min;
  }
  set min(date: Date) {
    this._min = this._util.parse(date);
  }
  private _min: Date;

  /** The maximum selectable date. */
  @Input()
  get max(): Date {
    return this._max;
  }
  set max(date: Date) {
    this._max = this._util.parse(date);
  }
  private _max: Date;

  /** Whether the clock should be started in hour or minute view. */
  @Input()
  set startView(value: ClockView) {
    this._hourView = value !== 'minute';
  }

  /** A function used to filter which dates are selectable. */
  @Input() dateFilter: (date: Date) => boolean;

  @Input() interval = 1;

  @Input() twelvehour = false;

  /** Emits when the currently selected date changes. */
  @Output() selectedChange = new EventEmitter<Date>();

  @Output() activeDateChange = new EventEmitter<Date>();

  /** Hours and Minutes representing the clock view. */
  _hours: Array<any> = [];
  _minutes: Array<any> = [];

  /** Whether the clock is in hour view. */
  _hourView = true;

  _selectedHour: number;
  _selectedMinute: number;

  get _hand(): any {
    this._selectedHour = this._util.getHours(this.activeDate);
    this._selectedMinute = this._util.getMinutes(this.activeDate);
    let deg = 0;
    let radius = CLOCK_OUTER_RADIUS;
    if (this._hourView) {
      const outer =
        this.activeDate.getHours() > 0 && this.activeDate.getHours() < 13;
      radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS;
      if (this.twelvehour) {
        radius = CLOCK_OUTER_RADIUS;
      }
      deg = Math.round(this.activeDate.getHours() * (360 / (24 / 2)));
    } else {
      deg = Math.round(this.activeDate.getMinutes() * (360 / 60));
    }
    return {
      transform: `rotate(${deg}deg)`,
      height: `${radius}%`,
      'margin-top': `${50 - radius}%`
    };
  }

  private mouseMoveListener: any;
  private mouseUpListener: any;

  constructor(
    private _element: ElementRef,
    private _locale: DateLocale,
    private _util: DateUtil
  ) {
    this.mouseMoveListener = (event: any) => {
      this._handleMousemove(event);
    };
    this.mouseUpListener = () => {
      this._handleMouseup();
    };
  }

  ngAfterContentInit() {
    this.activeDate = this._activeDate || this._util.today();
    this._init();
  }

  /** Handles mousedown events on the clock body. */
  _handleMousedown(event: any) {
    this.setTime(event);
    document.addEventListener('mousemove', this.mouseMoveListener);
    document.addEventListener('touchmove', this.mouseMoveListener);
    document.addEventListener('mouseup', this.mouseUpListener);
    document.addEventListener('touchend', this.mouseUpListener);
  }

  _handleMousemove(event: any) {
    event.preventDefault();
    this.setTime(event);
  }

  _handleMouseup() {
    document.removeEventListener('mousemove', this.mouseMoveListener);
    document.removeEventListener('touchmove', this.mouseMoveListener);
    document.removeEventListener('mouseup', this.mouseUpListener);
    document.removeEventListener('touchend', this.mouseUpListener);
    this.selectedChange.emit(this.activeDate);
  }

  /** Initializes this clock view. */
  private _init() {
    this._hours.length = 0;
    this._minutes.length = 0;

    const hourNames = this._locale.getHourNames();
    const minuteNames = this._locale.getMinuteNames();

    if (this.twelvehour) {
      for (let i = 1; i < hourNames.length / 2 + 1; i++) {
        const radian = i / 6 * Math.PI;
        const radius = CLOCK_OUTER_RADIUS;
        const date = new Date(this.activeDate.getTime());
        date.setHours(i + 1, 0, 0, 0);
        const enabled = this._util.isFullDateWithinRange(
          date,
          this.min,
          this.max
        );
        this._hours.push({
          value: i,
          displayValue: i === 0 ? '00' : hourNames[i],
          enabled: enabled,
          top: CLOCK_RADIUS - Math.cos(radian) * radius - CLOCK_TICK_RADIUS,
          left: CLOCK_RADIUS + Math.sin(radian) * radius - CLOCK_TICK_RADIUS
        });
      }
    } else {
      for (let i = 0; i < hourNames.length; i++) {
        const radian = i / 6 * Math.PI,
          outer = i > 0 && i < 13,
          radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS,
          date = new Date(this.activeDate.getTime());
        date.setHours(i + 1, 0, 0, 0);
        const enabled = this._util.isFullDateWithinRange(
          date,
          this.min,
          this.max
        );
        this._hours.push({
          value: i,
          displayValue: i === 0 ? '00' : hourNames[i],
          enabled: enabled,
          top: CLOCK_RADIUS - Math.cos(radian) * radius - CLOCK_TICK_RADIUS,
          left: CLOCK_RADIUS + Math.sin(radian) * radius - CLOCK_TICK_RADIUS,
          fontSize: i > 0 && i < 13 ? '' : '80%'
        });
      }
    }

    for (let i = 0; i < minuteNames.length; i += 5) {
      const radian = i / 30 * Math.PI,
        date = new Date(this.activeDate.getTime());
      date.setMinutes(i, 0, 0);
      const enabled = this._util.isFullDateWithinRange(
        date,
        this.min,
        this.max
      );
      this._minutes.push({
        value: i,
        displayValue: i === 0 ? '00' : minuteNames[i],
        enabled: enabled,
        top:
          CLOCK_RADIUS -
          Math.cos(radian) * CLOCK_OUTER_RADIUS -
          CLOCK_TICK_RADIUS,
        left:
          CLOCK_RADIUS +
          Math.sin(radian) * CLOCK_OUTER_RADIUS -
          CLOCK_TICK_RADIUS
      });
    }
  }

  /**
   * Set Time
   * @param event
   */
  private setTime(event: any) {
    const trigger = this._element.nativeElement;
    const triggerRect = trigger.getBoundingClientRect();
    const width = trigger.offsetWidth;
    const height = trigger.offsetHeight;
    const pageX =
      event.pageX !== undefined ? event.pageX : event.touches[0].pageX;
    const pageY =
      event.pageY !== undefined ? event.pageY : event.touches[0].pageY;
    const x = width / 2 - (pageX - triggerRect.left - window.pageXOffset);
    const y = height / 2 - (pageY - triggerRect.top - window.pageYOffset);
    let radian = Math.atan2(-x, y);
    const unit =
      Math.PI / (this._hourView ? 6 : this.interval ? 30 / this.interval : 30);
    const z = Math.sqrt(x * x + y * y);
    const outer =
      this._hourView &&
      z >
        (width * (CLOCK_OUTER_RADIUS / 100) +
          width * (CLOCK_INNER_RADIUS / 100)) /
          2;
    let value = 0;

    if (radian < 0) {
      radian = Math.PI * 2 + radian;
    }
    value = Math.round(radian / unit);
    radian = value * unit;

    const date = new Date(this.activeDate.getTime());
    if (this._hourView) {
      if (this.twelvehour) {
        value = value === 0 ? 12 : value;
      } else {
        if (value === 12) {
          value = 0;
        }
        value = outer
          ? value === 0 ? 12 : value
          : value === 0 ? 0 : value + 12;
      }
      date.setHours(value);
    } else {
      if (this.interval) {
        value *= this.interval;
      }
      if (value === 60) {
        value = 0;
      }
      date.setMinutes(value);
    }
    this.activeDate = this._util.clampDate(date, this.min, this.max);
    this.activeDateChange.emit(this.activeDate);
  }
}
