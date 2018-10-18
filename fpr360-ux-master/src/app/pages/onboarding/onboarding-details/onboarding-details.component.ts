import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ConfirmDialogComponent } from '../../../dialogs/confirm-dialog/confirm-dialog.component';

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,24}$/;
const PHONE_REGEX = /^[0-9-_\s\+\-\()]{10,20}$/;

@Component({
  selector: 'app-onboarding-details',
  templateUrl: './onboarding-details.component.html',
  styleUrls: ['./onboarding-details.component.scss']
})
export class OnboardingDetailsComponent implements OnInit {
  onboardingDetailData = {
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
  constructor(public dialog: MatDialog) {}
  ngOnInit() {}

  backDataEvent = val => console.log(val);
}
