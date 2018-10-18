import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { NewNoteComponent } from '../../dialogs/new-note/new-note.component';
const LAST_4_REGEX = /^[0-9]{4}$/;
const FIRST_6_REGEX = /^[0-9]{6}$/;

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
  selector: 'app-chargeback',
  templateUrl: './chargeback.component.html',
  styleUrls: ['./chargeback.component.scss']
})
export class ChargebackComponent implements OnInit {
  last4validate = new FormControl('', [Validators.pattern(LAST_4_REGEX)]);
  first6validate = new FormControl('', [Validators.pattern(FIRST_6_REGEX)]);

  public moneyMask = createCurrencyMask({
    prefix: '$ ',
    allowDecimal: true,
    requireDecimal: true
  });
  public first6Mask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  public last4Mask = [/\d/, /\d/, /\d/, /\d/];
  chargebackTopData = {
    industry: {
      label: 'Industry',
      value: '',
      options: [
        {
          value: 'Health',
          viewValue: 'Health'
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
    },
    company: {
      label: 'Company',
      value: '',
      options: []
    },
    merchant: {
      label: 'Merchant',
      value: '',
      options: [
        {
          value: 'All',
          viewValue: 'All'
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
    },
    mid: {
      label: 'Mid',
      value: '',
      options: [
        {
          value: 'All',
          viewValue: 'All'
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
    }
  };
  readonly = false;
  showIndustryParameters = false;
  chargeback = {
    details: {
      chargebackDate: '',
      chargebackDueDate: '',
      caseNumber: '',
      disputeAmount: '',
      first6: '',
      last4: '',
      disputeType: {
        value: '',
        options: [
          {
            value: 'Chargeback',
            viewValue: 'Chargeback'
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
      },
      disputeReason: {
        value: '',
        options: [
          {
            value: 'Fraudulent Transaction',
            viewValue: 'Fraudulent Transaction'
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
      },
      rootCause: {
        value: '',
        options: [
          {
            value: 'Friendly Fraud',
            viewValue: 'Friendly Fraud'
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
      }
    },
    productDelivery: {
      shippingCarrier: {
        value: '',
        options: [
          {
            value: 'USPS',
            viewValue: 'USPS'
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
      },
      shipmentDate: '',
      trackingNumber: ''
    },
    refundResolution: {
      refundStatus: {
        value: '',
        options: [
          {
            value: 'Issued',
            viewValue: 'Issued'
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
      },
      refundType: {
        value: '',
        options: [
          {
            value: 'Full Refund',
            viewValue: 'Full Refund'
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
      }
    },
    industryParameters: {
      example1: {
        value: '',
        options: [
          {
            value: 'Lorem ipsum dolor sit amet, te sed homero facete appareat',
            viewValue:
              'Lorem ipsum dolor sit amet, te sed homero facete appareat'
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
      },
      example2: '',
      example3: ''
    },
    transactionDetails: {
      transactionDate: '',
      transactionAmount: '',
      transactionId: '',
      avsMatch: {
        value: '',
        options: [
          {
            value: 'Yes',
            viewValue: 'Yes'
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
      },
      cvvMatch: {
        value: '',
        options: [
          {
            value: 'Yes',
            viewValue: 'Yes'
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
      },
      saleType: {
        value: '',
        options: [
          {
            value: 'Subsequent Recurring',
            viewValue: 'Subsequent Recurring'
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
      },
      orderId: ''
    },
    customerDetails: {
      customerName: '',
      country: {
        value: '',
        options: [
          {
            value: 'USA',
            viewValue: 'USA'
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
      },
      state: {
        value: ''
      },
      ipAddress: '',
      product: '',
      affiliateId: '',
      subAffiliateId: '',
      contacted: {
        value: '',
        options: [
          {
            value: 'Yes',
            viewValue: 'Yes'
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
      },
      method: {
        value: '',
        options: [
          {
            value: 'Email',
            viewValue: 'Email'
          },
          {
            value: 'Phone',
            viewValue: 'Phone'
          }
        ]
      }
    }
  };
  pageSettings = ['Option 1', 'Option 2', 'Option 3'];
  notesList = [];
  stateUSA = [];

  constructor(public dialog: MatDialog) {
    this.fetchStateUSA(data => {
      this.stateUSA = data;
    });
    this.fetchCompanyList(data => {
      this.chargebackTopData.company.options = data;
    });
  }

  ngOnInit() {}
  stopEvent = event => {
    event.stopPropagation();
  };
  titleVal = val => console.log(val);
  selectPageSettings = val => console.log(val);
  fetchStateUSA(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/stateUSA.json`);
    req.onload = () => {
      const rows = JSON.parse(req.response);
      cb(rows);
    };
    req.send();
  }
  fetchCompanyList(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/companyList.json`);
    req.onload = () => {
      const rows = JSON.parse(req.response);
      cb(rows);
    };
    req.send();
  }

  addNote = () => {
    const dialogRef = this.dialog.open(NewNoteComponent, {
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.notesList.unshift({
          user: {
            type: 'image',
            name: 'Erik Richards',
            avatar: 'assets/images/user.png',
            guru: true
          },
          subject: result.subject,
          date: '04 Nov 2018',
          note: result.note
        });
      }
    });
  };
  changeIndustry = val => {
    val
      ? (this.showIndustryParameters = true)
      : (this.showIndustryParameters = false);
  };
}
