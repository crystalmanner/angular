import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editable-title',
  templateUrl: './editable-title.component.html',
  styleUrls: ['./editable-title.component.scss']
})
export class EditableTitleComponent implements OnInit {
  @Input() icon = '';
  @Input() placeholder = '';
  @Input() value = '';
  @Input() light = false;
  @Input() readonly = false;
  @Input() customIcon = false;

  @Output() changeValue: EventEmitter<any> = new EventEmitter();

  additionalClass: string = '';

  backValue = value => this.changeValue.emit(value);

  constructor() {}

  ngOnInit() {
    this.light ? (this.additionalClass = ' light') : null;

    this.icon ? (this.additionalClass = ' icon') : null;

    this.icon && this.light ? (this.additionalClass = ' icon light') : null;
  }
}
