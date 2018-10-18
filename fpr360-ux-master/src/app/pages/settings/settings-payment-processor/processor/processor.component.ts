import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processor',
  templateUrl: './processor.component.html',
  styleUrls: ['./processor.component.scss']
})
export class ProcessorComponent implements OnInit {
  processorName = 'Sun-Maid Growers of California';
  processorMenu = [
    {
      path: 'details',
      name: 'Details'
    },
    {
      path: 'dispute-info',
      name: 'Dispute Info'
    },
    {
      path: 'risk-rule',
      name: 'Risk Rule'
    }
  ];
  constructor() {}

  ngOnInit() {}

  titleVal = val => console.log(val);
}
