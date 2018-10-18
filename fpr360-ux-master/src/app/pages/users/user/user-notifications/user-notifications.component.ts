import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-notifications',
  templateUrl: './user-notifications.component.html',
  styleUrls: ['./user-notifications.component.scss']
})
export class UserNotificationsComponent implements OnInit {
  userNotificationsData = {
    rows: [
      {
        merchant: 'JPMorgan Chase',
        mid: 'ORCA x4383',
        title: 'Example notifcation title',
        trigger: 'Total',
        frequency: 'Daily',
        rowIncluded: true,
        pathTo: '/users/user-notification'
      },
      {
        merchant: 'Willett Distilling Company',
        mid: 'ORCA x4383',
        title: 'Example notifcation title',
        trigger: 'Visa',
        frequency: 'Weekly',
        rowIncluded: true,
        pathTo: '/users/user-notification'
      },
      {
        merchant: 'McIntosh Laboratory',
        mid: 'ORCA x4383',
        title: 'Example notifcation title',
        trigger: 'Master',
        frequency: 'Monthly',
        rowIncluded: true,
        pathTo: '/users/user-notification'
      },
      {
        merchant: 'Wienerschnitzel',
        mid: 'ORCA x4383',
        title: 'Example notifcation title',
        trigger: 'Total',
        frequency: 'Weekly',
        rowIncluded: true,
        pathTo: '/users/user-notification'
      },
      {
        merchant: 'Wienerschnitzel',
        mid: 'ORCA x4383',
        title: 'Example notifcation title',
        trigger: 'Discover',
        frequency: 'Monthly',
        rowIncluded: true,
        pathTo: '/users/user-notification'
      },
      {
        merchant: 'Filter Forge Inc.',
        mid: 'ORCA x4383',
        title: 'Example notifcation title',
        trigger: 'AMEX',
        frequency: 'Daily',
        rowIncluded: true,
        pathTo: '/users/user-notification'
      },
      {
        merchant: 'The McClatchy Company',
        mid: 'ORCA x4383',
        title: 'Example notifcation title',
        trigger: 'Visa',
        frequency: 'Weekly',
        rowIncluded: true,
        pathTo: '/users/user-notification'
      },
      {
        merchant: 'OSI Restaurant Partners',
        mid: 'ORCA x4383',
        title: 'Example notifcation title',
        trigger: 'Master',
        frequency: 'Monthly',
        rowIncluded: true,
        pathTo: '/users/user-notification'
      },
      {
        merchant: 'First Hawaiian Bank',
        mid: 'ORCA x4383',
        title: 'Example notifcation title',
        trigger: 'Total',
        frequency: 'Weekly',
        rowIncluded: true,
        pathTo: '/users/user-notification'
      },
      {
        merchant: 'Jones Soda',
        mid: 'ORCA x4383',
        title: 'Example notifcation title',
        trigger: 'Discover',
        frequency: 'Daily',
        rowIncluded: true,
        pathTo: '/users/user-notification'
      }
    ],
    cols: [
      { name: 'Merchant' },
      { name: 'MID' },
      { name: 'Title' },
      { name: 'Trigger' },
      { name: 'Frequency' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'Merchant',
          included: true,
          rightAlign: false,
          width: 0,
          bold: true,
          leftFixed: true
        },
        {
          name: 'MID',
          included: true,
          rightAlign: false,
          width: 160,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Title',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Trigger',
          included: true,
          rightAlign: false,
          width: 128,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Frequency',
          included: true,
          rightAlign: false,
          width: 128,
          bold: false,
          leftFixed: false
        }
      ],
      toolbarOptions: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        function: val => console.log(val)
      },
      rowSettings: ['Option 1', 'Option 2', 'divider', 'Option 3']
    }
  };
  constructor() {}

  ngOnInit() {}
}
