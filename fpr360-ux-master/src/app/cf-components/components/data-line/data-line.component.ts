import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-line',
  templateUrl: './data-line.component.html',
  styleUrls: ['./data-line.component.scss']
})
export class DataLineComponent implements OnInit {
  @Input() label = '';
  @Input() value = '';
  constructor() {}

  ngOnInit() {}
}
