import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,24}$/;
const URL_REGEX = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;

@Component({
  selector: 'app-company-crm',
  templateUrl: './company-crm.component.html',
  styleUrls: ['./company-crm.component.scss']
})
export class CompanyCrmComponent implements OnInit {
  companyCrm = [
    {
      name: 'Salesforce',
      included: true,
      options: ['Option 1', 'Option 2', 'Option 3'],
      account: {
        alias: 'Forcesales',
        activationDate: 'June 17, 2018',
        url: 'https://www.salesforce.com/login',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        username: 'merchant1',
        password: 'dasjdljoidhanjksdna'
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
        email: 'contact@emailaddress.com',
        emailFormControl: new FormControl('', [
          Validators.pattern(EMAIL_REGEX)
        ]),
        phone: '1342432423',
        question:
          'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nam gravida venenatis accumsan. In mi massa, tempus'
      },
      dataTransmissionMethod: {
        api: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna',
          apiKey: 'eqwe098ckljxz',
          startDate: 'June 23, 2016',
          endDate: 'March 23, 2017',
          dateErrorFlag: true
        },
        master: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna'
        },
        scrape: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna',
          scrapeID: 'Input',
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
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna'
        }
      }
    },
    {
      name: 'Limelight',
      included: true,
      options: ['Option 1', 'Option 2', 'Option 3'],
      account: {
        alias: 'Forcesales',
        activationDate: 'June 17, 2018',
        url: 'https://www.salesforce.com/login',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        username: 'merchant1',
        password: 'dasjdljoidhanjksdna'
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
        email: 'contact@emailaddress.com',
        emailFormControl: new FormControl('', [
          Validators.pattern(EMAIL_REGEX)
        ]),
        phone: '1342432423',
        question:
          'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nam gravida venenatis accumsan. In mi massa, tempus'
      },
      dataTransmissionMethod: {
        api: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna',
          apiKey: 'eqwe098ckljxz',
          startDate: 'June 23, 2016',
          endDate: 'March 23, 2017',
          dateErrorFlag: false
        },
        master: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna'
        },
        scrape: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna',
          scrapeID: 'Input',
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
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna'
        }
      }
    },
    {
      name: 'Konnektiv',
      included: false,
      options: ['Option 1', 'Option 2', 'Option 3'],
      account: {
        alias: 'Forcesales',
        activationDate: 'June 17, 2018',
        url: 'https://www.salesforce.com/login',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        username: 'merchant1',
        password: 'dasjdljoidhanjksdna'
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
        email: 'contact@emailaddress.com',
        emailFormControl: new FormControl('', [
          Validators.pattern(EMAIL_REGEX)
        ]),
        phone: '1342432423',
        question:
          'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nam gravida venenatis accumsan. In mi massa, tempus'
      },
      dataTransmissionMethod: {
        api: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna',
          apiKey: 'eqwe098ckljxz',
          startDate: 'June 23, 2016',
          endDate: 'March 23, 2017',
          dateErrorFlag: false
        },
        master: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna'
        },
        scrape: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna',
          scrapeID: 'Input',
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
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna'
        }
      }
    },
    {
      name: 'Zendesk',
      included: false,
      options: ['Option 1', 'Option 2', 'Option 3'],
      account: {
        alias: 'Forcesales',
        activationDate: 'June 17, 2018',
        url: 'https://www.salesforce.com/login',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        username: 'merchant1',
        password: 'dasjdljoidhanjksdna'
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
        email: 'contact@emailaddress.com',
        emailFormControl: new FormControl('', [
          Validators.pattern(EMAIL_REGEX)
        ]),
        phone: '1342432423',
        question:
          'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nam gravida venenatis accumsan. In mi massa, tempus'
      },
      dataTransmissionMethod: {
        api: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna',
          apiKey: 'eqwe098ckljxz',
          startDate: 'June 23, 2016',
          endDate: 'March 23, 2017',
          dateErrorFlag: false
        },
        master: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna'
        },
        scrape: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna',
          scrapeID: 'Input',
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
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna'
        }
      }
    },
    {
      name: 'Craft Manager',
      included: false,
      options: ['Option 1', 'Option 2', 'Option 3'],
      account: {
        alias: 'Forcesales',
        activationDate: 'June 17, 2018',
        url: 'https://www.salesforce.com/login',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        username: 'merchant1',
        password: 'dasjdljoidhanjksdna'
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
        email: 'contact@emailaddress.com',
        emailFormControl: new FormControl('', [
          Validators.pattern(EMAIL_REGEX)
        ]),
        phone: '1342432423',
        question:
          'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nam gravida venenatis accumsan. In mi massa, tempus'
      },
      dataTransmissionMethod: {
        api: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna',
          apiKey: 'eqwe098ckljxz',
          startDate: 'June 23, 2016',
          endDate: 'March 23, 2017',
          dateErrorFlag: false
        },
        master: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna'
        },
        scrape: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna',
          scrapeID: 'Input',
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
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna'
        }
      }
    },
    {
      name: 'Zoom Box',
      included: false,
      options: ['Option 1', 'Option 2', 'Option 3'],
      account: {
        alias: 'Forcesales',
        activationDate: 'June 17, 2018',
        url: 'https://www.salesforce.com/login',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        username: 'merchant1',
        password: 'dasjdljoidhanjksdna'
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
        email: 'contact@emailaddress.com',
        emailFormControl: new FormControl('', [
          Validators.pattern(EMAIL_REGEX)
        ]),
        phone: '1342432423',
        question:
          'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nam gravida venenatis accumsan. In mi massa, tempus'
      },
      dataTransmissionMethod: {
        api: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna',
          apiKey: 'eqwe098ckljxz',
          startDate: 'June 23, 2016',
          endDate: 'March 23, 2017',
          dateErrorFlag: false
        },
        master: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna'
        },
        scrape: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna',
          scrapeID: 'Input',
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
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna'
        }
      }
    },
    {
      name: 'Mint',
      included: false,
      options: ['Option 1', 'Option 2', 'Option 3'],
      account: {
        alias: 'Forcesales',
        activationDate: 'June 17, 2018',
        url: 'https://www.salesforce.com/login',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        username: 'merchant1',
        password: 'dasjdljoidhanjksdna'
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
        email: 'contact@emailaddress.com',
        emailFormControl: new FormControl('', [
          Validators.pattern(EMAIL_REGEX)
        ]),
        phone: '1342432423',
        question:
          'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nam gravida venenatis accumsan. In mi massa, tempus'
      },
      dataTransmissionMethod: {
        api: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna',
          apiKey: 'eqwe098ckljxz',
          startDate: 'June 23, 2016',
          endDate: 'March 23, 2017',
          dateErrorFlag: false
        },
        master: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna'
        },
        scrape: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna',
          scrapeID: 'Input',
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
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna'
        }
      }
    },
    {
      name: 'Invision ',
      included: false,
      options: ['Option 1', 'Option 2', 'Option 3'],
      account: {
        alias: 'Forcesales',
        activationDate: 'June 17, 2018',
        url: 'https://www.salesforce.com/login',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        username: 'merchant1',
        password: 'dasjdljoidhanjksdna'
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
        email: 'contact@emailaddress.com',
        emailFormControl: new FormControl('', [
          Validators.pattern(EMAIL_REGEX)
        ]),
        phone: '1342432423',
        question:
          'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nam gravida venenatis accumsan. In mi massa, tempus'
      },
      dataTransmissionMethod: {
        api: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna',
          apiKey: 'eqwe098ckljxz',
          startDate: 'June 23, 2016',
          endDate: 'March 23, 2017',
          dateErrorFlag: false
        },
        master: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna'
        },
        scrape: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna',
          scrapeID: 'Input',
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
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna'
        }
      }
    },
    {
      name: 'Sketch',
      included: false,
      options: ['Option 1', 'Option 2', 'Option 3'],
      account: {
        alias: 'Forcesales',
        activationDate: 'June 17, 2018',
        url: 'https://www.salesforce.com/login',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        username: 'merchant1',
        password: 'dasjdljoidhanjksdna'
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
        email: 'contact@emailaddress.com',
        emailFormControl: new FormControl('', [
          Validators.pattern(EMAIL_REGEX)
        ]),
        phone: '1342432423',
        question:
          'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nam gravida venenatis accumsan. In mi massa, tempus'
      },
      dataTransmissionMethod: {
        api: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna',
          apiKey: 'eqwe098ckljxz',
          startDate: 'June 23, 2016',
          endDate: 'March 23, 2017',
          dateErrorFlag: false
        },
        master: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna'
        },
        scrape: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna',
          scrapeID: 'Input',
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
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna'
        }
      }
    },
    {
      name: 'Intuit',
      included: false,
      options: ['Option 1', 'Option 2', 'Option 3'],
      account: {
        alias: 'Forcesales',
        activationDate: 'June 17, 2018',
        url: 'https://www.salesforce.com/login',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        username: 'merchant1',
        password: 'dasjdljoidhanjksdna'
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
        email: 'contact@emailaddress.com',
        emailFormControl: new FormControl('', [
          Validators.pattern(EMAIL_REGEX)
        ]),
        phone: '1342432423',
        question:
          'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nam gravida venenatis accumsan. In mi massa, tempus'
      },
      dataTransmissionMethod: {
        api: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna',
          apiKey: 'eqwe098ckljxz',
          startDate: 'June 23, 2016',
          endDate: 'March 23, 2017',
          dateErrorFlag: false
        },
        master: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna'
        },
        scrape: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna',
          scrapeID: 'Input',
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
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna'
        }
      }
    },
    {
      name: 'Slack',
      included: false,
      options: ['Option 1', 'Option 2', 'Option 3'],
      account: {
        alias: 'Forcesales',
        activationDate: 'June 17, 2018',
        url: 'https://www.salesforce.com/login',
        urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
        username: 'merchant1',
        password: 'dasjdljoidhanjksdna'
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
        email: 'contact@emailaddress.com',
        emailFormControl: new FormControl('', [
          Validators.pattern(EMAIL_REGEX)
        ]),
        phone: '1342432423',
        question:
          'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nam gravida venenatis accumsan. In mi massa, tempus'
      },
      dataTransmissionMethod: {
        api: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna',
          apiKey: 'eqwe098ckljxz',
          startDate: 'June 23, 2016',
          endDate: 'March 23, 2017',
          dateErrorFlag: false
        },
        master: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna'
        },
        scrape: {
          verify: false,
          verifyCancel: false,
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna',
          scrapeID: 'Input',
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
          portalUrl: 'https://www.salesforce.com/',
          urlFormControl: new FormControl('', [Validators.pattern(URL_REGEX)]),
          username: 'merchant1',
          password: 'dasjdljoidhanjksdna'
        }
      }
    }
  ];
  constructor() {}

  ngOnInit() {}
}
