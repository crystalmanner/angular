import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-onboarding-merchant-details',
  templateUrl: './new-onboarding-merchant-details.component.html',
  styleUrls: ['./new-onboarding-merchant-details.component.scss']
})
export class NewOnboardingMerchantDetailsComponent implements OnInit {
  newMerchantDetails = {
    countryValue: '',
    industry: [
      {
        value: 'Health & Beauty',
        viewValue: 'Health & Beauty'
      },
      {
        value: 'Option 2',
        viewValue: 'Option 2'
      },
      {
        value: 'Option 3',
        viewValue: 'Option 3'
      }
    ],
    industryValue: '',
    currency: [
      {
        value: 'USA $',
        viewValue: 'USA $'
      },
      {
        value: 'CAD $',
        viewValue: 'CAD $'
      },
      {
        value: 'EUR €',
        viewValue: 'EUR €'
      }
    ],
    currencyValue: '',
    addressValue: '',
    cityValue: '',
    stateValue: '',
    zipValue: '',
    emailValue: '',
    phoneValue: '',
    extensionValue: '',
    leadSourceValue: '',
    clientComplexityValue: '',
    description: ''
  };

  constructor() {}

  ngOnInit() {}
}
