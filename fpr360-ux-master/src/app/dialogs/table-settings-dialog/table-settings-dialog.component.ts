import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'lodash';

@Component({
  selector: 'app-table-settings-dialog',
  templateUrl: './table-settings-dialog.component.html',
  styleUrls: ['./table-settings-dialog.component.scss']
})
export class TableSettingsDialogComponent implements OnInit {
  search: string;
  selectAll = false;
  array: any;
  newArray: any;
  x: number;

  constructor(
    public dialogRef: MatDialogRef<TableSettingsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.newArray = data.dataArray;
    this.array = _.cloneDeep(this.newArray);
    this.x = this.array.length;

    let n = 0;
    for (let item of this.array) {
      item.included ? n++ : null;
    }
    n === this.x ? (this.selectAll = true) : null;
  }

  closeDialog = () => this.dialogRef.close();

  searchFunction = event =>
    typeof event === 'string' ? (this.search = event) : null;

  selectAllFunction = val => {
    for (let item of this.array) {
      val ? (item.included = true) : (item.included = false);
    }
  };

  checkItem = (item, index) => {
    let n = 0;
    for (let item of this.array) {
      item.included ? n++ : null;
    }
    n === 0 || n != this.x ? (this.selectAll = false) : null;
    n === this.x ? (this.selectAll = true) : null;
  };

  saveFunction = () => {
    this.dialogRef.close(this.array);
  };

  ngOnInit() {}
}
