import { Component, OnInit } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
const countries = [
  {
    value: 'USA',
    viewValue: 'USA'
  },
  {
    value: 'Canada',
    viewValue: 'Canada'
  },
  {
    value: 'UK',
    viewValue: 'UK'
  }
];
const stateUsa = [
  {
    value: 'AL',
    viewValue: 'AL'
  },
  {
    value: 'AK',
    viewValue: 'AK'
  },
  {
    value: 'AZ',
    viewValue: 'AZ'
  },
  {
    value: 'AR',
    viewValue: 'AR'
  },
  {
    value: 'CA',
    viewValue: 'CA'
  },
  {
    value: 'CO',
    viewValue: 'CO'
  },
  {
    value: 'CT',
    viewValue: 'CT'
  },
  {
    value: 'DE',
    viewValue: 'DE'
  },
  {
    value: 'DC',
    viewValue: 'DC'
  },
  {
    value: 'FL',
    viewValue: 'FL'
  },
  {
    value: 'GA',
    viewValue: 'GA'
  },
  {
    value: 'HI',
    viewValue: 'HI'
  },
  {
    value: 'ID',
    viewValue: 'ID'
  },
  {
    value: 'IL',
    viewValue: 'IL'
  },
  {
    value: 'IN',
    viewValue: 'IN'
  },
  {
    value: 'IA',
    viewValue: 'IA'
  },
  {
    value: 'KS',
    viewValue: 'KS'
  },
  {
    value: 'KY',
    viewValue: 'KY'
  },
  {
    value: 'LA',
    viewValue: 'LA'
  },
  {
    value: 'ME',
    viewValue: 'ME'
  },
  {
    value: 'MD',
    viewValue: 'MD'
  },
  {
    value: 'MA',
    viewValue: 'MA'
  },
  {
    value: 'MI',
    viewValue: 'MI'
  },
  {
    value: 'MN',
    viewValue: 'MN'
  },
  {
    value: 'MS',
    viewValue: 'MS'
  },
  {
    value: 'MO',
    viewValue: 'MO'
  },
  {
    value: 'MT',
    viewValue: 'MT'
  },
  {
    value: 'NE',
    viewValue: 'NE'
  },
  {
    value: 'NV',
    viewValue: 'NV'
  },
  {
    value: 'NH',
    viewValue: 'NH'
  },
  {
    value: 'NJ',
    viewValue: 'NJ'
  },
  {
    value: 'NM',
    viewValue: 'NM'
  },
  {
    value: 'NY',
    viewValue: 'NY'
  },
  {
    value: 'NC',
    viewValue: 'NC'
  },
  {
    value: 'ND',
    viewValue: 'ND'
  },
  {
    value: 'OH',
    viewValue: 'OH'
  },
  {
    value: 'OK',
    viewValue: 'OK'
  },
  {
    value: 'OR',
    viewValue: 'OR'
  },
  {
    value: 'PA',
    viewValue: 'PA'
  },
  {
    value: 'RI',
    viewValue: 'RI'
  },
  {
    value: 'SC',
    viewValue: 'SC'
  },
  {
    value: 'SD',
    viewValue: 'SD'
  },
  {
    value: 'TN',
    viewValue: 'TN'
  },
  {
    value: 'TX',
    viewValue: 'TX'
  },
  {
    value: 'UT',
    viewValue: 'UT'
  },
  {
    value: 'VT',
    viewValue: 'VT'
  },
  {
    value: 'VA',
    viewValue: 'VA'
  },
  {
    value: 'WA',
    viewValue: 'WA'
  },
  {
    value: 'WV',
    viewValue: 'WV'
  },
  {
    value: 'WI',
    viewValue: 'WI'
  },
  {
    value: 'WY',
    viewValue: 'WY'
  }
];
const provinceCanada = [
  {
    value: 'AB',
    viewValue: 'AB'
  },
  {
    value: 'BC',
    viewValue: 'BC'
  },
  {
    value: 'MB',
    viewValue: 'MB'
  },
  {
    value: 'NB',
    viewValue: 'NB'
  },
  {
    value: 'NL',
    viewValue: 'NL'
  },
  {
    value: 'NS',
    viewValue: 'NS'
  },
  {
    value: 'ON',
    viewValue: 'ON'
  },
  {
    value: 'PE',
    viewValue: 'PE'
  },
  {
    value: 'QC',
    viewValue: 'QC'
  },
  {
    value: 'SK',
    viewValue: 'SK'
  },
  {
    value: 'NT',
    viewValue: 'NT'
  },
  {
    value: 'NU',
    viewValue: 'NU'
  },
  {
    value: 'YT',
    viewValue: 'YT'
  }
];
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
  selector: 'app-billing-methods',
  templateUrl: './billing-methods.component.html',
  styleUrls: ['./billing-methods.component.scss']
})
export class BillingMethodsComponent implements OnInit {
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
  public cardNumberMask = [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ];
  public cardDateMask = [/\d/, /\d/, '/', /\d/, /\d/];
  public phoneMask = [
    '+',
    '1',
    ' ',
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ];
  public canadaPhoneMask = [
    '+',
    '1',
    ' ',
    /[1-9]/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ];
  public otherPhoneMask = [
    '+',
    '4',
    '4',
    ' ',
    /[1-9]/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ];
  public zipMask = [/\d/, /\d/, /\d/, /\d/, /\d/];
  public postalMask = [
    /[a-zA-Z]/,
    /[0-9]/,
    /[a-zA-Z]/,
    /[0-9]/,
    /[a-zA-Z]/,
    /[0-9]/
  ];
  public otherPostalMask = [
    /[a-zA-Z0-9]/,
    /[a-zA-Z0-9]/,
    /[a-zA-Z0-9]/,
    /[a-zA-Z0-9]/,
    /[a-zA-Z0-9]/,
    /[a-zA-Z0-9]/,
    /[a-zA-Z0-9]/,
    /[a-zA-Z0-9]/,
    /[a-zA-Z0-9]/,
    /[a-zA-Z0-9]/,
    /[a-zA-Z0-9]/,
    /[a-zA-Z0-9]/
  ];

  readonly = false;
  billingData = {
    splitMethods: true,
    primary1Payment: {
      verify: false,
      verifyCancel: false,
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
      expirationDate: '12/17',
      billing: false,
      address: '263 Winona Drive Unit 4738',
      country: 'USA',
      city: 'San Francisco',
      state: 'CA',
      zip: '37282'
    },
    primary2Payment: {
      verify: false,
      verifyCancel: false,
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
      expirationDate: '12/17',
      billing: true,
      address: '',
      country: 'USA',
      city: '',
      state: '',
      zip: ''
    },
    secondaryPayment: {
      verify: true,
      verifyCancel: false,
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
      expirationDate: '12/17',
      billing: false,
      address: '263 Winona Drive Unit 4738',
      country: 'USA',
      city: 'San Francisco',
      state: 'CA',
      zip: '37282'
    }
  };

  cards = [
    {
      value: 'VISA',
      viewValue: 'VISA'
    },
    {
      value: 'MC',
      viewValue: 'MC'
    },
    {
      value: 'AmEx',
      viewValue: 'AmEx'
    }
  ];

  countries = countries;

  countryChanges = {
    states: stateUsa,
    stateLabel: 'State',
    zipLabel: 'ZIP',
    zipMask: this.zipMask,
    phoneMask: this.phoneMask,
    stateField: false
  };
  countryChangesP2 = {
    states: stateUsa,
    stateLabel: 'State',
    zipLabel: 'ZIP',
    zipMask: this.zipMask,
    phoneMask: this.phoneMask,
    stateField: false
  };
  countryChangesS = {
    states: stateUsa,
    stateLabel: 'State',
    zipLabel: 'ZIP',
    zipMask: this.zipMask,
    phoneMask: this.phoneMask,
    stateField: false
  };

  constructor() {}

  ngOnInit() {}

  changeCountry = val => {
    switch (val) {
      case 'USA':
        {
          this.countryChanges.states = stateUsa;
          this.countryChanges.stateLabel = 'State';
          this.countryChanges.zipLabel = 'ZIP';
          this.countryChanges.zipMask = this.zipMask;
          this.countryChanges.phoneMask = this.phoneMask;
          this.countryChanges.stateField = false;
        }
        break;
      case 'Canada':
        {
          this.countryChanges.states = provinceCanada;
          this.countryChanges.stateLabel = 'Province';
          this.countryChanges.zipLabel = 'Postal';
          this.countryChanges.zipMask = this.postalMask;
          this.countryChanges.phoneMask = this.canadaPhoneMask;
          this.countryChanges.stateField = false;
        }
        break;
      case 'UK':
        {
          this.countryChanges.stateLabel = 'State';
          this.countryChanges.stateField = true;
          this.countryChanges.zipLabel = 'Postal';
          this.countryChanges.zipMask = this.otherPostalMask;
          this.countryChanges.phoneMask = this.otherPhoneMask;
        }
        break;
      default:
        break;
    }
  };
  changeCountryP2 = val => {
    switch (val) {
      case 'USA':
        {
          this.countryChangesP2.states = stateUsa;
          this.countryChangesP2.stateLabel = 'State';
          this.countryChangesP2.zipLabel = 'ZIP';
          this.countryChangesP2.zipMask = this.zipMask;
          this.countryChangesP2.phoneMask = this.phoneMask;
          this.countryChangesP2.stateField = false;
        }
        break;
      case 'Canada':
        {
          this.countryChangesP2.states = provinceCanada;
          this.countryChangesP2.stateLabel = 'Province';
          this.countryChangesP2.zipLabel = 'Postal';
          this.countryChangesP2.zipMask = this.postalMask;
          this.countryChangesP2.phoneMask = this.canadaPhoneMask;
          this.countryChangesP2.stateField = false;
        }
        break;
      case 'UK':
        {
          this.countryChangesP2.stateLabel = 'State';
          this.countryChangesP2.stateField = true;
          this.countryChangesP2.zipLabel = 'Postal';
          this.countryChangesP2.zipMask = this.otherPostalMask;
          this.countryChangesP2.phoneMask = this.otherPhoneMask;
        }
        break;
      default:
        break;
    }
  };
  changeCountryS = val => {
    switch (val) {
      case 'USA':
        {
          this.countryChangesS.states = stateUsa;
          this.countryChangesS.stateLabel = 'State';
          this.countryChangesS.zipLabel = 'ZIP';
          this.countryChangesS.zipMask = this.zipMask;
          this.countryChangesS.phoneMask = this.phoneMask;
          this.countryChangesS.stateField = false;
        }
        break;
      case 'Canada':
        {
          this.countryChangesS.states = provinceCanada;
          this.countryChangesS.stateLabel = 'Province';
          this.countryChangesS.zipLabel = 'Postal';
          this.countryChangesS.zipMask = this.postalMask;
          this.countryChangesS.phoneMask = this.canadaPhoneMask;
          this.countryChangesS.stateField = false;
        }
        break;
      case 'UK':
        {
          this.countryChangesS.stateLabel = 'State';
          this.countryChangesS.stateField = true;
          this.countryChangesS.zipLabel = 'Postal';
          this.countryChangesS.zipMask = this.otherPostalMask;
          this.countryChangesS.phoneMask = this.otherPhoneMask;
        }
        break;
      default:
        break;
    }
  };

  changeValidateNewOrders = val => {
    console.log(val);
  };

  selectMenu = option => console.log(option);

  splitFunction = val => {
    if (val) {
      this.billingData.primary1Payment.split = '';
      this.billingData.primary2Payment.split =
        100 -
        Number(this.billingData.primary1Payment.split.split('%')[0]) +
        '%';
    }
  };
  changeSplit = val1 => {
    this.billingData.primary2Payment.split =
      100 - Number(val1.split('%')[0]) + '%';
    console.log(this.billingData.primary2Payment.split);
  };

  changeCardP1 = val => console.log(val);
  changeCardp2 = val => console.log(val);
  changeCardS = val => console.log(val);

  //verifications
  reVerify = item => {
    if (item.verify) {
      item.verify = false;
      item.verifyCancel = true;
    }
  };
}
