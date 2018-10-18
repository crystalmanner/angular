import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NewNoteComponent } from '../../../dialogs/new-note/new-note.component';
import { NotFoughtDialogComponent } from '../../../dialogs/not-fought-dialog/not-fought-dialog.component';

import { FormControl, Validators } from '@angular/forms';
const LAST_4_REGEX = /^[0-9]{4}$/;
const FIRST_6_REGEX = /^[0-9]{6}$/;

@Component({
  selector: 'app-chargeback-summary',
  templateUrl: './chargeback-summary.component.html',
  styleUrls: ['./chargeback-summary.component.scss']
})
export class ChargebackSummaryComponent implements OnInit {
  public first6Mask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  public last4Mask = [/\d/, /\d/, /\d/, /\d/];

  last4validate = new FormControl('', [Validators.pattern(LAST_4_REGEX)]);
  first6validate = new FormControl('', [Validators.pattern(FIRST_6_REGEX)]);

  orderHistoryData = {
    rows: [
      {
        orderId: '5749572026589',
        orderDate: '19 Feb 2017',
        orderAmount: '$556',
        tracking: '5767336086957',
        product: 'UNI-DRILL®',
        refundStatus: 'Void',
        refundAmount: '$623',
        refundDate: '19 Feb 2017',
        saleType: 'Trial',
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
        pathTo: '',
        rowIncluded: true
      },
      {
        orderId: '5749572026589',
        orderDate: '19 May 2017',
        orderAmount: '$147',
        tracking: '5769420575039',
        product: 'AIR FOAM®',
        refundStatus: 'Pending',
        refundAmount: '$138',
        refundDate: '11 Jun 2017',
        saleType: 'Select',
        notes: 0,
        pathTo: '',
        rowIncluded: true
      },
      {
        orderId: '11757372392728',
        orderDate: '24 Aug 2017',
        orderAmount: '$428',
        tracking: '5769420575039',
        product: 'G-150 GUAR',
        refundStatus: 'Void',
        refundAmount: '$985',
        refundDate: '10 Apr 2017',
        saleType: 'Select',
        notes: 0,
        pathTo: '',
        rowIncluded: true
      },
      {
        orderId: '8265840205749',
        orderDate: '06 Jan 2017',
        orderAmount: '$122',
        tracking: '5749572026589',
        product: 'TRU-BORE®',
        refundStatus: 'Declined',
        refundAmount: '$932',
        refundDate: '02 May 2017',
        saleType: 'Select',
        notes: 0,
        pathTo: '',
        rowIncluded: true
      },
      {
        orderId: '2017597574993',
        orderDate: '10 Mar 2017',
        orderAmount: '$433',
        tracking: '5739257507594',
        product: 'MARSH FUNNEL',
        refundStatus: 'Paid',
        refundAmount: '$256',
        refundDate: '16 Jan 2017',
        saleType: 'Select',
        notes: 0,
        pathTo: '',
        rowIncluded: true
      },
      {
        orderId: '0757394047478',
        orderDate: '26 Apr 2017',
        orderAmount: '$723',
        tracking: '6547393653936',
        product: 'SODA ASH',
        refundStatus: 'Void',
        refundAmount: '$877',
        refundDate: '01 Apr 2017',
        saleType: 'Select',
        notes: 0,
        pathTo: '',
        rowIncluded: true
      }
    ],
    cols: [
      { name: 'Order ID' },
      { name: 'Order Date' },
      { name: 'Order Amount' },
      { name: 'Tracking' },
      { name: 'Product' },
      { name: 'Refund Status' },
      { name: 'Refund Amount' },
      { name: 'Refund Date' },
      { name: 'Sale Type' },
      { name: 'Notes' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'Order ID',
          included: true,
          rightAlign: false,
          width: 160,
          bold: false,
          leftFixed: true,
          editableselect: false,
          editableSelectOptions: [],
          notesIcon: false
        },
        {
          name: 'Order Date',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false,
          editableselect: false,
          editableSelectOptions: [],
          notesIcon: false
        },
        {
          name: 'Order Amount',
          included: true,
          rightAlign: true,
          width: 0,
          bold: false,
          leftFixed: false,
          editableselect: false,
          editableSelectOptions: [],
          notesIcon: false
        },
        {
          name: 'Tracking',
          included: true,
          rightAlign: false,
          width: 160,
          bold: false,
          leftFixed: false,
          editableselect: false,
          editableSelectOptions: [],
          notesIcon: false
        },
        {
          name: 'Product',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false,
          editableselect: false,
          editableSelectOptions: [],
          notesIcon: false
        },
        {
          name: 'Refund Status',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false,
          editableselect: false,
          editableSelectOptions: [],
          notesIcon: false
        },
        {
          name: 'Refund Amount',
          included: true,
          rightAlign: true,
          width: 0,
          bold: false,
          leftFixed: false,
          editableselect: false,
          editableSelectOptions: [],
          notesIcon: false
        },
        {
          name: 'Refund Date',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false,
          editableselect: false,
          editableSelectOptions: [],
          notesIcon: false
        },
        {
          name: 'Sale Type',
          included: true,
          rightAlign: false,
          width: 128,
          bold: false,
          leftFixed: false,
          editableselect: true,
          editableSelectOptions: ['Select', 'Trial', 'Option'],
          notesIcon: false
        },
        {
          name: 'Notes',
          included: true,
          rightAlign: false,
          width: 96,
          bold: false,
          leftFixed: false,
          editableselect: false,
          editableSelectOptions: [],
          notesIcon: true
        }
      ],
      rowSettings: ['Option 1', 'Option 2', 'divider', 'Option 3'],
      toolbarOptions: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        function: val => console.log(val)
      }
    }
  };

  stateUSA = [];

  chargebackTitle = 'CB-2017304016784';
  pageSettings = ['Option 1', 'Option 2', 'Option 3'];

  infoList = [
    {
      label: 'Industry',
      value: 'Health & Beauty'
    },
    {
      label: 'Client',
      value: 'Orca Nutra Inc.'
    },
    {
      label: 'Merchant',
      value: 'Nutrabolics LLC'
    },
    {
      label: 'MID',
      value: 'ORCA x2838'
    }
  ];

  chargebackUsers = [
    {
      name: 'Erik Richards',
      position: 'Chargeback Analyst',
      avatar: 'assets/images/user.png',
      url: '/profile/details'
    },
    {
      name: 'Sandra Tullio',
      position: 'Follow Up Lead',
      avatar: 'assets/images/user3.png',
      url: '/profile/details'
    }
  ];

  chargebackDataLine = [
    {
      label: 'Chargeback Date',
      value: 'April 24, 2018'
    },
    {
      label: 'Dispute Amount',
      value: '$89.95'
    },
    {
      label: 'Transaction Date',
      value: 'April 15, 2018'
    },
    {
      label: 'Transaction Amount',
      value: '$109.95'
    },
    {
      label: 'Deadline',
      value: 'May 2, 2018'
    }
  ];

  readonly = false;

  chargeback = {
    details: {
      first6: '463748',
      last4: '4637',
      disputeType: {
        value: 'Chargeback',
        options: [
          {
            value: 'Chargeback',
            viewValue: 'Chargeback'
          },
          {
            value: 'Option 2',
            viewValue: 'Option 2'
          },
          {
            value: 'Option 3',
            viewValue: 'Option 3'
          }
        ]
      },
      disputeReason: {
        value: 'Fraudulent Transaction',
        options: [
          {
            value: 'Fraudulent Transaction',
            viewValue: 'Fraudulent Transaction'
          },
          {
            value: 'Option 2',
            viewValue: 'Option 2'
          },
          {
            value: 'Option 3',
            viewValue: 'Option 3'
          }
        ]
      },
      rootCause: {
        value: 'Friendly Fraud',
        options: [
          {
            value: 'Friendly Fraud',
            viewValue: 'Friendly Fraud'
          },
          {
            value: 'Option 2',
            viewValue: 'Option 2'
          },
          {
            value: 'Option 3',
            viewValue: 'Option 3'
          }
        ]
      }
    },
    productDelivery: {
      shippingCarrier: {
        value: 'USPS',
        options: [
          {
            value: 'USPS',
            viewValue: 'USPS'
          },
          {
            value: 'Option 2',
            viewValue: 'Option 2'
          },
          {
            value: 'Option 3',
            viewValue: 'Option 3'
          }
        ]
      },
      shipmentDate: 'April 23, 2018',
      trackingNumber: 'USPS #95744-474847-2749374'
    },
    refundResolution: {
      refundStatus: {
        value: 'Issued',
        options: [
          {
            value: 'Issued',
            viewValue: 'Issued'
          },
          {
            value: 'Option 2',
            viewValue: 'Option 2'
          },
          {
            value: 'Option 3',
            viewValue: 'Option 3'
          }
        ]
      },
      refundType: {
        value: 'Full Refund',
        options: [
          {
            value: 'Full Refund',
            viewValue: 'Full Refund'
          },
          {
            value: 'Option 2',
            viewValue: 'Option 2'
          },
          {
            value: 'Option 3',
            viewValue: 'Option 3'
          }
        ]
      }
    },
    industryParameters: {
      example1: {
        value: 'Lorem ipsum dolor sit amet, te sed homero facete appareat',
        options: [
          {
            value: 'Lorem ipsum dolor sit amet, te sed homero facete appareat',
            viewValue:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat'
          },
          {
            value: 'Option 2',
            viewValue: 'Option 2'
          },
          {
            value: 'Option 3',
            viewValue: 'Option 3'
          }
        ]
      },
      example2: 'IE #95744-474847-2749374',
      example3: 'Lorem ipsum dolor'
    },
    transactionDetails: {
      transactionId: 'ch_1BHhJcKVe71f4X370Lkerg3p',
      avsMatch: {
        value: 'Yes',
        options: [
          {
            value: 'Yes',
            viewValue: 'Yes'
          },
          {
            value: 'Option 2',
            viewValue: 'Option 2'
          },
          {
            value: 'Option 3',
            viewValue: 'Option 3'
          }
        ]
      },
      cvvMatch: {
        value: 'Yes',
        options: [
          {
            value: 'Yes',
            viewValue: 'Yes'
          },
          {
            value: 'Option 2',
            viewValue: 'Option 2'
          },
          {
            value: 'Option 3',
            viewValue: 'Option 3'
          }
        ]
      },
      saleType: {
        value: 'Subsequent Recurring',
        options: [
          {
            value: 'Subsequent Recurring',
            viewValue: 'Subsequent Recurring'
          },
          {
            value: 'Option 2',
            viewValue: 'Option 2'
          },
          {
            value: 'Option 3',
            viewValue: 'Option 3'
          }
        ]
      },
      orderId: 'in_1BHhJcKVe71f4X37badePuHx'
    },
    customerDetails: {
      customerName: 'Helena Paige',
      country: {
        value: 'USA',
        options: [
          {
            value: 'USA',
            viewValue: 'USA'
          },
          {
            value: 'Option 2',
            viewValue: 'Option 2'
          },
          {
            value: 'Option 3',
            viewValue: 'Option 3'
          }
        ]
      },
      state: {
        value: 'CA'
      },
      ipAddress: '216.3.128.12',
      product: 'Fountain of Youth Face Cream',
      affiliateId: 'Caster Box Inc.',
      subAffiliateId: 'TSC-384927',
      contacted: {
        value: 'Yes',
        options: [
          {
            value: 'Yes',
            viewValue: 'Yes'
          },
          {
            value: 'Option 2',
            viewValue: 'Option 2'
          },
          {
            value: 'Option 3',
            viewValue: 'Option 3'
          }
        ]
      },
      method: {
        value: 'Email',
        options: [
          {
            value: 'Email',
            viewValue: 'Email'
          },
          {
            value: 'Phone',
            viewValue: 'Phone'
          }
        ]
      }
    }
  };

  historyList = [];
  notesList = [];
  reason: string;

  constructor(public dialog: MatDialog) {
    this.fetchSmallHistoryList(data => {
      this.historyList = data;
    });
    this.fetchNotesList(data => {
      this.notesList = data;
    });
    this.fetchStateUSA(data => {
      this.stateUSA = data;
    });
  }

  ngOnInit() {}
  selectPageSettings = val => console.log(val);
  titleVal = val => console.log(val);

  stopEvent = event => {
    event.stopPropagation();
  };
  fetchSmallHistoryList(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/smallHistoryList.json`);
    req.onload = () => {
      const rows = JSON.parse(req.response);
      cb(rows);
    };
    req.send();
  }

  fetchNotesList(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/notesList.json`);
    req.onload = () => {
      const rows = JSON.parse(req.response);
      cb(rows);
    };
    req.send();
  }

  fetchStateUSA(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/stateUSA.json`);
    req.onload = () => {
      const rows = JSON.parse(req.response);
      cb(rows);
    };
    req.send();
  }

  addNote = () => {
    const dialogRef = this.dialog.open(NewNoteComponent, {
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.notesList.unshift({
          user: {
            type: 'image',
            name: 'Erik Richards',
            avatar: 'assets/images/user.png',
            guru: true
          },
          subject: result.subject,
          date: '04 Nov 2018',
          note: result.note
        });
      }
    });
  };

  notFight = () => {
    const dialogRef = this.dialog.open(NotFoughtDialogComponent, {
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      result ? (this.reason = result) : null;
    });
  };
}
