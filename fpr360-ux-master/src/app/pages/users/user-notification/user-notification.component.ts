import { Component, OnInit } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CheckListItemsComponent } from '../../../dialogs/check-list-items/check-list-items.component';

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,24}$/;

@Component({
  selector: 'app-user-notification',
  templateUrl: './user-notification.component.html',
  styleUrls: ['./user-notification.component.scss']
})
export class UserNotificationComponent implements OnInit {
  public percentMask = createNumberMask({
    prefix: '',
    suffix: '%',
    allowDecimal: false,
    requireDecimal: false
  });
  showSave = false;
  readonly = false;
  userNotification = 'Example notifcation title';
  notificationForm = {
    triggeringPoint: {
      value: 'Total',
      options: [
        {
          value: 'Total',
          viewValue: 'Total'
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
    aggregate: {
      value: 'Percentage',
      options: [
        {
          value: 'Percentage',
          viewValue: 'Percentage'
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
    alertWhen: {
      value: 'less than',
      options: [
        {
          value: 'less than',
          viewValue: 'less than'
        },
        {
          value: 'Option 2',
          viewValue: 'Option 2'
        },
        {
          value: 'Option 3',
          viewValue: 'Option 3'
        }
      ],
      inputValue: '23'
    },
    email: {
      value: 'example@email.com',
      emailValidator: new FormControl('', [Validators.pattern(EMAIL_REGEX)])
    },
    notificationFrequency: {
      value: 'Weekly',
      options: [
        {
          value: 'Weekly',
          viewValue: 'Weekly'
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
  midsFlag = true;
  midsList = [];

  merchantsList = [
    {
      name: 'Merchant Name',
      included: true,
      active: true,
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
  ];
  dataArray = [];
  dialogName = '';
  merchantIndex: number;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.midsList = this.merchantsList[0].midsList;
  }

  titleVal = val => {};

  openDialog(dialog): void {
    switch (dialog) {
      case 'Merchants':
        this.dataArray = this.merchantsList;
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
      switch (dialog) {
        case 'Merchants':
          if (result) {
            this.merchantsList = result;
          }
          break;
        case 'MIDs':
          if (result) {
            this.midsList = result;
            this.merchantsList[this.merchantIndex].midsList = result;
          }
          break;
        default:
          break;
      }
    });
  }

  acviveMerchantsFunction = item => {
    this.midsFlag = true;
    for (let i of this.merchantsList) {
      i.active = false;
    }
    item.active = true;
    this.midsList = item.midsList;
    const index = this.merchantsList.indexOf(item);
    this.merchantIndex = index;
  };

  removeMerchantsItem = item => {
    item.included = false;
    if (item.active) {
      this.midsFlag = false;
      item.active = false;
    }
  };

  removeItem = item => (item.included = false);

  //change save button
  changeSaveButton = () => {
    this.showSave = true;
  };
}
