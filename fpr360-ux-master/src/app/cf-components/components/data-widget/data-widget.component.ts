import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-widget',
  templateUrl: './data-widget.component.html',
  styleUrls: ['./data-widget.component.scss']
})
export class DataWidgetComponent implements OnInit {
  @Input() className: string;
  @Input() dataSettings: Array<any>;
  @Input() data: Array<string>;

  @Output() select: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  selectMenu = val => console.log(val);
}
