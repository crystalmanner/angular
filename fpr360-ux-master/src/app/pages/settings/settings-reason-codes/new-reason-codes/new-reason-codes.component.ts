import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddValuesDialogComponent } from '../../../../dialogs/add-values-dialog/add-values-dialog.component';
import { CardCodesDialogComponent } from '../../../../dialogs/card-codes-dialog/card-codes-dialog.component';
import { SelectDialogComponent } from '../../../../dialogs/select-dialog/select-dialog.component';

@Component({
  selector: 'app-new-reason-codes',
  templateUrl: './new-reason-codes.component.html',
  styleUrls: ['./new-reason-codes.component.scss']
})
export class NewReasonCodesComponent implements OnInit {
  reasonCodesName = 'Category';
  categories = [
    {
      value: 'Fraudulent Transaction',
      viewValue: 'Fraudulent Transaction'
    },
    {
      value: 'Services not provided or merchandise not received',
      viewValue: 'Services not provided or merchandise not received'
    },
    {
      value: 'Cardholder does not recognize transaction',
      viewValue: 'Cardholder does not recognize transaction'
    },
    {
      value: 'Credit not processed',
      viewValue: 'Credit not processed'
    },
    {
      value: 'Duplicate processing',
      viewValue: 'Duplicate processing'
    },
    {
      value: 'Incorrect transaction amount or account number',
      viewValue: 'Incorrect transaction amount or account number'
    },
    {
      value: 'Cancelled recurring transaction',
      viewValue: 'Cancelled recurring transaction'
    },
    {
      value: 'Transaction documentation request',
      viewValue: 'Transaction documentation request'
    },
    {
      value: 'Cardholder disputes of quality of goods & services',
      viewValue: 'Cardholder disputes of quality of goods & services'
    },
    {
      value: 'Potential chargeback',
      viewValue: 'Potential chargeback'
    },
    {
      value: 'Pre-Arbitration',
      viewValue: 'Pre-Arbitration'
    },
    {
      value: 'Declined authorization',
      viewValue: 'Declined authorization'
    },
    {
      value: 'Sevice Cancelled',
      viewValue: 'Sevice Cancelled'
    }
  ];
  descriptions = [];
  reasonCodes = [
    {
      name: 'Visa',
      value: ''
    },
    {
      name: 'Master',
      value: ''
    },
    {
      name: 'Discover',
      value: ''
    },
    {
      name: 'AMEX',
      value: ''
    }
  ];
  descriptionsIndex: number;
  showCodes = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  removeItem = (item, val) => {
    const index = item.indexOf(val);
    item.splice(index, 1);

    this.reasonCodes = [];

    this.showCodes = false;
  };

  acviveFunction = item => {
    const index = this.descriptions.indexOf(item);
    this.descriptionsIndex = index;

    for (let i of this.descriptions) {
      i.active = false;
    }
    item.active = true;

    this.reasonCodes = item.reasonCodes;

    this.showCodes = true;
  };

  selectReasonCategory = () => {
    const dialogRef = this.dialog.open(SelectDialogComponent, {
      data: {
        dialogName: 'Select Reason Category',
        label: 'Category',
        array: this.categories
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.reasonCodesName = result;
      }
    });
  };

  addDescriptionDialog = () => {
    const dialogRef = this.dialog.open(AddValuesDialogComponent, {
      data: {
        dialogName: 'New Reason Description',
        values: this.descriptions,
        reasonCode: true,
        reasonCodes: this.reasonCodes
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.descriptions = result;
        console.log(this.descriptions);
      }
    });
  };

  reasonCodesDialog = () => {
    const dialogRef = this.dialog.open(CardCodesDialogComponent, {
      data: {
        array: this.descriptions[this.descriptionsIndex].reasonCodes
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.descriptions[this.descriptionsIndex].reasonCodes = result;
        this.reasonCodes = result;
      }
    });
  };

  removeReasonCode = item => {
    item.value = '';
  };
}
