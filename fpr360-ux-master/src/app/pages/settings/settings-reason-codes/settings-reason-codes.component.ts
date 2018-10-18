import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { UploadDialogComponent } from '../../../dialogs/upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-settings-reason-codes',
  templateUrl: './settings-reason-codes.component.html',
  styleUrls: ['./settings-reason-codes.component.scss']
})
export class SettingsReasonCodesComponent implements OnInit {
  settingsReasonCodeData = {
    rows: [
      {
        category: 'Fraudulent Transaction',
        description: 'Request for copy bearing signature',
        visa: '897',
        master: '749',
        discover: '890',
        amex: '890',
        rowIncluded: true
      },
      {
        category: 'Services not provided or merchandise not received',
        description: 'Goods/services not received or only partially received',
        visa: '720',
        master: '671',
        discover: '731',
        amex: '737',
        rowIncluded: true
      },
      {
        category: 'Cardholder does not recognize transaction',
        description: 'Chip Liability Shift',
        visa: '456',
        master: '626',
        discover: '940',
        amex: '551',
        rowIncluded: true
      },
      {
        category: 'Credit not processed',
        description: 'Services, Merchandise or Cash not Received',
        visa: '597',
        master: '389',
        discover: '713',
        amex: '663',
        rowIncluded: true
      },
      {
        category: 'Duplicate processing',
        description: 'No cardholder authorization',
        visa: '250',
        master: '956',
        discover: '952',
        amex: '781',
        rowIncluded: true
      },
      {
        category: 'Incorrect transaction amount or account number',
        description: 'Dissatisfied | Quality of Goods or Services',
        visa: '322',
        master: '336',
        discover: '216',
        amex: '398',
        rowIncluded: true
      },
      {
        category: 'Cancelled recurring transaction',
        description: 'Transaction documentation request',
        visa: '630',
        master: '390',
        discover: '469',
        amex: '824',
        rowIncluded: true
      },
      {
        category: 'Transaction documentation request',
        description: 'Goods/services not received or only partially received',
        visa: '174',
        master: '311',
        discover: '311',
        amex: '975',
        rowIncluded: true
      },
      {
        category: 'Cardholder disputes of quality of goods & services',
        description: 'Request credit for overcharge',
        visa: '899',
        master: '659',
        discover: '829',
        amex: '713',
        rowIncluded: true
      },
      {
        category: 'Potential chargeback',
        description: 'Cardholder disputes of quality of goods & services',
        visa: '443',
        master: '488',
        discover: '409',
        amex: '749',
        rowIncluded: true
      },
      {
        category: 'Pre-Arbitration',
        description: 'Incorrect transaction amount or account number',
        visa: '345',
        master: '846',
        discover: '186',
        amex: '827',
        rowIncluded: true
      },
      {
        category: 'Declined authorization',
        description: 'Dissatisfied | Quality of Goods or Services',
        visa: '573',
        master: '997',
        discover: '728',
        amex: '553',
        rowIncluded: true
      },
      {
        category: 'Sevice Cancelled',
        description: 'Declined authorization',
        visa: '937',
        master: '688',
        discover: '899',
        amex: '630',
        rowIncluded: true
      },
      {
        category: 'Request for copy bearing signature',
        description: 'Request for copy bearing signature',
        visa: '795',
        master: '586',
        discover: '643',
        amex: '615',
        rowIncluded: true
      }
    ],
    cols: [
      { name: 'Category' },
      { name: 'Description' },
      { name: 'Visa' },
      { name: 'Master' },
      { name: 'Discover' },
      { name: 'AMEX' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'Category',
          included: true,
          rightAlign: false,
          width: 0,
          bold: true,
          leftFixed: true
        },
        {
          name: 'Description',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: true
        },
        {
          name: 'Visa',
          included: true,
          rightAlign: false,
          width: 92,
          bold: false,
          leftFixed: true
        },
        {
          name: 'Master',
          included: true,
          rightAlign: false,
          width: 92,
          bold: false,
          leftFixed: true
        },
        {
          name: 'Discover',
          included: true,
          rightAlign: false,
          width: 92,
          bold: false,
          leftFixed: true
        },
        {
          name: 'AMEX',
          included: true,
          rightAlign: false,
          width: 92,
          bold: false,
          leftFixed: true
        }
      ],
      toolbarOptions: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        function: val => console.log(val)
      },
      rowSettings: ['Option 1', 'Option 2', 'divider', 'Option 3'],
      selects: [
        {
          selected: 'All Categories',
          options: ['All Categories', 'Option 2', 'Option 3'],
          function: val => console.log(val)
        },
        {
          selected: 'All Card Types',
          options: ['All Card Types', 'Option 2', 'Option 3'],
          function: val => console.log(val)
        }
      ]
    }
  };

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  uploadDialog = () => {
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {});
  };
}
