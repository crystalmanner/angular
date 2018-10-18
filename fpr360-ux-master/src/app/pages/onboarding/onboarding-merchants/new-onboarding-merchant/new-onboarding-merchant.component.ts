import { Component, OnInit } from '@angular/core';
import { IndicatorsService } from '../../../../services/indicators.service';

@Component({
  selector: 'app-new-onboarding-merchant',
  templateUrl: './new-onboarding-merchant.component.html',
  styleUrls: ['./new-onboarding-merchant.component.scss'],
  providers: [IndicatorsService]
})
export class NewOnboardingMerchantComponent implements OnInit {
  onboardingMerchantMenu = [
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
      indicator: ''
    }
  ];
  indicators = {
    detailsIndicator: '',
    productsIndicator: '',
    midAccountsIndicator: ''
  };
  activateButton = true;
  activePage = false;

  pageSettings = ['Inactive', 'Option 2', 'Option 3'];
  constructor(private indicatorsService: IndicatorsService) {
    indicatorsService.indicator$.subscribe(indicator => {
      this.indicators = indicator;
      this.onboardingMerchantMenu[0].indicator = this.indicators.detailsIndicator;
      this.onboardingMerchantMenu[1].indicator = this.indicators.productsIndicator;
      this.onboardingMerchantMenu[2].indicator = this.indicators.midAccountsIndicator;

      this.activateButton = true;
    });
  }

  ngOnInit() {}

  titleVal = title => console.log(title);

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
