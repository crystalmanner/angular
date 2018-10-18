import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'lodash';

@Component({
  selector: 'app-add-values-dialog',
  templateUrl: './add-values-dialog.component.html',
  styleUrls: ['./add-values-dialog.component.scss']
})
export class AddValuesDialogComponent implements OnInit {
  values = [];
  newValues = [];
  focusEl: boolean;
  emptyField = false;

  constructor(
    public dialogRef: MatDialogRef<AddValuesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.newValues = _.cloneDeep(data.values);

    if (this.data.subIndustry) {
      this.values.push({
        value: '',
        active: false,
        chargebackFields: this.data.chargebackFieldsList,
        focusEl: true
      });
    } else if (this.data.reasonCode) {
      this.values.push({
        value: '',
        active: false,
        reasonCodes: this.data.reasonCodes,
        focusEl: true
      });
    } else if (this.data.industry) {
      this.values.push({
        value: '',
        active: false,
        subIndustry: []
      });
    } else {
      this.values.push({
        value: '',
        viewValue: '',
        focusEl: true
      });
    }
  }

  ngOnInit() {}

  addField = () => {
    if (this.data.subIndustry) {
      this.values.push({
        value: '',
        active: false,
        chargebackFields: this.data.chargebackFieldsList,
        focusEl: true
      });
    } else if (this.data.reasonCode) {
      this.values.push({
        value: '',
        active: false,
        reasonCodes: this.data.reasonCodes,
        focusEl: true
      });
    } else if (this.data.industry) {
      this.values.push({
        value: '',
        active: false,
        subIndustry: []
      });
    } else {
      this.values.push({
        value: '',
        viewValue: '',
        focusEl: true
      });
    }
  };

  removeItem = item => {
    const index = this.values.indexOf(item);
    this.values.splice(index, 1);
    this.emptyCheck(this.values);
  };

  closeDialog = () => this.dialogRef.close();

  createFunction = () => {
    if (this.data.subIndustry) {
      for (let i of this.values) {
        this.newValues.push({
          value: i.value,
          active: false,
          chargebackFields: i.chargebackFields
        });
      }
    } else if (this.data.reasonCode) {
      for (let i of this.values) {
        this.newValues.push({
          value: i.value,
          active: false,
          reasonCodes: this.data.reasonCodes
        });
      }
    } else if (this.data.industry) {
      for (let i of this.values) {
        this.newValues.push({
          value: i.value,
          active: false,
          subIndustry: []
        });
      }
    } else {
      for (let i of this.values) {
        this.newValues.push({
          value: i.value,
          viewValue: i.value
        });
      }
    }
    this.dialogRef.close(this.newValues);
  };

  emptyCheck = array => {
    let n = 0;
    for (let item of array) {
      item.value === '' ? n++ : null;
    }
    n ? (this.emptyField = true) : (this.emptyField = false);
  };

  onKey = (event: any) => {
    event.target.value.length > 0
      ? (this.emptyField = false)
      : (this.emptyField = true);
  };
}
