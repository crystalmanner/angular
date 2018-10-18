import { Component, OnInit, HostListener } from '@angular/core';
import { Sort } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { UploadDialogComponent } from '../../../../../dialogs/upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-new-onboarding-merchant-mid-accounts',
  templateUrl: './new-onboarding-merchant-mid-accounts.component.html',
  styleUrls: ['./new-onboarding-merchant-mid-accounts.component.scss']
})
export class NewOnboardingMerchantMidAccountsComponent implements OnInit {
  newMidAccountsData = {
    rows: [],
    cols: [
      { prop: 'midAlias' },
      { name: 'MID Alias' },
      { name: 'Account' },
      { name: 'Gateway' },
      { name: 'Descriptor' },
      { name: 'Processing Volume' },
      { name: 'Dispute Method' },
      { name: 'Update Method' },
      { name: 'Status' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'MID Alias',
          included: true,
          rightAlign: false,
          width: 0,
          bold: true,
          leftFixed: true
        },
        {
          name: 'Account',
          included: true,
          rightAlign: true,
          width: 192,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Gateway',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Descriptor',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Processing Volume',
          included: true,
          rightAlign: true,
          width: 160,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Dispute Method',
          included: true,
          rightAlign: false,
          width: 160,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Update Method',
          included: true,
          rightAlign: false,
          width: 160,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Status',
          included: true,
          rightAlign: false,
          width: 128,
          bold: false,
          leftFixed: false
        }
      ],
      toolbarOptions: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        function: val => console.log(val)
      }
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
