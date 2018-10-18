import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AddFieldDialogComponent } from '../../../../../dialogs/add-field-dialog/add-field-dialog.component';
import { AddValuesDialogComponent } from '../../../../../dialogs/add-values-dialog/add-values-dialog.component';

const URL_REGEX = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;

@Component({
  selector: 'app-new-processor-details',
  templateUrl: './new-processor-details.component.html',
  styleUrls: ['./new-processor-details.component.scss']
})
export class NewProcessorDetailsComponent implements OnInit {
  readonly = false;
  processorAlias = '';
  location = {
    value: '',
    options: [
      {
        value: 'Onshore',
        viewValue: 'Onshore'
      },
      {
        value: 'Option 2',
        viewValue: 'Option 2'
      },
      {
        value: 'Option 3',
        viewValue: 'Option 3'
      }
    ]
  };
  twoFactorAuthorization = false;
  url = '';
  urlFormControl = new FormControl('', [Validators.pattern(URL_REGEX)]);
  integrations = [
    {
      check: false,
      name: 'Manual',
      fields: [],
      showValues: false
    },
    {
      check: false,
      name: 'Scraping',
      fields: [],
      showValues: false
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

  ngOnInit() {}

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
      console.log(this.valuesList);
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
}
