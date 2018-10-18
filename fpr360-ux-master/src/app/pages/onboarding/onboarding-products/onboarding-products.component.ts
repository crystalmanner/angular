import { Component, OnInit } from '@angular/core';
import { IndicatorsService } from '../../../services/indicators.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UploadDialogComponent } from '../../../dialogs/upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-onboarding-products',
  templateUrl: './onboarding-products.component.html',
  styleUrls: ['./onboarding-products.component.scss']
})
export class OnboardingProductsComponent implements OnInit {
  onboardingProducts = {
    rows: [
      {
        productName: 'KWIK-VIS™ D',
        price: '$ 98,99',
        url: 'https://merchant.381808.com',
        type: 'SS',
        refundTerms: '14',
        homepage: 'Check',
        checkoutPage: 'Check',
        termsCond: 'Close',

        pathTo: '/onboarding/products/product',
        rowIncluded: true
      },
      {
        productName: 'McGraw-Hill',
        price: '$ 259.99',
        url: 'https://www.mreports.com/portal/start/APPS',
        type: 'T&R',
        refundTerms: '14',
        homepage: 'Check',
        checkoutPage: 'Check',
        termsCond: 'Check',

        pathTo: '/onboarding/products/product',
        rowIncluded: true
      },
      {
        productName: 'First Hawaiian Bank',
        price: '$ 98.99',
        url: 'https://wep.wirecard.com',
        type: 'SS & R',
        refundTerms: '14',
        homepage: 'Check',
        checkoutPage: 'Check',
        termsCond: 'Check',

        pathTo: '/onboarding/products/product',
        rowIncluded: true
      },
      {
        productName: 'FirstEnergy Corporation',
        price: '$ 259.99',
        url: 'https://myclientline.net',
        type: 'SS',
        refundTerms: '14',
        homepage: 'Check',
        checkoutPage: 'Check',
        termsCond: 'Check',

        pathTo: '/onboarding/products/product',
        rowIncluded: true
      },
      {
        productName: 'KWIK-VIS™ D',
        price: '$ 98,99',
        url: 'https://merchant.381808.com',
        type: 'SS',
        refundTerms: '14',
        homepage: 'Check',
        checkoutPage: 'Check',
        termsCond: 'Check',

        pathTo: '/onboarding/products/product',
        rowIncluded: true
      },
      {
        productName: 'McGraw-Hill',
        price: '$ 259.99',
        url: 'https://www.mreports.com/portal/start/APPS',
        type: 'T&R',
        refundTerms: '14',
        homepage: 'Check',
        checkoutPage: 'Check',
        termsCond: 'Check',

        pathTo: '/onboarding/products/product',
        rowIncluded: true
      },
      {
        productName: 'First Hawaiian Bank',
        price: '$ 98.99',
        url: 'https://wep.wirecard.com',
        type: 'SS & R',
        refundTerms: '14',
        homepage: 'Check',
        checkoutPage: 'Check',
        termsCond: 'Check',

        pathTo: '/onboarding/products/product',
        rowIncluded: true
      },
      {
        productName: 'FirstEnergy Corporation',
        price: '$ 259.99',
        url: 'https://myclientline.net',
        type: 'SS',
        refundTerms: '14',
        homepage: 'Check',
        checkoutPage: 'Check',
        termsCond: 'Check',

        pathTo: '/onboarding/products/product',
        rowIncluded: true
      }
    ],
    cols: [
      { name: 'Product Name' },
      { name: 'Price' },
      { name: 'URL' },
      { name: 'Type' },
      { name: 'Refund Terms' },
      { name: 'Homepage' },
      { name: 'Checkout Page' },
      { name: 'Terms Cond.' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'Product Name',
          included: true,
          rightAlign: false,
          width: 0,
          bold: true,
          leftFixed: true
        },
        {
          name: 'Price',
          included: true,
          rightAlign: true,
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
          name: 'Type',
          included: true,
          rightAlign: true,
          width: 128,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Refund Terms',
          included: true,
          rightAlign: true,
          width: 128,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Homepage',
          included: true,
          rightAlign: true,
          width: 128,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Checkout Page',
          included: true,
          rightAlign: true,
          width: 128,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Terms Cond.',
          included: true,
          rightAlign: true,
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

  ngOnInit() {}

  uploadDialog = () => {
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      autoFocus: false
    });
    this.indicatorsService.setProductsIndicator('true');
    dialogRef.afterClosed().subscribe(result => {});
  };
}
