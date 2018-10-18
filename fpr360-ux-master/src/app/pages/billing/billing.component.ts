import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  billingData = {
    rows: [
      {
        accountName: 'OSI Restaurant Partners',
        service: 'Chargeback Representment',
        amount: '$51',
        qty: '44',
        per: 'Alert',
        total: '$40659',
        notes: [
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          },
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          }
        ],
        rowIncluded: true,
        pathTo: ''
      },
      {
        accountName: 'Jones Soda',
        service: 'Alert Management Fee',
        amount: '$71',
        qty: '88',
        per: 'Alert',
        total: '$35291',
        notes: 0,
        rowIncluded: true,
        pathTo: ''
      },
      {
        accountName: 'Danaher',
        service: 'Ethoca Chargeback Prevention Alerts',
        amount: '$66',
        qty: '20',
        per: 'Alert',
        total: '$94511',
        notes: 0,
        rowIncluded: true,
        pathTo: ''
      },
      {
        accountName: "McDonald's",
        service: 'Chargeback Representment - Not Fought',
        amount: '$39',
        qty: '54',
        per: 'Alert',
        total: '$86850',
        notes: [
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          },
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          },
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          },
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          }
        ],
        rowIncluded: true,
        pathTo: ''
      },
      {
        accountName: 'OSI Restaurant Partners',
        service: 'Alert Management Fee',
        amount: '$89',
        qty: '40',
        per: 'Alert',
        total: '$24869',
        notes: [
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          },
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          },
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          },
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          }
        ],
        rowIncluded: true,
        pathTo: ''
      },
      {
        accountName: "Aaron's, Inc.",
        service: 'MID Reconciliation',
        amount: '$84',
        qty: '20',
        per: 'Chargeback',
        total: '$71762',
        notes: 0,
        rowIncluded: true,
        pathTo: ''
      },
      {
        accountName: 'X-Rite',
        service: 'Chargeback Winning Compensation',
        amount: '$51',
        qty: '40',
        per: 'Chargeback',
        total: '$18662',
        notes: [
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          },
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          },
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          },
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          }
        ],
        rowIncluded: true,
        pathTo: ''
      },
      {
        accountName: 'Johnsonville Foods',
        service: 'Verifi CDRN Notification',
        amount: '$76',
        qty: '18',
        per: 'Chargeback',
        total: '$67860',
        notes: [
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          },
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          },
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          },
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          }
        ],
        rowIncluded: true,
        pathTo: ''
      },
      {
        accountName: 'Daktronics',
        service: 'MID Reconciliation',
        amount: '$75',
        qty: '7',
        per: 'Alert',
        total: '$71889',
        notes: [
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          }
        ],
        rowIncluded: true,
        pathTo: ''
      },
      {
        accountName: 'Jones Soda',
        service: 'Verifi CDRN Notification',
        amount: '$52',
        qty: '78',
        per: '% on Recovered Funds',
        total: '$2207',
        notes: [
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          },
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          },
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          },
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          }
        ],
        rowIncluded: true,
        pathTo: ''
      },
      {
        accountName: 'Abbott Laboratories',
        service: 'Verifi CDRN Notification',
        amount: '$46',
        qty: '54',
        per: 'Chargeback',
        total: '$51172',
        notes: 0,
        rowIncluded: true,
        pathTo: ''
      },
      {
        accountName: 'Jones Soda',
        service: 'Chargeback Representment',
        amount: '$85',
        qty: '66',
        per: 'Alert',
        total: '$90582',
        notes: [
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          },
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          }
        ],
        rowIncluded: true,
        pathTo: ''
      },
      {
        accountName: 'Dart Container Corporation',
        service: 'Verifi CDRN Notification',
        amount: '$23',
        qty: '83',
        per: 'Alert',
        total: '$86636',
        notes: 0,
        rowIncluded: true,
        pathTo: ''
      },
      {
        accountName: 'Wienerschnitzel',
        service: 'Chargeback Representment - Not Fought',
        amount: '$8',
        qty: '46',
        per: 'Alert',
        total: '$34171',
        notes: 0,
        rowIncluded: true,
        pathTo: ''
      },
      {
        accountName: 'a21, Inc.',
        service: 'Chargeback Representment',
        amount: '$88',
        qty: '23',
        per: 'Alert',
        total: '$62130',
        notes: [
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          },
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          },
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          },
          {
            date: '04 Nov 2018',
            note:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat. Lorem ipsum dolor sit amet.'
          }
        ],
        rowIncluded: true,
        pathTo: ''
      }
    ],
    cols: [
      { name: 'Account Name' },
      { name: 'Service' },
      { name: 'Amount' },
      { name: 'QTY' },
      { name: 'Per' },
      { name: 'Total' },
      { name: 'Notes' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'Account Name',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: true,
          notesIcon: false
        },
        {
          name: 'Service',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false,
          notesIcon: false
        },
        {
          name: 'Amount',
          included: true,
          rightAlign: true,
          width: 128,
          bold: false,
          leftFixed: false,
          notesIcon: false
        },
        {
          name: 'QTY',
          included: true,
          rightAlign: true,
          width: 96,
          bold: false,
          leftFixed: false,
          notesIcon: false
        },
        {
          name: 'Per',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false,
          notesIcon: false
        },
        {
          name: 'Total',
          included: true,
          rightAlign: true,
          width: 128,
          bold: false,
          leftFixed: false,
          notesIcon: false
        },
        {
          name: 'Notes',
          included: true,
          rightAlign: false,
          width: 96,
          bold: false,
          leftFixed: false,
          notesIcon: true
        }
      ],
      rowSettings: ['Option 1', 'Option 2', 'divider', 'Option 3'],
      toolbarOptions: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        function: val => console.log(val)
      },
      selects: [
        {
          selected: 'All Months',
          options: ['All Months', 'Option 2', 'Option 3'],
          function: val => console.log(val)
        },
        {
          selected: 'All Years',
          options: ['All Years', 'Option 2', 'Option 3'],
          function: val => console.log(val)
        },
        {
          selected: 'All Billing Periods',
          options: ['All Billing Periods', 'Option 2', 'Option 3'],
          function: val => console.log(val)
        },
        {
          selected: 'All Services',
          options: ['All Services', 'Option 2', 'Option 3'],
          function: val => console.log(val)
        }
      ],
      downloadButton: {
        function: val => console.log(val)
      }
    }
  };
  constructor() {}

  ngOnInit() {}
}
