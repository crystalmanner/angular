import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,24}$/;

@Component({
  selector: 'app-new-processor-dispute-info',
  templateUrl: './new-processor-dispute-info.component.html',
  styleUrls: ['./new-processor-dispute-info.component.scss']
})
export class NewProcessorDisputeInfoComponent implements OnInit {
  readonly = false;
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
  public gbMask = createNumberMask({
    prefix: '',
    suffix: ' Gb',
    allowDecimal: false,
    requireDecimal: false
  });
  email = new FormControl('', [Validators.pattern(EMAIL_REGEX)]);

  caseUpdateMethod = {
    value: '',
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

  disputeMethods = [];

  disputeDocumentDetails = {
    documents: [
      {
        name: 'JPG',
        check: false
      },
      {
        name: 'TIFF',
        check: false
      },
      {
        name: 'PNG',
        check: false
      },
      {
        name: 'PDF',
        check: false
      }
    ],
    maxSize: ''
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
