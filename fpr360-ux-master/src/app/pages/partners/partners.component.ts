import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { UploadDialogComponent } from '../../dialogs/upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  partnersData = {
    rows: [
      {
        company: 'Darden Restaurants',
        role: 'Reseller',
        merchantName: 'Wienerschnitzel',
        phone: '+1 927-857-2836',
        url: 'https://www.mreports.com/portal/',
        status: 'Active_label',
        pathTo: '/partner/details',
        rowIncluded: true
      },
      {
        company: 'Journal Communications',
        role: 'Reseller',
        merchantName: 'Journal Communications',
        phone: '+1 457-473-8473',
        url: 'https://cp.bluesnap.com/jsp',
        status: 'Active_label',
        pathTo: '/partner/details',
        rowIncluded: true
      },
      {
        company: 'OSI Restaurant Partners',
        role: 'Referral',
        merchantName: 'Daktronics',
        phone: '+1 473-472-1983',
        url: 'https://www.mreports.com/portal/',
        status: 'Inactive_label',
        pathTo: '/partner/details',
        rowIncluded: true
      },
      {
        company: 'John Wiley & Sons',
        role: 'Referral',
        merchantName: 'Orbital Sciences Corporation',
        phone: '+1 472-285-5748',
        url: 'https://cp.bluesnap.com/jsp',
        status: 'Inactive_label',
        pathTo: '/partner/details',
        rowIncluded: true
      },
      {
        company: 'Sun Capital Partners',
        role: 'Referral',
        merchantName: 'John Wiley & Sons',
        phone: '+1 087-174-5728',
        url: 'https://merchant.381808.com',
        status: 'Active_label',
        pathTo: '/partner/details',
        rowIncluded: true
      },
      {
        company: 'White Castle',
        role: 'Referral',
        merchantName: 'O`Reilly Media',
        phone: '+1 472-285-5748',
        url: 'https://www.nourl.com',
        status: 'Active_label',
        pathTo: '/partner/details',
        rowIncluded: true
      },
      {
        company: 'Dana Holding Corporation',
        role: 'Referral',
        merchantName: 'First Hawaiian Bank',
        phone: '+1 383-957-2847',
        url: 'https://www.braintreepayments.com',
        status: 'Inactive_label',
        pathTo: '/partner/details',
        rowIncluded: true
      },
      {
        company: 'A&W Restaurants',
        role: 'Referral',
        merchantName: 'OSI Restaurant Partners',
        phone: '+1 457-473-8473',
        url: 'https://www.nourl.com',
        status: 'Active_label',
        pathTo: '/partner/details',
        rowIncluded: true
      },
      {
        company: 'Wienerschnitzel',
        role: 'Referral',
        merchantName: 'JPMorgan Chase',
        phone: '+1 583-287-7292',
        url: 'https://www.mreports.com/portal/',
        status: 'Active_label',
        pathTo: '/partner/details',
        rowIncluded: true
      },
      {
        company: 'Journal Communications',
        role: 'Referral',
        merchantName: 'McIlhenny Company',
        phone: '+1 472-472-9573',
        url: 'https://www.nourl.com',
        status: 'Active_label',
        pathTo: '/partner/details',
        rowIncluded: true
      },
      {
        company: 'Filter Forge Inc.',
        role: 'Referral',
        merchantName: 'Wienerschnitzel',
        phone: '+1 837-827-3747',
        url: 'https://www.emerchantview.com/',
        status: 'Active_label',
        pathTo: '/partner/details',
        rowIncluded: true
      },
      {
        company: 'First Hawaiian Bank',
        role: 'Referral',
        merchantName: 'White Castle',
        phone: '+1 927-857-2836',
        url: 'https://www.mreports.com/portal/',
        status: 'Active_label',
        pathTo: '/partner/details',
        rowIncluded: true
      },
      {
        company: 'Wienerschnitzel',
        role: 'Referral',
        merchantName: 'Darden Restaurants',
        phone: '+1 457-473-8473',
        url: 'https://www.nourl.com',
        status: 'Active_label',
        pathTo: '/partner/details',
        rowIncluded: true
      }
    ],
    cols: [
      { name: 'Company' },
      { name: 'Role' },
      { name: 'Merchant Name' },
      { name: 'Phone' },
      { name: 'URL' },
      { name: 'Status' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'Company',
          included: true,
          rightAlign: false,
          width: 0,
          bold: true,
          leftFixed: true
        },
        {
          name: 'Role',
          included: true,
          rightAlign: false,
          width: 128,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Merchant Name',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Phone',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'URL',
          included: true,
          rightAlign: false,
          width: 0,
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
      rowSettings: ['Option 1', 'Option 2', 'divider', 'Option 3'],
      toolbarOptions: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        function: val => console.log(val)
      },
      selects: [
        {
          selected: 'All Roles',
          options: ['All Roles', 'Option 2', 'Option 3'],
          function: val => console.log(val)
        },
        {
          selected: 'All Statuses',
          options: ['All Statuses', 'Option 2', 'Option 3'],
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
