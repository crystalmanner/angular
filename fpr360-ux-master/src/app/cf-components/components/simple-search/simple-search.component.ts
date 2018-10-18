import {
  Component,
  HostListener,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-simple-search',
  templateUrl: './simple-search.component.html',
  styleUrls: ['./simple-search.component.scss']
})
export class SimpleSearchComponent implements OnInit {
  dataVal: string;
  class = '';
  data: string;

  @Input() closeButton = false;
  @Input() placeholder = '';
  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  openSearch = (e, el) => {
    this.class = ' open-search focused';
    el.focus();
    return false;
  };

  changeFunction = (data: string) => (this.dataVal = data);

  backData = data => this.change.emit(data);

  onFocus = () => (this.class = ' open-search focused');

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.class = '';
    }
  }

  cancelFunction = () => {
    this.data = '';
    this.class = '';
    this.backData(this.data);
  };
}
