import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss']
})
export class DashboardMenuComponent implements OnInit {
  @Output() change: EventEmitter<any> = new EventEmitter();

  @Input() value = '';
  @Input() options = [];
  @Input() additionalOptions = [];

  constructor() {}

  ngOnInit() {}

  changeDate = value => {
    this.change.emit(value);
    value != 'Update Current' &&
    value != 'Save as New' &&
    value != 'Manage Dashboards'
      ? (this.value = value)
      : null;
  };
}
