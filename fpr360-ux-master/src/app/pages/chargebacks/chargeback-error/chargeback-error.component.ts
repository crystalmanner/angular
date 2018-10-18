import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NewNoteComponent } from '../../../dialogs/new-note/new-note.component';
import { NotFoughtDialogComponent } from '../../../dialogs/not-fought-dialog/not-fought-dialog.component';

import { FormControl, Validators } from '@angular/forms';
const LAST_4_REGEX = /^[0-9]{4}$/;
const FIRST_6_REGEX = /^[0-9]{6}$/;

@Component({
  selector: 'app-chargeback-error',
  templateUrl: './chargeback-error.component.html',
  styleUrls: ['./chargeback-error.component.scss']
})
export class ChargebackErrorComponent implements OnInit {
  last4validate = new FormControl('', [Validators.pattern(LAST_4_REGEX)]);
  first6validate = new FormControl('', [Validators.pattern(FIRST_6_REGEX)]);

  public first6Mask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  public last4Mask = [/\d/, /\d/, /\d/, /\d/];
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
      value: 'April 24, 2018',
      error: false
    },
    {
      label: 'Dispute Amount',
      value: '$89.95',
      error: false
    },
    {
      label: 'Transaction Date',
      value: 'April 15, 2018',
      error: false
    },
    {
      label: 'Transaction Amount',
      value: '$109.95',
      error: false
    },
    {
      label: 'Deadline',
      value: 'May 2, 2018',
      error: true
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
  listSettings = ['Option 1', 'Option 2', 'divider', 'Option 3'];
  coverLetterList = [
    {
      name: 'request-for-full-refund.pdf',
      link: '/'
    }
  ];
  transactionDetailsList = [
    {
      name: 'transaction_receipt.pdf',
      link: '/'
    },
    {
      name: 'order_invoice.pdf',
      link: '/'
    }
  ];
  websiteDocumentsList = [
    {
      name: 'checkout_page.pdf',
      link: '/'
    },
    {
      name: 'product_page.pdf',
      link: '/'
    },
    {
      name: 'terms_of_sale.pdf',
      link: '/'
    }
  ];
  additionalDocumentsList = [
    {
      name: 'additional_doc.pdf',
      link: '/'
    },
    {
      name: 'additional_doc.pdf',
      link: '/'
    }
  ];

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
  settingsFunction = (val, item) => console.log(val, item);
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
