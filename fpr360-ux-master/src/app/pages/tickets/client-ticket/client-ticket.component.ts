import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-ticket',
  templateUrl: './client-ticket.component.html',
  styleUrls: ['./client-ticket.component.scss']
})
export class ClientTicketComponent implements OnInit {
  readonly = false;
  ticketTitle = 'Request for New Service';
  ticketLabel = 'RE: Account';
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
      avatarType: 'initial', //or 'initial'
      avatar: '',
      initialColor: '#CE5F21',
      initial: 'ST'
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
  files = '';
  arrayFiles = [];

  constructor() {}

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
