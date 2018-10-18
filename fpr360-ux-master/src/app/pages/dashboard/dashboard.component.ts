import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription, Subscription } from 'rxjs/Subscription';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { DashboardService } from '../../services/dashboard.service';
import { CheckListItemsComponent } from '../../dialogs/check-list-items/check-list-items.component';
import { ManageDashboardComponent } from '../../dialogs/manage-dashboard/manage-dashboard.component';
import { AddWidgetComponent } from '../../dialogs/add-widget/add-widget.component';
import { SaveDashboardComponent } from '../../dialogs/save-dashboard/save-dashboard.component';

import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  subscription: Subscription;
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
  miniWidgets = [];
  summaryMiniWidgets = [
    {
      name: 'Winnings',
      amount: '$997,487,839.97',
      change: 'up',
      included: true
    },
    {
      name: 'Chargebacks',
      amount: '37,756',
      change: 'up',
      included: true
    },
    {
      name: 'Alerts',
      amount: '26,574',
      change: 'down',
      included: true
    },
    {
      name: 'Recovered',
      amount: '$573,475,274.92',
      change: 'up',
      included: true
    },
    {
      name: 'Recovery Rate',
      amount: '87%',
      change: 'up',
      included: true
    }
  ];
  clientPerformanceMiniWidgets = [
    {
      name: 'Winnings',
      amount: '$997,487,839.97',
      change: 'up',
      included: true
    },
    {
      name: 'Chargebacks',
      amount: '37,756',
      change: 'up',
      included: true
    },
    {
      name: 'Alerts',
      amount: '26,574',
      change: 'down',
      included: true
    },
    {
      name: 'Recovered',
      amount: '$573,475,274.92',
      change: 'up',
      included: true
    },
    {
      name: 'Recovery Rate',
      amount: '87%',
      change: 'up',
      included: true
    }
  ];
  growTrendsMiniWidgets = [
    {
      name: 'Chargebacks YTD',
      amount: '37,756',
      change: 'down',
      included: true
    },
    {
      name: 'Chargeback Revenue YTD',
      amount: '$573,475,274.92',
      change: 'up',
      included: true
    },
    {
      name: 'Alerts YTD',
      amount: '26,574',
      change: 'up',
      included: true
    },
    {
      name: 'Alerts Revenue YTD',
      amount: '$262,374,484.94',
      change: 'up',
      included: true
    }
  ];
  teamPerformanceMiniWidgets = [
    {
      name: 'Winnings',
      amount: '$997,487,839.97',
      change: 'up',
      included: true
    },
    {
      name: 'Chargebacks',
      amount: '37,756',
      change: 'up',
      included: true
    },
    {
      name: 'Alerts',
      amount: '26,574',
      change: 'down',
      included: true
    },
    {
      name: 'Recovered',
      amount: '$573,475,274.92',
      change: 'up',
      included: true
    },
    {
      name: 'Recovery Rate',
      amount: '87%',
      change: 'up',
      included: true
    }
  ];
  clientDashboardMiniWidgets = [
    {
      name: 'Winnings',
      amount: '$997,487,839.97',
      change: 'up',
      included: true
    },
    {
      name: 'Chargebacks',
      amount: '37,756',
      change: 'up',
      included: true
    },
    {
      name: 'Alerts',
      amount: '26,574',
      change: 'down',
      included: true
    },
    {
      name: 'Recovered',
      amount: '$573,475,274.92',
      change: 'up',
      included: true
    },
    {
      name: 'Recovery Rate',
      amount: '87%',
      change: 'up',
      included: true
    }
  ];
  allWidgets = [
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Services Summary',
      chart: 'assets/images/dashboards/services-summary.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Alerts Volume & ROI',
      chart: 'assets/images/dashboards/alerts-volume.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Alerts Performance',
      chart: 'assets/images/dashboards/alerts-performance.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Chargeback Volume & ROI',
      chart: 'assets/images/dashboards/chargeback-volume.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Chargeback Performance',
      chart: 'assets/images/dashboards/chargeback-performance.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Client Growth',
      chart: 'assets/images/dashboards/client-growth.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Marketing Performance',
      chart: 'assets/images/dashboards/marketing-performance.png',
      included: false
    },
    {
      size: 'half', // full or half or third or two-thirds
      name: 'Alerts Top 5 Riskiest Industries',
      chart: 'assets/images/dashboards/alerts-top-5-industries.png',
      included: false
    },
    {
      size: 'half', // full or half or third or two-thirds
      name: 'Chargebacks Top 5 Riskiest Industries',
      chart:
        'assets/images/dashboards/chargebacks-top-5-riskiest-industries.png',
      included: false
    },
    {
      size: 'half', // full or half or third or two-thirds
      name: 'Alerts Top 5 Lead Sources',
      chart: 'assets/images/dashboards/alerts-top-5-lead-sources.png',
      included: false
    },
    {
      size: 'half', // full or half or third or two-thirds
      name: 'Chargebacks Top 5 Lead Sources',
      chart: 'assets/images/dashboards/chargebacks-top-5-lead-sources.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Alerts Top 5 Locations',
      chart: 'assets/images/dashboards/alerts-top-5-locations.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Chargebacks Top 5 Locations',
      chart: 'assets/images/dashboards/chargebacks-top-5-locations.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Sale to Chargeback Lag Time',
      chart: 'assets/images/dashboards/sale-to-chargeback-lag-time.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Root Cause Analysis',
      chart: 'assets/images/dashboards/root-cause-analysis.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Not Fought Analysis',
      chart: 'assets/images/dashboards/not-fought-analysis.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Chargeback Recovery',
      chart: 'assets/images/dashboards/chargeback-recovery.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Alert ROI',
      chart: 'assets/images/dashboards/alert-roi.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Chargeback ROI',
      chart: 'assets/images/dashboards/chargeback-roi.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Customer Contacted Analysis',
      chart: 'assets/images/dashboards/customer-contacted-analysis.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Alert Team Activity',
      chart: 'assets/images/dashboards/alert-team-activity.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Chargeback Team Activity',
      chart: 'assets/images/dashboards/chargeback-team-activity.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Response Lag Time',
      chart: 'assets/images/dashboards/response-lag-time.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Alerts Team ROI',
      chart: 'assets/images/dashboards/alert-team-roi.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Chargeback Team ROI',
      chart: 'assets/images/dashboards/chargeback-team-roi.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Alerts Volume',
      chart: 'assets/images/dashboards/alerts-volume-2.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Top 5 Riskiest MIDs',
      chart: 'assets/images/dashboards/top-5-riskiest-mids.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Alerts by Card Type',
      chart: 'assets/images/dashboards/alerts-by-card-type.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Chargebacks by Card Tipe',
      chart: 'assets/images/dashboards/alerts-by-card-type.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Product History',
      chart: 'assets/images/dashboards/product-history.png',
      included: false
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Location History',
      chart: 'assets/images/dashboards/location-history.png',
      included: false
    },
    {
      size: 'half', // full or half or third or two-thirds
      name: 'Top 5 Riskiest Affiliates',
      chart: 'assets/images/dashboards/top-5-riskiest-affiliates.png',
      included: false
    },
    {
      size: 'third', // full or half or third or two-thirds
      name: '1/3 Widget',
      chart: 'assets/images/dashboards/1-3-widget.png',
      included: false
    },
    {
      size: ' two-thirds', // full or half or third or two-thirds
      name: '2/3 Widget',
      chart: 'assets/images/dashboards/2-3-widget.png',
      included: false
    }
  ];
  widgets = [];
  summary = [
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Services Summary',
      chart: 'assets/images/dashboards/services-summary.png',
      included: true
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Alerts Volume & ROI',
      chart: 'assets/images/dashboards/alerts-volume.png',
      included: true
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Alerts Performance',
      chart: 'assets/images/dashboards/alerts-performance.png',
      included: true
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Chargeback Volume & ROI',
      chart: 'assets/images/dashboards/chargeback-volume.png',
      included: true
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Chargeback Performance',
      chart: 'assets/images/dashboards/chargeback-performance.png',
      included: true
    }
  ];
  growTrends = [
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Client Growth',
      chart: 'assets/images/dashboards/client-growth.png',
      included: true
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Marketing Performance',
      chart: 'assets/images/dashboards/marketing-performance.png',
      included: true
    },
    {
      size: 'half', // full or half or third or two-thirds
      name: 'Alerts Top 5 Riskiest Industries',
      chart: 'assets/images/dashboards/alerts-top-5-industries.png',
      included: true
    },
    {
      size: 'half', // full or half or third or two-thirds
      name: 'Chargebacks Top 5 Riskiest Industries',
      chart:
        'assets/images/dashboards/chargebacks-top-5-riskiest-industries.png',
      included: true
    },
    {
      size: 'half', // full or half or third or two-thirds
      name: 'Alerts Top 5 Lead Sources',
      chart: 'assets/images/dashboards/alerts-top-5-lead-sources.png',
      included: true
    },
    {
      size: 'half', // full or half or third or two-thirds
      name: 'Chargebacks Top 5 Lead Sources',
      chart: 'assets/images/dashboards/chargebacks-top-5-lead-sources.png',
      included: true
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Alerts Top 5 Locations',
      chart: 'assets/images/dashboards/alerts-top-5-locations.png',
      included: true
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Chargebacks Top 5 Locations',
      chart: 'assets/images/dashboards/chargebacks-top-5-locations.png',
      included: true
    }
  ];
  clientPerformance = [
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Sale to Chargeback Lag Time',
      chart: 'assets/images/dashboards/sale-to-chargeback-lag-time.png',
      included: true
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Root Cause Analysis',
      chart: 'assets/images/dashboards/root-cause-analysis.png',
      included: true
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Not Fought Analysis',
      chart: 'assets/images/dashboards/not-fought-analysis.png',
      included: true
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Chargeback Recovery',
      chart: 'assets/images/dashboards/chargeback-recovery.png',
      included: true
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Alert ROI',
      chart: 'assets/images/dashboards/alert-roi.png',
      included: true
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Chargeback ROI',
      chart: 'assets/images/dashboards/chargeback-roi.png',
      included: true
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Customer Contacted Analysis',
      chart: 'assets/images/dashboards/customer-contacted-analysis.png',
      included: true
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Alerts Top 5 Locations',
      chart: 'assets/images/dashboards/alerts-top-5-locations.png',
      included: true
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Chargebacks Top 5 Locations',
      chart: 'assets/images/dashboards/chargebacks-top-5-locations.png',
      included: true
    }
  ];
  teamPerformance = [
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Alert Team Activity',
      chart: 'assets/images/dashboards/alert-team-activity.png',
      included: true
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Chargeback Team Activity',
      chart: 'assets/images/dashboards/chargeback-team-activity.png',
      included: true
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Response Lag Time',
      chart: 'assets/images/dashboards/response-lag-time.png',
      included: true
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Alerts Team ROI',
      chart: 'assets/images/dashboards/alert-team-roi.png',
      included: true
    },
    {
      size: 'full', // full or half or third or two-thirds
      name: 'Chargeback Team ROI',
      chart: 'assets/images/dashboards/chargeback-team-roi.png',
      included: true
    }
  ];
  clientDashboard = [];

  dashboardMenu = {
    dashboards: [],
    value: ''
  };

  widgetSettings = ['Pie Chart', 'Option 2', 'divider', 'Remove'];

  miniWidgetsSettings = ['Manage', 'Option 2', 'divider', 'Option 3'];

  newDashboardName: string;

  constructor(
    private dashboardService: DashboardService,
    public dialog: MatDialog
  ) {
    dashboardService.dashboardMenu$.subscribe(dashboardMenu => {
      switch (dashboardMenu.value) {
        case 'Manage Dashboards':
          {
            dashboardMenu.value = '';
            const dialogRef = this.dialog.open(ManageDashboardComponent, {
              data: {
                dataArray: dashboardMenu.dashboards
              },
              autoFocus: false
            });
            dialogRef.afterClosed().subscribe(result => {
              result ? dashboardService.getDashboardMenu(result) : null;
            });
          }
          break;
        case 'Summary':
          {
            this.widgets = this.compareFunction(this.summary);
            this.miniWidgets = this.summaryMiniWidgets;
          }
          break;
        case 'Growth and Trends':
          {
            this.widgets = this.compareFunction(this.growTrends);
            this.miniWidgets = this.growTrendsMiniWidgets;
          }
          break;
        case 'Client Performance':
          {
            this.widgets = this.compareFunction(this.clientPerformance);
            this.miniWidgets = this.clientPerformanceMiniWidgets;
          }
          break;
        case 'Team Performance':
          {
            this.widgets = this.compareFunction(this.teamPerformance);
            this.miniWidgets = this.teamPerformanceMiniWidgets;
          }
          break;
        case 'MIDs Health':
          {
            window.location.href = '/#/mid-health-report';
          }
          break;
        case 'Client Dashboard':
          {
            this.widgets = this.compareFunction(this.clientDashboard);
            this.miniWidgets = this.clientDashboardMiniWidgets;
          }
          break;
        case 'Save as New':
          {
            dashboardMenu.value = '';
            const dialogRef = this.dialog.open(SaveDashboardComponent, {});
            dialogRef.afterClosed().subscribe(result => {
              result ? (this.newDashboardName = result) : null;
              console.log(this.newDashboardName);
            });
          }
          break;
        default:
          break;
      }
    });
    dashboardService.addWidget = () => {
      const dialogRef = this.dialog.open(AddWidgetComponent, {
        data: {
          dataArray: this.widgets
        },
        autoFocus: false
      });
      dialogRef.afterClosed().subscribe(result => {
        result ? (this.widgets = [...result]) : null;
      });
    };
    this.fetchCompanyList(data => {
      this.dashboardFilter.company.options = data;
    });
  }

  ngOnInit() {
    this.widgets = this.compareFunction(this.summary);
    this.miniWidgets = this.summaryMiniWidgets;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  fullScreenFunction = (val, item) => {
    console.log(val, item);
    window.location.href = '/#/widget';
  };
  widgetMenu = (val, item) =>
    val === 'Remove' ? (item.included = false) : null;

  compareFunction = dataArray => {
    let newArray = _.cloneDeep(this.allWidgets);
    for (let widget of dataArray) {
      let name = widget.name;
      for (let w of newArray) {
        name === w.name ? (w.included = true) : null;
      }
    }
    return newArray;
  };

  selectMiniWidgetsSettings = val => {
    if (val === 'Manage') {
      const dialogRef = this.dialog.open(CheckListItemsComponent, {
        data: {
          dataArray: this.miniWidgets,
          dialogName: 'Manage Mini Widgets',
          showAllLines: true
        },
        autoFocus: false
      });
      dialogRef.afterClosed().subscribe(result => {
        result ? (this.miniWidgets = result) : null;
      });
    }
  };

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
