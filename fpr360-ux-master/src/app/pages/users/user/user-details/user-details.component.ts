import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Subscription } from 'rxjs/Subscription';
import { CanComponentDeactivate } from '../../../../services/can-deactivate-guard.service';
import { DialogService } from '../../../../services/dialog.service';
import { AssignCompanyComponent } from '../../../../dialogs/assign-company/assign-company.component';
import { CompanyService } from '../../../../services/data/company.service';
import { Company } from '../../../../models/company';
import { UserService } from '../../../../services/data/user.service';
import { ExternalUser, User, UserType, UserCompany, UserCompanyStatus } from '../../../../models/user';
import { UserComponentService } from '../user.service';
import * as _ from 'lodash';

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,24}$/;
const PHONE_REGEX = /^[0-9-_\s\+\-\()]{10,20}$/;

/**
 * Component for displaying/editing user information.
 * 
 * @export
 * @class UserDetailsComponent
 * @implements {OnInit}
 * @implements {CanComponentDeactivate}
 */
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  companyList: Observable<Company[]>;
  form: FormGroup;
  phoneMask = ['+','1',' ','(',/[1-9]/, /\d/, /\d/,')',' ',/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];
  extMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  readonly = false;
  userName = ''; 
  userData = { avatar: '', initials: '', initialsColor: '', placeholder: 'Full name' };
  private changeName$: Subscription;
  private changeIcon$: Subscription;
  private changeActive$: Subscription;
  private readonly companyStatus = {
    'Primary': UserCompanyStatus.PRIMARY,
    'Secondary': UserCompanyStatus.SECONDARY
  };
  
  constructor(private route: ActivatedRoute, public dialog: MatDialog, private dialogService: DialogService, private formBuilder: FormBuilder, private companyService: CompanyService, private userService: UserService, private userComponentService: UserComponentService) {}

  /**
   * Initializes the component
   * 
   * @memberof UserDetailsComponent
   */
  ngOnInit() {
    let user: ExternalUser = this.route.snapshot.parent.data.user,
        userType: UserType = this.route.snapshot.parent.data.userType || UserType.CLIENT;

    // TODO: Remove the following; this is only here temporarily until all modules, such as company-users 
    // and onboarding-users, properly use parameters in the route to pass the user to edit/view
    if (user === undefined) {  
      user = {
        id: '1',
        icon: { avatar: '', color: 'rgb(159, 73, 92)', initials: 'DM' },
        name: 'Daniel Martin',
        active: true,
        company: {id: "156", name: "Orca Nutra Inc.", partner: false},
        email: 'daniel@orcanutra.com',
        work: '+1 555-555-5555',
        ext: '12',
        mobile: '+1 555-555-5555',
        contact: true,
        skypeId: 'gabrielgreene'
      };
    }
    
    // Create form...
    this.form = this.formBuilder.group({
      name: [{value: user.name, disabled: this.readonly}, [Validators.required]],
      icon: [{value: user.icon, disabled: this.readonly}],
      active: [{value: user.active, disabled: this.readonly}],
      company: [{value: user.company, disabled: this.readonly}],
      work: [{value: user.work, disabled: this.readonly}, [Validators.pattern(PHONE_REGEX)]],
      ext: [{value: user.ext, disabled: this.readonly}],
      mobile: [{value: user.mobile, disabled: this.readonly}, [Validators.pattern(PHONE_REGEX)]],
      email: [{value: user.email, disabled: this.readonly}, [Validators.pattern(EMAIL_REGEX)]],
      contact: [{value: user.contact, disabled: this.readonly}],
      skypeId: [{value: user.skypeId , disabled: this.readonly}]
    });

    this.companyList = this.companyService.list(userType === UserType.PARTNER).do(
      res => {
        if (user.company !== undefined) {
          this.companyControl.setValue(res.find(company => company.id === user.company.id));
        }
      }
    );

    // Listen to changes in the profile performed externally
    this.changeName$ = this.userComponentService.changeName$.subscribe(val => this.changeName(val));
    this.changeIcon$ = this.userComponentService.changeIcon$.subscribe(val => this.changeIcon(val));
    this.changeActive$ = this.userComponentService.changeActive$.subscribe(val => this.changeActive(val));    
  }

  /**
   * Clean up
   * 
   * @memberof UserDetailsComponent
   */
  ngOnDestroy() {
    this.changeName$.unsubscribe();
    this.changeIcon$.unsubscribe();
    this.changeActive$.unsubscribe();
  }

  /**
   * Returns false to abort the deactivation of this component.
   * 
   * @returns {Observable<boolean>} 
   * @memberof UserDetailsComponent
   */
  canDeactivate(): Observable<boolean> {
    if (this.form.dirty) {
      return this.dialogService.confirm('Your changes have not been saved yet.  If you continue, your data will be lost.', 'Discard changes?');
    }

    return Observable.of(true);
  }

  get nameControl(): AbstractControl        { return this.form.get('name'); }
  get iconControl(): AbstractControl        { return this.form.get('icon'); }
  get activeControl(): AbstractControl      { return this.form.get('active'); }
  get companyControl(): AbstractControl     { return this.form.get('company'); }
  get workControl(): AbstractControl        { return this.form.get('work'); }
  get extControl(): AbstractControl         { return this.form.get('ext'); }
  get mobileControl(): AbstractControl      { return this.form.get('mobile'); }
  get emailControl(): AbstractControl       { return this.form.get('email'); }
  get contactControl(): AbstractControl     { return this.form.get('contact'); }
  get skypeIdControl(): AbstractControl     { return this.form.get('skypeId'); }
  
  /**
   * Updates the name with the 'val' supplied. This is called when the user changes the name in the ProfileComponent's app-user-title component.
   * 
   * @memberof UserDetailsComponent
   */
  changeName = (val) => { this.nameControl.setValue(val); this.nameControl.updateValueAndValidity(); this.form.markAsDirty(); };

  /**
   * Updates the icon with the 'val' supplied. This is called when the user changes the icon in the ProfileComponent's app-user-title component.
   * 
   * @memberof UserDetailsComponent
   */
  changeIcon = (val) => { this.iconControl.setValue(val); this.iconControl.updateValueAndValidity(); this.form.markAsDirty(); };
  
  /**
   * Updates active with the 'val' supplied. This is called when the user changes the active state in the ProfileComponent's app-status component.
   * 
   * @memberof UserDetailsComponent
   */
  changeActive = (val) => { this.activeControl.setValue(val); this.activeControl.updateValueAndValidity(); this.form.markAsDirty(); };
  
  /**
   * Saves the changes.
   * 
   * @memberof UserDetailsComponent
   */
  save() {
    const user: ExternalUser = Object.assign({}, this.form.value);
    this.userService.update(user).subscribe(
      (res) => {
        this.form.markAsPristine();
      },
      (err) => {
        console.log(err);        

        // TODO: Replace generic message with information provided in the err.
        this.dialogService.message('Unable to save user!', 'Error');
      }
    );
  }  

}
