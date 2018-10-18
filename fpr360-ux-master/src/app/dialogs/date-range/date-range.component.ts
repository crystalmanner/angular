import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss']
})
export class DateRangeComponent implements OnInit {
  startDate = '';
  endDate = '';
  disableSave = true;
  min = 0;
  max = 0;
  month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  constructor(
    public dialogRef: MatDialogRef<DateRangeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  backStartDate = val => {
    this.startDate =
      this.month[val.getMonth()] +
      ' ' +
      val.getDate().toString() +
      ', ' +
      val.getFullYear().toString();
    this.min = Date.parse(this.startDate);
    this.startDate && this.endDate && this.max > this.min
      ? (this.disableSave = false)
      : (this.disableSave = true);
  };
  backEndDate = val => {
    this.endDate =
      this.month[val.getMonth()] +
      ' ' +
      val.getDate().toString() +
      ', ' +
      val.getFullYear().toString();
    this.max = Date.parse(this.endDate);
    this.startDate && this.endDate && this.max > this.min
      ? (this.disableSave = false)
      : (this.disableSave = true);
  };

  closeDialog = () => this.dialogRef.close('Time');

  saveFunction = () => {
    this.dialogRef.close(this.startDate + ' - ' + this.endDate);
  };

  ngOnInit() {}
}
