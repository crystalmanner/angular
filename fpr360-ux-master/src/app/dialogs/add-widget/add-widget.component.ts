import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'lodash';

@Component({
  selector: 'app-add-widget',
  templateUrl: './add-widget.component.html',
  styleUrls: ['./add-widget.component.scss']
})
export class AddWidgetComponent implements OnInit {
  search: string;
  selectAll = false;
  showArray: any;
  array: any;
  newArray: any;
  x: number;

  constructor(
    public dialogRef: MatDialogRef<AddWidgetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.newArray = data.dataArray;
    this.array = _.cloneDeep(this.newArray);
    const cleanList = this.array.filter(d => {
      return !d.included;
    });
    this.showArray = cleanList;
    this.x = this.array.length;

    let n = 0;
    for (let item of this.array) {
      item.included ? n++ : null;
    }
  }

  closeDialog = () => this.dialogRef.close();

  searchFunction = val =>
    typeof val === 'string' ? (this.search = val) : null;

  checkItem = () => {
    let n = 0;
    for (let item of this.array) {
      item.included ? n++ : null;
    }
  };

  saveFunction = () => {
    this.dialogRef.close(this.array);
  };

  ngOnInit() {}
}
