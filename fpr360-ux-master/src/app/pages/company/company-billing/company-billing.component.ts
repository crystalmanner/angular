import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-billing',
  templateUrl: './company-billing.component.html',
  styleUrls: ['./company-billing.component.scss']
})
export class CompanyBillingComponent implements OnInit {
  companyBilling = {
    orderManagement: {
      validate: true,
      method1: 'Per Transaction',
      value1: '$ 25.00',
      method2: 'Per Hour',
      value2: ''
    },
    preventionAlerts: {
      validate: false,
      provider1: 'Verifi',
      value1: '$ 40.00',
      allowDuplicates1: true,
      provider2: 'Ethoca',
      value2: '$ 30.00',
      allowDuplicates2: true
    },
    chargeback: {
      method1: 'Per Chargeback',
      value1: '$ 25.00',
      method2: 'Percentage on Recovery',
      value2: '12 %',
      method3: 'Not-Fought Chargeback',
      value3: '$ 25.00'
    },
    professionalServices: {
      check: true,
      method1: 'Hourly',
      value1: '$ 25.00',
      method2: 'Per Incident',
      value2: '$ 8.00',
      method3: 'BB / Social Media',
      value3: '$ 12.00',
      method4: '3D Secure',
      value4: '$ 150.00',
      value5: '$ 9.00'
    },
    enableServices: {
      check: true,
      method1: 'Daily',
      value1: '$ 0.25',
      method2: 'Monthly',
      value2: '$ 25.00'
    },
    paymentTerms: {
      billingCycle: {
        value: 'Bi-Weekly',
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
    splitMethods: true,
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
      split: '40%',
      nameOnCard: 'Caroline Pratt',
      type: 'VISA',
      cardNumber: '2723 5648 5637 4738',
      cvv: '345',
      expirationDate: '12/20',
      billing: false,
      address: '263 Winona Drive Unit 4738',
      country: 'USA',
      city: 'San Francisco',
      state: 'CA',
      zip: '37282'
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
      split: '60%',
      nameOnCard: 'Caroline Pratt',
      type: 'VISA',
      cardNumber: '2723 5648 5637 4738',
      cvv: '345',
      expirationDate: '12/20',
      billing: true,
      address: '',
      country: '',
      city: '',
      state: '',
      zip: ''
    },
    secondaryPayment: {
      verify: true,
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
      nameOnCard: 'Caroline Pratt',
      type: 'VISA',
      cardNumber: '2723 5648 5637 4738',
      cvv: '345',
      expirationDate: '12/20',
      billing: false,
      address: '263 Winona Drive Unit 4738',
      country: 'USA',
      city: 'San Francisco',
      state: 'CA',
      zip: '37282'
    }
  };

  constructor() {}

  ngOnInit() {}
}
