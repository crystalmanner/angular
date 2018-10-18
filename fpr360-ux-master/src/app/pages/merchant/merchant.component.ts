import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription, Subscription } from 'rxjs/Subscription';
import { IndicatorsService } from '../../services/indicators.service';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss'],
  providers: [IndicatorsService]
})
export class MerchantComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  merchantInnerMenu = [
    {
      path: 'details',
      name: 'Details',
      indicator: ''
    },
    {
      path: 'products',
      name: 'Products',
      indicator: ''
    },
    {
      path: 'mid-accounts',
      name: 'Mid Accounts',
      indicator: 'error'
    },
    {
      path: 'activity',
      name: 'Activity',
      indicator: ''
    }
  ];
  indicators = {
    detailsIndicator: '',
    productsIndicator: '',
    midAccountsIndicator: '',
    activityIndicator: ''
  };

  activateButton = true;
  activePage = true;

  pageSettings = ['Inactive', 'Option 2', 'Option 3'];

  constructor(private indicatorsService: IndicatorsService) {
    indicatorsService.indicator$.subscribe(indicator => {
      this.indicators = indicator;
      this.merchantInnerMenu[0].indicator = this.indicators.detailsIndicator;
      this.merchantInnerMenu[1].indicator = this.indicators.productsIndicator;
      this.merchantInnerMenu[2].indicator = this.indicators.midAccountsIndicator;
      this.merchantInnerMenu[3].indicator = this.indicators.activityIndicator;

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

  titleVal = val => console.log(val);
}
