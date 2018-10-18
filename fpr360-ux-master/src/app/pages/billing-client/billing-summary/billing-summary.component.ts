import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing-summary',
  templateUrl: './billing-summary.component.html',
  styleUrls: ['./billing-summary.component.scss']
})
export class BillingSummaryComponent implements OnInit {
  readonly = false;
  invoiceDataLine = [
    {
      label: 'Outstanding Invoices',
      value: '3'
    },
    {
      label: 'Payment required in',
      value: '5 Days'
    },
    {
      label: 'Next invoice issued on',
      value: 'November 15, 2017'
    },
    {
      label: 'Balance Due',
      value: '$855.00',
      balance: true
    }
  ];

  invoiceData = {
    rows: [
      {
        service: 'Chargeback Representment',
        qty: '44',
        rate: '$1',
        per: 'Alert',
        amount: '$39',
        totalRow: false
      },
      {
        service: 'Alert Management Fee',
        qty: '12',
        rate: '$1',
        per: 'Alert',
        amount: '$28',
        totalRow: false
      },
      {
        service: 'Chargeback Representment',
        qty: '1',
        rate: '$0',
        per: 'Alert',
        amount: '$94',
        totalRow: false
      },
      {
        service: 'Ethoca Chargeback Prevention Alerts',
        qty: '58',
        rate: '$1',
        per: 'Chargeback',
        amount: '$2',
        totalRow: false
      },
      {
        service: 'Total',
        qty: '',
        rate: '',
        per: '',
        amount: '$273',
        totalRow: true
      }
    ],
    cols: [
      { name: 'Service' },
      { name: 'QTY' },
      { name: 'Rate' },
      { name: 'Per' },
      { name: 'Amount' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'Service',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: true
        },
        {
          name: 'QTY',
          included: true,
          rightAlign: false,
          width: 96,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Rate',
          included: true,
          rightAlign: false,
          width: 96,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Per',
          included: true,
          rightAlign: false,
          width: 128,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Amount',
          included: true,
          rightAlign: true,
          width: 96,
          bold: false,
          leftFixed: false
        }
      ],
      rowSettings: ['Option 1', 'Option 2', 'divider', 'Option 3'],
      totalRow: true,
      totalValue: '$273'
    }
  };

  previousInvoices = {
    rows: [
      {
        month: 'February',
        year: '2017',
        invoice: '#51404',
        billingPeriod: '1st - 15th',
        balanceDue: '$240',
        dueDate: '22 Apr 2017',
        paymentDate: '21 Apr 2017',
        paymentMethod: 'Auto ACH',
        status: 'Declined_label',
        amount: '$130'
      },
      {
        month: 'July',
        year: '2017',
        invoice: '#77712',
        billingPeriod: '16th - 30th',
        balanceDue: '$820',
        dueDate: '06 Aug 2017',
        paymentDate: '08 Jan 2017',
        paymentMethod: 'Client ACH',
        status: 'Declined_label',
        amount: '$167'
      }
    ],
    cols: [
      { name: 'Month' },
      { name: 'Year' },
      { name: 'Invoice' },
      { name: 'Billing Period' },
      { name: 'Balance Due' },
      { name: 'Due Date' },
      { name: 'Payment Date' },
      { name: 'Payment Method' },
      { name: 'Status' },
      { name: 'Amount' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'Month',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: true
        },
        {
          name: 'Year',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Invoice',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Billing Period',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Balance Due',
          included: true,
          rightAlign: true,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Due Date',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Payment Date',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Payment Method',
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
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Amount',
          included: true,
          rightAlign: true,
          width: 0,
          bold: false,
          leftFixed: false
        }
      ],
      rowSettings: ['Option 1', 'Option 2', 'divider', 'Option 3']
    }
  };

  invoiceDate = '31 Oct, 2017';
  dueDate = '30 Nov, 2017';
  paymentTerm = 'Net 5';
  billingPeriod = 'October 1st -15th 2017';

  constructor() {}

  ngOnInit() {}

  backDate = date => console.log(date);
}
