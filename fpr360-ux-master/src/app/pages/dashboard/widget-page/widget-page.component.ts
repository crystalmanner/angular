import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-page',
  templateUrl: './widget-page.component.html',
  styleUrls: ['./widget-page.component.scss']
})
export class WidgetPageComponent implements OnInit {
  widgetName = 'Services Summary';
  widgetChart = 'assets/images/dashboards/services-summary.png';
  widgetSettings = ['Pie Chart', 'Option 2', 'divider', 'Option 3'];

  widgetData = {
    rows: [
      {
        columnNameA: 'Data',
        columnNameB: 'Data',
        columnNameC: 'Data',
        columnNameD: 'Data',
        columnNameE: 'Data',
        columnNameF: 'Data',
        pathTo: '/widget/report',
        rowIncluded: true
      },
      {
        columnNameA: 'Data',
        columnNameB: 'Data',
        columnNameC: 'Data',
        columnNameD: 'Data',
        columnNameE: 'Data',
        columnNameF: 'Data',
        pathTo: '/widget/report',
        rowIncluded: true
      },
      {
        columnNameA: 'Data',
        columnNameB: 'Data',
        columnNameC: 'Data',
        columnNameD: 'Data',
        columnNameE: 'Data',
        columnNameF: 'Data',
        pathTo: '/widget/report',
        rowIncluded: true
      },
      {
        columnNameA: 'Data',
        columnNameB: 'Data',
        columnNameC: 'Data',
        columnNameD: 'Data',
        columnNameE: 'Data',
        columnNameF: 'Data',
        pathTo: '/widget/report',
        rowIncluded: true
      },
      {
        columnNameA: 'Data',
        columnNameB: 'Data',
        columnNameC: 'Data',
        columnNameD: 'Data',
        columnNameE: 'Data',
        columnNameF: 'Data',
        pathTo: '/widget/report',
        rowIncluded: true
      },
      {
        columnNameA: 'Data',
        columnNameB: 'Data',
        columnNameC: 'Data',
        columnNameD: 'Data',
        columnNameE: 'Data',
        columnNameF: 'Data',
        pathTo: '/widget/report',
        rowIncluded: true
      }
    ],
    cols: [
      { name: 'Column Name A' },
      { name: 'Column Name B' },
      { name: 'Column Name C' },
      { name: 'Column Name D' },
      { name: 'Column Name E' },
      { name: 'Column Name F' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'Column Name A',
          included: true,
          rightAlign: false,
          width: 0,
          bold: true,
          leftFixed: true
        },
        {
          name: 'Column Name B',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: true
        },
        {
          name: 'Column Name C',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: true
        },
        {
          name: 'Column Name D',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: true
        },
        {
          name: 'Column Name E',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: true
        },
        {
          name: 'Column Name F',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: true
        }
      ],
      rowSettings: ['Option 1', 'Option 2', 'divider', 'Option 3']
    }
  };

  constructor() {}

  ngOnInit() {}

  widgetMenu = val => console.log(val);
}
