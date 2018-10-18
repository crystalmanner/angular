import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-reports',
  templateUrl: './partner-reports.component.html',
  styleUrls: ['./partner-reports.component.scss']
})
export class PartnerReportsComponent implements OnInit {
  rootCauseReportList = [
    {
      name: 'Services Summary',
      checked: true
    },
    {
      name: 'Chargeback Volume',
      checked: true
    },
    {
      name: 'Root Cause Analysis',
      checked: true
    },
    {
      name: 'Not-Fought Analysis',
      checked: true
    },
    {
      name: 'Customer Contact Analysis',
      checked: true
    },
    {
      name: 'Chargeback Location',
      checked: true
    },
    {
      name: 'Riskiest MIDs',
      checked: true
    },
    {
      name: 'Card Type Analysis',
      checked: true
    },
    {
      name: 'Product Analysis',
      checked: true
    },
    {
      name: 'Sale to Chargeback Lag Time',
      checked: true
    }
  ];
  healthReportList = [
    {
      name: 'MID Health Report',
      checked: true
    },
    {
      name: 'Product Health Report',
      checked: true
    },
    {
      name: 'Affiliate Health Report',
      checked: true
    }
  ];
  performanceReportList = [
    {
      name: 'Chargeback Recovery',
      checked: true
    },
    {
      name: 'Chargeback ROI',
      checked: true
    },
    {
      name: 'Processor Performance',
      checked: true
    },
    {
      name: 'BIN Performance',
      checked: true
    },
    {
      name: 'Card Type Performance',
      checked: true
    }
  ];
  preventionAlertsReportList = [
    {
      name: 'Alerts Volume',
      checked: true
    },
    {
      name: 'Alerts Performance',
      checked: true
    },
    {
      name: 'Alerts Card Type',
      checked: true
    },
    {
      name: 'Alerts ROI',
      checked: true
    }
  ];

  constructor() {}

  ngOnInit() {}
}
