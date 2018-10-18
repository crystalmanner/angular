import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import * as _ from 'lodash';

@Component({
  selector: 'app-assign-company',
  templateUrl: './assign-company.component.html',
  styleUrls: ['./assign-company.component.scss']
})
export class AssignCompanyComponent implements OnInit {
  search: string;
  array: Array<any>;
  newArray: Array<any>;
  showArray: Array<any>;

  constructor(
    public dialogRef: MatDialogRef<AssignCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.newArray = data.dataArray;
    this.array = _.cloneDeep(this.newArray);
    const cleanList = this.array.filter(d => {
      return !d.included;
    });
    this.showArray = cleanList;
  }

  ngOnInit() {}

  closeDialog = () => this.dialogRef.close();

  searchFunction = val =>
    typeof val === 'string' ? (this.search = val) : null;

  assignCompany = () => {
    this.dialogRef.close(this.array);
  };

  changeStatus = (val, item) => (item.value = val);
}
