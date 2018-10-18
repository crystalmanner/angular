import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'lodash';

@Component({
  selector: 'app-manage-dashboard',
  templateUrl: './manage-dashboard.component.html',
  styleUrls: ['./manage-dashboard.component.scss']
})
export class ManageDashboardComponent implements OnInit {
  search: string;
  array: any;
  newArray: any;

  constructor(
    public dialogRef: MatDialogRef<ManageDashboardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.newArray = data.dataArray;
    this.array = _.cloneDeep(this.newArray);
  }

  closeDialog = () => this.dialogRef.close();

  searchFunction = val =>
    typeof val === 'string' ? (this.search = val) : null;

  saveFunction = () => {
    this.dialogRef.close(this.array);
  };

  remove = item => {
    const index = this.array.indexOf(item);
    this.array.splice(index, 1);
  };
  ngOnInit() {}
}
