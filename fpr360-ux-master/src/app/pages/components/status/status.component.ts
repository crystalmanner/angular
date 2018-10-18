import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  @Input() disabledBtn = true;
  @Input() active = false;
  @Output() inactive: EventEmitter<any> = new EventEmitter();

  color = '#00CCB1';

  constructor() {}

  ngOnInit() {}

  inactiveFunction = value => this.inactive.emit(value);

  activate = () => {
    this.inactiveFunction(true);
  };
}
