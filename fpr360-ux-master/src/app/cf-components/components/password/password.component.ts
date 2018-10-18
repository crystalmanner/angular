import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  visibleFlag = false;
  passType = 'password';

  @Input() placeholder = 'Password';
  @Input() password = '';
  @Input() readonly = false;

  @Output() change: EventEmitter<string> = new EventEmitter();

  packPassword = val => this.change.emit(val);

  visiblePass = () => {
    this.visibleFlag = !this.visibleFlag;
    this.visibleFlag ? (this.passType = 'text') : (this.passType = 'password');
  };

  constructor() {}

  ngOnInit() {}
}
