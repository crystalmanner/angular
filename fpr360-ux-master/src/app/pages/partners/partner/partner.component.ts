import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {
  activateButton = true;
  activePage = true;
  partnerInnerMenu = [
    {
      path: 'details',
      name: 'Details'
    },
    {
      path: 'clients',
      name: 'Clients'
    },
    {
      path: 'reports',
      name: 'Reports'
    },
    {
      path: 'activity',
      name: 'Activity'
    }
  ];
  pageSettings = ['Inactive', 'Option 2', 'Option 3'];

  constructor() {}

  ngOnInit() {}

  titleVal = val => console.log(val);

  inactive = val => {
    this.activePage = val;
  };

  selectPageSettings = val => {
    switch (val) {
      case 'Inactive':
        this.activePage = false;
        break;

      default:
        break;
    }
  };
}
