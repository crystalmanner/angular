import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  @Input() labelSize = '32';
  @Input() backgroundStyle = '#F5A623';
  @Input() colorStyle = '#fff';

  constructor() {}

  ngOnInit() {}
}
