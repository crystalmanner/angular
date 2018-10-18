import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription, Subscription } from 'rxjs/Subscription';
import { IndicatorsService } from '../../services/indicators.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  providers: [IndicatorsService]
})
export class OnboardingComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  companyName = '';
  onboardingInnerMenu = [
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
    }
  ];
  indicators = {
    detailsIndicator: '',
    billingIndicator: '',
    crmIndicator: '',
    merchantsIndicalor: '',
    productsIndicator: '',
    reportsIndicator: '',
    usersIndicator: '',
    gurusIndicator: ''
  };

  activateButton = true;
  activePage = false;

  pageSettings = ['Inactive', 'Option 2', 'Option 3'];

  titleVal = val => console.log(val);

  constructor(private indicatorsService: IndicatorsService) {
    indicatorsService.indicator$.subscribe(indicator => {
      this.indicators = indicator;
      this.onboardingInnerMenu[0].indicator = this.indicators.detailsIndicator;
      this.onboardingInnerMenu[1].indicator = this.indicators.billingIndicator;
      this.onboardingInnerMenu[2].indicator = this.indicators.crmIndicator;
      this.onboardingInnerMenu[3].indicator = this.indicators.productsIndicator;
      this.onboardingInnerMenu[4].indicator = this.indicators.merchantsIndicalor;
      this.onboardingInnerMenu[6].indicator = this.indicators.reportsIndicator;
      this.onboardingInnerMenu[7].indicator = this.indicators.usersIndicator;
      this.onboardingInnerMenu[8].indicator = this.indicators.gurusIndicator;

      this.activateButton = true;
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

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
