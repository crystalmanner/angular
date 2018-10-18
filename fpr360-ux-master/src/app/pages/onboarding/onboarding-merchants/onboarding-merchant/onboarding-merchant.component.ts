import { Component, OnInit } from '@angular/core';
import { IndicatorsService } from '../../../../services/indicators.service';

@Component({
  selector: 'app-onboarding-merchant',
  templateUrl: './onboarding-merchant.component.html',
  styleUrls: ['./onboarding-merchant.component.scss'],
  providers: [IndicatorsService]
})
export class OnboardingMerchantComponent implements OnInit {
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
      indicator: 'error'
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
