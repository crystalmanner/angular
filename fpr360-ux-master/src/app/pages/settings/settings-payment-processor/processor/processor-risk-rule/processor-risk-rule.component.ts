import { Component, OnInit } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

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
  selector: 'app-processor-risk-rule',
  templateUrl: './processor-risk-rule.component.html',
  styleUrls: ['./processor-risk-rule.component.scss']
})
export class ProcessorRiskRuleComponent implements OnInit {
  public moneyMask = createCurrencyMask({
    prefix: '$',
    allowDecimal: true,
    requireDecimal: true
  });
  public percentMask = createNumberMask({
    prefix: '',
    suffix: '%',
    allowDecimal: false,
    requireDecimal: false
  });
  public countMask = [
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

  tresholdEvaluationOptions = [
    {
      value: 'Count',
      viewValue: 'Count'
    },
    {
      value: 'Count or percentage',
      viewValue: 'Count or percentage'
    },
    {
      value: 'Percentage',
      viewValue: 'Percentage'
    }
  ];

  refundThresholdOptions = [
    {
      value: 'Dollar amount',
      viewValue: 'Dollar amount'
    },
    {
      value: 'Percentage',
      viewValue: 'Percentage'
    }
  ];

  newRule = false;

  readonly = false;
  rules = [
    {
      name: 'Visa',
      tresholdEvaluation: {
        value: 'Count or percentage',
        count: {
          flag: false,
          label: 'Monthly Vol (#)',
          value: ''
        },
        countPercentage: {
          flag: true,
          countLabel: 'Monthly Vol (#)',
          countValue: '300',
          percentageLabel: 'Monthly Vol (%)',
          percentageValue: '80'
        },
        percentage: {
          flag: false,
          label: 'Monthly Vol (%)',
          value: ''
        }
      },
      refundThreshold: {
        value: 'Percentage',
        dollar: {
          flag: false,
          label: 'Threshold ($)',
          value: ''
        },
        percentage: {
          flag: true,
          label: 'Threshold %',
          value: '80'
        }
      }
    },
    {
      name: 'Mastercard',
      tresholdEvaluation: {
        value: 'Percentage',
        count: {
          flag: false,
          label: 'Monthly Vol (#)',
          value: ''
        },
        countPercentage: {
          flag: false,
          countLabel: 'Monthly Vol (#)',
          countValue: '',
          percentageLabel: 'Monthly Vol (%)',
          percentageValue: ''
        },
        percentage: {
          flag: true,
          label: 'Monthly Vol (%)',
          value: '80'
        }
      },
      refundThreshold: {
        value: 'Dollar amount',
        dollar: {
          flag: true,
          label: 'Threshold ($)',
          value: '300'
        },
        percentage: {
          flag: false,
          label: 'Threshold %',
          value: ''
        }
      }
    },
    {
      name: 'Discover',
      tresholdEvaluation: {
        value: 'Count',
        count: {
          flag: true,
          label: 'Monthly Vol (#)',
          value: '300'
        },
        countPercentage: {
          flag: false,
          countLabel: 'Monthly Vol (#)',
          countValue: '',
          percentageLabel: 'Monthly Vol (%)',
          percentageValue: ''
        },
        percentage: {
          flag: false,
          label: 'Monthly Vol (%)',
          value: ''
        }
      },
      refundThreshold: {
        value: 'Dollar amount',
        dollar: {
          flag: true,
          label: 'Threshold ($)',
          value: '300'
        },
        percentage: {
          flag: false,
          label: 'Threshold %',
          value: ''
        }
      }
    },
    {
      name: 'AMEX',
      tresholdEvaluation: {
        value: 'Percentage',
        count: {
          flag: false,
          label: 'Monthly Vol (#)',
          value: ''
        },
        countPercentage: {
          flag: false,
          countLabel: 'Monthly Vol (#)',
          countValue: '',
          percentageLabel: 'Monthly Vol (%)',
          percentageValue: ''
        },
        percentage: {
          flag: true,
          label: 'Monthly Vol (%)',
          value: '80'
        }
      },
      refundThreshold: {
        value: 'Percentage',
        dollar: {
          flag: false,
          label: 'Threshold ($)',
          value: ''
        },
        percentage: {
          flag: true,
          label: 'Threshold %',
          value: '80'
        }
      }
    },
    {
      name: 'Threshold for all Card Types (optional)',
      tresholdEvaluation: {
        value: 'Count or percentage',
        count: {
          flag: false,
          label: 'Monthly Vol (#)',
          value: ''
        },
        countPercentage: {
          flag: true,
          countLabel: 'Monthly Vol (#)',
          countValue: '300',
          percentageLabel: 'Monthly Vol (%)',
          percentageValue: '80'
        },
        percentage: {
          flag: false,
          label: 'Monthly Vol (%)',
          value: ''
        }
      },
      refundThreshold: {
        value: 'Percentage',
        dollar: {
          flag: false,
          label: 'Threshold ($)',
          value: ''
        },
        percentage: {
          flag: true,
          label: 'Threshold %',
          value: '80'
        }
      }
    }
  ];

  constructor() {}

  ngOnInit() {}

  changeTresholdEvaluationFunction = (item, val) => {
    switch (val) {
      case 'Count':
        item.count.flag = true;
        item.countPercentage.flag = false;
        item.percentage.flag = false;
        break;
      case 'Count or percentage':
        item.count.flag = false;
        item.countPercentage.flag = true;
        item.percentage.flag = false;
        break;
      case 'Percentage':
        item.count.flag = false;
        item.countPercentage.flag = false;
        item.percentage.flag = true;
        break;
      default:
        break;
    }
  };

  changeRefundThresholdFunction = (item, val) => {
    switch (val) {
      case 'Dollar amount':
        item.dollar.flag = true;
        item.percentage.flag = false;
        break;
      case 'Percentage':
        item.dollar.flag = false;
        item.percentage.flag = true;
        break;
      default:
        break;
    }
  };
}
