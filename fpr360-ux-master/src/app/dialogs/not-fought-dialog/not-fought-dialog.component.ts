import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-not-fought-dialog',
  templateUrl: './not-fought-dialog.component.html',
  styleUrls: ['./not-fought-dialog.component.scss']
})
export class NotFoughtDialogComponent implements OnInit {
  reason = {
    value: '',
    options: [
      {
        value: 'Fulfillment Issue',
        viewValue: 'Fulfillment Issue'
      },
      {
        value: 'Reason 2',
        viewValue: 'Reason 2'
      },
      {
        value: 'Reason 3',
        viewValue: 'Reason 3'
      }
    ]
  };

  constructor(
    public dialogRef: MatDialogRef<NotFoughtDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog = () => this.dialogRef.close();

  saveFunction = () => {
    this.dialogRef.close(this.reason.value);
  };

  ngOnInit() {}
}
