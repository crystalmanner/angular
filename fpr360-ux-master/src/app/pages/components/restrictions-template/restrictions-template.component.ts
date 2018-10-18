import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CheckListItemsComponent } from '../../../dialogs/check-list-items/check-list-items.component';
import { PriceQualifierDialogComponent } from '../../../dialogs/price-qualifier-dialog/price-qualifier-dialog.component';
import { ReasonCodesDialogComponent } from '../../../dialogs/reason-codes-dialog/reason-codes-dialog.component';

@Component({
  selector: 'app-restrictions-template',
  templateUrl: './restrictions-template.component.html',
  styleUrls: ['./restrictions-template.component.scss']
})
export class RestrictionsTemplateComponent implements OnInit {
  sectionOptions = ['Option 1', 'Option 2', 'Option 3'];

  @Input() restrictionsData = {
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
    ],
    productsList: [
      {
        name: 'Product Name',
        included: true,
        active: false,
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
      },
      {
        name: 'Product Name',
        included: true,
        active: false,
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
      },
      {
        name: 'Product Name',
        included: true,
        active: false,
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
      },
      {
        name: 'Product Name',
        included: false,
        active: false,
        merchantsList: [
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
      },
      {
        name: 'Product Name',
        included: false,
        active: false,
        merchantsList: [
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
      },
      {
        name: 'Product Name',
        included: false,
        active: false,
        merchantsList: [
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
      },
      {
        name: 'Product Name',
        included: false,
        active: false,
        merchantsList: [
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
      },
      {
        name: 'Product Name',
        included: false,
        active: false,
        merchantsList: [
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
      }
    ],
    pricingList: [
      {
        name: 'Between',
        amountA: '$10.00',
        amountB: '$20.00',
        active: false,
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
      },
      {
        name: 'Less than or equal to',
        amountA: '$10.00',
        amountB: '',
        active: false,
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
      },
      {
        name: 'Less than',
        amountA: '$10.00',
        amountB: '',
        active: false,
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
      },
      {
        name: 'Greater than or equal to',
        amountA: '$50.00',
        amountB: '',
        active: false,
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
      },
      {
        name: 'Greater than',
        amountA: '$50.00',
        amountB: '',
        active: false,
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
      }
    ],
    reasonsList: [
      {
        name: 'VIsa - 83 - Card not present / card absent',
        category: 'Fraudulent Transaction',
        included: true,
        active: false,
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
      },
      {
        name: 'Discover - 7030/UA02 - Card not present / card absent',
        category: 'Fraudulent Transaction',
        included: true,
        active: false,
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
      },
      {
        name: 'AMEX - F29 - Card not present / card absent',
        category: 'Fraudulent Transaction',
        included: true,
        active: false,
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
      },
      {
        name: 'Visa - 81 - Card present environment',
        category: 'Fraudulent Transaction',
        included: false,
        active: false,
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
      },
      {
        name: 'Discover - 7010/U01 - Card present environment',
        category: 'Fraudulent Transaction',
        included: false,
        active: false,
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
      },
      {
        name: 'Master - 487 - No cardholder auth / no cardholder knowledge',
        category: 'Fraudulent Transaction',
        included: false,
        active: false,
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
      },
      {
        name: 'Discover - 4754 - No cardholder auth / no cardholder knowledge',
        category: 'Fraudulent Transaction',
        included: false,
        active: false,
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
      },
      {
        name: 'AMEX - F24 - No cardholder auth / no cardholder knowledge',
        category: 'Fraudulent Transaction',
        included: false,
        active: false,
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
      },
      {
        name: 'Reason Code',
        category: 'Category 2',
        included: false,
        active: false,
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
      },
      {
        name: 'Reason Code',
        category: 'Category 2',
        included: false,
        active: false,
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
      },
      {
        name: 'Reason Code',
        category: 'Category 2',
        included: false,
        active: false,
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
      },
      {
        name: 'Reason Code',
        category: 'Category 2',
        included: false,
        active: false,
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
      },
      {
        name: 'Reason Code',
        category: 'Category 3',
        included: false,
        active: false,
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
      },
      {
        name: 'Reason Code',
        category: 'Category 3',
        included: false,
        active: false,
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
      },
      {
        name: 'Reason Code',
        category: 'Category 3',
        included: false,
        active: false,
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
      }
    ]
  };

  newMerchantsMidsList = [
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

  //merchant section
  midsFlag = false;
  midsList = [];
  merchantIndex = 0;

  //product section
  productMerchantsList = [];
  productMidsList = [];
  productMerchantsFlag = false;
  productMidsFlag = false;
  productIndex = 0;
  productMerchantsIndex = 0;

  //Pricing section
  pricingMerchantsList = [];
  pricingMidsList = [];
  pricingMerchantsFlag = false;
  pricingMidsFlag = false;
  pricingIndex = 0;
  pricingMerchantsIndex = 0;

  //Reasons section
  reasonsMerchantsList = [];
  reasonsMidsList = [];
  reasonsMerchantsFlag = false;
  reasonsMidsFlag = false;
  reasonsIndex = 0;
  reasonsMerchantsIndex = 0;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    if(this.restrictionsData.merchantsList[0].active){
      this.midsFlag = true;
      this.midsList = this.restrictionsData.merchantsList[0].midsList;
    }
    if(this.restrictionsData.pricingList[0].active){
      this.pricingMerchantsList = this.restrictionsData.pricingList[0].merchantsList;
      this.pricingMidsList = this.restrictionsData.pricingList[0].merchantsList[0].midsList;
      this.pricingMerchantsFlag = true;
      this.pricingMidsFlag = true;
    }
    if(this.restrictionsData.productsList[0].active){
      this.productMerchantsList = this.restrictionsData.productsList[0].merchantsList;
      this.productMidsList = this.restrictionsData.productsList[0].merchantsList[0].midsList;
      this.productMerchantsFlag = true;
      this.productMidsFlag = true;
    }
    if(this.restrictionsData.reasonsList[0].active){
      this.reasonsMerchantsList = this.restrictionsData.reasonsList[0].merchantsList;
      this.reasonsMidsList = this.restrictionsData.reasonsList[0].merchantsList[0].midsList;
      this.reasonsMerchantsFlag = true;
      this.reasonsMidsFlag = true;
    }
  }
  sectionOptionsFunction = (val, section) => console.log(val, section);

  removeItem = item => (item.included = false);

  openDialog(dialog): void {
    switch (dialog) {
      case 'Merchants':
        this.dataArray = this.restrictionsData.merchantsList;
        this.dialogName = 'Merchants';
        break;
      case 'MIDs':
        this.dataArray = this.midsList;
        this.dialogName = 'MIDs';
        break;
      case 'products':
        this.dataArray = this.restrictionsData.productsList;
        this.dialogName = 'products';
        break;
      case 'Product Merchants':
        this.dataArray = this.restrictionsData.productsList[
          this.productIndex
        ].merchantsList;
        this.dialogName = 'Merchants';
        break;
      case 'Product Mids':
        this.dataArray = this.restrictionsData.productsList[
          this.productIndex
        ].merchantsList[this.productMerchantsIndex].midsList;
        this.dialogName = 'MIDs';
        break;
      case 'Pricing Merchants':
        this.dataArray = this.restrictionsData.pricingList[
          this.pricingIndex
        ].merchantsList;
        this.dialogName = 'Merchants';
        break;
      case 'Pricing Mids':
        this.dataArray = this.restrictionsData.pricingList[
          this.pricingIndex
        ].merchantsList[this.pricingMerchantsIndex].midsList;
        this.dialogName = 'MIDs';
        break;
        case 'Reasons Merchants':
        this.dataArray = this.restrictionsData.reasonsList[
          this.reasonsIndex
        ].merchantsList;
        this.dialogName = 'Merchants';
        break;
      case 'Reasons Mids':
        this.dataArray = this.restrictionsData.reasonsList[
          this.reasonsIndex
        ].merchantsList[this.reasonsMerchantsIndex].midsList;
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
            this.restrictionsData.merchantsList = result;
            break;
          case 'MIDs':
            this.midsList = result;
            this.restrictionsData.merchantsList[
              this.merchantIndex
            ].midsList = result;
            break;
          case 'products':
            this.restrictionsData.productsList = result;
            break;
          case 'Product Merchants':
            this.restrictionsData.productsList[
              this.productIndex
            ].merchantsList = result;
            this.productMerchantsList = result;
            break;
          case 'Product Mids':
            this.restrictionsData.productsList[this.productIndex].merchantsList[
              this.productMerchantsIndex
            ].midsList = result;
            this.productMidsList = result;
            break;
          case 'Pricing Merchants':
            this.restrictionsData.pricingList[
              this.pricingIndex
            ].merchantsList = result;
            this.pricingMerchantsList = result;
            break;
          case 'Pricing Mids':
            this.restrictionsData.pricingList[
              this.pricingIndex
            ].merchantsList[this.pricingMerchantsIndex].midsList = result;
            this.pricingMidsList = result;
            break;
            case 'Reasons Merchants':
            this.restrictionsData.reasonsList[
              this.reasonsIndex
            ].merchantsList = result;
            this.reasonsMerchantsList = result;
            break;
          case 'Reasons Mids':
            this.restrictionsData.reasonsList[
              this.reasonsIndex
            ].merchantsList[this.reasonsMerchantsIndex].midsList = result;
            this.reasonsMidsList = result;
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
    for (let i of this.restrictionsData.merchantsList) {
      i.active = false;
    }
    item.active = true;
    this.midsList = item.midsList;
    const index = this.restrictionsData.merchantsList.indexOf(item);
    this.merchantIndex = index;
  };

  removeMerchantsItem = item => {
    if (item.active) {
      this.midsFlag = false;
      item.active = false;
    }
    item.included = false;
  };

  //product section
  acviveProductFunction = item => {
    this.productMerchantsFlag = true;
    this.productMidsFlag = false;
    const index = this.restrictionsData.productsList.indexOf(item);
    this.productIndex = index;
    for (let i of this.restrictionsData.productsList) {
      i.active = false;
    }
    for (let i of this.restrictionsData.productsList[this.productIndex]
      .merchantsList) {
      i.active = false;
    }
    item.active = true;
    this.productMerchantsList = item.merchantsList;
  };
  removeProductItem = item => {
    if (item.active) {
      this.productMerchantsFlag = false;
      this.productMidsFlag = false;
      item.active = false;
    }
    item.included = false;
  };
  acviveProductMerchantFunction = item => {
    this.productMidsFlag = true;
    for (let i of this.restrictionsData.productsList[this.productIndex]
      .merchantsList) {
      i.active = false;
    }
    item.active = true;
    const index = this.restrictionsData.productsList[
      this.productIndex
    ].merchantsList.indexOf(item);
    this.productMerchantsIndex = index;
    this.productMidsList = item.midsList;
  };
  removeProductMerchantItem = item => {
    if (item.active) {
      this.productMidsFlag = false;
      item.active = false;
    }
    item.included = false;
  };
  //
  //prising
  openPriceQualifierDialog = () => {
    const dialogRef = this.dialog.open(PriceQualifierDialogComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.restrictionsData.pricingList.push({
          name: result.priceValue,
          amountA: result.amountA,
          amountB: result.amountB,
          active: false,
          merchantsList: this.newMerchantsMidsList
        });
      }
    });
  };
  acvivePricingFunction = item => {
    this.pricingMerchantsFlag = true;
    const index = this.restrictionsData.pricingList.indexOf(item);
    for (let i of this.restrictionsData.pricingList) {
      i.active = false;
    }
    this.pricingIndex = index;
    for (let i of this.restrictionsData.pricingList[this.pricingIndex]
      .merchantsList) {
      i.active = false;
    }
    item.active = true;
    this.pricingMerchantsList = item.merchantsList;
  };
  removePricingItem = item => {
    if (item.active) {
      this.pricingMerchantsFlag = false;
      this.pricingMidsFlag = false;
      item.active = false;
    }
    const index = this.restrictionsData.pricingList.indexOf(item);
    this.restrictionsData.pricingList.splice(index, 1);
  };

  acvivePricingMerchantsFunction = item => {
    this.pricingMidsFlag = true;
    for (let i of this.restrictionsData.pricingList[this.pricingIndex]
      .merchantsList) {
      i.active = false;
    }
    item.active = true;
    const index = this.restrictionsData.pricingList[
      this.pricingIndex
    ].merchantsList.indexOf(item);
    this.pricingMerchantsIndex = index;
    this.pricingMidsList = item.midsList;
  };
  removePricingMerchantsItem = item => {
    if (item.active) {
      this.pricingMidsFlag = false;
      item.active = false;
    }
    item.included = false;
  };

  //reasons
  openReasonCodesDialog = () => {
    const dialogRef = this.dialog.open(ReasonCodesDialogComponent, {
      data: {
        dataArray: this.restrictionsData.reasonsList
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      result ? (this.restrictionsData.reasonsList = result) : null;
    });
  };

  acviveReasonsFunction = item => {
    this.reasonsMerchantsFlag = true;
    this.reasonsMidsFlag = false;
    const index = this.restrictionsData.reasonsList.indexOf(item);
    this.reasonsIndex = index;
    for (let i of this.restrictionsData.reasonsList) {
      i.active = false;
    }
    for (let i of this.restrictionsData.reasonsList[this.reasonsIndex]
      .merchantsList) {
      i.active = false;
    }
    item.active = true;
    this.reasonsMerchantsList = item.merchantsList;
  };
  removeReasonsItem = item => {
    if (item.active) {
      this.reasonsMerchantsFlag = false;
      this.reasonsMidsFlag = false;
      item.active = false;
    }
    item.included = false;
  };
  acviveReasonsMerchantsFunction = item => {
    this.reasonsMidsFlag = true;
    for (let i of this.restrictionsData.reasonsList[this.reasonsIndex]
      .merchantsList) {
      i.active = false;
    }
    item.active = true;
    const index = this.restrictionsData.reasonsList[
      this.reasonsIndex
    ].merchantsList.indexOf(item);
    this.reasonsMerchantsIndex = index;
    this.reasonsMidsList = item.midsList;
  };
  removeReasonsMerchantsItem = item => {
    if (item.active) {
      this.reasonsMidsFlag = false;
      item.active = false;
    }
    item.included = false;
  };
}
