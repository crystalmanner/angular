import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IndicatorsService } from '../../../services/indicators.service';

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,24}$/;
const PHONE_REGEX = /^[0-9-_\s\+\-\()]{10,20}$/;

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
@Component({
  selector: 'app-merchant-details-form',
  templateUrl: './merchant-details-form.component.html',
  styleUrls: ['./merchant-details-form.component.scss']
})
export class MerchantDetailsFormComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.pattern(EMAIL_REGEX)]);
  phoneFormControl = new FormControl('', [Validators.pattern(PHONE_REGEX)]);
  singleLine = false;
  // masks for fields
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
  public extMask = [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ];
  // end masks for fields
  @Input() onboarding = false;
  @Input() readonly = false;
  @Input()
  detailsData = {
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
        value: 'USD $',
        viewValue: 'USD $'
      },
      {
        value: 'CAD $',
        viewValue: 'CAD $'
      },
      {
        value: 'GBP £',
        viewValue: 'GBP £'
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

  leadSource = [
    {
      value: 'Referal',
      viewValue: 'Referal'
    },
    {
      value: 'Option 2',
      viewValue: 'Option 2'
    },
    {
      value: 'Option 3',
      viewValue: 'Option 3'
    }
  ];
  clientComplexity = [
    {
      value: 'Level 1',
      viewValue: 'Level 1'
    },
    {
      value: 'Level 2',
      viewValue: 'Level 2'
    },
    {
      value: 'Level 3',
      viewValue: 'Level 3'
    }
  ];

  country = countries;
  state = stateUsa;
  sameAddress = false;
  countryChanges = {
    stateLabel: 'State',
    zipLabel: 'ZIP',
    zipMask: this.zipMask,
    phoneMask: this.phoneMask,
    stateField: false
  };

  constructor(private indicatorsService: IndicatorsService) {}

  ngOnInit() {}

  changeIndicator = val =>
    val
      ? this.indicatorsService.setDetailsIndicator('true')
      : this.indicatorsService.setDetailsIndicator('');

  changeCountry = val => {
    switch (val) {
      case 'USA':
        {
          this.state = stateUsa;
          this.countryChanges.stateLabel = 'State';
          this.countryChanges.zipLabel = 'ZIP';
          this.countryChanges.zipMask = this.zipMask;
          this.countryChanges.phoneMask = this.phoneMask;
          this.countryChanges.stateField = false;
        }
        break;
      case 'Canada':
        {
          this.state = provinceCanada;
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
}
