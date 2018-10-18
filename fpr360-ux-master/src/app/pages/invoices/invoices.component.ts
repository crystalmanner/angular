import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
  invoicesData = {
    rows: [
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        client: 'John Wiley & Sons',
        invoice: '#65259',
        amount: '$725',
        invoiceDate: '27 Jun 2017',
        dueDate: '09 Dec 2017',
        status: 'Pending_label',
        paymentDate: '05 Sep 2017',
        amountPaid: '$322',
        method: 'Wire',
        frequency: 'Bi-Monthly',
        acctStatus: 'Paused_label',
        rowIncluded: true,
        pathTo: '/invoice/summary'
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        client: 'Orca Nutra Inc.',
        invoice: '#80987',
        amount: '$246',
        invoiceDate: '16 Feb 2017',
        dueDate: '01 Oct 2017',
        status: 'Pending_label',
        paymentDate: '11 Jul 2017',
        amountPaid: '$722',
        method: 'Wire',
        frequency: 'Wire',
        acctStatus: 'Active_label',
        rowIncluded: true,
        pathTo: '/invoice/summary'
      },
      {
        icon: {
          iconName: 'warning',
          iconColor: 'orange-color'
        },
        client: 'Johnsonville Foods',
        invoice: '#98790',
        amount: '$314',
        invoiceDate: '19 Sep 2017',
        dueDate: '01 Nov 2017',
        status: 'Void_label',
        paymentDate: '27 Jan 2017',
        amountPaid: '$998',
        method: 'Auto ACH',
        frequency: 'Client ACH',
        acctStatus: 'Closed_label',
        rowIncluded: true,
        pathTo: '/invoice/summary'
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        client: "O'Reilly Auto Parts",
        invoice: '#79324',
        amount: '$691',
        invoiceDate: '21 Jul 2017',
        dueDate: '14 Oct 2017',
        status: 'Pending_label',
        paymentDate: '25 Jul 2017',
        amountPaid: '$825',
        method: 'Auto ACH',
        frequency: 'Auto ACH',
        acctStatus: 'Active_label',
        rowIncluded: true,
        pathTo: '/invoice/summary'
      },
      {
        icon: {
          iconName: 'warning',
          iconColor: 'orange-color'
        },
        client: 'Dart Container Corporation',
        invoice: '#71403',
        amount: '$580',
        invoiceDate: '03 Feb 2017',
        dueDate: '03 Jun 2017',
        status: 'Void_label',
        paymentDate: '02 Jun 2017',
        amountPaid: '$850',
        method: 'Auto ACH',
        frequency: 'Credit Card',
        acctStatus: 'Paused_label',
        rowIncluded: true,
        pathTo: '/invoice/summary'
      },
      {
        icon: {
          iconName: 'warning',
          iconColor: 'orange-color'
        },
        client: 'Sun-Maid Growers of California',
        invoice: '#18780',
        amount: '$408',
        invoiceDate: '14 Oct 2017',
        dueDate: '06 Feb 2017',
        status: 'Void_label',
        paymentDate: '20 Jan 2017',
        amountPaid: '$569',
        method: 'Wire',
        frequency: 'Client ACH',
        acctStatus: 'Paused_label',
        rowIncluded: true,
        pathTo: '/invoice/summary'
      },
      {
        icon: {
          iconName: 'error',
          iconColor: 'error-color'
        },
        client: 'First Hawaiian Bank',
        invoice: '#80483',
        amount: '$251',
        invoiceDate: '12 Aug 2017',
        dueDate: '06 Dec 2017',
        status: 'Declined_label',
        paymentDate: '17 Dec 2017',
        amountPaid: '$776',
        method: 'Wire',
        frequency: 'Wire',
        acctStatus: 'Active_label',
        rowIncluded: true,
        pathTo: '/invoice/summary'
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        client: 'A. O. Smith',
        invoice: '#72009',
        amount: '$701',
        invoiceDate: '08 Sep 2017',
        dueDate: '26 Aug 2017',
        status: 'Paid_label',
        paymentDate: '25 Mar 2017',
        amountPaid: '$519',
        method: 'Wire',
        frequency: 'Credit Card',
        acctStatus: 'Paused_label',
        rowIncluded: true,
        pathTo: '/invoice/summary'
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        client: 'Juniper Networks',
        invoice: '#38468',
        amount: '$121',
        invoiceDate: '08 Aug 2017',
        dueDate: '29 Sep 2017',
        status: 'Pending_label',
        paymentDate: '17 Nov 2017',
        amountPaid: '$523',
        method: 'Client ACH',
        frequency: 'Auto ACH',
        acctStatus: 'Active_label',
        rowIncluded: true,
        pathTo: '/invoice/summary'
      },
      {
        icon: {
          iconName: 'error',
          iconColor: 'error-color'
        },
        client: 'Orbital Sciences Corporation',
        invoice: '#75439',
        amount: '$403',
        invoiceDate: '19 Mar 2017',
        dueDate: '04 Jun 2017',
        status: 'Declined_label',
        paymentDate: '13 Apr 2017',
        amountPaid: '$885',
        method: 'Auto ACH',
        frequency: 'Credit Card',
        acctStatus: 'Paused_label',
        rowIncluded: true,
        pathTo: '/invoice/summary'
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        client: 'Weyerhaeuser',
        invoice: '#47976',
        amount: '$318',
        invoiceDate: '24 Mar 2017',
        dueDate: '26 Jun 2017',
        status: 'Pending_label',
        paymentDate: '26 Sep 2017',
        amountPaid: '$597',
        method: 'Client ACH',
        frequency: 'Wire',
        acctStatus: 'Paused_label',
        rowIncluded: true,
        pathTo: '/invoice/summary'
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        client: 'X-Rite',
        invoice: '#44693',
        amount: '$594',
        invoiceDate: '13 Dec 2017',
        dueDate: '26 Jul 2017',
        status: 'Pending_label',
        paymentDate: '14 Dec 2017',
        amountPaid: '$789',
        method: 'Wire',
        frequency: 'Client ACH',
        acctStatus: 'Active_label',
        rowIncluded: true,
        pathTo: '/invoice/summary'
      },
      {
        icon: {
          iconName: 'warning',
          iconColor: 'orange-color'
        },
        client: 'The McClatchy Company',
        invoice: '#69155',
        amount: '$890',
        invoiceDate: '28 Jan 2017',
        dueDate: '21 Feb 2017',
        status: 'Void_label',
        paymentDate: '29 Jul 2017',
        amountPaid: '$263',
        method: 'Auto ACH',
        frequency: 'Wire',
        acctStatus: 'Paused_label',
        rowIncluded: true,
        pathTo: '/invoice/summary'
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        client: 'First Hawaiian Bank',
        invoice: '#86221',
        amount: '$188',
        invoiceDate: '21 Dec 2017',
        dueDate: '15 Aug 2017',
        status: 'Pending_label',
        paymentDate: '12 May 2017',
        amountPaid: '$912',
        method: 'Wire',
        frequency: 'Auto ACH',
        acctStatus: 'Active_label',
        rowIncluded: true,
        pathTo: '/invoice/summary'
      },
      {
        icon: {
          iconName: 'error',
          iconColor: 'error-color'
        },
        client: 'Wienerschnitzel',
        invoice: '#67145',
        amount: '$213',
        invoiceDate: '16 Jan 2017',
        dueDate: '26 Aug 2017',
        status: 'Declined_label',
        paymentDate: '17 Sep 2017',
        amountPaid: '$715',
        method: 'Credit Card',
        frequency: 'Client ACH',
        acctStatus: 'Closed_label',
        rowIncluded: true,
        pathTo: '/invoice/summary'
      }
    ],
    cols: [
      { name: 'Client' },
      { name: 'Invoice' },
      { name: 'Amount' },
      { name: 'Invoice Date' },
      { name: 'Due Date' },
      { name: 'Status' },
      { name: 'Payment Date' },
      { name: 'Amount Paid' },
      { name: 'Method' },
      { name: 'Frequency' },
      { name: 'Acct. Status' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'Client',
          included: true,
          rightAlign: false,
          width: 0,
          bold: true,
          leftFixed: true
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
          name: 'Amount',
          included: true,
          rightAlign: true,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Invoice Date',
          included: true,
          rightAlign: false,
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
          name: 'Status',
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
          name: 'Amount Paid',
          included: true,
          rightAlign: true,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Method',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Frequency',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Acct. Status',
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
      },
      statusBadges: true
    }
  };

  constructor() {}

  ngOnInit() {}
}
