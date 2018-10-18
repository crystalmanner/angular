import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-payment-gateway',
  templateUrl: './settings-payment-gateway.component.html',
  styleUrls: ['./settings-payment-gateway.component.scss']
})
export class SettingsPaymentGatewayComponent implements OnInit {
  settingsPaymentGatewayData = {
    rows: [
      {
        gatewayName: 'Willett Distilling Company',
        url: 'https://merchant.381808.com',
        integration: 'Manual',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: '/settings/inner-payment-gateway'
      },
      {
        gatewayName: 'JPMorgan Chase',
        url: 'https://www.mreports.com/portal/start/APPS',
        integration: 'API',
        status: 'Legacy_label',
        rowIncluded: true,
        pathTo: '/settings/inner-payment-gateway'
      },
      {
        gatewayName: 'OSI Restaurant Partners',
        url: 'https://wep.wirecard.com',
        integration: 'API',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: '/settings/inner-payment-gateway'
      },
      {
        gatewayName: 'X-Rite',
        url: 'https://myclientline.net',
        integration: 'Scrape',
        status: 'Legacy_label',
        rowIncluded: true,
        pathTo: '/settings/inner-payment-gateway'
      },
      {
        gatewayName: 'Datavail',
        url: 'https://www.mreports.com/portal/start/basecommerce',
        integration: 'Scrape',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: '/settings/inner-payment-gateway'
      },
      {
        gatewayName: 'Subway',
        url: 'https://cp.bluesnap.com/jsp/developer_login.jsp',
        integration: 'Manual',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: '/settings/inner-payment-gateway'
      },
      {
        gatewayName: 'Whirlpool Corporation',
        url: 'https://www.nourl.com',
        integration: 'API',
        status: 'Legacy_label',
        rowIncluded: true,
        pathTo: '/settings/inner-payment-gateway'
      },
      {
        gatewayName: 'Fifth Third Bancorp.',
        url: 'www.braintreepayments.com',
        integration: 'Manual',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: '/settings/inner-payment-gateway'
      },
      {
        gatewayName: 'STX',
        url: 'https://www.emerchantview.com/MerchantClientWeb/',
        integration: 'API',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: '/settings/inner-payment-gateway'
      },
      {
        gatewayName: 'JPMorgan Chase',
        url: 'https://merchant.381808.com',
        integration: 'Manual',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: '/settings/inner-payment-gateway'
      },
      {
        gatewayName: 'Orbital Sciences Corporation',
        url: 'https://www.mreports.com/portal/start/APPS',
        integration: 'Manual',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: '/settings/inner-payment-gateway'
      },
      {
        gatewayName: 'Journal Communications',
        url: 'https://wep.wirecard.com',
        integration: 'Scrape',
        status: 'Legacy_label',
        rowIncluded: true,
        pathTo: '/settings/inner-payment-gateway'
      },
      {
        gatewayName: 'Subway',
        url: 'https://myclientline.net',
        integration: 'API',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: '/settings/inner-payment-gateway'
      }
    ],
    cols: [
      { name: 'Gateway Name' },
      { name: 'URL' },
      { name: 'Integration' },
      { name: 'Status' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'Gateway Name',
          included: true,
          rightAlign: false,
          width: 0,
          bold: true,
          leftFixed: true
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
