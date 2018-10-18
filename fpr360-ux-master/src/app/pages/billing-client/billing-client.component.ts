import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing-client',
  templateUrl: './billing-client.component.html',
  styleUrls: ['./billing-client.component.scss']
})
export class BillingClientComponent implements OnInit {
  billingMenu = [
    {
      path: 'summary',
      name: 'Summary'
    },
    {
      path: 'payment-history',
      name: 'Payment History'
    },
    {
      path: 'services',
      name: 'Services'
    },
    {
      path: 'payment-methods',
      name: 'Payment Methods'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
