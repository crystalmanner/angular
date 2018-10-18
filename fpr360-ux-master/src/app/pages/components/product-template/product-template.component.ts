import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { CheckListItemsComponent } from '../../../dialogs/check-list-items/check-list-items.component';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const URL_REGEX = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;

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
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.scss']
})
export class ProductTemplateComponent implements OnInit {
  public moneyMask = createCurrencyMask({
    prefix: '$ ',
    allowDecimal: true,
    requireDecimal: true
  });
  public dayMask = [/\d/, /\d/, /\d/];
  urlFormControl = new FormControl('', [Validators.pattern(URL_REGEX)]);
  productType = [
    {
      value: 'Trial & Reoccurring',
      viewValue: 'Trial & Reoccurring'
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

  @Input()
  productData = {
    productName: '',
    productDetails: {
      url: '',
      price: '',
      type: '',
      trialTerm: '',
      refundTerm: ''
    },
    screens: {
      homepageUrl: '',
      checkoutPageUrl: '',
      termsConditionsUrl: ''
    },
    merchantsList: [
      {
        name: 'Merchant Name',
        included: true,
        active: false,
        midsList: [
          {
            name: 'MID Alias',
            included: true
          },
          {
            name: 'MID Alias',
            included: true
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          }
        ]
      },
      {
        name: 'Merchant Name',
        included: true,
        active: false,
        midsList: [
          {
            name: 'MID Alias',
            included: true
          },
          {
            name: 'MID Alias',
            included: true
          },
          {
            name: 'MID Alias',
            included: true
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          }
        ]
      },
      {
        name: 'Merchant Name',
        included: true,
        active: false,
        midsList: [
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          }
        ]
      },
      {
        name: 'Merchant Name',
        included: false,
        active: false,
        midsList: [
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          }
        ]
      },
      {
        name: 'Merchant Name',
        included: false,
        active: false,
        midsList: [
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          }
        ]
      },
      {
        name: 'Merchant Name',
        included: false,
        active: false,
        midsList: [
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          }
        ]
      },
      {
        name: 'Merchant Name',
        included: false,
        active: false,
        midsList: [
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          }
        ]
      },
      {
        name: 'Merchant Name',
        included: false,
        active: false,
        midsList: [
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          },
          {
            name: 'MID Alias',
            included: false
          }
        ]
      }
    ]
  };
  midsFlag = false;
  midsList = [];
  merchantIndex = 0;

  dataArray: any;
  dialogName: string;
  showSave = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    if (this.productData.merchantsList[0].active) {
      (this.midsFlag = true),
        (this.midsList = this.productData.merchantsList[0].midsList);
    }
  }

  titleVal = val => console.log(val);

  changeScreenshot = url => console.log(url);
  //change save button
  changeSaveButton = () => {
    this.showSave = true;
  };

  removeItem = item => (item.included = false);

  openDialog(dialog): void {
    switch (dialog) {
      case 'Merchants':
        this.dataArray = this.productData.merchantsList;
        this.dialogName = 'Merchants';
        break;
      case 'MIDs':
        this.dataArray = this.midsList;
        this.dialogName = 'MIDs';
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
      if (result) {
        switch (dialog) {
          case 'Merchants':
            this.productData.merchantsList = result;
            break;
          case 'MIDs':
            this.midsList = result;
            this.productData.merchantsList[
              this.merchantIndex
            ].midsList = result;
            break;
          default:
            break;
        }
      }
    });
  }

  //merchant section
  acviveMerchantsFunction = item => {
    this.midsFlag = true;
    for (let i of this.productData.merchantsList) {
      i.active = false;
    }
    item.active = true;
    this.midsList = item.midsList;
    const index = this.productData.merchantsList.indexOf(item);
    this.merchantIndex = index;
  };

  removeMerchantsItem = item => {
    if (item.active) {
      this.midsFlag = false;
      item.active = false;
    }
    item.included = false;
  };
}
