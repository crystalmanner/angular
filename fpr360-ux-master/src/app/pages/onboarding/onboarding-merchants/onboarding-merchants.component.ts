import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IndicatorsService } from '../../../services/indicators.service';

import { UploadDialogComponent } from '../../../dialogs/upload-dialog/upload-dialog.component';
@Component({
  selector: 'app-onboarding-merchants',
  templateUrl: './onboarding-merchants.component.html',
  styleUrls: ['./onboarding-merchants.component.scss']
})
export class OnboardingMerchantsComponent implements OnInit {
  merchantsData = {
    rows: [
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        merchantName: 'JPMorgan Chase',
        industry: 'Nutrition',
        url: 'https://merchant.381808.com',
        status: 'Active_label',
        pathTo: '/onboarding/merchants/merchant/details',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        merchantName: 'Orbital Sciences ',
        industry: 'Health & Beauty',
        url: 'https://www.mreports.com/portal/start/APPS',
        status: 'Inactive_label',
        pathTo: '/onboarding/merchants/merchant/details',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        merchantName: 'Filter Forge Inc.',
        industry: 'Housewares',
        url: 'https://wep.wirecard.com',
        status: 'Legacy_label',
        pathTo: '/onboarding/merchants/merchant/details',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        merchantName: 'O`Reilly Media',
        industry: 'Nutrition',
        url: 'https://myclientline.net',
        status: 'Active_label',
        pathTo: '/onboarding/merchants/merchant/details',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        merchantName: 'McGraw-Hill',
        industry: 'Nutrition',
        url: 'https://www.mreports.com/portal/start/basecommerce',
        status: 'Inactive_label',
        pathTo: '/onboarding/merchants/merchant/details',
        rowIncluded: true
      },
      {
        icon: {
          iconName: 'error',
          iconColor: 'error-color'
        },
        merchantName: 'Filter Forge Inc.',
        industry: 'Nutrition',
        url: 'https://cp.bluesnap.com/jsp/developer_login.jsp',
        status: 'Active_label',
        pathTo: '/onboarding/merchants/merchant/details',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        merchantName: 'White Castle',
        industry: 'Health & Beauty',
        url: 'https://www.nourl.com',
        status: 'Legacy_label',
        pathTo: '/onboarding/merchants/merchant/details',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        merchantName: 'Daktronics',
        industry: 'Nutrition',
        url: 'www.braintreepayments.com',
        status: 'Inactive_label',
        pathTo: '/onboarding/merchants/merchant/details',
        rowIncluded: true
      }
    ],
    cols: [
      { name: 'Name' },
      { name: 'Industry' },
      { name: 'URL' },
      { name: 'Status' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'Merchant Name',
          included: true,
          rightAlign: false,
          width: 0,
          bold: true,
          leftFixed: true
        },
        {
          name: 'Industry',
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
      }
    }
  };

  constructor(
    public dialog: MatDialog,
    private indicatorsService: IndicatorsService
  ) {}

  ngOnInit() {
    this.indicatorsService.setMerchantsIndicator('error');
  }

  uploadDialog = () => {
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {});
  };
}
