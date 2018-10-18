import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { UserIcon } from '../../models/user';

@Injectable()
export class ProfileService {
  private profileName = new Subject<string>();
  private profileIcon = new Subject<UserIcon>();
  private profileActive = new Subject<boolean>();

  //
  // Create observable streams so that child components can get notified when
  // the user changes the profile name and/or active state.
  changeName$ = this.profileName.asObservable();
  changeIcon$ = this.profileIcon.asObservable();
  changeActive$ = this.profileActive.asObservable();

  constructor() { }

  changeName(name: string)      { this.profileName.next(name); }
  changeIcon(icon: UserIcon)    { this.profileIcon.next(icon); }
  changeActive(active: boolean) { this.profileActive.next(active); }
}
