import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-merchant-activity',
  templateUrl: './merchant-activity.component.html',
  styleUrls: ['./merchant-activity.component.scss']
})
export class MerchantActivityComponent implements OnInit {
  activityData = {
    rows: [
      {
        event: 'Services',
        client: 'Juniper Networks',
        description: '<a>Service added</a>',
        timestamp: '25 Feb 2017   17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      },
      {
        event: 'System',
        client: 'Juniper Networks',
        description: '-',
        timestamp: '25 Feb 2017   17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      },
      {
        event: 'Services',
        client: 'Juniper Networks',
        description: '<a>Service added</a>',
        timestamp: '25 Feb 2017   17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      },
      {
        event: 'Services',
        client: 'Juniper Networks',
        description: '<a>Service added</a>',
        timestamp: '25 Feb 2017   17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      },
      {
        event: 'Services',
        client: 'Juniper Networks',
        description: '<a>Insspiring Publishing Inc.</a>',
        timestamp: '25 Feb 2017   17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      },
      {
        event: 'System',
        client: 'Juniper Networks',
        description: '-',
        timestamp: '25 Feb 2017   17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      },
      {
        event: 'Services',
        client: 'Juniper Networks',
        description: '<a>Insspiring Publishing Inc.</a>',
        timestamp: '25 Feb 2017   17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      },
      {
        event: 'Services',
        client: 'Juniper Networks',
        description: '-',
        timestamp: '25 Feb 2017   17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      },
      {
        event: 'System',
        client: 'Juniper Networks',
        description: '<a>Service added</a>',
        timestamp: '25 Feb 2017   17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      },
      {
        event: 'Services',
        client: 'Juniper Networks',
        description: '-',
        timestamp: '25 Feb 2017   17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      },
      {
        event: 'Services',
        client: 'Juniper Networks',
        description: '<a>Assentra Health Solutions LLC</a>',
        timestamp: '25 Feb 2017   17:39 EST',
        pathTo: '/activity',
        rowIncluded: true
      },
      {
        event: 'Services',
        client: 'Juniper Networks',
        description: '<a>Fairlight Scientific LLC</a>',
        timestamp: '25 Feb 2017   17:39 EST',
        pathTo: '/activity',
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
          width: 192,
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
