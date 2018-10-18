import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing-history',
  templateUrl: './billing-history.component.html',
  styleUrls: ['./billing-history.component.scss']
})
export class BillingHistoryComponent implements OnInit {
  billingHistoryData = {
    rows: [
      {
        month: 'February',
        year: '2017',
        invoice: '#51404',
        billingPeriod: '1st - 15th',
        balanceDue: '$240',
        dueDate: '22 Apr 2017',
        paymentDate: '21 Apr 2017',
        paymentAmount: '$130',
        paymentMethod: 'Auto ACH',
        status: 'Paid_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        month: 'July',
        year: '2017',
        invoice: '#77712',
        billingPeriod: '16th - 30th',
        balanceDue: '$820',
        dueDate: '06 Aug 2017',
        paymentDate: '08 Jan 2017',
        paymentAmount: '$167',
        paymentMethod: 'Client ACH',
        status: 'Pending_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        month: 'June',
        year: '2017',
        invoice: '#96342',
        billingPeriod: '1st - 15th',
        balanceDue: '$584',
        dueDate: '30 Mar 2017',
        paymentDate: '03 Mar 2017',
        paymentAmount: '$288',
        paymentMethod: 'Client ACH',
        status: 'Declined_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        month: 'August',
        year: '2017',
        invoice: '#81552',
        billingPeriod: '16th - 30th',
        balanceDue: '$323',
        dueDate: '28 Dec 2017',
        paymentDate: '05 Feb 2017',
        paymentAmount: '$774',
        paymentMethod: 'Client ACH',
        status: 'Paid_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        month: 'December',
        year: '2017',
        invoice: '#97742',
        billingPeriod: '1st - 15th',
        balanceDue: '$234',
        dueDate: '26 Sep 2017',
        paymentDate: '28 Aug 2017',
        paymentAmount: '$448',
        paymentMethod: 'Auto ACH',
        status: 'Void_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        month: 'October',
        year: '2017',
        invoice: '#89607',
        billingPeriod: '16th - 30th',
        balanceDue: '$485',
        dueDate: '04 Oct 2017',
        paymentDate: '07 Feb 2017',
        paymentAmount: '$452',
        paymentMethod: 'Client ACH',
        status: 'Void_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        month: 'January',
        year: '2017',
        invoice: '#27685',
        billingPeriod: '1st - 15th',
        balanceDue: '$997',
        dueDate: '15 Nov 2017',
        paymentDate: '10 Mar 2017',
        paymentAmount: '$837',
        paymentMethod: 'Client ACH',
        status: 'Pending_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        month: 'February',
        year: '2017',
        invoice: '#51788',
        billingPeriod: '16th - 30th',
        balanceDue: '$517',
        dueDate: '07 Aug 2017',
        paymentDate: '30 Jun 2017',
        paymentAmount: '$845',
        paymentMethod: 'Credit Card',
        status: 'Declined_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        month: 'May',
        year: '2017',
        invoice: '#51741',
        billingPeriod: '1st - 15th',
        balanceDue: '$344',
        dueDate: '19 Jul 2017',
        paymentDate: '12 Sep 2017',
        paymentAmount: '$359',
        paymentMethod: 'Client ACH',
        status: 'Void_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        month: 'April',
        year: '2017',
        invoice: '#77867',
        billingPeriod: '16th - 30th',
        balanceDue: '$356',
        dueDate: '17 Mar 2017',
        paymentDate: '16th - 30th',
        paymentAmount: '$721',
        paymentMethod: 'Credit Card',
        status: 'Paid_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        month: 'June',
        year: '2017',
        invoice: '#90958',
        billingPeriod: '1st - 15th',
        balanceDue: '$901',
        dueDate: '27 Jul 2017',
        paymentDate: '01 May 2017',
        paymentAmount: '$671',
        paymentMethod: 'Wire',
        status: 'Pending_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        month: 'November',
        year: '2017',
        invoice: '#23871',
        billingPeriod: '16th - 30th',
        balanceDue: '$903',
        dueDate: '14 Jul 2017',
        paymentDate: '22 Apr 2017',
        paymentAmount: '$598',
        paymentMethod: 'Client ACH',
        status: 'Paid_label',
        rowIncluded: true,
        pathTo: ''
      },
      {
        month: 'December',
        year: '2017',
        invoice: '#52314',
        billingPeriod: '1st - 15th',
        balanceDue: '$144',
        dueDate: '03 Jun 2017',
        paymentDate: '27 Feb 2017',
        paymentAmount: '$898',
        paymentMethod: 'Auto ACH',
        status: 'Paid_label',
        rowIncluded: true,
        pathTo: ''
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
      { name: 'Payment Amount' },
      { name: 'Payment Method' },
      { name: 'Status' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'Month',
          included: true,
          rightAlign: false,
          width: 0,
          bold: true,
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
          rightAlign: true,
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
          name: 'Payment Amount',
          included: true,
          rightAlign: true,
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
