import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ConfirmDialogComponent } from '../../../dialogs/confirm-dialog/confirm-dialog.component';

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,24}$/;
const PHONE_REGEX = /^[0-9-_\s\+\-\()]{10,20}$/;
@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  companyDetailData = {
    companyInfo: {
      countryValue: 'USA',
      industryValue: 'Health & Beauty',
      currencyValue: 'USA $',
      addressValue: '263 Winona Drive Unit 4738',
      cityValue: 'San Francisco',
      stateValue: 'CA',
      zipValue: '3728',
      emailValue: 'info@orcanutra.com',
      phoneValue: '37338482487',
      phoneFormControl: new FormControl('', [Validators.pattern(PHONE_REGEX)]),
      extensionValue: '3728',
      urlValue: 'http://www.orcanutra.com',
      leadSourceValue: 'Referal',
      clientComplexityValue: 'Level 2',
      description:
        'Lorem ipsum dolor sit amet, te sed homero facete appareat. Et rationibus adipiscing deterruisset vel. Ne mea probo dicant officiis, eu tantas consul ponderum eos, harum perfecto gloriatur mei te. Sed modo omittam menandri ei, doctus graecis ocurreret ei nam, elitr platonem neglegentur vix id.'
    },
    contacts: [
      {
        contactInitial: 'GG',
        initialColor: 'rgb(106,62,180)',
        name: 'Gabriel Greene',
        position: 'Manager',
        workNumber: '2129822345',
        phoneFormControl: new FormControl('', [
          Validators.pattern(PHONE_REGEX)
        ]),
        ext: '12',
        mobileNumber: '3737435749',
        mobilePhoneFormControl: new FormControl('', [
          Validators.pattern(PHONE_REGEX)
        ]),
        email: 'gabriel_greene@orcanutra.com',
        emailValidator: new FormControl('', [Validators.pattern(EMAIL_REGEX)]),
        skype: 'gabrielgreene',
        settings: ['Remove']
      },

      {
        contactInitial: 'LM',
        initialColor: 'rgb(38,178,209)',
        name: 'Leo Marsh',
        position: 'Sales & Fulfillment',
        workNumber: '2129822345',
        phoneFormControl: new FormControl('', [
          Validators.pattern(PHONE_REGEX)
        ]),
        ext: '4637',
        mobileNumber: '3737435749',
        mobilePhoneFormControl: new FormControl('', [
          Validators.pattern(PHONE_REGEX)
        ]),
        email: 'leo_marsh@orcanutra.com',
        emailValidator: new FormControl('', [Validators.pattern(EMAIL_REGEX)]),
        skype: 'leomarsh',
        settings: ['Remove']
      }
    ]
  };

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  backDataEvent = val => console.log(val);
}
