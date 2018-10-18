import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DateRangeComponent } from '../../../dialogs/date-range/date-range.component';

@Component({
  selector: 'app-date-range-field',
  templateUrl: './date-range-field.component.html',
  styleUrls: ['./date-range-field.component.scss']
})
export class DateRangeFieldComponent implements OnInit {
  @Output() change: EventEmitter<any> = new EventEmitter();

  value = 'Time';

  list = [
    'Time',
    'Past 24 hours',
    'Past week',
    'Past month',
    'divider',
    'Custom range'
  ];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  changeDate = value => this.change.emit(value);

  changeRange = val => {
    if (val === 'Custom range') {
      const dialogRef = this.dialog.open(DateRangeComponent, {autoFocus: false});
      dialogRef.afterClosed().subscribe(result => {
        this.value = result;
      });
    } else {
      this.value = val;
    }
  };
}
