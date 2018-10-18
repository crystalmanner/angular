import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dd-menu',
  templateUrl: './dd-menu.component.html',
  styleUrls: ['./dd-menu.component.scss']
})
export class DdMenuComponent implements OnInit {
  @Input() options: Array<string>;
  @Input() light: boolean = false;

  @Output() select: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  backOption = option => this.select.emit(option);
}
