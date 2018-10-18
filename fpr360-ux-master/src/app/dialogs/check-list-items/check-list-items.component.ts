import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'lodash';
@Component({
  selector: 'app-check-list-items',
  templateUrl: './check-list-items.component.html',
  styleUrls: ['./check-list-items.component.scss']
})
export class CheckListItemsComponent implements OnInit {
  search: string;
  selectAll = false;
  showArray: any;
  array: any;
  newArray: any;
  x: number;
  showAllLines = false;

  constructor(
    public dialogRef: MatDialogRef<CheckListItemsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.newArray = data.dataArray;
    this.array = _.cloneDeep(this.newArray);
    this.showAllLines = data.showAllLines;
    this.x = this.array.length;

    let n = 0;
    for (let item of this.array) {
      item.included ? n++ : null;
    }
    n === this.x ? (this.selectAll = true) : null;

    if (!this.showAllLines) {
      const cleanList = this.array.filter(d => {
        return !d.included;
      });
      this.showArray = cleanList;
    } else {
      this.showArray = this.array;
    }
  }

  closeDialog = () => this.dialogRef.close();

  searchFunction = val =>
    typeof val === 'string' ? (this.search = val) : null;

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
    n === 0 || n != this.x ? (this.selectAll = false) : null;
    n === this.x ? (this.selectAll = true) : null;
  };

  saveFunction = () => {
    this.dialogRef.close(this.array);
  };

  ngOnInit() {}
}
