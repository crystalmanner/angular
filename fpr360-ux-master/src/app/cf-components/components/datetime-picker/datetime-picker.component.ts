import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.scss']
})
export class DatetimePickerComponent implements OnInit {
  touchPicker = 'touch';
  isOpenOnFocus = true;

  @Input() error = false;
  @Input() min = 0;
  @Input() max = 0;
  @Input() errorText = 'Date Error';
  @Input() readonly = false;
  @Input() icons = true;
  @Input() typePicker = 'date';
  @Input() labelPicker: string;
  @Input() formatPicker = 'd MMM, y';
  @Input() value = '';

  @Output() change: EventEmitter<any> = new EventEmitter();

  changeDate = date => this.change.emit(date);

  constructor() {}

  ngOnInit() {}
}
