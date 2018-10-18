import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid-button',
  templateUrl: './grid-button.component.html',
  styleUrls: ['./grid-button.component.scss']
})
export class GridButtonComponent implements OnInit {
  listIcon: string = 'list';

  gridIcon: string = 'view_module';

  buttonIcon: string = '';

  @Input() defaultState: string;

  @Output() checkGrid: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    switch (this.defaultState) {
      case 'grid': {
        this.buttonIcon = this.gridIcon;
        break;
      }
      case 'list': {
        this.buttonIcon = this.listIcon;
        break;
      }
      default: {
        break;
      }
    }
  }

  gridMenu = val => {
    switch (val) {
      case 'grid': {
        this.buttonIcon = this.listIcon;
        this.defaultState = 'list';
        this.checkGrid.emit('list');
        break;
      }
      case 'list': {
        this.buttonIcon = this.gridIcon;
        this.defaultState = 'grid';
        this.checkGrid.emit('grid');
        break;
      }
      default: {
        break;
      }
    }
  };
}
