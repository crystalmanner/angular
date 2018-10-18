import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CheckListItemsComponent } from '../../../dialogs/check-list-items/check-list-items.component';

@Component({
  selector: 'app-cover-letter',
  templateUrl: './cover-letter.component.html',
  styleUrls: ['./cover-letter.component.scss']
})
export class CoverLetterComponent implements OnInit {
  readonly = false;

  pageSettings = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  letterTitle = {
    value: 'Request for full refund',
    options: [
      {
        value: 'Request for full refund',
        viewValue: 'Request for full refund'
      },
      {
        value: 'Partial Refund',
        viewValue: 'Partial Refund'
      },
      {
        value: 'Full Refund',
        viewValue: 'Full Refund'
      },
      {
        value: 'No Refund',
        viewValue: 'No Refund'
      }
    ]
  };
  descriptionsArray = [];
  reasonsList = [
    {
      name: 'Services not provided or merchandise not received',
      included: true,
      active: true,
      descriptionsArray: [
        {
          name: 'Services not provided or merchandise not received',
          included: true
        },
        {
          name: 'Services not rendered',
          included: false
        },
        {
          name: 'Goods/services not received or only partially received',
          included: true
        },
        {
          name: 'Services, Merchandise or Cash not Received',
          included: false
        },
        {
          name: 'Non-receipts of Goods or Services',
          included: false
        },
        {
          name: 'Non-Receipt of Merchandise',
          included: false
        }
      ]
    },
    {
      name: 'Cardholder does not recognize transaction',
      included: true,
      active: false,
      descriptionsArray: [
        {
          name: 'Services not provided or merchandise not received',
          included: true
        },
        {
          name: 'Services not rendered',
          included: true
        },
        {
          name: 'Goods/services not received or only partially received',
          included: true
        },
        {
          name: 'Services, Merchandise or Cash not Received',
          included: false
        },
        {
          name: 'Non-receipts of Goods or Services',
          included: false
        },
        {
          name: 'Non-Receipt of Merchandise',
          included: true
        }
      ]
    },
    {
      name: 'Credit not processed',
      included: true,
      active: false,
      descriptionsArray: [
        {
          name: 'Services not provided or merchandise not received',
          included: true
        },
        {
          name: 'Services not rendered',
          included: false
        },
        {
          name: 'Goods/services not received or only partially received',
          included: true
        },
        {
          name: 'Services, Merchandise or Cash not Received',
          included: false
        },
        {
          name: 'Non-receipts of Goods or Services',
          included: false
        },
        {
          name: 'Non-Receipt of Merchandise',
          included: true
        }
      ]
    },
    {
      name: 'Fraudulent Transaction',
      included: false,
      active: false,
      descriptionsArray: [
        {
          name: 'Services not provided or merchandise not received',
          included: false
        },
        {
          name: 'Services not rendered',
          included: true
        },
        {
          name: 'Goods/services not received or only partially received',
          included: true
        },
        {
          name: 'Services, Merchandise or Cash not Received',
          included: false
        },
        {
          name: 'Non-receipts of Goods or Services',
          included: false
        },
        {
          name: 'Non-Receipt of Merchandise',
          included: true
        }
      ]
    },
    {
      name: 'Services not provided',
      included: false,
      active: false,
      descriptionsArray: [
        {
          name: 'Services not provided or merchandise not received',
          included: true
        },
        {
          name: 'Services not rendered',
          included: true
        },
        {
          name: 'Goods/services not received or only partially received',
          included: false
        },
        {
          name: 'Services, Merchandise or Cash not Received',
          included: false
        },
        {
          name: 'Non-receipts of Goods or Services',
          included: false
        },
        {
          name: 'Non-Receipt of Merchandise',
          included: false
        }
      ]
    },
    {
      name: 'Cardholder does not recognize',
      included: false,
      active: false,
      descriptionsArray: [
        {
          name: 'Services not provided or merchandise not received',
          included: false
        },
        {
          name: 'Services not rendered',
          included: true
        },
        {
          name: 'Goods/services not received or only partially received',
          included: true
        },
        {
          name: 'Services, Merchandise or Cash not Received',
          included: false
        },
        {
          name: 'Non-receipts of Goods or Services',
          included: false
        },
        {
          name: 'Non-Receipt of Merchandise',
          included: true
        }
      ]
    },
    {
      name: 'Duplicate processing',
      included: false,
      active: false,
      descriptionsArray: [
        {
          name: 'Services not provided or merchandise not received',
          included: false
        },
        {
          name: 'Services not rendered',
          included: false
        },
        {
          name: 'Goods/services not received or only partially received',
          included: true
        },
        {
          name: 'Services, Merchandise or Cash not Received',
          included: false
        },
        {
          name: 'Non-receipts of Goods or Services',
          included: false
        },
        {
          name: 'Non-Receipt of Merchandise',
          included: true
        }
      ]
    },
    {
      name: 'Incorrect transaction amount',
      included: false,
      active: false,
      descriptionsArray: [
        {
          name: 'Services not provided or merchandise not received',
          included: true
        },
        {
          name: 'Services not rendered',
          included: false
        },
        {
          name: 'Goods/services not received or only partially received',
          included: false
        },
        {
          name: 'Services, Merchandise or Cash not Received',
          included: false
        },
        {
          name: 'Non-receipts of Goods or Services',
          included: false
        },
        {
          name: 'Non-Receipt of Merchandise',
          included: true
        }
      ]
    },
    {
      name: 'Cancelled recurring transaction',
      included: false,
      active: false,
      descriptionsArray: [
        {
          name: 'Services not provided or merchandise not received',
          included: false
        },
        {
          name: 'Services not rendered',
          included: true
        },
        {
          name: 'Goods/services not received or only partially received',
          included: true
        },
        {
          name: 'Services, Merchandise or Cash not Received',
          included: false
        },
        {
          name: 'Non-receipts of Goods or Services',
          included: false
        },
        {
          name: 'Non-Receipt of Merchandise',
          included: true
        }
      ]
    },
    {
      name: 'Potential chargeback',
      included: false,
      active: false,
      descriptionsArray: [
        {
          name: 'Services not provided or merchandise not received',
          included: true
        },
        {
          name: 'Services not rendered',
          included: true
        },
        {
          name: 'Goods/services not received or only partially received',
          included: false
        },
        {
          name: 'Services, Merchandise or Cash not Received',
          included: false
        },
        {
          name: 'Non-receipts of Goods or Services',
          included: false
        },
        {
          name: 'Non-Receipt of Merchandise',
          included: true
        }
      ]
    },
    {
      name: 'Pre-Arbitration',
      included: false,
      active: false,
      descriptionsArray: [
        {
          name: 'Services not provided or merchandise not received',
          included: true
        },
        {
          name: 'Services not rendered',
          included: true
        },
        {
          name: 'Goods/services not received or only partially received',
          included: true
        },
        {
          name: 'Services, Merchandise or Cash not Received',
          included: false
        },
        {
          name: 'Non-receipts of Goods or Services',
          included: false
        },
        {
          name: 'Non-Receipt of Merchandise',
          included: false
        }
      ]
    },
    {
      name: 'Sevice Cancelled',
      included: false,
      active: false,
      descriptionsArray: [
        {
          name: 'Services not provided or merchandise not received',
          included: true
        },
        {
          name: 'Services not rendered',
          included: false
        },
        {
          name: 'Goods/services not received or only partially received',
          included: true
        },
        {
          name: 'Services, Merchandise or Cash not Received',
          included: false
        },
        {
          name: 'Non-receipts of Goods or Services',
          included: false
        },
        {
          name: 'Non-Receipt of Merchandise',
          included: true
        }
      ]
    },
    {
      name: 'Request for copy bearing signature',
      included: false,
      active: false,
      descriptionsArray: [
        {
          name: 'Services not provided or merchandise not received',
          included: true
        },
        {
          name: 'Services not rendered',
          included: true
        },
        {
          name: 'Goods/services not received or only partially received',
          included: true
        },
        {
          name: 'Services, Merchandise or Cash not Received',
          included: false
        },
        {
          name: 'Non-receipts of Goods or Services',
          included: false
        },
        {
          name: 'Non-Receipt of Merchandise',
          included: true
        }
      ]
    },
    {
      name: 'Request credit for overcharge',
      included: false,
      active: false,
      descriptionsArray: [
        {
          name: 'Services not provided or merchandise not received',
          included: false
        },
        {
          name: 'Services not rendered',
          included: true
        },
        {
          name: 'Goods/services not received or only partially received',
          included: true
        },
        {
          name: 'Services, Merchandise or Cash not Received',
          included: false
        },
        {
          name: 'Non-receipts of Goods or Services',
          included: false
        },
        {
          name: 'Non-Receipt of Merchandise',
          included: true
        }
      ]
    }
  ];

  dataArray = [];
  dialogName: string;

  descriptionFlag = true;
  reasonIndex: number;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.descriptionsArray = this.reasonsList[0].descriptionsArray;
  }

  selectPageSettings = val => console.log(val);
  titleVal = val => console.log(val);

  openDialog(dialog): void {
    switch (dialog) {
      case 'reasons':
        this.dataArray = this.reasonsList;
        this.dialogName = 'Reasons';
        break;
      case 'descriptions':
        this.dataArray = this.descriptionsArray;
        this.dialogName = 'descriptions';
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
        case 'reasons':
          if (result) {
            this.reasonsList = result;
          }
          break;
        case 'descriptions':
          if (result) {
            this.descriptionsArray = result;
            this.reasonsList[this.reasonIndex].descriptionsArray = result;
          }
          break;
        default:
          break;
      }
    });
  }

  acviveReasonFunction = item => {
    this.descriptionFlag = true;
    for (let i of this.reasonsList) {
      i.active = false;
    }
    item.active = true;
    this.descriptionsArray = item.descriptionsArray;
    const index = this.reasonsList.indexOf(item);
    this.reasonIndex = index;
  };

  removeReasonItem = item => {
    this.descriptionFlag = false;
    item.active = false;
    item.included = false;
  };

  removeItem = item => (item.included = false);
}
