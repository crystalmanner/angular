import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-payment-processor',
  templateUrl: './settings-payment-processor.component.html',
  styleUrls: ['./settings-payment-processor.component.scss']
})
export class SettingsPaymentProcessorComponent implements OnInit {
  settingsPaymentProcessorData = {
    rows: [
      {
        processorName: 'Sun Products',
        alias: 'SUNP',
        url: 'https://merchant.381808.com',
        location: 'Off-shore',
        integration: 'Multiple',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: '/settings/processor/details'
      },
      {
        processorName: 'Fifth Third Bancorp.',
        alias: 'FIFT',
        url: 'https://www.mreports.com/portal/start/APPS',
        location: 'On-shore',
        integration: 'API',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: '/settings/processor/details'
      },
      {
        processorName: 'First Hawaiian Bank',
        alias: 'FIRS',
        url: 'https://wep.wirecard.com',
        location: 'On-shore',
        integration: 'API',
        status: 'Legacy_label',
        rowIncluded: true,
        pathTo: '/settings/processor/details'
      },
      {
        processorName: 'Sun-Maid Growers of California',
        alias: 'SUNM',
        url: 'https://myclientline.net',
        location: 'On-shore',
        integration: 'Web only',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: '/settings/processor/details'
      },
      {
        processorName: 'McIlhenny Company',
        alias: 'MCIL',
        url: 'https://www.mreports.com/portal/start/basecommerce',
        location: 'Off-shore',
        integration: 'Multiple',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: '/settings/processor/details'
      },
      {
        processorName: 'Sun Products',
        alias: 'SUNP',
        url: 'https://cp.bluesnap.com/jsp/developer_login.jsp',
        location: 'On-shore',
        integration: 'On-shore',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: '/settings/processor/details'
      },
      {
        processorName: 'Orbital Sciences Corporation',
        alias: 'ORBI',
        url: 'https://www.nourl.com',
        location: 'Off-shore',
        integration: 'Multiple',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: '/settings/processor/details'
      },
      {
        processorName: 'D. R. Horton',
        alias: 'DRHO',
        url: 'www.braintreepayments.com',
        location: 'On-shore',
        integration: 'Web only',
        status: 'Legacy_label',
        rowIncluded: true,
        pathTo: '/settings/processor/details'
      },
      {
        processorName: 'Johnsonville Foods',
        alias: 'JOHN',
        url: 'https://www.emerchantview.com/MerchantClientWeb/',
        location: 'On-shore',
        integration: 'API',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: '/settings/processor/details'
      },
      {
        processorName: 'Orbital Sciences Corporation',
        alias: 'ORBI',
        url: 'https://merchant.381808.com',
        location: 'On-shore',
        integration: 'Web only',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: '/settings/processor/details'
      },
      {
        processorName: 'The McClatchy Company',
        alias: 'THEM',
        url: 'https://www.mreports.com/portal/start/APPS',
        location: 'On-shore',
        integration: 'Multiple',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: '/settings/processor/details'
      },
      {
        processorName: 'Daktronics',
        alias: 'DAKT',
        url: 'https://wep.wirecard.com',
        location: 'On-shore',
        integration: 'Web only',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: '/settings/processor/details'
      },
      {
        processorName: 'a21, Inc.',
        alias: 'A21I',
        url: 'https://myclientline.net',
        location: 'Off-shore',
        integration: 'Multiple',
        status: 'Legacy_label',
        rowIncluded: true,
        pathTo: '/settings/processor/details'
      }
    ],
    cols: [
      { name: 'Processor Name' },
      { name: 'Alias' },
      { name: 'URL' },
      { name: 'Location' },
      { name: 'Integration' },
      { name: 'Status' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'Processor Name',
          included: true,
          rightAlign: false,
          width: 0,
          bold: true,
          leftFixed: true
        },
        {
          name: 'Alias',
          included: true,
          rightAlign: false,
          width: 96,
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
          name: 'Location',
          included: true,
          rightAlign: false,
          width: 128,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Integration',
          included: true,
          rightAlign: false,
          width: 128,
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
      },
      rowSettings: ['Option 1', 'Option 2', 'divider', 'Option 3'],
      selects: [
        {
          selected: 'All Locations',
          options: ['All Locations', 'Option 2', 'Option 3'],
          function: val => console.log(val)
        },
        {
          selected: 'All Integrations',
          options: ['All Integrations', 'Option 2', 'Option 3'],
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
  constructor() {}

  ngOnInit() {}
}
