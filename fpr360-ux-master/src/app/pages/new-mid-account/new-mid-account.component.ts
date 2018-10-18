import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { CheckListItemsComponent } from '../../dialogs/check-list-items/check-list-items.component';

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,24}$/;
const URL_REGEX = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
const PHONE_REGEX = /^[0-9-_\s\+\-\()]{10,20}$/;

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
  selector: 'app-new-mid-account',
  templateUrl: './new-mid-account.component.html',
  styleUrls: ['./new-mid-account.component.scss']
})
export class NewMidAccountComponent implements OnInit {
  emailControl = new FormControl('', [Validators.pattern(EMAIL_REGEX)]);
  authorizationEmail = new FormControl('', [Validators.pattern(EMAIL_REGEX)]);
  authorizationEmail2 = new FormControl('', [Validators.pattern(EMAIL_REGEX)]);

  phoneFormControl = new FormControl('', [Validators.pattern(PHONE_REGEX)]);
  smsFormControl = new FormControl('', [Validators.pattern(PHONE_REGEX)]);
  sms2FormControl = new FormControl('', [Validators.pattern(PHONE_REGEX)]);
  faxFormControl = new FormControl('', [Validators.pattern(PHONE_REGEX)]);

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
  public moneyMask = createCurrencyMask({
    prefix: '$ ',
    allowDecimal: true,
    requireDecimal: true
  });

  public poundMoneyMask = createCurrencyMask({
    prefix: '£ ',
    allowDecimal: true,
    requireDecimal: true
  });

  public changeMoneyMask = this.moneyMask;

  changeCurrency = val => {
    switch (val) {
      case 'USD $':
        this.changeMoneyMask = this.moneyMask;
        break;
      case 'CAD $':
        this.changeMoneyMask = this.moneyMask;
        break;
      case 'GBP £':
        this.changeMoneyMask = this.poundMoneyMask;
        break;
      default:
        break;
    }
  };

  processor = {
    account: {
      processorName: '',
      processorNames: [
        {
          value: 'Bank of America',
          viewValue: 'Bank of America'
        },
        {
          value: 'Processor 2',
          viewValue: 'Processor 2'
        },
        {
          value: 'Processor 3',
          viewValue: 'Processor 3'
        },
        {
          value: 'Processor 4',
          viewValue: 'Processor 4'
        }
      ],
      currency: '',
      currencies: [
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
      monthlyVolume: '',
      accountNumber: '',
      midDescriptor: '',
      disputeMethod: 'Email',
      disputeMethods: [
        {
          value: 'Email',
          viewValue: 'Email'
        },
        {
          value: 'SMS',
          viewValue: 'SMS'
        }
      ],
      disputeMethodEmail: '',
      disputeMethodSms: '',
      updateMethod: 'Fax',
      updateMethods: [
        {
          value: 'Fax',
          viewValue: 'Fax'
        },
        {
          value: 'Phone',
          viewValue: 'Phone'
        }
      ],
      updateMethodFax: '',
      updateMethodPhone: '',
      url: '',
      urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
      userName: '',
      password: '',
      authorization: {
        method: '',
        methods: [
          {
            value: 'Email',
            viewValue: 'Email'
          },
          {
            value: 'SMS',
            viewValue: 'SMS'
          }
        ],
        email: '',
        sms: '',
        note: ''
      }
    },
    dataTransmission: {
      api: {
        verify: false,
        verifyCancel: false,
        url: '',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        userName: '',
        password: '',
        key: '',
        startDate: '',
        endDate: ''
      },
      master: {
        verify: false,
        verifyCancel: false,
        url: '',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        userName: '',
        password: ''
      },
      scrape: {
        verify: false,
        verifyCancel: false,
        url: '',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        userName: '',
        password: '',
        id: '',
        ids: [
          {
            value: 'Input',
            viewValue: 'Input'
          },
          {
            value: 'Option2',
            viewValue: 'Option 2'
          },
          {
            value: 'Option3',
            viewValue: 'Option 3'
          }
        ]
      },
      web: {
        verify: false,
        verifyCancel: false,
        url: '',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        userName: '',
        password: ''
      }
    }
  };
  paymentGateway = {
    account: {
      paymentName: '',
      paymentNames: [
        {
          value: 'NMI',
          viewValue: 'NMI'
        },
        {
          value: 'Processor 2',
          viewValue: 'Processor 2'
        },
        {
          value: 'Processor 3',
          viewValue: 'Processor 3'
        },
        {
          value: 'Processor 4',
          viewValue: 'Processor 4'
        }
      ],
      alias: '',
      url: '',
      urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
      userName: '',
      password: '',
      authorization: {
        method: '',
        methods: [
          {
            value: 'Email',
            viewValue: 'Email'
          },
          {
            value: 'SMS',
            viewValue: 'SMS'
          }
        ],
        email: '',
        sms: '',
        note: ''
      }
    },
    dataTransmission: {
      api: {
        verify: false,
        verifyCancel: false,
        url: '',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        userName: '',
        password: '',
        key: '',
        startDate: '',
        endDate: ''
      },
      scrape: {
        verify: false,
        verifyCancel: false,
        url: '',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        userName: '',
        password: '',
        id: '',
        ids: [
          {
            value: 'Input',
            viewValue: 'Input'
          },
          {
            value: 'Option2',
            viewValue: 'Option 2'
          },
          {
            value: 'Option3',
            viewValue: 'Option 3'
          }
        ]
      }
    }
  };
  dataArray: any;
  dialogName: string;
  crm = [
    {
      name: 'Konnektiv',
      included: false,
      verify: false,
      verifyCancel: false,
      alias: '',
      effectiveDate: ''
    },
    {
      name: 'Salesforce',
      included: false,
      verify: false,
      verifyCancel: false,
      alias: '',
      effectiveDate: ''
    },
    {
      name: 'Limelight',
      included: false,
      verify: false,
      verifyCancel: false,
      alias: '',
      effectiveDate: ''
    },
    {
      name: 'Zendesk',
      included: false,
      verify: false,
      verifyCancel: false,
      alias: '',
      effectiveDate: ''
    },
    {
      name: 'Craft Manager',
      included: false,
      verify: false,
      verifyCancel: false,
      alias: '',
      effectiveDate: ''
    },
    {
      name: 'Zoom Box',
      included: false,
      verify: false,
      verifyCancel: false,
      alias: '',
      effectiveDate: ''
    },
    {
      name: 'Mint',
      included: false,
      verify: false,
      verifyCancel: false,
      alias: '',
      effectiveDate: ''
    },
    {
      name: 'Invision ',
      included: false,
      verify: false,
      verifyCancel: false,
      alias: '',
      effectiveDate: ''
    },
    {
      name: 'Sketch',
      included: false,
      verify: false,
      verifyCancel: false,
      alias: '',
      effectiveDate: ''
    },
    {
      name: 'Intuit',
      included: false,
      verify: false,
      verifyCancel: false,
      alias: '',
      effectiveDate: ''
    },
    {
      name: 'Slack',
      included: false,
      verify: false,
      verifyCancel: false,
      alias: '',
      effectiveDate: ''
    }
  ];
  productsList = [
    {
      name: 'Product Name',
      link: '/onboarding/products/product',
      included: false
    },
    {
      name: 'Product Name',
      link: '/onboarding/products/product',
      included: false
    },
    {
      name: 'Product Name',
      link: '/onboarding/products/product',
      included: false
    },
    {
      name: 'Product Name',
      link: '/onboarding/products/product',
      included: false
    },
    {
      name: 'Product Name',
      link: '/onboarding/products/product',
      included: false
    },
    {
      name: 'Product Name',
      link: '/onboarding/products/product',
      included: false
    },
    {
      name: 'Product Name',
      link: '/onboarding/products/product',
      included: false
    },
    {
      name: 'Product Name',
      link: '/onboarding/products/product',
      included: false
    },
    {
      name: 'Product Name',
      link: '/onboarding/products/product',
      included: false
    },
    {
      name: 'Product Name',
      link: '/onboarding/products/product',
      included: false
    }
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  removeItem = item => (item.included = false);

  accountPassword = pass => console.log(pass);

  password = pass => console.log(pass);

  dataTransmissionPassword = pass => console.log(pass);

  dataTransmissionApiKey = key => console.log(key);

  backDate = date => console.log(date);

  openDialog(dialog): void {
    switch (dialog) {
      case 'crm':
        this.dataArray = this.crm;
        this.dialogName = 'CRM';
        break;
      case 'products':
        this.dataArray = this.productsList;
        this.dialogName = 'Products';
        break;
      default:
        break;
    }
    const dialogRef = this.dialog.open(CheckListItemsComponent, {
      data: {
        dataArray: this.dataArray,
        dialogName: this.dialogName
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      switch (dialog) {
        case 'crm':
          result ? (this.crm = result) : null;
          break;
        case 'products':
          result ? (this.productsList = result) : null;
          break;
        default:
          break;
      }
    });
  }
  titleVal = val => console.log(val);

  reVerify = item => {
    if (item.verify) {
      item.verify = false;
      item.verifyCancel = true;
    }
  };
}
