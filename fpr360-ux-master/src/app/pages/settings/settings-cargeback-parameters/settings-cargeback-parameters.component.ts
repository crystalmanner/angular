import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AddFieldDialogComponent } from '../../../dialogs/add-field-dialog/add-field-dialog.component';
import { AddValuesDialogComponent } from '../../../dialogs/add-values-dialog/add-values-dialog.component';

@Component({
  selector: 'app-settings-cargeback-parameters',
  templateUrl: './settings-cargeback-parameters.component.html',
  styleUrls: ['./settings-cargeback-parameters.component.scss']
})
export class SettingsCargebackParametersComponent implements OnInit {
  fields = [
    {
      fieldName: 'Currency',
      type: 'Dropdown',
      active: true,
      options: [
        {
          value: 'This is a dropdown option',
          viewValue: 'This is a dropdown option'
        },
        {
          value: 'This is a dropdown option',
          viewValue: 'This is a dropdown option'
        },
        {
          value: 'This is a dropdown option',
          viewValue: 'This is a dropdown option'
        },
        {
          value: 'This is a dropdown option',
          viewValue: 'This is a dropdown option'
        },
        {
          value: 'This is a dropdown option',
          viewValue: 'This is a dropdown option'
        }
      ]
    },
    {
      fieldName: 'Email Opt Out',
      type: 'Text Field',
      active: false,
      options: []
    },
    {
      fieldName: 'Decision Timeframe',
      type: 'Dropdown',
      active: false,
      options: [
        {
          value: 'This is a dropdown option',
          viewValue: 'This is a dropdown option'
        },
        {
          value: 'This is a dropdown option',
          viewValue: 'This is a dropdown option'
        },
        {
          value: 'This is a dropdown option',
          viewValue: 'This is a dropdown option'
        }
      ]
    },
    {
      fieldName: 'Country',
      type: 'Text Field',
      active: false,
      options: []
    },
    {
      fieldName: 'Arrival Date',
      type: 'Text Field',
      active: false,
      options: []
    }
  ];
  showValues = true;
  valuesList = [];

  constructor(public dialog: MatDialog) {}
  ngOnInit() {
    this.valuesList = this.fields[0].options;
  }
  addFieldDialog = (el, dialogName) => {
    const dialogRef = this.dialog.open(AddFieldDialogComponent, {
      data: {
        dialogName: dialogName
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        el.unshift({
          fieldName: result.fieldName,
          type: result.fieldType,
          active: false,
          options: []
        });
      }
    });
  };

  addValueDialog = dialogName => {
    const dialogRef = this.dialog.open(AddValuesDialogComponent, {
      data: {
        dialogName: dialogName,
        values: this.valuesList
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      result ? (this.valuesList = result) : null;
    });
  };

  removeItem = (item, val) => {
    const index = item.indexOf(val);
    item.splice(index, 1);
  };

  acviveFunction = item => {
    if (item.type === 'Dropdown') {
      this.valuesList = item.options;
      this.showValues = true;
    } else {
      this.valuesList = [];
      this.showValues = false;
    }
    for (let i of this.fields) {
      i.active = false;
    }
    item.active = true;
  };
}
