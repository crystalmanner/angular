import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-crm',
  templateUrl: './settings-crm.component.html',
  styleUrls: ['./settings-crm.component.scss']
})
export class SettingsCrmComponent implements OnInit {
  settingsCrmData = {
    rows: [
      {
        crmName: 'A&W Restaurants',
        url:
          '<a href="https://www.mreports.com/portal/">https://www.mreports.com/portal/</a>',
        integration: 'Master',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        crmName: 'McGraw-Hill',
        url:
          '<a href="https://www.mreports.com/portal/start/APPS">https://www.mreports.com/portal/start/APPS</a>',
        integration: 'Multiple',
        status: 'Legacy_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        crmName: 'Dart Container Corporation',
        url: '<a href="https://wep.wirecard.com">https://wep.wirecard.com</a>',
        integration: 'API',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        crmName: 'Weyerhaeuser',
        url: '<a href="https://myclientline.net">https://myclientline.net</a>',
        integration: 'Multiple',
        status: 'Legacy_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        crmName: 'Dana Holding Corporation',
        url:
          '<a href="https://www.mreports.com/portal/start/">https://www.mreports.com/portal/start/</a>',
        integration: 'Master',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        crmName: 'Firstsource',
        url:
          '<a href="https://cp.bluesnap.com/jsp/developer_login.jsp">https://cp.bluesnap.com/jsp/developer_login.jsp</a>',
        integration: 'Web Only',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        crmName: 'Orbital Sciences Corporation',
        url: '<a href="https://www.nourl.com">https://www.nourl.com</a>',
        integration: 'Master',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        crmName: 'Danaher',
        url:
          '<a href="www.braintreepayments.com">www.braintreepayments.com</a>',
        integration: 'Scrapping',
        status: 'Legacy_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        crmName: 'Filter Forge Inc.',
        url:
          '<a href="https://www.emerchantview.com/">https://www.emerchantview.com/</a>',
        integration: 'API',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        crmName: 'Fifth Third Bancorp.',
        url:
          '<a href="https://merchant.381808.com">https://merchant.381808.com</a>',
        integration: 'Master',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        crmName: 'Subway',
        url:
          '<a href="https://www.mreports.com/portal/start/APPS">https://www.mreports.com/portal/start/APPS</a>',
        integration: 'Multiple',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        crmName: 'A&W Restaurants',
        url: '<a href="https://wep.wirecard.com">https://wep.wirecard.com</a>',
        integration: 'Web Only',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        crmName: 'Darden Restaurants',
        url: '<a href="https://myclientline.net">https://myclientline.net</a>',
        integration: 'Master',
        status: 'Active_label',
        rowIncluded: true,
        pathTo: ''
      }
    ],
    cols: [
      { name: 'CRM Name' },
      { name: 'URL' },
      { name: 'Integration' },
      { name: 'Status' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'CRM Name',
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
