import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  Optional,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MatDateFormats
} from '@angular/material/';
import { DateLocale } from './date-locale';
import { DateUtil } from './date-util';
import { CfCalendarCell } from './calendar-body';
import { slideCalendar } from './datepicker-animations';

const DAYS_PER_WEEK = 7;

/**
 * An internal component used to display a single month in the datepicker.
 * @docs-private
 */
@Component({
  moduleId: module.id,
  selector: 'app-month-view',
  templateUrl: 'month-view.html',
  animations: [slideCalendar],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CfMonthViewComponent implements AfterContentInit {
  /**
   * The date to display in this month view (everything other than the month and year is ignored).
   */
  @Input()
  get activeDate(): Date {
    return this._activeDate;
  }
  set activeDate(value: Date) {
    const oldActiveDate = this._activeDate;
    this._activeDate = value || this._util.today();
    if (
      oldActiveDate &&
      this._activeDate &&
      !this._util.isSameMonthAndYear(oldActiveDate, this._activeDate)
    ) {
      this._init();
      if (this._util.isInNextMonth(oldActiveDate, this._activeDate)) {
        this.calendarState('right');
      } else {
        this.calendarState('left');
      }
    }
  }
  private _activeDate: Date;

  /** The currently selected date. */
  @Input()
  get selected(): Date {
    return this._selected;
  }
  set selected(value: Date) {
    this._selected = value;
    this._selectedDate = this._getDateInCurrentMonth(this.selected);
  }
  private _selected: Date;

  /** A function used to filter which dates are selectable. */
  @Input() dateFilter: (date: Date) => boolean;

  /** Emits when a new date is selected. */
  @Output() selectedChange = new EventEmitter<Date>();

  /** Grid of calendar cells representing the dates of the month. */
  _weeks: CfCalendarCell[][];

  /** The number of blank cells in the first row before the 1st of the month. */
  _firstWeekOffset: number;

  /**
   * The date of the month that the currently selected Date falls on.
   * Null if the currently selected Date is in another month.
   */
  _selectedDate: number;

  /** The date of the month that today falls on. Null if today is in another month. */
  _todayDate: number;

  /** The names of the weekdays. */
  _weekdays: { long: string; narrow: string }[];

  _calendarState: string;

  constructor(
    private _locale: DateLocale,
    public _util: DateUtil,
    @Optional()
    @Inject(MAT_DATE_FORMATS)
    private _dateFormats
  ) {
    if (!this._dateFormats) {
      throw Error('MD_DATE_FORMATS');
    }

    const firstDayOfWeek = this._locale.getFirstDayOfWeek();
    const narrowWeekdays = this._locale.getDayOfWeekNames('narrow');
    const longWeekdays = this._locale.getDayOfWeekNames('long');

    // Rotate the labels for days of the week based on the configured first day of the week.
    const weekdays = longWeekdays.map((long, i) => {
      return { long, narrow: narrowWeekdays[i] };
    });
    this._weekdays = weekdays
      .slice(firstDayOfWeek)
      .concat(weekdays.slice(0, firstDayOfWeek));

    this._activeDate = this._util.today();
  }

  ngAfterContentInit(): void {
    this._init();
  }

  /** Handles when a new date is selected. */
  _dateSelected(date: number) {
    this.selectedChange.emit(
      this._util.createDate(
        this._util.getYear(this.activeDate),
        this._util.getMonth(this.activeDate),
        date,
        this._util.getHours(this.activeDate),
        this._util.getMinutes(this.activeDate),
        this._util.getSeconds(this.activeDate)
      )
    );
  }

  /** Initializes this month view. */
  private _init() {
    this._selectedDate = this._getDateInCurrentMonth(this.selected);
    this._todayDate = this._getDateInCurrentMonth(this._util.today());

    const firstOfMonth = this._util.createDate(
      this._util.getYear(this.activeDate),
      this._util.getMonth(this.activeDate),
      1,
      this._util.getHours(this.activeDate),
      this._util.getMinutes(this.activeDate),
      this._util.getSeconds(this.activeDate)
    );
    this._firstWeekOffset =
      (DAYS_PER_WEEK +
        this._locale.getDayOfWeek(firstOfMonth) -
        this._locale.getFirstDayOfWeek()) %
      DAYS_PER_WEEK;

    this._createWeekCells();
  }

  /** Creates MdCalendarCells for the dates in this month. */
  private _createWeekCells() {
    const daysInMonth = this._util.getNumDaysInMonth(this.activeDate);
    const dateNames = this._locale.getDateNames();
    this._weeks = [[]];
    for (
      let i = 0, cell = this._firstWeekOffset;
      i < daysInMonth;
      i++, cell++
    ) {
      if (cell === DAYS_PER_WEEK) {
        this._weeks.push([]);
        cell = 0;
      }
      const date = this._util.createDate(
        this._util.getYear(this.activeDate),
        this._util.getMonth(this.activeDate),
        i + 1,
        this._util.getHours(this.activeDate),
        this._util.getMinutes(this.activeDate),
        this._util.getSeconds(this.activeDate)
      );
      const enabled = !this.dateFilter || this.dateFilter(date);
      const ariaLabel = this._locale.format(
        date,
        this._dateFormats.display.dateA11yLabel
      );
      this._weeks[this._weeks.length - 1].push(
        new CfCalendarCell(i + 1, dateNames[i], ariaLabel, enabled)
      );
    }
  }

  /**
   * Gets the date in this month that the given Date falls on.
   * Returns null if the given Date is in another month.
   */
  private _getDateInCurrentMonth(date: Date): number {
    return this._util.isSameMonthAndYear(date, this.activeDate)
      ? this._util.getDate(date)
      : null;
  }

  private calendarState(direction: string): void {
    this._calendarState = direction;
  }

  _calendarStateDone() {
    this._calendarState = '';
  }
}
