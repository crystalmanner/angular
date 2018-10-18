import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user';
import { UserComponentService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserComponentService]
})
export class UserComponent implements OnInit {
  user: User;
  readonly: boolean = false;
  userData = { avatar: '', initials: '', initialsColor: '', placeHolder: '' };
  userName = '';
  userInnerMenu = [
    {
      path: 'details',
      name: 'Details'
    // },
    // {
    //   path: 'notifications',
    //   name: 'Notifications'
    // },
    // {
    //   path: 'activity',
    //   name: 'Activity'
    }
  ];
  options = [];

  constructor( private route: ActivatedRoute, private userComponentService: UserComponentService ) {}

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
    
    // TODO: Remove the following; this is only here temporarily until all modules, such as company-users 
    // and onboarding-users, properly use parameters in the route to pass the user to edit/view
    if (this.user === undefined) {  
      this.user = {
        id: '1',
        icon: { avatar: '', color: 'rgb(159, 73, 92)', initials: 'DM' },
        name: 'Daniel Martin',
        active: true
      };
    }

    this.userName = this.user.name;
    this.userData.avatar = this.user.icon.avatar;
    this.userData.initials = this.user.icon.initials;
    this.userData.initialsColor = this.user.icon.color;
    this.options = [ this.user.active ? 'Deactivate' : 'Activate' ];
  }

  /**
   * Updates the name with the 'val' supplied. This is called when the user changes the name in the app-user-title component.
   * 
   * @memberof UserComponent
   */
  changeName = (val) => { 
    this.userComponentService.changeName(val);
    this.userComponentService.changeIcon({avatar: this.userData.avatar, color: this.userData.initialsColor, initials: this.userData.initials});
  };  

  /**
   * Activate the user
   * 
   * @memberof UserComponent
   */
  activate = () => { this.user.active = true; this.options = ['Deactivate']; this.userComponentService.changeActive(true); }

  /**
   * Deactivate the user
   * 
   * @memberof UserComponent
   */
  deactivate = () => { this.user.active = false; this.options = ['Activate']; this.userComponentService.changeActive(false); }

  /**
   * Activate/deactivate the user
   * 
   * @param {string} val
   * @memberof UserComponent
   */
  setActive = val => {
    switch(val) {
      case 'Deactivate': 
        this.deactivate();
        break;

      case 'Activate': 
        this.activate();
        break;        
    }
  }
}
