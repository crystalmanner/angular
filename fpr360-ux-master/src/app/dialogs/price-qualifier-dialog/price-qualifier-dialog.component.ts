import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import * as _ from 'lodash';

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
  selector: 'app-price-qualifier-dialog',
  templateUrl: './price-qualifier-dialog.component.html',
  styleUrls: ['./price-qualifier-dialog.component.scss']
})
export class PriceQualifierDialogComponent implements OnInit {
  public moneyMask = createCurrencyMask({
    prefix: '$',
    allowDecimal: true,
    requireDecimal: true
  });
  readonly = false;
  priceList = [
    {
      value: 'Between',
      viewValue: 'Between'
    },
    {
      value: 'Less than or equal to',
      viewValue: 'Less than or equal to'
    },
    {
      value: 'Less than',
      viewValue: 'Less than'
    },
    {
      value: 'Greater than or equal to',
      viewValue: 'Greater than or equal to'
    },
    {
      value: 'Greater than',
      viewValue: 'Greater than'
    }
  ];

  priceData = {
    priceValue: '',
    amountA: '',
    amountB: ''
  };

  constructor(
    public dialogRef: MatDialogRef<PriceQualifierDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  closeDialog = () => this.dialogRef.close();

  applyFunction = () => {
    this.dialogRef.close(this.priceData);
  };
}
