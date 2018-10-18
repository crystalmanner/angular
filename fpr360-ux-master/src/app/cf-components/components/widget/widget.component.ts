import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @Input() widgetTitle: string;
  @Input() widgetSettings: Array<string>;
  @Input() fullScreenBtn = true;

  @Output() select: EventEmitter<any> = new EventEmitter();
  @Output() fullScreen: EventEmitter<any> = new EventEmitter();

  constructor() {}
  ngOnInit() {}

  fullScreenFunction = val => this.fullScreen.emit(val);
  selectMenu = val => this.select.emit(val);
}
