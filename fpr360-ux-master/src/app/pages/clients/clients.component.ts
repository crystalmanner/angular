import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { UploadDialogComponent } from '../../dialogs/upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clientsData = {
    rows: [
      {
        company: 'Filter Forge Inc.',
        merchant: 'Whataburger',
        gateway: 'Whataburger',
        account: '3757306783729',
        descriptor: 'Dart Container Corporation',
        processingCap: '$ 740.55',
        transDataSource: 'Online',
        pathTo: '/company/details',
        rowIncluded: true
      },
      {
        company: 'Filter Forge Inc.',
        merchant: 'STX',
        gateway: 'Oshkosh Corporation',
        account: '5739257507594',
        descriptor: 'Daktronics',
        processingCap: '$ 117.59',
        transDataSource: 'Multiple',
        pathTo: '/company/details',
        rowIncluded: true
      },
      {
        company: 'Filter Forge Inc.',
        merchant: 'Sun Products',
        gateway: 'A. Schulman',
        account: '8265840205749',
        descriptor: 'White Castle',
        processingCap: '$ 474.55',
        transDataSource: 'Multiple',
        pathTo: '/company/details',
        rowIncluded: true
      },
      {
        company: 'Filter Forge Inc.',
        merchant: 'White Castle',
        gateway: 'Daktronics',
        account: '5749305748579',
        descriptor: 'Sun-Maid Growers of California',
        processingCap: '$ 279.44',
        transDataSource: 'Email',
        pathTo: '/company/details',
        rowIncluded: true
      },
      {
        company: 'Filter Forge Inc.',
        merchant: 'OSI Restaurant Partners',
        gateway: 'McGraw-Hill',
        account: '5749572026589',
        descriptor: 'FirstEnergy Corporation',
        processingCap: '$ 641.52',
        transDataSource: 'Online',
        pathTo: '/company/details',
        rowIncluded: true
      },
      {
        company: 'Filter Forge Inc.',
        merchant: 'OSI Restaurant Partners',
        gateway: 'McIlhenny Company',
        account: '6547393653936',
        descriptor: 'A&W Restaurants',
        processingCap: '$ 942.32',
        transDataSource: 'Multiple',
        pathTo: '/company/details',
        rowIncluded: true
      },
      {
        company: 'Fifth Third Bancorp.',
        merchant: 'Whataburger',
        gateway: 'Whataburger',
        account: '3757306783729',
        descriptor: 'Dart Container Corporation',
        processingCap: '$ 740.55',
        transDataSource: 'McGraw-Hill',
        pathTo: '/company/details',
        rowIncluded: true
      },
      {
        company: 'Aaron`s, Inc.',
        merchant: 'Aaron`s, Inc.',
        gateway: 'McCormick & Company',
        account: '3757306783729',
        descriptor: 'O`Reilly Media',
        processingCap: '$ 964.83',
        transDataSource: 'Online',
        pathTo: '/company/details',
        rowIncluded: true
      },
      {
        company: 'Aaron`s, Inc.',
        merchant: 'Dana Holding ',
        gateway: 'Juniper Networks',
        account: '8265840205749',
        descriptor: 'McCormick & Company',
        processingCap: '$ 726.34',
        transDataSource: 'Online',
        pathTo: '/company/details',
        rowIncluded: true
      },
      {
        company: 'Aaron`s, Inc.',
        merchant: 'Willett Distilling ',
        gateway: 'Journal Communications',
        account: '5739257507594',
        descriptor: 'McGraw-Hill',
        processingCap: '$ 178.29',
        transDataSource: 'Fax',
        pathTo: '/company/details',
        rowIncluded: true
      },
      {
        company: 'Aaron`s, Inc.',
        merchant: 'X-Rite',
        gateway: 'McDonald`s',
        account: '4559362565848',
        descriptor: 'Danaher',
        processingCap: '$ 221.6',
        transDataSource: 'Online',
        pathTo: '/company/details',
        rowIncluded: true
      },
      {
        company: 'Sun Capital Partners',
        merchant: 'Filter Forge Inc.',
        gateway: 'Orbital Sciences ',
        account: '8265840205749',
        descriptor: 'Dana Holding Corporation',
        processingCap: '$ 826.26',
        transDataSource: 'Online',
        pathTo: '/company/details',
        rowIncluded: true
      },
      {
        company: 'Sun Capital Partners',
        merchant: 'McDonald`s',
        gateway: 'Journal Communications',
        account: '5749572026589',
        descriptor: 'White Castle',
        processingCap: '$ 239.55',
        transDataSource: 'Multiple',
        pathTo: '/company/details',
        rowIncluded: true
      },
      {
        company: 'Sun Capital Partners',
        merchant: 'Firstsource',
        gateway: 'OSI Restaurant Partners',
        account: '4559362565848',
        descriptor: 'Juniper Networks',
        processingCap: '$ 214.11',
        transDataSource: 'Multiple',
        pathTo: '/company/details',
        rowIncluded: true
      },
      {
        company: 'Sun Capital Partners',
        merchant: 'Daktronics',
        gateway: 'McDonald`s',
        account: '6547393653936',
        descriptor: 'Fifth Third Bancorp.',
        processingCap: '$ 653.45',
        transDataSource: 'Multiple',
        pathTo: '/company/details',
        rowIncluded: true
      }
    ],
    cols: [
      { name: 'Company' },
      { name: 'Merchant' },
      { name: 'Gateway' },
      { name: 'Account#' },
      { name: 'Descriptor' },
      { name: 'Processing Cap' },
      { name: 'Trans. Data Source' }
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
          name: 'Merchant',
          included: true,
          rightAlign: false,
          width: 0,
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
          name: 'Account#',
          included: true,
          rightAlign: true,
          width: 160,
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
          name: 'Processing Cap',
          included: true,
          rightAlign: true,
          width: 160,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Trans. Data Source',
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

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  uploadDialog = () => {
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {});
  };
}
