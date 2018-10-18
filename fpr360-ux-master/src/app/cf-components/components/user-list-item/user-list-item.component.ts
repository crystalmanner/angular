import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {
  @Input() name: string;
  @Input() position: string;
  @Input() avatar: string;

  @Output() clickItem: EventEmitter<Array<string>> = new EventEmitter();

  clickOnItem = (backArray: Array<string>) => this.clickItem.emit(backArray);

  constructor() {}

  ngOnInit() {}
}
