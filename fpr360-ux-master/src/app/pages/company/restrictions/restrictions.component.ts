import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restrictions',
  templateUrl: './restrictions.component.html',
  styleUrls: ['./restrictions.component.scss']
})
export class RestrictionsComponent implements OnInit {

  CompanyRestrictionsData = {
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

  constructor() {}

  ngOnInit() {}
}
