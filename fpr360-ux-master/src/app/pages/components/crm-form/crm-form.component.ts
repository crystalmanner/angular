import { Component, OnInit, Input } from '@angular/core';
import { IndicatorsService } from '../../../services/indicators.service';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CheckListItemsComponent } from '../../../dialogs/check-list-items/check-list-items.component';

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,24}$/;
const URL_REGEX = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
@Component({
  selector: 'app-crm-form',
  templateUrl: './crm-form.component.html',
  styleUrls: ['./crm-form.component.scss']
})
export class CrmFormComponent implements OnInit {
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
  email = new FormControl('', [Validators.pattern(EMAIL_REGEX)]);

  @Input() readonly = false;
  @Input()
  crmData = [
    {
      name: 'Salesforce',
      included: true,
      options: ['Option 1', 'Option 2', 'Option 3'],
      account: {
        alias: '',
        activationDate: '',
        url: '',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        username: '',
        password: ''
      },
      authorization: {
        method: 'Email',
        methods: [
          {
            value: 'Email',
            viewValue: 'Email'
          },
          {
            value: 'SMS',
            viewValue: 'SMS'
          }
        ],
        email: '',
        emailFormControl: new FormControl('', [
          Validators.pattern(EMAIL_REGEX)
        ]),
        phone: '',
        question: ''
      },
      dataTransmissionMethod: {
        api: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: '',
          apiKey: '',
          startDate: '',
          endDate: '',
          dateErrorFlag: false
        },
        master: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: ''
        },
        scrape: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: '',
          scrapeID: '',
          scrapeIDOptions: [
            {
              value: 'Input',
              viewValue: 'Input'
            },
            {
              value: 'Option2',
              viewValue: 'Option 2'
            },
            {
              value: 'Option3',
              viewValue: 'Option 3'
            }
          ]
        },
        webOnly: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: ''
        }
      }
    },
    {
      name: 'Limelight',
      included: true,
      options: ['Option 1', 'Option 2', 'Option 3'],
      account: {
        alias: '',
        activationDate: '',
        url: '',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        username: '',
        password: ''
      },
      authorization: {
        method: 'Email',
        methods: [
          {
            value: 'Email',
            viewValue: 'Email'
          },
          {
            value: 'SMS',
            viewValue: 'SMS'
          }
        ],
        email: '',
        emailFormControl: new FormControl('', [
          Validators.pattern(EMAIL_REGEX)
        ]),
        phone: '',
        question: ''
      },
      dataTransmissionMethod: {
        api: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: '',
          apiKey: '',
          startDate: '',
          endDate: '',
          dateErrorFlag: false
        },
        master: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: ''
        },
        scrape: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: '',
          scrapeID: '',
          scrapeIDOptions: [
            {
              value: 'Input',
              viewValue: 'Input'
            },
            {
              value: 'Option2',
              viewValue: 'Option 2'
            },
            {
              value: 'Option3',
              viewValue: 'Option 3'
            }
          ]
        },
        webOnly: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: ''
        }
      }
    },
    {
      name: 'Konnektiv',
      included: false,
      options: ['Option 1', 'Option 2', 'Option 3'],
      account: {
        alias: '',
        activationDate: '',
        url: '',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        username: '',
        password: ''
      },
      authorization: {
        method: 'Email',
        methods: [
          {
            value: 'Email',
            viewValue: 'Email'
          },
          {
            value: 'SMS',
            viewValue: 'SMS'
          }
        ],
        email: '',
        emailFormControl: new FormControl('', [
          Validators.pattern(EMAIL_REGEX)
        ]),
        phone: '',
        question: ''
      },
      dataTransmissionMethod: {
        api: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: '',
          apiKey: '',
          startDate: '',
          endDate: '',
          dateErrorFlag: false
        },
        master: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: ''
        },
        scrape: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: '',
          scrapeID: '',
          scrapeIDOptions: [
            {
              value: 'Input',
              viewValue: 'Input'
            },
            {
              value: 'Option2',
              viewValue: 'Option 2'
            },
            {
              value: 'Option3',
              viewValue: 'Option 3'
            }
          ]
        },
        webOnly: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: ''
        }
      }
    },
    {
      name: 'Zendesk',
      included: false,
      options: ['Option 1', 'Option 2', 'Option 3'],
      account: {
        alias: '',
        activationDate: '',
        url: '',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        username: '',
        password: ''
      },
      authorization: {
        method: 'Email',
        methods: [
          {
            value: 'Email',
            viewValue: 'Email'
          },
          {
            value: 'SMS',
            viewValue: 'SMS'
          }
        ],
        email: '',
        emailFormControl: new FormControl('', [
          Validators.pattern(EMAIL_REGEX)
        ]),
        phone: '',
        question: ''
      },
      dataTransmissionMethod: {
        api: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: '',
          apiKey: '',
          startDate: '',
          endDate: '',
          dateErrorFlag: false
        },
        master: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: ''
        },
        scrape: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: '',
          scrapeID: '',
          scrapeIDOptions: [
            {
              value: 'Input',
              viewValue: 'Input'
            },
            {
              value: 'Option2',
              viewValue: 'Option 2'
            },
            {
              value: 'Option3',
              viewValue: 'Option 3'
            }
          ]
        },
        webOnly: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: ''
        }
      }
    },
    {
      name: 'Craft Manager',
      included: false,
      options: ['Option 1', 'Option 2', 'Option 3'],
      account: {
        alias: '',
        activationDate: '',
        url: '',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        username: '',
        password: ''
      },
      authorization: {
        method: 'Email',
        methods: [
          {
            value: 'Email',
            viewValue: 'Email'
          },
          {
            value: 'SMS',
            viewValue: 'SMS'
          }
        ],
        email: '',
        emailFormControl: new FormControl('', [
          Validators.pattern(EMAIL_REGEX)
        ]),
        phone: '',
        question: ''
      },
      dataTransmissionMethod: {
        api: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: '',
          apiKey: '',
          startDate: '',
          endDate: '',
          dateErrorFlag: false
        },
        master: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: ''
        },
        scrape: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: '',
          scrapeID: '',
          scrapeIDOptions: [
            {
              value: 'Input',
              viewValue: 'Input'
            },
            {
              value: 'Option2',
              viewValue: 'Option 2'
            },
            {
              value: 'Option3',
              viewValue: 'Option 3'
            }
          ]
        },
        webOnly: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: ''
        }
      }
    },
    {
      name: 'Zoom Box',
      included: false,
      options: ['Option 1', 'Option 2', 'Option 3'],
      account: {
        alias: '',
        activationDate: '',
        url: '',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        username: '',
        password: ''
      },
      authorization: {
        method: 'Email',
        methods: [
          {
            value: 'Email',
            viewValue: 'Email'
          },
          {
            value: 'SMS',
            viewValue: 'SMS'
          }
        ],
        email: '',
        emailFormControl: new FormControl('', [
          Validators.pattern(EMAIL_REGEX)
        ]),
        phone: '',
        question: ''
      },
      dataTransmissionMethod: {
        api: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: '',
          apiKey: '',
          startDate: '',
          endDate: '',
          dateErrorFlag: false
        },
        master: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: ''
        },
        scrape: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: '',
          scrapeID: '',
          scrapeIDOptions: [
            {
              value: 'Input',
              viewValue: 'Input'
            },
            {
              value: 'Option2',
              viewValue: 'Option 2'
            },
            {
              value: 'Option3',
              viewValue: 'Option 3'
            }
          ]
        },
        webOnly: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: ''
        }
      }
    },
    {
      name: 'Mint',
      included: false,
      options: ['Option 1', 'Option 2', 'Option 3'],
      account: {
        alias: '',
        activationDate: '',
        url: '',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        username: '',
        password: ''
      },
      authorization: {
        method: 'Email',
        methods: [
          {
            value: 'Email',
            viewValue: 'Email'
          },
          {
            value: 'SMS',
            viewValue: 'SMS'
          }
        ],
        email: '',
        emailFormControl: new FormControl('', [
          Validators.pattern(EMAIL_REGEX)
        ]),
        phone: '',
        question: ''
      },
      dataTransmissionMethod: {
        api: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: '',
          apiKey: '',
          startDate: '',
          endDate: '',
          dateErrorFlag: false
        },
        master: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: ''
        },
        scrape: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: '',
          scrapeID: '',
          scrapeIDOptions: [
            {
              value: 'Input',
              viewValue: 'Input'
            },
            {
              value: 'Option2',
              viewValue: 'Option 2'
            },
            {
              value: 'Option3',
              viewValue: 'Option 3'
            }
          ]
        },
        webOnly: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: ''
        }
      }
    },
    {
      name: 'Invision ',
      included: false,
      options: ['Option 1', 'Option 2', 'Option 3'],
      account: {
        alias: '',
        activationDate: '',
        url: '',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        username: '',
        password: ''
      },
      authorization: {
        method: 'Email',
        methods: [
          {
            value: 'Email',
            viewValue: 'Email'
          },
          {
            value: 'SMS',
            viewValue: 'SMS'
          }
        ],
        email: '',
        emailFormControl: new FormControl('', [
          Validators.pattern(EMAIL_REGEX)
        ]),
        phone: '',
        question: ''
      },
      dataTransmissionMethod: {
        api: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: '',
          apiKey: '',
          startDate: '',
          endDate: '',
          dateErrorFlag: false
        },
        master: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: ''
        },
        scrape: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: '',
          scrapeID: '',
          scrapeIDOptions: [
            {
              value: 'Input',
              viewValue: 'Input'
            },
            {
              value: 'Option2',
              viewValue: 'Option 2'
            },
            {
              value: 'Option3',
              viewValue: 'Option 3'
            }
          ]
        },
        webOnly: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: ''
        }
      }
    },
    {
      name: 'Sketch',
      included: false,
      options: ['Option 1', 'Option 2', 'Option 3'],
      account: {
        alias: '',
        activationDate: '',
        url: '',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        username: '',
        password: ''
      },
      authorization: {
        method: 'Email',
        methods: [
          {
            value: 'Email',
            viewValue: 'Email'
          },
          {
            value: 'SMS',
            viewValue: 'SMS'
          }
        ],
        email: '',
        emailFormControl: new FormControl('', [
          Validators.pattern(EMAIL_REGEX)
        ]),
        phone: '',
        question: ''
      },
      dataTransmissionMethod: {
        api: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: '',
          apiKey: '',
          startDate: '',
          endDate: '',
          dateErrorFlag: false
        },
        master: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: ''
        },
        scrape: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: '',
          scrapeID: '',
          scrapeIDOptions: [
            {
              value: 'Input',
              viewValue: 'Input'
            },
            {
              value: 'Option2',
              viewValue: 'Option 2'
            },
            {
              value: 'Option3',
              viewValue: 'Option 3'
            }
          ]
        },
        webOnly: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: ''
        }
      }
    },
    {
      name: 'Intuit',
      included: false,
      options: ['Option 1', 'Option 2', 'Option 3'],
      account: {
        alias: '',
        activationDate: '',
        url: '',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        username: '',
        password: ''
      },
      authorization: {
        method: 'Email',
        methods: [
          {
            value: 'Email',
            viewValue: 'Email'
          },
          {
            value: 'SMS',
            viewValue: 'SMS'
          }
        ],
        email: '',
        emailFormControl: new FormControl('', [
          Validators.pattern(EMAIL_REGEX)
        ]),
        phone: '',
        question: ''
      },
      dataTransmissionMethod: {
        api: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: '',
          apiKey: '',
          startDate: '',
          endDate: '',
          dateErrorFlag: false
        },
        master: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: ''
        },
        scrape: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: '',
          scrapeID: '',
          scrapeIDOptions: [
            {
              value: 'Input',
              viewValue: 'Input'
            },
            {
              value: 'Option2',
              viewValue: 'Option 2'
            },
            {
              value: 'Option3',
              viewValue: 'Option 3'
            }
          ]
        },
        webOnly: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: ''
        }
      }
    },
    {
      name: 'Slack',
      included: false,
      options: ['Option 1', 'Option 2', 'Option 3'],
      account: {
        alias: '',
        activationDate: '',
        url: '',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        username: '',
        password: ''
      },
      authorization: {
        method: 'Email',
        methods: [
          {
            value: 'Email',
            viewValue: 'Email'
          },
          {
            value: 'SMS',
            viewValue: 'SMS'
          }
        ],
        email: '',
        emailFormControl: new FormControl('', [
          Validators.pattern(EMAIL_REGEX)
        ]),
        phone: '',
        question: ''
      },
      dataTransmissionMethod: {
        api: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: '',
          apiKey: '',
          startDate: '',
          endDate: '',
          dateErrorFlag: false
        },
        master: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: ''
        },
        scrape: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: '',
          scrapeID: '',
          scrapeIDOptions: [
            {
              value: 'Input',
              viewValue: 'Input'
            },
            {
              value: 'Option2',
              viewValue: 'Option 2'
            },
            {
              value: 'Option3',
              viewValue: 'Option 3'
            }
          ]
        },
        webOnly: {
          verify: false,
          verifyCancel: false,
          portalUrl: '',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: '',
          password: ''
        }
      }
    }
  ];
  dataArray: any;
  dialogName: string;

  errorDateText = 'Wrong Date';

  constructor(
    public dialog: MatDialog,
    private indicatorsService: IndicatorsService
  ) {}

  ngOnInit() {}

  getErrorMessage = () =>
    this.email.hasError('email') ? 'Not a valid email' : '';

  sectionOptionsFunction = val => console.log(val);

  backDateStart = (val, item, end) => {
    item.dataTransmissionMethod.api.startDate = val;
    Date.parse(val) > Date.parse(end)
      ? (item.dataTransmissionMethod.api.dateErrorFlag = true)
      : (item.dataTransmissionMethod.api.dateErrorFlag = false);
  };
  backDateEnd = (val, item, start) => {
    item.dataTransmissionMethod.api.endDate = val;
    Date.parse(start) > Date.parse(val)
      ? (item.dataTransmissionMethod.api.dateErrorFlag = true)
      : (item.dataTransmissionMethod.api.dateErrorFlag = false);
  };

  password = val => console.log(val);
  openAddCrmDialog = () => {
    this.dataArray = this.crmData;
    this.dialogName = 'CRM';
    const dialogRef = this.dialog.open(CheckListItemsComponent, {
      data: {
        dataArray: this.dataArray,
        dialogName: this.dialogName
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      result ? (this.crmData = result) : null;
    });
  };

  changeAlias = val => {
    val
      ? this.indicatorsService.setCrmIndicator('true')
      : this.indicatorsService.setCrmIndicator('');
  };

  reVerify = item => {
    if (item.verify) {
      item.verify = false;
      item.verifyCancel = true;
    }
  };
}
