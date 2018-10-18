import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-processor',
  templateUrl: './new-processor.component.html',
  styleUrls: ['./new-processor.component.scss']
})
export class NewProcessorComponent implements OnInit {
  processorName = 'Enter Processor Name';
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
