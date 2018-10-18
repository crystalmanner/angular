import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IndicatorsService } from '../../../services/indicators.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ConfirmDialogComponent } from '../../../dialogs/confirm-dialog/confirm-dialog.component';

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,24}$/;
const URL_REGEX = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
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
  selector: 'app-company-details-page',
  templateUrl: './company-details-page.component.html',
  styleUrls: ['./company-details-page.component.scss']
})
export class CompanyDetailsPageComponent implements OnInit {
  @Input() readonly = false;
  @Input() topMenuIndication = true;
  @Input()
  data = {
    companyInfo: {
      countryValue: 'USA',
      industryValue: '',
      currencyValue: '',
      addressValue: '',
      cityValue: '',
      stateValue: '',
      zipValue: '',
      emailValue: '',
      phoneValue: '',
      phoneFormControl: new FormControl('', [Validators.pattern(PHONE_REGEX)]),
      extensionValue: '',
      urlValue: '',
      leadSourceValue: '',
      clientComplexityValue: '',
      description: ''
    },
    contacts: [
      {
        contactInitial: '',
        initialColor: '#3078B8',
        name: '',
        position: '',
        workNumber: '',
        phoneFormControl: new FormControl('', [
          Validators.pattern(PHONE_REGEX)
        ]),
        ext: '',
        mobileNumber: '',
        mobilePhoneFormControl: new FormControl('', [
          Validators.pattern(PHONE_REGEX)
        ]),
        email: '',
        emailValidator: new FormControl('', [Validators.pattern(EMAIL_REGEX)]),
        skype: '',
        settings: ['Remove']
      }
    ]
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
  industry = [
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
  ];
  currency = [
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
  ];
  stateUsa = [];
  state = [];
  country = countries;
  emailFormControl = new FormControl('', [Validators.pattern(EMAIL_REGEX)]);
  urlFormControl = new FormControl('', [Validators.pattern(URL_REGEX)]);
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

  contactIndex = this.data.contacts.length;

  countryChanges = {
    stateLabel: 'State',
    zipLabel: 'ZIP',
    zipMask: this.zipMask,
    phoneMask: this.phoneMask,
    stateField: false
  };

  constructor(
    public dialog: MatDialog,
    private indicatorsService: IndicatorsService
  ) {
    this.fetchStateUSA(data => {
      this.state = data;
      this.stateUsa = data;
    });
  }

  ngOnInit() {}

  fetchStateUSA(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/stateUSA.json`);
    req.onload = () => {
      const rows = JSON.parse(req.response);
      cb(rows);
    };
    req.send();
  }

  settingsFunction = (val, item) => {
    if (val === 'Remove') {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        autoFocus: false
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.data.contacts.splice(this.data.contacts.indexOf(item), 1);
        }
      });
    }
  };

  addContact = () => {
    let bg: string;
    let contrast: string;
    // background generator
    while (contrast != 'white') {
      bg =
        '#' +
        ('000000' + Math.floor(Math.random() * 16777216).toString(16)).substr(
          -6
        );
      contrast = setContrast(hexToRgb(bg));
    }

    //push contact data
    this.contactIndex++;
    this.data.contacts.unshift({
      contactInitial: '',
      initialColor: bg,
      name: '',
      position: '',
      workNumber: '',
      phoneFormControl: new FormControl('', [Validators.pattern(PHONE_REGEX)]),
      ext: '',
      mobileNumber: '',
      mobilePhoneFormControl: new FormControl('', [
        Validators.pattern(PHONE_REGEX)
      ]),
      email: '',
      emailValidator: new FormControl('', [Validators.pattern(EMAIL_REGEX)]),
      skype: '',
      settings: ['Remove']
    });
  };

  //indicators section
  /**
   * add indicator to top menu (this.onboardingService.setDetailsIndicator('true'))
   * if true -> check icon
   * if error -> error icon
   */

  changeCountry = val => {
    this.indicatorsService.setDetailsIndicator('true');

    switch (val) {
      case 'USA':
        {
          this.state = this.stateUsa;
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

  //end indicators section
}

// check colors
const hexToRgb = hex => {
  // turn hex val to RGB
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
};
// calc to work out if it will match on black or white better
const setContrast = rgb =>
  (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 > 125 ? 'black' : 'white';
