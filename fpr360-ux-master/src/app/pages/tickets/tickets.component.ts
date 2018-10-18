import { Component, OnInit } from '@angular/core';
import { TableFilterService } from '../../services/table-filter.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  temp = [];
  currentArray = [];
  ticketsData = {
    rows: [
      {
        icon: {
          type: 'initial',
          initials: 'CJ',
          color: 'rgb(87,177,87)',
          photo: '',
          guru: false
        },
        createdBy: 'Carlos Jones',
        type: 'Account',
        subject: 'Clarification on product offerings',
        details: 'Lorem ipsum dolor sit amet, te sed homero facete appareat… ',
        latestReplyOn: '24 Sep 2017 &nbsp;&nbsp; 17:39 EST',
        status: 'Closed_label',
        rowIncluded: true,
        pathTo: '/client-ticket'
      },
      {
        icon: {
          type: 'image',
          initials: '',
          color: '',
          photo: '/assets/images/user.png',
          guru: true
        },
        createdBy: 'Henry Willis',
        type: 'Chargeback',
        subject: 'Adding new service',
        details: 'Lorem ipsum dolor sit amet, te sed homero facete appareat… ',
        latestReplyOn: '17 Jan 2017 &nbsp;&nbsp; 17:39 EST',
        status: 'Closed_label',
        rowIncluded: true,
        pathTo: '/ticket'
      },
      {
        icon: {
          type: 'initial',
          initials: 'MJ',
          color: '#FF2929',
          photo: '',
          guru: false
        },
        createdBy: 'Madge Johnson',
        type: 'Other',
        subject: 'Request for documentation',
        details: 'Lorem ipsum dolor sit amet, te sed homero facete appareat… ',
        latestReplyOn: '30 Apr 2017 &nbsp;&nbsp; 17:39 EST',
        status: 'Closed_label',
        rowIncluded: true,
        pathTo: '/client-ticket'
      },
      {
        icon: {
          type: 'image',
          initials: '',
          color: '',
          photo: '/assets/images/user2.png',
          guru: true
        },
        createdBy: 'Nicholas Martinez',
        type: 'Chargeback',
        subject: 'Clarification on product offerings',
        details: 'Lorem ipsum dolor sit amet, te sed homero facete appareat… ',
        latestReplyOn: '26 Dec 2017 &nbsp;&nbsp; 17:39 EST',
        status: 'Open_label',
        rowIncluded: true,
        pathTo: '/ticket'
      },
      {
        icon: {
          type: 'initial',
          initials: 'RB',
          color: '#28669C',
          photo: '',
          guru: false
        },
        createdBy: 'Rosetta Ballard',
        type: 'Account',
        subject: 'Identify transaction in CRM',
        details: 'Lorem ipsum dolor sit amet, te sed homero facete appareat… ',
        latestReplyOn: '09 Jan 2017 &nbsp;&nbsp; 17:39 EST',
        status: 'Open_label',
        rowIncluded: true,
        pathTo: '/client-ticket'
      },
      {
        icon: {
          type: 'image',
          initials: '',
          color: '',
          photo: '/assets/images/user3.png',
          guru: true
        },
        createdBy: 'Bill Alexander',
        type: 'Account',
        subject: 'Request for meeting with Operations ...',
        details: 'Lorem ipsum dolor sit amet, te sed homero facete appareat… ',
        latestReplyOn: '06 Oct 2017 &nbsp;&nbsp; 17:39 EST',
        status: 'Open_label',
        rowIncluded: true,
        pathTo: '/ticket'
      },
      {
        icon: {
          type: 'initial',
          initials: 'JW',
          color: '#CE5F21',
          photo: '',
          guru: false
        },
        createdBy: 'Jack White',
        type: 'Account',
        subject: 'Request for meeting with Client Rela...',
        details: 'Lorem ipsum dolor sit amet, te sed homero facete appareat… ',
        latestReplyOn: '17 Jul 2017 &nbsp;&nbsp; 17:39 EST',
        status: 'Open_label',
        rowIncluded: true,
        pathTo: '/client-ticket'
      },
      {
        icon: {
          type: 'image',
          initials: '',
          color: '',
          photo: '/assets/images/user4.png',
          guru: true
        },
        createdBy: 'Betty Jimenez',
        type: 'Chargeback',
        subject: 'Clarification on product offerings',
        details: 'Lorem ipsum dolor sit amet, te sed homero facete appareat… ',
        latestReplyOn: '02 Feb 2017 &nbsp;&nbsp; 17:39 EST',
        status: 'Open_label',
        rowIncluded: true,
        pathTo: '/ticket'
      },
      {
        icon: {
          type: 'image',
          initials: '',
          color: '',
          photo: '/assets/images/user5.png',
          guru: true
        },
        createdBy: 'Georgie Ball',
        type: 'Alert',
        subject: 'Request for meeting with Operations ...',
        details: 'Lorem ipsum dolor sit amet, te sed homero facete appareat… ',
        latestReplyOn: '20 Oct 2017 &nbsp;&nbsp; 17:39 EST',
        status: 'Open_label',
        rowIncluded: true,
        pathTo: '/ticket'
      },
      {
        icon: {
          type: 'initial',
          initials: 'BR',
          color: '#00A38D',
          photo: '',
          guru: false
        },
        createdBy: 'Brent Richards',
        type: 'Chargeback',
        subject: 'Request to add new merchant account',
        details: 'Lorem ipsum dolor sit amet, te sed homero facete appareat… ',
        latestReplyOn: '21 Oct 2017 &nbsp;&nbsp; 17:39 EST',
        status: 'Open_label',
        rowIncluded: true,
        pathTo: '/client-ticket'
      },
      {
        icon: {
          type: 'initial',
          initials: 'JT',
          color: '#429EFF',
          photo: '',
          guru: false
        },
        createdBy: 'Jordan Thomas',
        type: 'Meeting',
        subject: 'Identify transaction in CRM',
        details: 'Lorem ipsum dolor sit amet, te sed homero facete appareat… ',
        latestReplyOn: '28 Mar 2017 &nbsp;&nbsp; 17:39 EST',
        status: 'Closed_label',
        rowIncluded: true,
        pathTo: '/client-ticket'
      }
    ],
    cols: [
      { name: 'Created by' },
      { name: 'Type' },
      { name: 'Subject' },
      { name: 'Details' },
      { name: 'Latest reply on' },
      { name: 'Status' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'Created by',
          included: true,
          rightAlign: false,
          width: 0,
          bold: true,
          leftFixed: true
        },
        {
          name: 'Type',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Subject',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Details',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Latest reply on',
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
          width: 128,
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
          selected: 'All Creators',
          options: ['All Creators', 'Guru tickets', 'Client tickets'],
          function: val => {
            this.creatorsFilter(val);
          }
        },
        {
          selected: 'All Types',
          options: ['All Types', 'Account', 'Chargeback', 'Meeting', 'Other'],
          function: val => {
            this.typeFilter(val);
          }
        },
        {
          selected: 'Status',
          options: ['Status', 'Closed', 'Open'],
          function: val => {
            this.statusFilter(val);
          }
        }
      ]
    }
  };

  summArray = [];

  constructor(private tableFiletr: TableFilterService) {}

  ngOnInit() {
    this.temp = this.ticketsData.rows;
    this.currentArray = _.cloneDeep(this.ticketsData.rows);
  }

  creatorsFilter = val => {
    let user;
    switch (val) {
      case 'Guru tickets':
        user = 'true';
        break;
      case 'Client tickets':
        user = 'false';
        break;
      default:
        break;
    }
    const temp = this.temp.filter(function(d) {
      return val != 'All Creators'
        ? d.icon.guru.toString().indexOf(user) !== -1
        : d.icon.guru.toString().indexOf('') !== -1;
    });
    this.mainFilter(temp);
  };

  typeFilter = val => {
    const temp = this.temp.filter(function(d) {
      return val != 'All Types'
        ? d.type.indexOf(val) !== -1
        : d.type.indexOf('') !== -1;
    });
    this.mainFilter(temp);
  };

  statusFilter = val => {
    const temp = this.temp.filter(function(d) {
      return val != 'Status'
        ? d.status.indexOf(val) !== -1
        : d.status.indexOf('') !== -1;
    });
    this.mainFilter(temp);
  };

  mainFilter = array => {
    this.tableFiletr.setArray(array);
    this.summArray = array;
  };
}
