import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-widget',
  templateUrl: './mini-widget.component.html',
  styleUrls: ['./mini-widget.component.scss']
})
export class MiniWidgetComponent implements OnInit {
  @Input()
  dataMiniWidget = {
    name: '',
    amount: '',
    change: '', // up or down
    included: false
  };

  constructor() {}

  ngOnInit() {}
}
