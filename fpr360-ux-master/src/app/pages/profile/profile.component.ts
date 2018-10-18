import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuruUser } from '../../models/user';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
  user: GuruUser;
  readonly: boolean = false;
  userData = { avatar: '', initials: '', initialsColor: '', placeHolder: '' };
  userName = '';
  profileInnerMenu = [
    {
      path: 'details',
      name: 'Details'
    // },
    // {
    //   path: 'activity',
    //   name: 'Activity'
    }
  ];
  options = [];


  constructor( private route: ActivatedRoute, private profileService: ProfileService ) {}

  ngOnInit() {
    this.user = this.route.snapshot.data['profile'];
    this.userName = this.user.name;
    this.userData.avatar = this.user.icon.avatar;
    this.userData.initials = this.user.icon.initials;
    this.userData.initialsColor = this.user.icon.color;
    this.options = [ this.user.active ? 'Deactivate' : 'Activate' ];
  }

  /**
   * Updates the name with the 'val' supplied. This is called when the user changes the name in the app-user-title component.
   * 
   * @memberof ProfileComponent
   */
  changeName = (val) => { 
    this.profileService.changeName(val);
    this.profileService.changeIcon({avatar: this.userData.avatar, color: this.userData.initialsColor, initials: this.userData.initials});
  };  

  /**
   * Activate the user
   * 
   * @memberof ProfileComponent
   */
  activate = () => { this.user.active = true; this.options = ['Deactivate']; this.profileService.changeActive(true); }

  /**
   * Deactivate the user
   * 
   * @memberof ProfileComponent
   */
  deactivate = () => { this.user.active = false; this.options = ['Activate']; this.profileService.changeActive(false); }

  /**
   * Activate/deactivate the user
   * 
   * @param {string} val
   * @memberof ProfileComponent
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
