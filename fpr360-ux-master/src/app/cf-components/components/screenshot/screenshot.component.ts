import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.scss']
})
export class ScreenshotComponent implements OnInit {
  @Input() file = '';

  @Output() change: EventEmitter<any> = new EventEmitter();

  changeFilePath = path => {
    this.file = path.replace('C:\\fakepath\\', '');
    this.change.emit(this.file);
  };

  constructor() {}

  ngOnInit() {}
}
