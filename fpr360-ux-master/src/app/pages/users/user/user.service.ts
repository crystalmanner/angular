import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { UserIcon } from '../../../models/user';

@Injectable()
export class UserComponentService {
  private userName = new Subject<string>();
  private userIcon = new Subject<UserIcon>();
  private userActive = new Subject<boolean>();

  //
  // Create observable streams so that child components can get notified when
  // the user changes the user's name and/or active state.
  changeName$ = this.userName.asObservable();
  changeIcon$ = this.userIcon.asObservable();
  changeActive$ = this.userActive.asObservable();

  constructor() { }

  changeName(name: string)      { this.userName.next(name); }
  changeIcon(icon: UserIcon)    { this.userIcon.next(icon); }
  changeActive(active: boolean) { this.userActive.next(active); }
}
