import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AssignUserDialogComponent } from '../../../dialogs/assign-user-dialog/assign-user-dialog.component';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  readonly = false;
  ticketTitle = 'Request for Documentation';
  ticketLabel = 'RE: Chargeback - CB2017304016784';
  label = {
    color: '#FE9D00',
    value: 'Open'
  };
  pageSettings = ['Close', 'Option 2', 'Option 3'];
  infoList = [
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
      value: 'ORCA x2828'
    }
  ];
  ticketUsers = [
    {
      name: 'Sandra Tullio',
      position: 'Creator',
      avatarType: 'image', //or 'initial'
      avatar: 'assets/images/user7.png',
      initialColor: '',
      initial: ''
    }
  ];
  recipients = [
    {
      icon: {
        type: 'image',
        initials: '',
        color: '',
        photo: 'assets/images/user.png',
        guru: false
      },
      name: 'Jared Smith',
      position: 'Alerts Analyst',
      rowIncluded: true
    },
    {
      icon: {
        type: 'initial',
        initials: 'VM',
        color: 'rgb(87,177,87)',
        photo: '',
        guru: false
      },
      name: 'Viola McCormick',
      position: 'Follow Up Lead',
      rowIncluded: false
    },
    {
      icon: {
        type: 'image',
        initials: '',
        color: '',
        photo: 'assets/images/user2.png',
        guru: false
      },
      name: 'Tillie Rose',
      position: 'Chargeback Analyst',
      rowIncluded: true
    },
    {
      icon: {
        type: 'initial',
        initials: 'GS',
        color: '#FF2929',
        photo: '',
        guru: false
      },
      name: 'Gary Stevens',
      position: 'Alerts Manager',
      rowIncluded: true
    },
    {
      icon: {
        type: 'image',
        initials: '',
        color: '',
        photo: 'assets/images/user3.png',
        guru: false
      },
      name: 'Agnes Oliver',
      position: 'Chargeback Analyst',
      rowIncluded: true
    },
    {
      icon: {
        type: 'image',
        initials: '',
        color: '',
        photo: 'assets/images/user4.png',
        guru: false
      },
      name: 'Elsie Lewis',
      position: 'Follow Up Lead',
      rowIncluded: false
    },
    {
      icon: {
        type: 'image',
        initials: '',
        color: '',
        photo: 'assets/images/user5.png',
        guru: false
      },
      name: 'Maurice Colon',
      position: 'Chargeback Analyst',
      rowIncluded: true
    },
    {
      icon: {
        type: 'image',
        initials: '',
        color: '',
        photo: 'assets/images/user6.png',
        guru: false
      },
      name: 'Joel Phillips',
      position: 'Follow Up Lead',
      rowIncluded: false
    },
    {
      icon: {
        type: 'image',
        initials: '',
        color: '',
        photo: 'assets/images/user7.png',
        guru: false
      },
      name: 'Jared Smith',
      position: 'Alerts Analyst',
      rowIncluded: false
    },
    {
      icon: {
        type: 'image',
        initials: '',
        color: '',
        photo: 'assets/images/user8.png',
        guru: false
      },
      name: 'Viola McCormick',
      position: 'Follow Up Lead',
      rowIncluded: false
    },
    {
      icon: {
        type: 'initial',
        initials: 'TR',
        color: '#28669C',
        photo: '',
        guru: false
      },
      name: 'Tillie Rose',
      position: 'Chargeback Analyst',
      rowIncluded: false
    },
    {
      icon: {
        type: 'initial',
        initials: 'GS',
        color: '#CE5F21',
        photo: '',
        guru: false
      },
      name: 'Gary Stevens',
      position: 'Alerts Manager',
      rowIncluded: false
    }
  ];
  messages = [
    {
      icon: {
        type: 'image', // or initial
        initials: '',
        color: '',
        photo: 'assets/images/user6.png',
        guru: 'true'
      },
      name: 'John Adams',
      date: '4 Nov 2017',
      message:
        'Lorem ipsum dolor sit amet, te sed homero facete appareat. Et rationibus adipiscing deterruisset vel. Lorem ipsum dolor sit amet, te sed homero facete appareat. Et rationibus adipiscing deterruisset vel. Lorem ipsum dolor sit amet, te sed homero facete appareat. Et rationibus adipiscing deterruisset vel.',
      attach: [
        {
          fileName: 'third_doc.pdf',
          path: 'path-to/third_doc.pdf'
        },
        {
          fileName: 'second_doc.pdf',
          path: 'path-to/second_doc.pdf'
        }
      ]
    },
    {
      icon: {
        type: 'initial', // or initial
        initials: 'DM',
        color: '#FF7729',
        photo: '',
        guru: ''
      },
      name: 'Donna Maxwell',
      date: '4 Nov 2017',
      message: 'Lorem ipsum dolor sit amet, te sed homero facete appareat. ',
      attach: []
    },
    {
      icon: {
        type: 'image', // or initial
        initials: '',
        color: '',
        photo: 'assets/images/user6.png',
        guru: 'true'
      },
      name: 'John Adams',
      date: '4 Nov 2017',
      message: 'Lorem ipsum dolor sit amet, te sed homero facete appareat. ',
      attach: []
    },
    {
      icon: {
        type: 'initial', // or initial
        initials: 'DM',
        color: '#FF7729',
        photo: '',
        guru: ''
      },
      name: 'Donna Maxwell',
      date: '4 Nov 2017',
      message: 'Lorem ipsum dolor sit amet, te sed homero facete appareat. ',
      attach: []
    },
    {
      icon: {
        type: 'image', // or initial
        initials: '',
        color: '',
        photo: 'assets/images/user6.png',
        guru: 'true'
      },
      name: 'John Adams',
      date: '4 Nov 2017',
      message: 'Lorem ipsum dolor sit amet, te sed homero facete appareat. ',
      attach: []
    }
  ];
  attachments = [
    {
      fileName: 'third_doc.pdf',
      path: 'path-to/third_doc.pdf'
    },
    {
      fileName: 'second_doc.pdf',
      path: 'path-to/second_doc.pdf'
    },
    {
      fileName: 'this-is-an-example-of-a-long-document-title.pdf',
      path: 'path-to/first_doc.pdf'
    }
  ];
  attachmentSettings = ['Remove', 'Option 2', 'Option 3'];

  focusMessage = false;
  newMessage = '';
  arrayFiles = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  titleVal = val => console.log(val);

  selectPageSettings = val => {
    switch (val) {
      case 'Close':
        this.pageSettings[0] = 'Open';
        this.label = {
          color: '#00CCB1',
          value: 'Close'
        };
        break;
      case 'Open':
        this.pageSettings[0] = 'Close';
        this.label = {
          color: '#FE9D00',
          value: 'Open'
        };
        break;
      default:
        break;
    }
  };

  attachmentSettingsFunction = (val, item) => {
    switch (val) {
      case 'Remove':
        const index = this.arrayFiles.indexOf(item);
        this.arrayFiles.splice(index, 1);

        const index2 = this.attachments.indexOf(item);
        this.attachments.splice(index2, 1);
        break;

      default:
        break;
    }
  };

  attachmentMessageSettingsFunction = (val, item, el) => {
    switch (val) {
      case 'Remove':
        const i = this.attachments.indexOf(el);
        item.attach.splice(i, 1);
        break;

      default:
        break;
    }
  };

  addRecipients = () => {
    const dialogRef = this.dialog.open(AssignUserDialogComponent, {
      data: {
        dataArray: this.recipients,
        dialogName: 'Select Recipients',
        hideSelected: true
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      result ? (this.recipients = result) : null;
    });
  };
  removeRecipients = item => {
    item.rowIncluded = false;
  };

  sendMessage = newMessage => {
    if (newMessage) {
      this.focusMessage = false;
      this.messages.unshift({
        icon: {
          type: 'image', // or initial
          initials: '',
          color: '',
          photo: 'assets/images/user6.png',
          guru: 'true'
        },
        name: 'John Adams',
        date: '4 Nov 2017',
        message: newMessage,
        attach: this.arrayFiles
      });
    }
    this.newMessage = '';
    this.arrayFiles = [];
    console.log(this.messages);
  };
  onChange = event => {
    let files = [].slice.call(event.target.files);

    files.map(f => {
      this.arrayFiles.push({
        fileName: f.name,
        path: 'path-to'
      });
    });
  };
}
