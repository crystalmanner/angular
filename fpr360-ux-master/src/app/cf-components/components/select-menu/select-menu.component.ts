import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-select-menu',
  templateUrl: './select-menu.component.html',
  styleUrls: ['./select-menu.component.scss']
})
export class SelectMenuComponent implements OnInit {
  @Output() change: EventEmitter<any> = new EventEmitter();

  @Input() value = '';
  @Input() options = [];

  constructor() {}

  ngOnInit() {}

  changeDate = value => {
    this.change.emit(value);
    this.value = value;
  };
}
