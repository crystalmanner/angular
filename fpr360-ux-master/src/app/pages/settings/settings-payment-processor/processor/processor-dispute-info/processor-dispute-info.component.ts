import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,24}$/;

@Component({
  selector: 'app-processor-dispute-info',
  templateUrl: './processor-dispute-info.component.html',
  styleUrls: ['./processor-dispute-info.component.scss']
})
export class ProcessorDisputeInfoComponent implements OnInit {
  readonly = false;
  public gbMask = createNumberMask({
    prefix: '',
    suffix: ' Gb',
    allowDecimal: false,
    requireDecimal: false
  });
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
  email = new FormControl('', [Validators.pattern(EMAIL_REGEX)]);

  caseUpdateMethod = {
    value: 'Manual',
    options: [
      {
        value: 'Manual',
        viewValue: 'Manual'
      },
      {
        value: 'Option 2',
        viewValue: 'Option 2'
      },
      {
        value: 'Option 3',
        viewValue: 'Option 3'
      }
    ]
  };

  disputeMethods = [
    {
      method: 'Email',
      options: [
        {
          value: 'Email',
          viewValue: 'Email'
        },
        {
          value: 'Fax',
          viewValue: 'Fax'
        }
      ],
      email: 'example@emailaddress.com',
      emailFormControl: new FormControl('', [Validators.pattern(EMAIL_REGEX)]),
      phone: ''
    },
    {
      method: 'Fax',
      options: [
        {
          value: 'Email',
          viewValue: 'Email'
        },
        {
          value: 'Fax',
          viewValue: 'Fax'
        }
      ],
      email: '',
      emailFormControl: new FormControl('', [Validators.pattern(EMAIL_REGEX)]),
      phone: '+1-483-848-2839'
    }
  ];

  disputeDocumentDetails = {
    documents: [
      {
        name: 'JPG',
        check: true
      },
      {
        name: 'TIFF',
        check: false
      },
      {
        name: 'PNG',
        check: true
      },
      {
        name: 'PDF',
        check: false
      }
    ],
    maxSize: '25Gb'
  };
  constructor() {}

  ngOnInit() {}

  addDisputeMethod = () => {
    this.disputeMethods.push({
      method: 'Email',
      options: [
        {
          value: 'Email',
          viewValue: 'Email'
        },
        {
          value: 'Fax',
          viewValue: 'Fax'
        }
      ],
      email: '',
      emailFormControl: new FormControl('', [Validators.pattern(EMAIL_REGEX)]),
      phone: ''
    });
  };
  removeItem = item => {
    const index = this.disputeMethods.indexOf(item);
    this.disputeMethods.splice(index, 1);
  };
}
