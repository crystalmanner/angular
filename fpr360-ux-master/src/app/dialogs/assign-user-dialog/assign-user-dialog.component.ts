import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import * as _ from 'lodash';

@Component({
  selector: 'app-assign-user-dialog',
  templateUrl: './assign-user-dialog.component.html',
  styleUrls: ['./assign-user-dialog.component.scss']
})
export class AssignUserDialogComponent implements OnInit {
  array: Array<any>;
  showArray: Array<any>;
  newArray: Array<any>;
  hideSelected = false;
  roles = [
    {
      value: 'Primary',
      viewValue: 'Primary'
    },
    {
      value: 'Secondary',
      viewValue: 'Secondary'
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<AssignUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.newArray = data.dataArray;
    data.hideSelected
      ? (this.hideSelected = data.hideSelected)
      : (this.hideSelected = false);
    this.array = _.cloneDeep(this.newArray);

    if (this.hideSelected) {
      const cleanList = this.array.filter(d => {
        return !d.rowIncluded;
      });
      this.showArray = cleanList;
    } else {
      this.showArray = this.array;
    }
  }

  ngOnInit() {}

  closeDialog = () => this.dialogRef.close();

  save = () => {
    this.dialogRef.close(this.showArray);
  };
}
