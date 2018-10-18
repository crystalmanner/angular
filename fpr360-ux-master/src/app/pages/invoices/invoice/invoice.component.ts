import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  invoiceMenu = [
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
  pageSettings = ['Option 1', 'Option 2', 'Option 3'];
  constructor() {}

  ngOnInit() {}
  selectPageSettings = val => console.log(val);
  titleVal = val => console.log(val);
}
