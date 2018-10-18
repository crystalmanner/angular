import { Component, OnInit } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const createCurrencyMask = (opts = {}) => {
  const decimalsRegex = /\.([0-9]{1,2})/;
  const numberMask = createNumberMask({
    prefix: '$',
    includeThousandsSeparator: true,
    allowDecimal: true,
    requireDecimal: true,
    allowLeadingZeroes: false,
    ...opts
  });

  return rawValue => {
    const mask = numberMask(rawValue);
    const result = decimalsRegex.exec(rawValue);

    // In case there is only one decimal
    if (result && result[1].length < 2) {
      mask.push('0');
    } else if (!result) {
      mask.push('0');
      mask.push('0');
    }

    return mask;
  };
};
@Component({
  selector: 'app-invoice-service',
  templateUrl: './invoice-service.component.html',
  styleUrls: ['./invoice-service.component.scss']
})
export class InvoiceServiceComponent implements OnInit {
  readonly = false;

  public moneyMask = createCurrencyMask({
    prefix: '$ ',
    allowDecimal: true,
    requireDecimal: true
  });

  public percentMask = createNumberMask({
    prefix: '',
    suffix: '%',
    allowDecimal: false,
    requireDecimal: false
  });

  billingData = {
    orderManagement: {
      validate: false,
      method1: 'Per Transaction',
      value1: '25.00',
      method2: 'Per Hour',
      value2: '50.00'
    },
    preventionAlerts: {
      validate: true,
      provider1: 'Verifi',
      value1: '40.00',
      allowDuplicates1: true,
      provider2: 'Ethoca',
      value2: '30.00',
      allowDuplicates2: true
    },
    chargeback: {
      method1: 'Per Chargeback',
      value1: '25.00',
      method2: 'Percentage on Recovery',
      value2: '12',
      method3: 'Not-Fought Chargeback',
      value3: '25.00'
    },
    professionalServices: {
      check: true,
      method1: 'Hourly',
      value1: '25.00',
      method2: 'Per Incident',
      value2: '8.00',
      method3: 'BB / Social Media',
      value3: '12.00',
      method4: '3D Secure',
      value4: '150.00',
      value5: '9.00'
    },
    enableServices: {
      check: true,
      method1: 'Daily',
      value1: '0.25',
      method2: 'Monthly',
      value2: '25.00'
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
    }
  };

  constructor() {}

  ngOnInit() {}
}
