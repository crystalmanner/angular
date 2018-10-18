import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IndicatorsService } from '../../../services/indicators.service';
import { UploadDialogComponent } from '../../../dialogs/upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-merchant-mid-accounts',
  templateUrl: './merchant-mid-accounts.component.html',
  styleUrls: ['./merchant-mid-accounts.component.scss']
})
export class MerchantMidAccountsComponent implements OnInit {
  midAccountsData = {
    rows: [
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        midAlias: 'Kyzo x5748',
        account: '5767336086957',
        gateway: 'McCormick & Company',
        descriptor: 'Oshkosh Corporation',
        processingVolume: '$ 5000.00',
        disputeMethod: 'Email',
        updateMethod: 'Online',
        status: 'Active_label',

        pathTo: '/mid-account',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        midAlias: 'Kyzo x5748',
        account: '4847392656483',
        gateway: 'Darden Restaurants',
        descriptor: 'A. O. Smith',
        processingVolume: '$ 2500.00',
        disputeMethod: 'Online',
        updateMethod: 'Online',
        status: 'Active_label',

        pathTo: '/mid-account',
        rowIncluded: true
      },
      {
        icon: {
          iconName: 'error',
          iconColor: 'error-color'
        },
        midAlias: 'Bicyc x4738',
        account: '5739257507594',
        gateway: 'Orbital Sciences ',
        descriptor: 'A. Schulman',
        processingVolume: '$ 5000.00',
        disputeMethod: 'Online',
        updateMethod: 'Fax',
        status: 'Active_label',

        pathTo: '/mid-account-error',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        midAlias: 'Tand x5749',
        account: '9275373937528',
        gateway: 'Dana Holding Corporation',
        descriptor: 'FirstEnergy Corporation',
        processingVolume: '$ 2500.00',
        disputeMethod: 'Email',
        updateMethod: 'Fax',
        status: 'Inactive_label',
        pathTo: '/mid-account',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        midAlias: 'Cater x5637',
        account: '5749572026589',
        gateway: 'Journal Communications',
        descriptor: 'Sun Capital Partners',
        processingVolume: '$ 2500.00',
        disputeMethod: 'Email',
        updateMethod: 'Online',
        status: 'Active_label',

        pathTo: '/mid-account',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        midAlias: 'Bicyc x4738',
        account: '11757372392728',
        gateway: 'Journal Communications',
        descriptor: 'McIntosh Laboratory',
        processingVolume: '$ 10,000.00',
        disputeMethod: 'Email',
        updateMethod: 'Fax',
        status: 'Active_label',
        pathTo: '/mid-account',
        rowIncluded: true
      },
      {
        icon: {
          iconName: 'error',
          iconColor: 'error-color'
        },
        midAlias: 'Time x5749',
        account: '4847392656483',
        gateway: 'Oshkosh Corporation',
        descriptor: 'O`Reilly Auto Parts',
        processingVolume: '$ 5000.00',
        disputeMethod: 'Online',
        updateMethod: 'Fax',
        status: 'Active_label',
        pathTo: '/mid-account-error',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        midAlias: 'Time x5749',
        account: '5769420575039',
        gateway: 'Dana Holding Corporation',
        descriptor: 'A&W Restaurants',
        processingVolume: '$ 2500.00',
        disputeMethod: 'Email',
        updateMethod: 'Online',
        status: 'Active_label',
        pathTo: '/mid-account',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        midAlias: 'Tand x5749',
        account: '6547393653936',
        gateway: 'Dart Container Corporation',
        descriptor: 'McGraw-Hill',
        processingVolume: '$ 5000.00',
        disputeMethod: 'Email',
        updateMethod: 'Fax',
        status: 'Active_label',
        pathTo: '/mid-account',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        midAlias: 'Toms x4638',
        account: '5767336086957',
        gateway: 'Journal Communications',
        descriptor: 'McDonald`s',
        processingVolume: '$ 5000.00',
        disputeMethod: 'Online',
        updateMethod: 'Fax',
        status: 'Active_label',
        pathTo: '/mid-account',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        midAlias: 'Lond x5436',
        account: '5767336086957',
        gateway: 'Willett Distilling Company',
        descriptor: 'O`Reilly Media',
        processingVolume: '$ 10,000.00',
        disputeMethod: 'Email',
        updateMethod: 'Online',
        status: 'Active_label',
        pathTo: '/mid-account',
        rowIncluded: true
      }
    ],
    cols: [
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
      rowSettings: ['Option 1', 'Option 2', 'divider', 'Option 3'],
      toolbarOptions: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        function: val => console.log(val)
      },
      selects: [
        {
          selected: 'All Statuses',
          options: ['All Statuses', 'Option 2', 'Option 3'],
          function: val => console.log(val)
        }
      ]
    }
  };
  constructor(
    public dialog: MatDialog,
    private indicatorsService: IndicatorsService
  ) {}

  ngOnInit() {
    this.indicatorsService.setMidAccountsIndicator('error');
  }

  uploadDialog = () => {
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {});
  };
}
