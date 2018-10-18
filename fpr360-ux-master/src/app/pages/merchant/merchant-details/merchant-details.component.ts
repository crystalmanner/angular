import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchant-details',
  templateUrl: './merchant-details.component.html',
  styleUrls: ['./merchant-details.component.scss']
})
export class MerchantDetailsComponent implements OnInit {
  merchantDetails = {
    countryValue: 'USA',
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
    industryValue: 'Health & Beauty',
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
    currencyValue: 'USA $',
    addressValue: '263 Winona Drive Unit 4738',
    cityValue: 'San Francisco',
    stateValue: 'CA',
    zipValue: '37284',
    emailValue: 'info@orcanutra.com',
    phoneValue: '37338482487',
    extensionValue: '111',
    leadSourceValue: 'Referal',
    clientComplexityValue: 'Level 2',
    description:
      'Lorem ipsum dolor sit amet, te sed homero facete appareat. Et rationibus adipiscing deterruisset vel. Ne mea probo dicant officiis, eu tantas consul ponderum eos, harum perfecto gloriatur mei te. Sed modo omittam menandri ei, doctus graecis ocurreret ei nam, elitr platonem neglegentur vix id.'
  };

  constructor() {}

  ngOnInit() {}
}
