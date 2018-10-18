import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding-billing',
  templateUrl: './onboarding-billing.component.html',
  styleUrls: ['./onboarding-billing.component.scss']
})
export class OnboardingBillingComponent implements OnInit {
  onboardingBilling = {
    orderManagement: {
      validate: false,
      method1: 'Per Transaction',
      value1: '',
      method2: 'Per Hour',
      value2: ''
    },
    preventionAlerts: {
      validate: false,
      provider1: 'Verifi',
      value1: '',
      allowDuplicates1: false,
      provider2: 'Ethoca',
      value2: '',
      allowDuplicates2: false
    },
    chargeback: {
      method1: 'Per Chargeback',
      value1: '',
      method2: 'Percentage on Recovery',
      value2: '',
      method3: 'Not-Fought Chargeback',
      value3: ''
    },
    professionalServices: {
      check: false,
      method1: 'Hourly',
      value1: '',
      method2: 'Per Incident',
      value2: '',
      method3: 'BB / Social Media',
      value3: '',
      method4: '3D Secure',
      value4: '',
      value5: ''
    },
    enableServices: {
      check: false,
      method1: 'Daily',
      value1: '',
      method2: 'Monthly',
      value2: ''
    },
    paymentTerms: {
      billingCycle: {
        value: '',
        values: [
          {
            value: 'Bi-Weekly',
            viewValue: 'Bi-Weekly'
          },
          {
            value: 'Option 2',
            viewValue: 'Option 2'
          },
          {
            value: 'Option 3',
            viewValue: 'Option 3'
          },
          {
            value: 'Option 4',
            viewValue: 'Option 4'
          }
        ]
      }
    },
    splitMethods: false,
    primary1Payment: {
      verify: false,
      paymentMethod: 'Credit Card',
      paymentMethods: [
        {
          value: 'Credit Card',
          viewValue: 'Credit Card'
        },
        {
          value: 'Bank Transfer',
          viewValue: 'Bank Transfer'
        },
        {
          value: 'Cheque',
          viewValue: 'Cheque'
        }
      ],
      split: '',
      nameOnCard: '',
      type: '',
      cardNumber: '',
      cvv: '',
      expirationDate: '',
      billing: false,
      address: '',
      country: 'USA',
      city: '',
      state: '',
      zip: ''
    },
    primary2Payment: {
      verify: false,
      paymentMethod: 'Credit Card',
      paymentMethods: [
        {
          value: 'Credit Card',
          viewValue: 'Credit Card'
        },
        {
          value: 'Bank Transfer',
          viewValue: 'Bank Transfer'
        },
        {
          value: 'Cheque',
          viewValue: 'Cheque'
        }
      ],
      split: '',
      nameOnCard: '',
      type: '',
      cardNumber: '',
      cvv: '',
      expirationDate: '',
      billing: false,
      address: '',
      country: 'USA',
      city: '',
      state: '',
      zip: ''
    },
    secondaryPayment: {
      verify: false,
      paymentMethod: 'Credit Card',
      paymentMethods: [
        {
          value: 'Credit Card',
          viewValue: 'Credit Card'
        },
        {
          value: 'Bank Transfer',
          viewValue: 'Bank Transfer'
        },
        {
          value: 'Cheque',
          viewValue: 'Cheque'
        }
      ],
      nameOnCard: '',
      type: '',
      cardNumber: '',
      cvv: '',
      expirationDate: '',
      billing: false,
      address: '',
      country: 'USA',
      city: '',
      state: '',
      zip: ''
    }
  };
  constructor() {}

  ngOnInit() {}
}
