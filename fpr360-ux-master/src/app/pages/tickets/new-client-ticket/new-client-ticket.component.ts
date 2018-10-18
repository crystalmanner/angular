import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-client-ticket',
  templateUrl: './new-client-ticket.component.html',
  styleUrls: ['./new-client-ticket.component.scss']
})
export class NewClientTicketComponent implements OnInit {
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
  attachmentSettings = ['Remove', 'Option 2', 'Option 3'];
  arrayFiles = [];
  constructor() {
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
}
