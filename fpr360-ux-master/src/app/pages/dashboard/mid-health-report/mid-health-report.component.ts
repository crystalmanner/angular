import { Component, OnInit } from '@angular/core';
import { TableFilterService } from '../../../services/table-filter.service';

@Component({
  selector: 'app-mid-health-report',
  templateUrl: './mid-health-report.component.html',
  styleUrls: ['./mid-health-report.component.scss']
})
export class MidHealthReportComponent implements OnInit {
  readonly = false;
  dashboardFilter = {
    industry: {
      label: 'Industry',
      value: 'Health',
      options: [
        {
          value: 'Health',
          viewValue: 'Health'
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
    category: {
      label: 'Category',
      value: 'Nutrition',
      options: [
        {
          value: 'Nutrition',
          viewValue: 'Nutrition'
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
    company: {
      label: 'Company',
      value: 'Orca Nutra Inc.',
      options: []
    },
    merchant: {
      label: 'Merchant',
      value: 'All',
      options: [
        {
          value: 'All',
          viewValue: 'All'
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
      label: 'Mid',
      value: 'All',
      options: [
        {
          value: 'All',
          viewValue: 'All'
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
  //midReport
  midReport = {
    rows: [],
    cols: [],
    addidionalData: {
      colsData: [],
      rowSettings: ['Option 1', 'Option 2', 'divider', 'Option 3'],
      toolbarOptions: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        function: val => console.log(val)
      },
      selects: [
        {
          selected: 'All Card Types',
          options: ['All Card Types', 'Option 2', 'Option 3'],
          function: val => console.log(val)
        },
        {
          selected: 'Refund Risk',
          options: ['Chargeback Risk', 'Refund Risk'],
          function: val => this.riskFunction(val)
        },
        {
          selected: 'Count (#)',
          options: ['Count (#)', 'Option 2', 'Option 3'],
          function: val => console.log(val)
        }
      ]
    }
  };
  midReport2 = {
    rows: [],
    cols: [
      { name: 'MID' },
      { name: 'Processor ID' },
      { name: 'Status' },
      { name: 'Monthly Cap' },
      { name: 'Processed MTD' },
      { name: 'Trans. Discover' },
      { name: 'Trans. Visa' },
      { name: 'Trans. AMEX' },
      { name: 'Trans. Master' },
      { name: 'Total Trans. MTD' },
      { name: 'CB Visa' },
      { name: 'CB Master' },
      { name: 'CB AMEX' },
      { name: 'CB Discover' },
      { name: 'CB Total MTD' },
      { name: 'CB %' },
      { name: 'Trans. Needed' },
      { name: 'Risk' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'MID',
          included: true,
          rightAlign: false,
          width: 0,
          bold: true,
          leftFixed: true,
          gray: false
        },
        {
          name: 'Processor ID',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false,
          gray: false
        },
        {
          name: 'Status',
          included: true,
          rightAlign: false,
          width: 80,
          bold: false,
          leftFixed: false,
          gray: false
        },
        {
          name: 'Monthly Cap',
          included: true,
          rightAlign: true,
          width: 60,
          bold: false,
          leftFixed: false,
          gray: true
        },
        {
          name: 'Processed MTD',
          included: true,
          rightAlign: true,
          width: 72,
          bold: false,
          leftFixed: false,
          gray: true
        },
        {
          name: 'Trans. Discover',
          included: true,
          rightAlign: true,
          width: 64,
          bold: false,
          leftFixed: false,
          gray: false
        },
        {
          name: 'Trans. Visa',
          included: true,
          rightAlign: true,
          width: 60,
          bold: false,
          leftFixed: false,
          gray: false
        },
        {
          name: 'Trans. AMEX',
          included: true,
          rightAlign: true,
          width: 60,
          bold: false,
          leftFixed: false,
          gray: false
        },
        {
          name: 'Trans. Master',
          included: true,
          rightAlign: true,
          width: 60,
          bold: false,
          leftFixed: false,
          gray: false
        },
        {
          name: 'Total Trans. MTD',
          included: true,
          rightAlign: true,
          width: 60,
          bold: false,
          leftFixed: false,
          gray: false
        },
        {
          name: 'CB Visa',
          included: true,
          rightAlign: true,
          width: 60,
          bold: false,
          leftFixed: false,
          gray: true
        },
        {
          name: 'CB Master',
          included: true,
          rightAlign: true,
          width: 60,
          bold: false,
          leftFixed: false,
          gray: true
        },
        {
          name: 'CB AMEX',
          included: true,
          rightAlign: true,
          width: 60,
          bold: false,
          leftFixed: false,
          gray: true
        },
        {
          name: 'CB Discover',
          included: true,
          rightAlign: true,
          width: 64,
          bold: false,
          leftFixed: false,
          gray: true
        },
        {
          name: 'CB Total MTD',
          included: true,
          rightAlign: true,
          width: 60,
          bold: false,
          leftFixed: false,
          gray: true
        },
        {
          name: 'CB %',
          included: true,
          rightAlign: true,
          width: 60,
          bold: false,
          leftFixed: false,
          gray: true
        },
        {
          name: 'Trans. Needed',
          included: true,
          rightAlign: true,
          width: 64,
          bold: false,
          leftFixed: false,
          gray: false
        },
        {
          name: 'Risk',
          included: true,
          rightAlign: true,
          width: 60,
          bold: false,
          leftFixed: false,
          gray: false
        }
      ]
    }
  };
  midReport1 = {
    rows: [],
    cols: [
      { name: 'MID' },
      { name: 'Processor ID' },
      { name: 'Status' },
      { name: 'Monthly Cap' },
      { name: 'Processed MTD' },
      { name: 'Trans. Discover' },
      { name: 'Trans. Visa' },
      { name: 'Trans. AMEX' },
      { name: 'Trans. Master' },
      { name: 'Total Trans. MTD' },
      { name: 'Refund Visa' },
      { name: 'Refund Master' },
      { name: 'Refund AMEX' },
      { name: 'Refund Discover' },
      { name: 'Refund Total MTD' },
      { name: 'Refund %' },
      { name: 'Trans. Needed' },
      { name: 'Risk' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'MID',
          included: true,
          rightAlign: false,
          width: 0,
          bold: true,
          leftFixed: true,
          gray: false
        },
        {
          name: 'Processor ID',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false,
          gray: false
        },
        {
          name: 'Status',
          included: true,
          rightAlign: false,
          width: 80,
          bold: false,
          leftFixed: false,
          gray: false
        },
        {
          name: 'Monthly Cap',
          included: true,
          rightAlign: true,
          width: 60,
          bold: false,
          leftFixed: false,
          gray: true
        },
        {
          name: 'Processed MTD',
          included: true,
          rightAlign: true,
          width: 72,
          bold: false,
          leftFixed: false,
          gray: true
        },
        {
          name: 'Trans. Discover',
          included: true,
          rightAlign: true,
          width: 64,
          bold: false,
          leftFixed: false,
          gray: false
        },
        {
          name: 'Trans. Visa',
          included: true,
          rightAlign: true,
          width: 60,
          bold: false,
          leftFixed: false,
          gray: false
        },
        {
          name: 'Trans. AMEX',
          included: true,
          rightAlign: true,
          width: 60,
          bold: false,
          leftFixed: false,
          gray: false
        },
        {
          name: 'Trans. Master',
          included: true,
          rightAlign: true,
          width: 60,
          bold: false,
          leftFixed: false,
          gray: false
        },
        {
          name: 'Total Trans. MTD',
          included: true,
          rightAlign: true,
          width: 60,
          bold: false,
          leftFixed: false,
          gray: false
        },
        {
          name: 'Refund Visa',
          included: true,
          rightAlign: true,
          width: 60,
          bold: false,
          leftFixed: false,
          gray: true
        },
        {
          name: 'Refund Master',
          included: true,
          rightAlign: true,
          width: 60,
          bold: false,
          leftFixed: false,
          gray: true
        },
        {
          name: 'Refund AMEX',
          included: true,
          rightAlign: true,
          width: 60,
          bold: false,
          leftFixed: false,
          gray: true
        },
        {
          name: 'Refund Discover',
          included: true,
          rightAlign: true,
          width: 64,
          bold: false,
          leftFixed: false,
          gray: true
        },
        {
          name: 'Refund Total MTD',
          included: true,
          rightAlign: true,
          width: 60,
          bold: false,
          leftFixed: false,
          gray: true
        },
        {
          name: 'Refund %',
          included: true,
          rightAlign: true,
          width: 60,
          bold: false,
          leftFixed: false,
          gray: true
        },
        {
          name: 'Trans. Needed',
          included: true,
          rightAlign: true,
          width: 64,
          bold: false,
          leftFixed: false,
          gray: false
        },
        {
          name: 'Risk',
          included: true,
          rightAlign: true,
          width: 60,
          bold: false,
          leftFixed: false,
          gray: false
        }
      ]
    }
  };

  constructor(private tableFiletr: TableFilterService) {
    this.fetchTableData(data => {
      this.midReport1.rows = data;
      this.midReport.rows = data;
      this.tableFiletr.setArray(this.midReport.rows);
    });
    this.fetchChargebackRiskTableData(data => {
      this.midReport2.rows = data;
    });
    this.fetchCompanyList(data => {
      this.dashboardFilter.company.options = data;
    });
  }

  ngOnInit() {
    this.midReport.cols = this.midReport1.cols;
    this.midReport.addidionalData.colsData = this.midReport1.addidionalData.colsData;
  }

  riskFunction = val => {
    switch (val) {
      case 'Chargeback Risk':
        this.midReport.rows = this.midReport2.rows;
        this.tableFiletr.setArray(this.midReport.rows);
        this.midReport.cols = this.midReport2.cols;
        this.midReport.addidionalData.colsData = this.midReport2.addidionalData.colsData;
        break;
      case 'Refund Risk':
        this.midReport.rows = this.midReport1.rows;
        this.tableFiletr.setArray(this.midReport.rows);
        this.midReport.cols = this.midReport1.cols;
        this.midReport.addidionalData.colsData = this.midReport1.addidionalData.colsData;
        break;
      default:
        break;
    }
  };

  fetchTableData(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/dashboardMidReport.json`);
    req.onload = () => {
      const rows = JSON.parse(req.response);
      cb(rows);
    };
    req.send();
  }
  fetchChargebackRiskTableData(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/dashboardChargebackRiskReport.json`);
    req.onload = () => {
      const rows = JSON.parse(req.response);
      cb(rows);
    };
    req.send();
  }

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
