import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CheckListItemsComponent } from '../../../../../dialogs/check-list-items/check-list-items.component';

@Component({
  selector: 'app-new-onboarding-merchant-products',
  templateUrl: './new-onboarding-merchant-products.component.html',
  styleUrls: ['./new-onboarding-merchant-products.component.scss']
})
export class NewOnboardingMerchantProductsComponent implements OnInit {
  merchantProductsData = {
    rows: [],
    cols: [
      { prop: 'name' },
      { name: 'Product Name' },
      { name: 'Price' },
      { name: 'URL' },
      { name: 'Type' },
      { name: 'Refund Terms' },
      { name: 'Homepage' },
      { name: 'Checkout Page' },
      { name: 'Terms &amp; Cond.' }
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
          width: 160,
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
      toolbarOptions: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        function: val => console.log(val)
      }
    }
  };

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  //add product

  dataArray = [
    {
      name: 'Product Name',
      included: true
    },
    {
      name: 'Product Name',
      included: false
    },
    {
      name: 'Product Name',
      included: true
    },
    {
      name: 'Product Name',
      included: false
    },
    {
      name: 'Product Name',
      included: true
    },
    {
      name: 'Product Name',
      included: false
    },
    {
      name: 'Product Name',
      included: true
    },
    {
      name: 'Product Name',
      included: false
    },
    {
      name: 'Product Name',
      included: true
    },
    {
      name: 'Product Name',
      included: false
    }
  ];
  dialogName = 'Products';
  addProduct(): void {
    const dialogRef = this.dialog.open(CheckListItemsComponent, {
      data: {
        dataArray: this.dataArray,
        dialogName: this.dialogName
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      result ? (this.dataArray = result) : null;
    });
  }
}
