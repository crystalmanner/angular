import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsInnerMenu = [
    {
      path: 'chargeback-parameters',
      name: 'Chargeback Parameters'
    },
    {
      path: 'industries',
      name: 'Industries'
    },
    {
      path: 'reason-codes',
      name: 'Reason Codes'
    },
    {
      path: 'crm',
      name: 'Crm'
    },
    {
      path: 'payment-processor',
      name: 'Payment Processor'
    },
    {
      path: 'payment-gateway',
      name: 'Payment Gateway'
    },
    {
      path: 'lead-source',
      name: 'Lead Source'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
