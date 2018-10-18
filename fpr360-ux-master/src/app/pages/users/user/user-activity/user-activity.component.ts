import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.scss']
})
export class UserActivityComponent implements OnInit {
  activityData = {
    rows: [
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        event: 'Services',
        client: 'Juniper Networks',
        description: '<a>Service added</a>',
        timestamp: '25 Feb 2017 &nbsp;&nbsp; 17:39 EST',
        rowIncluded: true
      },
      {
        icon: {
          iconName: 'error',
          iconColor: 'error-color'
        },
        event: 'Invoicing',
        client: 'Whirlpool Corporation',
        description: '<a>Service paused</a>',
        timestamp: '26 Jul 2017 &nbsp;&nbsp; 17:39 EST',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        event: 'Tickets',
        client: 'White Castle',
        description: '<a>Payment method changed</a>',
        timestamp: '23 Dec 2017 &nbsp;&nbsp; 17:39 EST',
        rowIncluded: true
      },
      {
        icon: {
          iconName: 'error',
          iconColor: 'error-color'
        },
        event: 'Clients',
        client: 'McIntosh Laboratory',
        description: '<a>Updated client credentials required</a>',
        timestamp: '16 Feb 2017 &nbsp;&nbsp; 17:39 EST',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        event: 'Users',
        client: 'Oshkosh Corporation',
        description: '<a>New product added</a>',
        timestamp: '06 Feb 2017 &nbsp;&nbsp; 17:39 EST',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        event: 'Services',
        client: 'McCormick & Company',
        description: '<a>10 new MID accounts added</a>',
        timestamp: '26 Aug 2017 &nbsp;&nbsp; 17:39 EST',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        event: 'Invoicing',
        client: 'STX',
        description: '<a>New user account</a>',
        timestamp: '02 Nov 2017 &nbsp;&nbsp; 17:39 EST',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        event: 'Tickets',
        client: 'Whataburger',
        description: '<a>Service added</a>',
        timestamp: '25 Feb 2017 &nbsp;&nbsp; 17:39 EST',
        rowIncluded: true
      },
      {
        icon: {
          iconName: 'error',
          iconColor: 'error-color'
        },
        event: 'Clients',
        client: 'FirstEnergy Corporation',
        description: '<a>Service paused</a>',
        timestamp: '12 Oct 2017 &nbsp;&nbsp; 17:39 EST',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        event: 'Users',
        client: 'FirstEnergy Corporation',
        description: '<a>Payment method changed</a>',
        timestamp: '15 Dec 2017 &nbsp;&nbsp; 17:39 EST',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        event: 'Services',
        client: 'Wienerschnitzel',
        description: '<a>Updated client credentials required</a>',
        timestamp: '16 May 2017 &nbsp;&nbsp; 17:39 EST',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        event: 'Tickets',
        client: 'Oshkosh Corporation',
        description: '<a>10 new MID accounts added</a>',
        timestamp: '02 Sep 2017 &nbsp;&nbsp; 17:39 EST',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        event: 'Invoicing',
        client: 'John Wiley & Sons',
        description: '<a>New product added</a>',
        timestamp: '16 Mar 2017 &nbsp;&nbsp; 17:39 EST',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        event: 'Clients',
        client: 'The McClatchy Company',
        description: '<a>New user account</a>',
        timestamp: '18 May 2017 &nbsp;&nbsp; 17:39 EST',
        rowIncluded: true
      }
    ],
    cols: [
      { name: 'Event' },
      { name: 'Client' },
      { name: 'Description' },
      { name: 'Timestamp' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'Event',
          included: true,
          rightAlign: false,
          width: 160,
          bold: true,
          leftFixed: true
        },
        {
          name: 'Client',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Description',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Timestamp',
          included: true,
          rightAlign: false,
          width: 204,
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
          selected: 'All Events',
          options: ['All Events', 'Option 2', 'Option 3'],
          function: val => console.log(val)
        }
      ]
    }
  };

  constructor() {}

  ngOnInit() {}
}
