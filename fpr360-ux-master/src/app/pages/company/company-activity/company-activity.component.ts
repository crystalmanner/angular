import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-activity',
  templateUrl: './company-activity.component.html',
  styleUrls: ['./company-activity.component.scss']
})
export class CompanyActivityComponent implements OnInit {
  activityData = {
    rows: [
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        event: 'Alert',
        description: '<a>BMV Books Co.</a>',
        timestamp: '25 Feb 2017 &nbsp;&nbsp; 17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        event: 'System',
        description: '-',
        timestamp: '25 Feb 2017 &nbsp;&nbsp; 17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        event: 'Services',
        description: '<a>BMV Books Co.</a>',
        timestamp: '08 Jan 2017 &nbsp;&nbsp; 17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        event: 'Services',
        description: '<a>Service added</a>',
        timestamp: '25 Feb 2017 &nbsp;&nbsp; 17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        event: 'Alert',
        description: '<a>Sam James Coffee Inc.</a>',
        timestamp: '07 May 2017 &nbsp;&nbsp; 17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      },
      {
        icon: {
          iconName: 'error',
          iconColor: 'error-color'
        },
        event: 'System',
        description: '<a>Orca Nutra Inc.</a>',
        timestamp: '09 Apr 2017 &nbsp;&nbsp; 17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        event: 'Services',
        description: '<a>Insspiring Publishing Inc.</a>',
        timestamp: '25 Feb 2017 &nbsp;&nbsp; 17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        event: 'Services',
        description: '-',
        timestamp: '25 Feb 2017 &nbsp;&nbsp; 17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        event: 'System',
        description: '<a>Service added</a>',
        timestamp: '25 Feb 2017 &nbsp;&nbsp; 17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        event: 'Services',
        description: '-',
        timestamp: '25 Feb 2017 &nbsp;&nbsp; 17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      },
      {
        icon: {
          iconName: 'error',
          iconColor: 'error-color'
        },
        event: 'Services',
        description: '<a>Assentra Health Solutions LLC</a>',
        timestamp: '25 Feb 2017 &nbsp;&nbsp; 17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        event: 'Services',
        description: '<a>Fairlight Scientific LLC</a>',
        timestamp: '25 Feb 2017 &nbsp;&nbsp; 17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      }
    ],
    cols: [{ name: 'Event' }, { name: 'Description' }, { name: 'Timestamp' }],
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
