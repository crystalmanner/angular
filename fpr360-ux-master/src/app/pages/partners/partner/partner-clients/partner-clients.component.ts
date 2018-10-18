import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CheckListItemsComponent } from '../../../../dialogs/check-list-items/check-list-items.component';
@Component({
  selector: 'app-partner-clients',
  templateUrl: './partner-clients.component.html',
  styleUrls: ['./partner-clients.component.scss']
})
export class PartnerClientsComponent implements OnInit {
  clientsList = [
    {
      name: 'Orca Nutra Inc.',
      included: true,
      active: true,
      merchantsList: [
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
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
      name: 'Agile Tech Solutions',
      included: true,
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
      name: 'AK Technologies',
      included: true,
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
      name: 'Areva Technologies',
      included: true,
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
      name: 'Bruk Holdings',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
      name: 'Central Business Funding LLC',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
      name: 'CGI INTERNATIONAL LIMITED',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
      name: 'Commonhealth Equity Group LLC DBA Key Credit Repair',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
      name: 'Cosmique Global',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
      name: 'D3D LLC',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
            },
            {
              name: 'MID Alias',
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
  ];
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
          included: false
        },
        {
          name: 'MID Alias',
          included: false
        },
        {
          name: 'MID Alias',
          included: false
        },
        {
          name: 'MID Alias',
          included: false
        },
        {
          name: 'MID Alias',
          included: false
        },
        {
          name: 'MID Alias',
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
        },
        {
          name: 'MID Alias',
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
        },
        {
          name: 'MID Alias',
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
        },
        {
          name: 'MID Alias',
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
        },
        {
          name: 'MID Alias',
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
        },
        {
          name: 'MID Alias',
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
        },
        {
          name: 'MID Alias',
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
        },
        {
          name: 'MID Alias',
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
        },
        {
          name: 'MID Alias',
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
        },
        {
          name: 'MID Alias',
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
  midsList = [
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
    },
    {
      name: 'MID Alias',
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
  ];
  dataArray = [];
  dialogName: string;

  merchantFlag = true;
  midsFlag = true;
  clientsListIndex: number;
  merchantsListIndex: number;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  openDialog(dialog): void {
    switch (dialog) {
      case 'clients':
        this.dataArray = this.clientsList;
        this.dialogName = 'Clients';
        break;
      case 'merchants':
        this.dataArray = this.merchantsList;
        this.dialogName = 'Merchants';
        break;
      case 'mids':
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
        case 'clients':
          result ? (this.clientsList = result) : null;
          break;
        case 'merchants':
          if (result) {
            this.merchantsList = result;
            this.clientsList[this.clientsListIndex].merchantsList = result;
          }
          break;
        case 'mids':
          if (result) {
            this.midsList = result;
            this.clientsList[this.clientsListIndex].merchantsList[
              this.merchantsListIndex
            ].midsList = result;
          }
          break;
        default:
          break;
      }
    });
  }

  acviveClientFunction = item => {
    this.merchantFlag = true;
    this.midsFlag = false;
    for (let i of this.clientsList) {
      i.active = false;
    }
    for (let i of this.merchantsList) {
      i.active = false;
    }
    item.active = true;
    this.merchantsList = item.merchantsList;
    const index = this.clientsList.indexOf(item);
    this.clientsListIndex = index;
  };

  acviveMerchantFunction = item => {
    this.midsFlag = true;
    for (let i of this.merchantsList) {
      i.active = false;
    }
    item.active = true;
    this.midsList = item.midsList;
    const index = this.merchantsList.indexOf(item);
    this.merchantsListIndex = index;
  };

  removeClientItem = item => {
    item.included = false;
    this.merchantFlag = false;
    this.midsFlag = false;
    for (let i of item.merchantsList) {
      i.active = false;
      i.included = false;
    }
    for (let i of item.midsList) {
      i.included = false;
    }
  };
  removeMerchantItem = item => {
    item.included = false;
    this.midsFlag = false;
    for (let i of item.midsList) {
      i.included = false;
    }
  };
  removeItem = item => (item.included = false);
}
