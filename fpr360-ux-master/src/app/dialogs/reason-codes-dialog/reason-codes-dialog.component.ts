import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'lodash';

@Component({
  selector: 'app-reason-codes-dialog',
  templateUrl: './reason-codes-dialog.component.html',
  styleUrls: ['./reason-codes-dialog.component.scss']
})
export class ReasonCodesDialogComponent implements OnInit {
  readonly = false;
  showArray: any;
  array: any;
  newArray: any;
  category = '';
  categoryList = [];
  tempCategory = '';

  constructor(
    public dialogRef: MatDialogRef<ReasonCodesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.newArray = data.dataArray;
    this.array = _.cloneDeep(this.newArray);

    for (let item of this.array) {
      let category = item.category;
      if (this.tempCategory != category) {
        this.tempCategory = category;
        this.categoryList.push({
          value: category,
          viewValue: category
        });
      }
    }

    const cleanList = this.array.filter(d => {
      return !d.included;
    });
    this.showArray = cleanList;
  }

  selectAllFunction = val => {
    for (let item of this.array) {
      val ? (item.included = true) : (item.included = false);
    }
  };

  checkItem = () => {
    let n = 0;
    for (let item of this.array) {
      item.included ? n++ : null;
    }
  };

  closeDialog = () => this.dialogRef.close();

  applyFunction = () => {
    this.dialogRef.close(this.array);
  };

  ngOnInit() {}
}
