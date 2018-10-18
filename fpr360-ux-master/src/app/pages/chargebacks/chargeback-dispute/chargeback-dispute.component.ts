import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { NewNoteComponent } from '../../../dialogs/new-note/new-note.component';
import { UploadDialogComponent } from '../../../dialogs/upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-chargeback-dispute',
  templateUrl: './chargeback-dispute.component.html',
  styleUrls: ['./chargeback-dispute.component.scss']
})
export class ChargebackDisputeComponent implements OnInit {
  chargebackTitle = 'Dispute Package';
  pageSettings = ['Option 1', 'Option 2', 'Option 3'];
  readonly = false;
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
  historyList = [];
  notesList = [];

  letterTitle = {
    value: 'Request for full refund',
    options: [
      {
        value: 'Request for full refund',
        viewValue: 'Request for full refund'
      },
      {
        value: 'Partial Refund',
        viewValue: 'Partial Refund'
      },
      {
        value: 'Full Refund',
        viewValue: 'Full Refund'
      },
      {
        value: 'No Refund',
        viewValue: 'No Refund'
      }
    ]
  };
  listSettings = ['Option 1', 'Option 2', 'divider', 'Option 3'];
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
  transmissionMethod = {
    label: 'Fax Number',
    value: '1-384-273-2927'
  };

  constructor(public dialog: MatDialog) {
    this.fetchSmallHistoryList(data => {
      this.historyList = data;
    });
    this.fetchNotesList(data => {
      this.notesList = data;
    });
  }

  ngOnInit() {}

  titleVal = val => {
    console.log(val);
  };
  selectPageSettings = val => {
    console.log(val);
  };
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

  uploadDocument = () => {
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      data: {
        uploadDocument: true
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {});
  };
}
