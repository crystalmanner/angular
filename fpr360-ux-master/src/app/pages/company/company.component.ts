import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription, Subscription } from 'rxjs/Subscription';
import { IndicatorsService } from '../../services/indicators.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  providers: [IndicatorsService]
})
export class CompanyComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  companyInnerMenu = [
    {
      path: 'details',
      name: 'Details',
      indicator: ''
    },
    {
      path: 'billing',
      name: 'Billing',
      indicator: ''
    },
    {
      path: 'crm',
      name: 'CRM',
      indicator: ''
    },
    {
      path: 'products',
      name: 'Products',
      indicator: ''
    },
    {
      path: 'merchants',
      name: 'Merchants',
      indicator: 'error'
    },
    {
      path: 'restrictions',
      name: 'Restrictions',
      indicator: ''
    },
    {
      path: 'reports',
      name: 'Reports',
      indicator: ''
    },
    {
      path: 'users',
      name: 'Users',
      indicator: ''
    },
    {
      path: 'gurus',
      name: 'Gurus',
      indicator: ''
    },
    {
      path: 'activity',
      name: 'Activity',
      indicator: ''
    }
  ];

  indicators = {
    detailsIndicator: '',
    billingIndicator: '',
    crmIndicator: '',
    merchantsIndicalor: '',
    productsIndicator: '',
    reportsIndicator: '',
    tradersIndicator: '',
    usersIndicator: '',
    gurusIndicator: '',
    activityIndicator: ''
  };

  activateButton = true;
  activePage = true;

  pageSettings = ['Inactive', 'Option 2', 'Option 3'];

  constructor(private indicatorsService: IndicatorsService) {
    indicatorsService.indicator$.subscribe(indicator => {
      this.indicators = indicator;
      this.companyInnerMenu[0].indicator = this.indicators.detailsIndicator;
      this.companyInnerMenu[1].indicator = this.indicators.billingIndicator;
      this.companyInnerMenu[2].indicator = this.indicators.crmIndicator;
      this.companyInnerMenu[3].indicator = this.indicators.productsIndicator;
      this.companyInnerMenu[4].indicator = this.indicators.merchantsIndicalor;
      this.companyInnerMenu[6].indicator = this.indicators.reportsIndicator;
      this.companyInnerMenu[7].indicator = this.indicators.usersIndicator;
      this.companyInnerMenu[8].indicator = this.indicators.gurusIndicator;
      this.companyInnerMenu[9].indicator = this.indicators.activityIndicator;

      this.activateButton = true;
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  titleVal = val => console.log(val);

  inactive = val => {
    this.activePage = val;
  };

  selectPageSettings = val => {
    switch (val) {
      case 'Inactive':
        this.activePage = false;
        break;

      default:
        break;
    }
  };
}
