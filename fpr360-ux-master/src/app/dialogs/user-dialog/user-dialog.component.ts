import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { DialogService } from '../../services/dialog.service';
import { CompanyService } from '../../services/data/company.service';
import { Company } from '../../models/company';
import { UserService } from '../../services/data/user.service';
import { ClientUser, UserType } from '../../models/user';
import * as _ from 'lodash';

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,24}$/;
const PHONE_REGEX = /^[0-9-_\s\+\-\()]{10,20}$/;

/**
 * Component for gathering and saving a new Client user information.
 * 
 * @export
 * @class UserDialogComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {
  companyList: Observable<Company[]>;
  form: FormGroup;
  readonly = false;
  user: ClientUser;

  public phoneMask = ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public extMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

  constructor(
    private companyService: CompanyService,
    private dialogRef: MatDialogRef<UserDialogComponent>,
    private dialogService: DialogService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Override disableClose configuration so that the user cannot close the dialog
    // without clicking the Save or Cancel button. This way we avoid the user accidentally
    // closing the dialog and losing data entered.
    this.dialogRef.disableClose = true;


    // TODO: This used by company-users.component, onboarding-users.component, and
    // users-clients.component (creating a new user).  Eventually modify to have 
    // data.user be a User so that we can use it directly when setting up the form.
    // For now we will map the oneUser to our internal user.
    if (data.oneUser) {
      // this.user.company  -- not passed in as of now
      this.user.email = data.oneUser.email;
      this.user.ext = data.oneUser.ext;
      this.user.icon = {
        color: data.oneUser.icon.color,
        initials: data.oneUser.icon.initials
      };
      this.user.id = '';
      this.user.mobile = data.oneUser.mobile;
      this.user.name = data.oneUser.name;
      this.user.skypeId = data.oneUser.skype;
      this.user.work = data.oneUser.work;
      // this.user.status = data.oneUser.status;
      this.user.contact = (data.oneUser.contact === 'Check'); 
    } else {
      this.user = {
        company: {
          id: '',
          name: ''
        },
        email: '',
        ext: '',
        icon: {
          color: '',
          initials: ''
        },
        id: '',
        mobile: '',
        name: '',
        skypeId: '',
        work: '',
        contact: false
      };
    }
    
    if (data.promptForCompany) { 
      this.companyList = this.companyService.list(data.userType === UserType.PARTNER);
    }
  }

  ngOnInit() {
    // Create form...
    this.form = this.formBuilder.group({
      company: [{
        value: this.user.company,
        disabled: this.readonly
      }],
      name: [this.user.name || '', [Validators.required]],
      work: [this.user.work || '', [Validators.pattern(PHONE_REGEX)]],
      ext: [this.user.ext || ''],
      mobile: [this.user.mobile || '', [Validators.pattern(PHONE_REGEX)]],
      email: [this.user.email || '', [Validators.pattern(EMAIL_REGEX)]],
      contact: [this.user.contact || false],
      skypeId: [this.user.skypeId || '']
    });
  }

  get companyControl(): AbstractControl     { return this.form.get('company'); }
  get nameControl(): AbstractControl        { return this.form.get('name'); }
  get workControl(): AbstractControl        { return this.form.get('work'); }
  get extControl(): AbstractControl         { return this.form.get('ext'); }
  get mobileControl(): AbstractControl      { return this.form.get('mobile'); }
  get emailControl(): AbstractControl       { return this.form.get('email'); }
  get contactControl(): AbstractControl     { return this.form.get('contact'); }
  get skypeIdControl(): AbstractControl       { return this.form.get('skypeId'); }
  
  /**
   * Creates an avatar for the given name.
   * 
   * @param {string} name
   * @memberof UserDialogComponent
   */
  createAvatar = (name: string) => {
    !this.user.icon.color ? (this.user.icon.color = randomColor()) : null;
    this.user.icon.initials =
      (name.split(' ')[0] ? name.split(' ')[0][0] : '') +
      (name.split(' ')[1] ? name.split(' ')[1][0] : '');
  };

  /**
   * Cancels the creation of the user.
   * 
   * @memberof UserDialogComponent
   */
  cancel = () => this.dialogRef.close(false);

  /**
   * Saves the new client user and closes the dialog, if successful.
   * 
   * @memberof NewUserComponent
   */
  save = () => {
    const contact = this.form.value.contact,
          skypeId = contact ? this.form.value.skypeId : '',
          user: ClientUser = Object.assign(this.user, this.form.value, {skypeId: skypeId});    
    this.userService.create(user).subscribe(
       (res) => {
         // TODO: Currently added on additional UI specific fields, contact (have value of Check), initials, and color.  Eventually, the
         // users-clients.component.ts should change to look at the data model contact (true/false), and the icon object
         this.dialogRef.close(Object.assign({}, user, {contact: user.contact ? 'Check' : '', initials: user.icon.initials, color: user.icon.color}));
       },
       (err) => {
         console.log(err);

         // TODO: Replace generic message with information provided in the err.
         this.dialogService.message('Unable to save user!', 'Error');
       }
    )
  };
}

// Helper methods for creating avatar...
const randomColor = () => {
  let contrast: string;
  let bg: string;
  while (contrast != 'white') {
    bg =
      '#' +
      ('000000' + Math.floor(Math.random() * 16777216).toString(16)).substr(-6);
    contrast = setContrast(hexToRgb(bg));
  }
  return bg;
};

// check colors
const hexToRgb = hex => {
  // turn hex val to RGB
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
};
// calc to work out if it will match on black or white better
const setContrast = rgb =>
  (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 > 125 ? 'black' : 'white';
