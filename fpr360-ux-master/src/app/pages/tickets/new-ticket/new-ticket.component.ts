import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AssignUserDialogComponent } from '../../../dialogs/assign-user-dialog/assign-user-dialog.component';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.scss']
})
export class NewTicketComponent implements OnInit {
  readonly = false;

  pageSettings = ['Option 1', 'Option 2', 'Option 3'];

  newTicket = {
    client: {
      value: '',
      options: []
    },
    merchant: {
      value: '',
      options: [
        {
          value: 'Nutrabolics LLC',
          viewValue: 'Nutrabolics LLC'
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
    mid: {
      value: '',
      options: [
        {
          value: 'ORCA x2828',
          viewValue: 'ORCA x2828'
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
  };

  attachmentSettings = ['Remove', 'Option 2', 'Option 3'];
  ticketDetails = {
    type: {
      value: '',
      options: [
        {
          value: 'Account',
          viewValue: 'Account'
        },
        {
          value: 'Alert',
          viewValue: 'Alert'
        },
        {
          value: 'Chargeback',
          viewValue: 'Chargeback'
        },
        {
          value: 'Meeting',
          viewValue: 'Meeting'
        },
        {
          value: 'Other',
          viewValue: 'Other'
        }
      ]
    },
    subject: {
      value: '',
      options: [
        {
          value: 'Clarification on product offerings',
          viewValue: 'Clarification on product offerings'
        },
        {
          value: 'Adding new service',
          viewValue: 'Adding new service'
        },
        {
          value: 'Clarification on product offerings',
          viewValue: 'Clarification on product offerings'
        }
      ]
    },
    message: ''
  };

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
      rowIncluded: false
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
      rowIncluded: false
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
      rowIncluded: false
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
      rowIncluded: false
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
      rowIncluded: false
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
  arrayFiles = [];
  constructor(public dialog: MatDialog) {
    this.fetchCompanyList(data => {
      this.newTicket.client.options = data;
    });
  }

  ngOnInit() {}

  attachmentSettingsFunction = (val, item) => {
    switch (val) {
      case 'Remove':
        const index = this.arrayFiles.indexOf(item);
        this.arrayFiles.splice(index, 1);

        break;

      default:
        break;
    }
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

  titleVal = val => console.log(val);
  selectPageSettings = val => console.log(val);

  fetchCompanyList(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/companyList.json`);
    req.onload = () => {
      const rows = JSON.parse(req.response);
      cb(rows);
    };
    req.send();
  }

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
}
