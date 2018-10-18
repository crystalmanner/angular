import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,24}$/;
const URL_REGEX = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;

@Component({
  selector: 'app-onboarding-crm',
  templateUrl: './onboarding-crm.component.html',
  styleUrls: ['./onboarding-crm.component.scss']
})
export class OnboardingCrmComponent implements OnInit {
  onboardingCrm = [
    {
      name: 'Salesforce',
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
      name: 'Limelight',
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

  constructor() {}

  ngOnInit() {}
}
