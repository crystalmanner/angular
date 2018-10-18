import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productData = {
    productName: 'Organic Lemon Body Wash',
    productDetails: {
      url: 'www.paymentgateway.com/connect',
      price: '$ 100.00',
      type: 'Trial & Reoccurring',
      trialTerm: '21',
      refundTerm: '16'
    },
    screens: {
      homepageUrl: 'product.png',
      checkoutPageUrl: 'product.png',
      termsConditionsUrl: 'product.png'
    },
    merchantsList: [
      {
        name: 'Merchant Name',
        included: true,
        active: true,
        midsList: [
          {
            name: 'MID Alias',
            included: true
          },
          {
            name: 'MID Alias',
            included: true
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
        included: true,
        active: false,
        midsList: [
          {
            name: 'MID Alias',
            included: true
          },
          {
            name: 'MID Alias',
            included: true
          },
          {
            name: 'MID Alias',
            included: true
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
        included: true,
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
