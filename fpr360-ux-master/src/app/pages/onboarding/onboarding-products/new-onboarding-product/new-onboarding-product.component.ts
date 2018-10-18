import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-onboarding-product',
  templateUrl: './new-onboarding-product.component.html',
  styleUrls: ['./new-onboarding-product.component.scss']
})
export class NewOnboardingProductComponent implements OnInit {
  productData = {
    productName: '',
    productDetails: {
      url: '',
      price: '',
      type: '',
      trialTerm: '',
      refundTerm: ''
    },
    screens: {
      homepageUrl: '',
      checkoutPageUrl: '',
      termsConditionsUrl: ''
    },
    merchantsList: [
      {
        name: 'Merchant Name',
        included: false,
        active: false,
        midsList: [
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          }
        ]
      },
      {
        name: 'Merchant Name',
        included: false,
        active: false,
        midsList: [
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          }
        ]
      },
      {
        name: 'Merchant Name',
        included: false,
        active: false,
        midsList: [
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          }
        ]
      },
      {
        name: 'Merchant Name',
        included: false,
        active: false,
        midsList: [
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          }
        ]
      },
      {
        name: 'Merchant Name',
        included: false,
        active: false,
        midsList: [
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          }
        ]
      },
      {
        name: 'Merchant Name',
        included: false,
        active: false,
        midsList: [
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          }
        ]
      },
      {
        name: 'Merchant Name',
        included: false,
        active: false,
        midsList: [
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          }
        ]
      },
      {
        name: 'Merchant Name',
        included: false,
        active: false,
        midsList: [
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          }
        ]
      }
    ]
  };

  constructor() {}

  ngOnInit() {}
}
