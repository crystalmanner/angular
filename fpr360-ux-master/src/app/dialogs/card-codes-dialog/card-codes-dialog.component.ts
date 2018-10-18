import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import * as _ from 'lodash';

@Component({
  selector: 'app-card-codes-dialog',
  templateUrl: './card-codes-dialog.component.html',
  styleUrls: ['./card-codes-dialog.component.scss']
})
export class CardCodesDialogComponent implements OnInit {
  array = [];
  constructor(
    public dialogRef: MatDialogRef<CardCodesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.array = _.cloneDeep(data.array);
  }

  ngOnInit() {}

  closeDialog = () => this.dialogRef.close();

  saveFunction = () => {
    this.dialogRef.close(this.array);
  };
}
