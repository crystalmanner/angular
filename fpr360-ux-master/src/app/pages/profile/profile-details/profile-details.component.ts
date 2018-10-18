import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Subscription } from 'rxjs/Subscription';
import { CanComponentDeactivate } from '../../../services/can-deactivate-guard.service';
import { DialogService } from '../../../services/dialog.service';
import { AssignCompanyComponent } from '../../../dialogs/assign-company/assign-company.component';
import { RoleService } from '../../../services/data/role.service';
import { Role } from '../../../models/role';
import { CompanyService } from '../../../services/data/company.service';
import { Company } from '../../../models/company';
import { UserService } from '../../../services/data/user.service';
import { GuruUser, UserCompany, UserCompanyStatus } from '../../../models/user';
import { ProfileService } from '../profile.service';
import * as _ from 'lodash';

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,24}$/;
const PHONE_REGEX = /^[0-9-_\s\+\-\()]{10,20}$/;

/**
 * Component for displaying/editing profile information.
 * 
 * @export
 * @class ProfileDetailsComponent
 * @implements {OnInit}
 * @implements {CanComponentDeactivate}
 */
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  companyList: UserCompany[];
  form: FormGroup;
  phoneMask = ['+','1',' ','(',/[1-9]/, /\d/, /\d/,')',' ',/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];
  readonly = false;
  roles: Observable<Role[]>;
  private changeName$: Subscription;
  private changeIcon$: Subscription;
  private changeActive$: Subscription;
  private readonly companyStatus = {
    'Primary': UserCompanyStatus.PRIMARY,
    'Secondary': UserCompanyStatus.SECONDARY
  }; 

  constructor(private route: ActivatedRoute, private dialog: MatDialog, private dialogService: DialogService, private formBuilder: FormBuilder, private companyService: CompanyService, private profileService: ProfileService, private roleService: RoleService, private userService: UserService) {}

  /**
   * Initializes the component
   * 
   * @memberof ProfileDetailsComponent
   */
  ngOnInit( ) {
    let guru: GuruUser = this.route.snapshot.parent.data.profile;

    // Create form...
    this.form = this.formBuilder.group({
      name: [{value: guru.name, disabled: this.readonly}, [Validators.required]],
      icon: [{value: guru.icon, disabled: this.readonly}],
      active: [{value: guru.active, disabled: this.readonly}],
      email: [{value: guru.email, disabled: this.readonly}, [Validators.pattern(EMAIL_REGEX)]],
      role: [{value: guru.role, disabled: this.readonly}, [Validators.required]],
      phone_1: [{value: guru.phone_1, disabled: this.readonly}, [Validators.pattern(PHONE_REGEX)]],
      phone_2: [{value: guru.phone_2, disabled: this.readonly}, Validators.pattern(PHONE_REGEX)]    
    });

    // Request list of roles 
    this.roles = this.roleService.list().do(
      res => {
        this.roleControl.setValue(res.find(role => role.id === guru.role.id));
      }
    );

    // Get list of companies and map to a user company list
    this.companyService.list(false).pipe(
      map( res => res.map(company => {
        const userCompany:UserCompany = guru.companyList.find((c) => c.id === company.id);
        if (userCompany) {
          return Object.assign({}, company, {status: userCompany.status, statusDescription: userCompany.status === UserCompanyStatus.PRIMARY ? 'Primary' : 'Secondary', included: true})
        } else {
          return Object.assign({}, company, {status: UserCompanyStatus.PRIMARY, statusDescription: 'Primary', included: false});
        }
      }))
    ).subscribe(
      (list) => this.companyList = list
    );    

    // Listen to changes in the profile performed externally
    this.changeName$ = this.profileService.changeName$.subscribe(val => this.changeName(val));
    this.changeIcon$ = this.profileService.changeIcon$.subscribe(val => this.changeIcon(val));
    this.changeActive$ = this.profileService.changeActive$.subscribe(val => this.changeActive(val));
  }

  /**
   * Clean up
   * 
   * @memberof ProfileDetailsComponent
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
   * @memberof ProfileDetailsComponent
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
  get emailControl(): AbstractControl       { return this.form.get('email'); }
  get roleControl(): AbstractControl        { return this.form.get('role'); }
  get phone_1Control(): AbstractControl     { return this.form.get('phone_1'); }
  get phone_2Control(): AbstractControl     { return this.form.get('phone_2'); }
  get companyActions(): string[]            { return ['Remove']; }
  get companyStatusOptions(): string[]      { return _.keys(this.companyStatus); }
  get assignedCompanyList(): UserCompany[]  { 
    const companyList = _.cloneDeep(this.companyList.filter((company) => company['included']));
    return companyList.map(res => {
      delete res['included'];
      delete res['statusDescription'];
      return res;
    });
  }
  
  /**
   * Displays the assign company dialog to allow the user to choose which companies to assign to this guru.
   * 
   * @memberof ProfileDetailsComponent
   */
  assignCompany = () => {
    const dialogRef = this.dialog.open(AssignCompanyComponent, {
      data: {
        dataArray: this.companyList
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.companyList = result;
        this.form.markAsDirty();
      }
    });
  };

  /**
   * Unassign the company
   * 
   * @memberof ProfileDetailsComponent
   */
  unassignCompany = (company) => { company.included = false; this.form.markAsDirty(); };
  
  /**
   * Updates the name with the 'val' supplied. This is called when the user changes the name in the ProfileComponent's app-user-title component.
   * 
   * @memberof ProfileDetailsComponent
   */
  changeName = (val) => { this.nameControl.setValue(val); this.nameControl.updateValueAndValidity(); this.form.markAsDirty(); };

  /**
   * Updates the icon with the 'val' supplied. This is called when the user changes the icon in the ProfileComponent's app-user-title component.
   * 
   * @memberof ProfileDetailsComponent
   */
  changeIcon = (val) => { this.iconControl.setValue(val); this.iconControl.updateValueAndValidity(); this.form.markAsDirty(); };
  
  /**
   * Updates active with the 'val' supplied. This is called when the user changes the active state in the ProfileComponent's app-status component.
   * 
   * @memberof ProfileDetailsComponent
   */
  changeActive = (val) => { this.activeControl.setValue(val); this.activeControl.updateValueAndValidity(); this.form.markAsDirty(); };
  
  /**
   * Updates the status associated with the given company. This is called when the user changes the status of a company from primary to secondary and vice versa.
   * 
   * @param {string} val The company status
   * @param {UserCompany} item The company whose status changed
   * @memberof ProfileDetailsComponent
   */
  changeCompanyStatus = (val, item) => { item.status = this.companyStatus[val]; item.statusDescription = val; this.form.markAsDirty(); };

  /**
   * Saves the changes.
   * 
   * @memberof ProfileComponent
   */
  save() {
    const user: GuruUser = Object.assign({}, this.form.value, {companyList: this.assignedCompanyList});
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
