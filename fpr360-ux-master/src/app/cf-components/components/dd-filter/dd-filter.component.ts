import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dd-filter',
  templateUrl: './dd-filter.component.html',
  styleUrls: ['./dd-filter.component.scss']
})
export class DdFilterComponent implements OnInit {
  @Input() filterOptions: Array<any>;
  @Input() light: boolean = false;

  @Output() check: EventEmitter<Array<any>> = new EventEmitter();

  checkFunction($event) {
    $event.stopPropagation();
  }
  constructor() {}
  ngOnInit() {}

  checkFilter = option => this.check.emit(option);
}
