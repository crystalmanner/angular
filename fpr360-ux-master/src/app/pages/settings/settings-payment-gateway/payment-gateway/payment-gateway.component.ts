import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AddFieldDialogComponent } from '../../../../dialogs/add-field-dialog/add-field-dialog.component';
import { AddValuesDialogComponent } from '../../../../dialogs/add-values-dialog/add-values-dialog.component';

const URL_REGEX = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.scss']
})
export class PaymentGatewayComponent implements OnInit {
  readonly = false;
  gatewayName = 'Orbital Sciences Corporation';
  twoFactorAuthorization = true;
  url = 'www.myclientline.com/login';
  urlFormControl = new FormControl('', [Validators.pattern(URL_REGEX)]);
  integrations = [
    {
      check: true,
      name: 'Manual',
      fields: [
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
      ],
      showValues: true
    },
    {
      check: false,
      name: 'API',
      fields: [],
      showValues: false
    }
  ];
  valuesList = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.valuesList = [...this.integrations[0].fields[0].options];
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

  acviveFunction = (el, item) => {
    for (let section of this.integrations) {
      for (let i of section.fields) {
        i.active = false;
      }
      section.showValues = false;
    }
    if (item.type === 'Dropdown') {
      this.valuesList = item.options;
      el.showValues = true;
    } else {
      this.valuesList = [];
      el.showValues = false;
    }
    item.active = true;
  };

  titleVal = val => console.log(val);
}
